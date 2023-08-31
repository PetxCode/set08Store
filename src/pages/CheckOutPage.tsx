import { useEffect, useState } from "react";
import { FaShippingFast } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, remove, removeQTY } from "../global/globalState";
import { usePaystackPayment } from "react-paystack";
import { payForProduct } from "../api/API";
import Loading from "../components/static/Loading";

const CheckOutPage = () => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const [state, setState] = useState<number>(0);
  const [stateURL, setStateURL] = useState<string>("");
  const [stateResult, setStateResult] = useState<number | any>();

  const [toggle, setToggle] = useState<boolean>(false);

  const change = (numb: number) => {
    let x = numb.toString();

    let z = x.split("");

    let numb1: number = z.length - 3;
    z.splice(numb1, 0, ",");

    return z.join("");
  };

  const result = () => {
    let cartData = cart?.map((el: any) => {
      return el.cost * el.qty;
    });

    if (cartData.length === 0) {
      return;
    }
    return cartData?.reduce((a: number, b: number) => {
      return a + b;
    });
  };

  useEffect(() => {
    setStateResult(result() + state);
  }, [state, cart]);

  const config: any = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: stateResult! * 100,
    publicKey: "pk_test_5a0581a5d3a5e4eff176456546f8e4b3f32d2d01",
  };

  const onSuccess: any = (reference: any) => {
    console.log(reference);
  };

  const onClose = () => {
    console.log("closed");
  };
  const initializePayment = usePaystackPayment(config);

  const bestResult: any = parseInt(stateResult);
  useEffect(() => {
    if (stateURL === "") {
      return;
    } else {
      window.location.assign(stateURL);
    }
  }, [stateURL]);
  return (
    <div>
      {toggle && <Loading />}
      {cart.length === 0 ? (
        <div>No data in your cart</div>
      ) : (
        <div className="mx-3 ml-6 ">
          <br />
          <br />
          <br />
          <div className="flex items-center w-full">
            <div className="w-[400px]  ">Product</div>
            <div className="w-[150px]  ">Price</div>
            <div className="w-[150px]  ">Qty</div>
            <div className="w-[150px]  ">SubTotal</div>
            <div className="w-[150px]  ">Removal</div>
          </div>
          <br />
          <hr />
          <br />
          {cart?.map((props: any) => (
            <div className="ml-4" key={props.id}>
              <div className="flex items-center w-full">
                <div className="w-[400px] flex items-center ">
                  <img
                    className="w-[100px] h-[100px] object-cover mr-4 mt-4 "
                    src={props.image}
                  />
                  <div>{props.title}</div>
                </div>
                <div className="w-[150px] font-bold ">
                  ₦{change(props.cost)}
                </div>
                <div className="w-[150px] flex ">
                  <div className="flex  border w-[110px] h-[40px] justify-between items-center px-2 cursor-pointer">
                    <button
                      className="text-[25px]"
                      onClick={() => {
                        dispatch(removeQTY(props));
                      }}
                    >
                      -
                    </button>
                    <div>{props.qty}</div>
                    <button
                      className="text-[20px]"
                      onClick={() => {
                        dispatch(addToCart(props));
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="w-[150px]  ">
                  ₦{change(props.qty * props.cost)}
                </div>
                <div className="w-[150px]  ">
                  <div
                    className="flex  border w-[110px] h-[40px] justify-center bg-red-500 text-white  items-center px-2 cursor-pointer"
                    onClick={() => {
                      dispatch(remove(props));
                    }}
                  >
                    Remove
                  </div>
                </div>
              </div>
              <br />
              <hr />
            </div>
          ))}

          <br />
          <br />

          <div className="w-full border-2 border-red-500 rounded-md p-4 ">
            <div className="text-[25px] mb-8">Cart Total</div>
            <div className="flex justify-between items-center mb-4">
              <div>SubTotal</div>
              <div>₦{change(result())}</div>
            </div>
            <hr />
            <div className="flex mt-4">
              <div>Shipping</div>
              <div>
                <div className="flex ml-12 ">
                  <input
                    type="radio"
                    className="mr-2"
                    value={500}
                    onChange={(e: any) => {
                      setState(parseInt(e.target.value));
                    }}
                  />
                  <div>Flat rate: ₦500</div>
                </div>
                <div className="flex ml-12 mb-4">
                  <input
                    type="radio"
                    className="mr-2"
                    value={200}
                    onChange={(e: any) => {
                      setState(parseInt(e.target.value));
                    }}
                  />
                  <div>Local Pickup: ₦200</div>
                </div>
                <div className="flex ml-12 text-[13px] italic text-[#a5a5a5] ">
                  Shipping options will be updated during checkout.
                </div>
                <div className="flex ml-12 items-center my-2 ">
                  <FaShippingFast />
                  <div className="ml-2 text-[14px]  ">CALCULATE SHIPPING</div>
                </div>
              </div>
            </div>
            <hr />

            <div className="flex justify-between items-center my-4">
              <div>Total</div>
              <div>₦{change(bestResult)}</div>
            </div>

            <button
              className="w-full h-[50px] rounded-[30px] bg-red-500 text-white
        hover:bg-red-700 duration-300 transition-all text-[20px]
        "
              onClick={() => {
                console.log(stateResult);
                setToggle(true);
                payForProduct(stateResult)
                  .then((res) => {
                    setStateURL(res.authorization_url);
                  })
                  .then(() => {
                    setToggle(false);
                  });
              }}
            >
              Check Out
            </button>
            <button
              className="w-full h-[50px] mt-2 rounded-[30px] bg-red-500 text-white
        hover:bg-red-700 duration-300 transition-all text-[20px]
        "
              onClick={() => {
                initializePayment(onSuccess, onClose);
              }}
            >
              Check Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOutPage;
