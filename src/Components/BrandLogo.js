const BrandLogo = () => {
  return (
    <div className="w-full p-10  flex justify-evenly">
      {/* <div className="bg-white w-[100%] h-22 rounded-lg flex items-center justify-center"> */}
        {/* Place your logos inside here */}
        <div className="flex space-x-10 overflow-x-auto px-4">
          <img src="./assets/COROAL.png" alt="Brand 1" className="h-12" />
          <img src="./assets/COROAL2.png" alt="Brand 2" className="h-12" />
          <img src="./assets/COROAL.png" alt="Brand 3" className="h-12" />
          <img src="./assets/COROAL2.png" alt="Brand 4" className="h-12" />
          <img src="./assets/COROAL.png" alt="Brand 3" className="h-12" />
        </div>
      </div>
    // </div>
  );
};

export default BrandLogo;
