import imgI1 from '../assets/image.png';
import imgI2 from '../assets/image1.png';
import imgI3 from '../assets/image2.png';
import imgI4 from '../assets/image3.png';
import imgI5 from '../assets/image4.png';
import imgI6 from '../assets/image5.png';
import imgI7 from '../assets/image6.png';

const images = [imgI1, imgI2, imgI3, imgI4, imgI5, imgI6, imgI7];

const InstagramSection = () => {
  return (
    <section className="text-center py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Follow Us On Instagram</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        Our journey began with a simple question: <br />
        What if fashion could be bold without being loud? <br />
        That question became our mission — to craft everyday essentials that are
        effortlessly stylish, confidently minimal, and universally versatile.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-7xl mx-auto">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <img
              src={img}
              alt={`Instagram ${index + 1}`}
              className="w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramSection;
