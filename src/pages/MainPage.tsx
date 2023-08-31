import React, { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineVisibility } from "react-icons/md";
import { useProduct } from "../hooks/useProduct";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../global/globalState";
import DetailedPage from "./DetailedPage";
import BuildUpLoader from "../components/static/BuildUpLoader";

const MainPage = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState<boolean>(false);
  const [propsState, setPropsState] = useState<{}>({} as any);
  const cart = useSelector((state: any) => state.cart);

  console.log(cart);
  let myData: any = [];
  let star: any = [];

  const rand = (max: number, min: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  Array.from({ length: 5 }, () => {
    const randNumb = (max: number, min: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    for (let i = 1; i <= randNumb(1, 0); i++) {
      myData.push("⭐");
    }

    star.push(myData.join(""));
  });

  const change = (numb: number) => {
    let x = numb.toString();

    let z = x.split("");

    let numb1: number = z.length - 3;
    z.splice(numb1, 0, ",");

    return z.join("");
  };

  const { data, isLoading } = useProduct();

  return (
    <div className="relative">
      {isLoading ? (
        <div>
          <BuildUpLoader />
        </div>
      ) : (
        <div className="flex flex-wrap ml-4 justify-center ">
          {data?.map((props: any) => (
            <div key={props.id} className=" border m-2">
              <div className="w-[250px] h-[300px] relative m-2">
                <img
                  className="w-[250px] h-[300px] bg-[gray] object-cover "
                  src={props.image}
                />
                <div className="w-full justify-center flex absolute bottom-0 pb-3 opacity-0 hover:opacity-100 hover:bg-[rgba(0,0,0,0.2)] transition-all duration-500 h-[300px] items-end">
                  <div className="w-[30px] h-[30px] rounded-[50%] bg-white  flex justify-center items-center hover:cursor-pointer hover:bg-[#3e3e3e] shadow-md hover:text-white duration-300 transition-all ">
                    <MdOutlineVisibility
                      onClick={() => {
                        setPropsState(props);
                        setState(true);
                      }}
                    />
                  </div>
                  <div
                    className="w-[30px] h-[30px] rounded-[50%] bg-white ml-3  flex justify-center items-center hover:cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-300 transition-all shadow-md"
                    onClick={() => {
                      dispatch(addToCart(props));
                    }}
                  >
                    <FiShoppingBag />
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-2 justify-center w-[250px]">
                {star[rand(4, 0)]}{" "}
                <span className="text-[12px] ml-1">(review)</span>{" "}
              </div>
              <div className="w-[200px] px-2 leading-0 ">{props.title}</div>
              <div className="flex items-center mt-2 justify-center w-[250px]">
                <div className="line-through mr-2 text-[silver] ">
                  ₦{change(props.cost + rand(2500, 1200))}
                </div>
                <div className="text-red-500">₦{change(props.cost)}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {state && (
        <div className="fixed top-0 left-0 duration-300 transition-all ">
          <DetailedPage props={propsState} setState={setState} />
        </div>
      )}
    </div>
  );
};

export default MainPage;
