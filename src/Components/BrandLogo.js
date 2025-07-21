import logo1 from '../assets/COROAL1.png';
import logo2 from '../assets/COROAL2.png';

const BrandLogo = () => {
  return (
    <div className="w-full p-10  flex justify-evenly box-border">
      <div className="flex space-x-10 overflow-x-auto px-4">
        <img src={logo1} alt="Brand 1" className="h-10" />
        <img src={logo2} alt="Brand 2" className="h-10" />
        <img src={logo1} alt="Brand 3" className="h-10" />
        <img src={logo2} alt="Brand 4" className="h-10" />
        <img src={logo1} alt="Brand 3" className="h-10" />
      </div>
    </div>
  );
};

export default BrandLogo;
