const Footer = () => {
  return (
    <footer className="w-full bg-white text-slate-950 py-8 px-4 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-medium mb-4 md:mb-0 text-gray-800">CAROAL</h1>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-800">
          <li className="hover:text-white cursor-pointer">Support Center</li>
          <li className="hover:text-white cursor-pointer">Invoicing</li>
          <li className="hover:text-white cursor-pointer">Contract</li>
          <li className="hover:text-white cursor-pointer">Careers</li>
          <li className="hover:text-white cursor-pointer">Blog</li>
          <li className="hover:text-white cursor-pointer">FAQs</li>
        </ul>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 text-center text-sm text-gray-800">
        Copyright © 2022 CAROAL. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
