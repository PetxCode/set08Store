import LoadingContent from "./LoadingContent";

const BuildUpLoader = () => {
  return (
    <div className="flex flex-wrap justify-center p-4 w-full">
      {Array.from({ length: 10 }, () => {
        return (
          <div className="m-2">
            <LoadingContent />
          </div>
        );
      })}
    </div>
  );
};

export default BuildUpLoader;
