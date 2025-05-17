import { motion } from "framer-motion";
type BubbleProps = {
  size: number;
  image: string;
  dx: number;
  dy: number;
};

export default function Bubble({ size, image, dx, dy }: BubbleProps) {
  return (
    <motion.div
      drag
      whileDrag={{ scale: 2.5 }}
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "50%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-40%, -40%)",
        opacity: 1,
        cursor: "grab",
      }}
      animate={{
        x: [
          dx,
          dx + Math.random() * 50,
          dx - Math.random() * 30,
          dx + Math.random() * 60,
          dx - Math.random() * 40,
          dx,
        ],
        y: [
          dy,
          dy + Math.random() * 30,
          dy - Math.random() * 70,
          dy + Math.random() * 20,
          dy - Math.random() * 50,
          dy,
        ],
        scale: [1, 1.2, 1.1, 1.3, 1, 1.1],
        opacity: [0.6, 1, 0.8, 1, 0.9, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    />
  );
}
