const ProductSpotlight = () => {
  return (
    <section className="relative bg-gray-100 w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full mx-auto px-6 relative z-10">
       
        {/* Left: Image + Labels */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center mb-10 lg:mb-0">
          <img
            src="./assets/imagedd1.png"
            alt="Model"
            className="w-full max-w-lg object-contain"
          />

          {/* Labels */}
          <div className="absolute top-[5%] left-[55%]">
            <div className="w-4 h-4 bg-white border-2 border-black rounded-full" />
            <div className="mt-1 text-base text-black border-2 border-black bg-slate-200 px-2 py-0.5">Flat Cap</div>
          </div>

          <div className="absolute top-[28%] left-[25%]">
            <div className="w-4 h-4 bg-white border-2 border-black rounded-full" />
            <div className="mt-1 text-base text-black border-2 border-black bg-slate-200 px-2 py-0.5">Suspender</div>
          </div>

          <div className="absolute top-[37%] left-[42%]">
            <div className="w-4 h-4 bg-white border-2 border-black rounded-full" />
            <div className="mt-1 text-base text-black border-2 border-black bg-slate-200 px-2 py-0.5">Hugo Boss</div>
          </div>

          <div className="absolute top-[58%] left-[23%]">
            <div className="w-4 h-4 bg-white border-2 border-black rounded-full" />
            <div className="mt-1 text-base text-black border-2 border-black  bg-slate-200 px-2 py-0.5">Hugo Boss</div>
          </div>

          <div className="absolute bottom-[7%] left-[40%]">
            <div className="w-4 h-4 bg-white border-2 border-black rounded-full" />
            <div className="mt-1 text-base text-black border-2 border-black bg-slate-200 px-2 py-0.5">Santoni</div>
          </div>
        </div>

        {/* Right: Details */}
        <div className="w-full flex justify-center lg:w-1/2 text-left px-2 lg:px-10">
         <div>
           <p className="text-base text-gray-800 uppercase">Men’s Collection</p>
          <h2 className="text-4xl font-serif text-gray-600 mb-4 mt-4">
            Caroal Specials
          </h2>

          <p className=" text-black font-semibold mb-1 underline">Description</p>
          <p className="text-gray-400 mb-6 max-w-md">
            A vintage-inspired outfit featuring a tweed flat cap, white shirt,
            black suspenders, gray trousers, and black dress shoes.
          </p>

          <div className="mb-4">
            <span className="mr-3 font-medium text-gray-400">Size:</span>
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className="inline-block bg-gray-600 text-white text-sm font-medium px-4 py-1.5 mx-1 rounded-md">
                {size}
              </button>
            ))}
          </div>

          <p className="text-2xl font-bold text-gray-800 mb-6">₹1199.00</p>

          <button className="bg-black text-white px-8 py-3 rounded-md shadow hover:bg-gray-900 transition">
            Buy Now
          </button>
         </div>
        </div>
      </div>

      {/* Diagonal Divider - Optional visual effect */}
      <div className="hidden lg:block absolute inset-y-0 left-1/2 w-[2px] bg-gray-600 transform -translate-x-1/2 rotate-12 origin-bottom"></div>
    </section>
  );
};

export default ProductSpotlight;
