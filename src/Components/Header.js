const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center px-10 py-6">
        <h1 className="text-3xl font-bold text-black">CAROAL</h1>
        <nav className="hidden md:flex space-x-8 text-sm text-gray-400">
          <a href="#" className="text-black font-bold">
            Home
          </a>
          <a href="#" className="text-black font-bold">
            Deals
          </a>
          <a href="#" className="text-black font-bold">
            New Arrivals
          </a>
          <a href="#" className="text-black font-bold">
            Packages
          </a>
          <a href="#" className="text-black font-bold">
            Sign in
          </a>
        </nav>
        <button className="bg-black text-white px-8 py-3 rounded-md shadow hover:bg-gray-900 transition">
            Sign up
          </button>
      </header>
    </div>
  );
};

export default Header;
