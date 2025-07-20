const features = [
  {
    icon: "./assets/support1.png",
    title: "High Quality",
    description: "crafted from top materials",
  },
  {
    icon: "./assets/support2.png",
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    icon: "./assets/support3.png",
    title: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    icon: "./assets/support4.png",
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={feature.icon} alt={feature.title} className="h-10 mb-4" />
            <h4 className="text-lg font-semibold text-gray-800">{feature.title}</h4>
            <p className="text-sm text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
