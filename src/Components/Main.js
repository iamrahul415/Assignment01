const Main = () => {
  return (
    <div >
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-8 py-4">
       
        {/* Left Image */}
        <div className="bg-gray-200 p-4 rounded-lg flex justify-center items-center">
          <img src="./assets/imageM1.png" alt="Look 1" className="h-[500px] object-cover" />
        </div>

        {/* Center Content */}
        <div className="text-center py-10">
          <img src="./assets/imageM2.png" alt="Group" className="mx-auto rounded-xl mb-4" />
          <h2 className="text-4xl md:text-5xl text-black font-bold">ULTIMATE</h2>
          <h3 className="text-[5rem] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            SALE
          </h3>
          <p className="text-sm uppercase tracking-widest text-black">New Collection</p>
          <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            SHOP NOW
          </button>
          <div className="mt-8">
            <img src="./assets/imageM3.png" alt="Models" className="rounded-lg mx-auto" />
          </div>
        </div>

        {/* Right Image */}
        <div className="bg-gray-200 p-4 rounded-sm flex justify-center items-center">
          <img src="./assets/imageM4.png" alt="Look 2" className="h-[500px] object-cover" />
        </div>
      </section>
    </div>
  );
};

export default Main;
