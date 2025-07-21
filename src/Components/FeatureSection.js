import supportIcon1 from '../assets/support1.png';
import supportIcon2 from '../assets/support2.png';
import supportIcon3 from '../assets/support3.png';
import supportIcon4 from '../assets/support4.png';

const features = [
  {
    icon: supportIcon1,
    title: "High Quality",
    description: "crafted from top materials",
  },
  {
    icon: supportIcon2,
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    icon: supportIcon3,
    title: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    icon: supportIcon4,
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];


const FeatureSection = () => {
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex justify-center items-center gap-2">
            <img src={feature.icon} alt={feature.title} className="h-10"/>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
