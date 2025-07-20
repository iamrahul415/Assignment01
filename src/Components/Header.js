const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center px-10 py-6">
        <h1 className="text-3xl text-gray-700 font-serif">CAROAL</h1>

        <nav className="hidden md:flex space-x-8 text-sm text-gray-400">
          <a href="#" className="text-gray-600 font-normal">
            Home
          </a>
          <a href="#" className="text-gray-600 font-normal">
            Deals
          </a>
          <a href="#" className="text-gray-600 font-normal">
            New Arrivals
          </a>
          <a href="#" className="text-gray-600 font-normal">
            Packages
          </a>
          <a href="#" className="text-gray-600 font-normal">
            Sign in
          </a>
        </nav>
        <button className="bg-black text-white px-4 py-3 rounded-md shadow">
          Sign up
        </button>
      </header>
    </div>
  );
};

export default Header;
