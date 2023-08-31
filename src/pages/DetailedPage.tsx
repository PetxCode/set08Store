import { FC } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../global/globalState";

interface iProps {
  props?: any;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailedPage: FC<iProps> = ({ props, setState }) => {
  const dispatch = useDispatch();
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

  return (
    <div className="w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.6)] flex justify-center items-center relative  ">
      <div className="w-[80%] h-[80%] bg-white rounded shadow-md flex overflow-hidden absolute z-10 ">
        <img className="w-[50%] h-full object-cover" src={props.image} />
        <div className="w-[50%] h-full flex justify-center flex-col px-12 ">
          <div
            className="absolute top-10 right-10 cursor-pointer "
            onClick={() => {
              setState(false);
            }}
          >
            close
          </div>
          <div>{star[rand(4, 0)]}</div>
          <div className="my-3">{props.title}</div>
          <div>₦{change(props.cost)}</div>
          <br />
          <hr />
          <br />

          <div className="text-[#7b7b7b]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius
            maxime aut assumenda. Reprehenderit assumenda, earum qui aliquid id
            quidem.
          </div>

          <div>
            <div
              className="flex mt-8 border w-[150px] h-[40px] justify-center items-center px-2 cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-300 "
              onClick={() => {
                dispatch(addToCart(props));
                setState(false);
              }}
            >
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
