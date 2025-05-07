// "use client";
// import { useEffect, useState } from "react";

// export default function Reordering() {
//   const [order, setOrder] = useState(initialOrder);

//   useEffect(() => {
//     const timeout = setTimeout(() => setOrder(shuffle(order)), 1000);
//     return () => clearTimeout(timeout);
//   }, [order]);

//   return (
//     <ul className="list-none p-0 m-0 relative grid grid-cols-3 grid-rows-2 gap-3 w-80">
//       {order.map((imageUrl) => (
//         <li
//           key={imageUrl}
//           className="transition-all duration-1000 rounded-lg overflow-hidden shadow-md"
//           style={{
//             width: 100,
//             height: 100,
//             borderRadius: "10px",
//           }}
//         >
//           <img
//             src={imageUrl}
//             alt="Reordering item"
//             className="w-full h-full object-cover"
//           />
//         </li>
//       ))}
//     </ul>
//   );
// }

// function shuffle(array: any) {
//   return [...array].sort(() => Math.random() - 0.5);
// }

// const spring = {
//   type: "spring",
//   damping: 20,
//   stiffness: 300,
// };
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import * as motion from "motion/react-client"

export default function Reordering() {
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 2000);
    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <ul className="list-none p-0 m-0 relative grid grid-cols-3 grid-rows-2 gap-3 w-full">
      {order.map((imageUrl) => (
        <motion.li
          key={imageUrl}
          layout
          transition={spring}
          className="overflow-hidden shadow-md"
          style={{
            width: 160,
            height: 120,
            borderRadius: "10px",
          }}
        >
          <img
            src={imageUrl}
            alt="Reordering item"
            className="w-full h-full object-cover"
          />
        </motion.li>
      ))}
    </ul>
  );
}

const initialOrder = [
  "/revamp/course1.jpeg",
  "/revamp/course2.png",
  "/revamp/course3.png",
  "/revamp/course4.webp",
  "/revamp/course5.webp",
  "/revamp/course6.webp",
];


function shuffle(array: any) {
  return [...array].sort(() => Math.random() - 0.5);
}

const spring = {
  type: "spring",
  damping: 28,
  stiffness: 300,
};
