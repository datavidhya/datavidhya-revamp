// import React, { useEffect, useState } from "react";

// const PlatformCarousel = () => {
//   const images = [
//     "/revamp/caro1.jpeg",
//     "/revamp/caro2.jpeg",
//     "/revamp/caro3.jpeg",
//     "/revamp/caro4.jpeg",
//   ];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 1500);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="relative h-52 md:h-[500px] w-full mx-auto overflow-hidden rounded-xl shadow-md">
//       <div
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{
//           transform: `translateX(-${currentIndex * 25}%)`,
//           width: `${images.length * 100}%`,
//         }}
//       >
//         {images.map((src, index) => (
//           <div key={index} className="relative w-full h-full">
//             <img
//               src={src}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PlatformCarousel;
import React, { useEffect, useState } from "react";

const PlatformCarousel = () => {
  const images = [
    "/revamp/caro1.jpeg",
    "/revamp/caro2.jpeg",
    "/revamp/caro3.jpeg",
    "/revamp/caro4.jpeg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-52 md:h-[500px] w-full mx-auto overflow-hidden rounded-xl shadow-md">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 25}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full h-52 md:h-[500px]">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformCarousel;
