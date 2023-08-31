import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      className="w-full h-[100vh] fixed bg-[rgba(0,0,0,0.3)] 
    left-0 top-0 z-20 flex items-center justify-center flex-col  "
    >
      <Circles
        height="50"
        width="50"
        color="#ffffff"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <div className="text-white mt-2 text-[20px] ">Processing Payment</div>
    </div>
  );
};

export default Loading;
