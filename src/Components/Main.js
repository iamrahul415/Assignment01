import leftModel from '../assets/imageM1.png'; 
const Main = () => {
  return (
    <div >
      <section className="flex justify-evenly gap-4 px-4 md:px-8">
       
        {/* Left Image */}
        <div className="bg-gray-200 rounded-lg flex justify-center items-center">
          <img src={leftModel} alt="Look 1" className="object-cover" />
        </div>

        {/* Center Content */}
        <div className="text-center flex items-center">
          <div>
            <img src="/assets/imageM2.png" alt="Group" className="w-full rounded-xl mb-4" />
          <h2 className="text-4xl md:text-5xl text-black font-bold">ULTIMATE</h2>
          <h3 className="text-[5rem] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            SALE
          </h3>
          <p className="text-sm uppercase tracking-widest text-black">New Collection</p>
          <button className="bg-black text-white px-8 py-3 rounded-md shadow hover:bg-gray-900 transition">
            Shop Now
          </button>
          <div className="mt-8">
            <img src="/assets/imageM3.png" alt="Models" className="rounded-lg mx-auto" />
          </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="bg-gray-200 rounded-lg flex justify-center items-center">
          <img src="/assets/imageM4.png" alt="Look 2" className="object-cover" />
        </div>
      </section>
    </div>
  );
};

export default Main;
