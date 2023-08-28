import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineVisibility } from "react-icons/md";
import { useProduct } from "../hooks/useProduct";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../global/globalState";

const MainPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);
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

  const { data, isLoading } = useProduct();

  console.log(cart);
  return (
    <div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div className="flex flex-wrap ml-4 justify-center ">
          {data?.map((props: any) => (
            <div key={props.id} className=" border m-2">
              <div className="w-[250px] h-[300px] relative m-2">
                <img
                  className="w-[250px] h-[300px] bg-[gray] object-cover "
                  src={props.image}
                />
                <div className="w-full justify-center flex absolute bottom-3 opacity-0 hover:opacity-100 h-[300px] items-end">
                  <div className="w-[30px] h-[30px] rounded-[50%] bg-white  flex justify-center items-center hover:cursor-pointer hover:bg-[silver] hover:text-white duration-300 transition-all ">
                    <MdOutlineVisibility />
                  </div>
                  <div
                    className="w-[30px] h-[30px] rounded-[50%] bg-white ml-3  flex justify-center items-center hover:cursor-pointer hover:bg-[silver] hover:text-white duration-300 transition-all "
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
                <div className="line-through mr-2 text-[silver] ">₦2,000</div>
                <div className="text-red-500">₦3,000</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainPage;
