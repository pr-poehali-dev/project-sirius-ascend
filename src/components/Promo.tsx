import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Abstract spiral circles"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-black/50 z-0" />
      <h3 id="goals" className="absolute top-12 left-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest">
        Цели и задачи проекта
      </h3>

      <div className="absolute bottom-12 left-6 right-6 z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
        <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-2xl leading-tight font-bold">
          Определить источники загрязнения и предложить реальные решения для жителей города
        </p>
        <div className="flex flex-col gap-3 text-white text-sm lg:text-base max-w-xs lg:text-right">
          <span className="opacity-70 uppercase tracking-wide text-xs">Задачи исследования</span>
          <span>— Изучить виды городского загрязнения</span>
          <span>— Выявить главные источники проблем</span>
          <span>— Проанализировать мировой опыт решений</span>
          <span>— Разработать рекомендации для горожан</span>
        </div>
      </div>
    </div>
  );
}