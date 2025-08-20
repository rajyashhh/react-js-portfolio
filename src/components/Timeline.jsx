"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.2", "end 0.6"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height * 0.87]); 
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  
  const getCircleFillProgress = (index) => {
    const totalItems = data.length;
    
    const circleScrollPoint = index / (totalItems - 1); 
    
    
    const fillStart = Math.max(0, circleScrollPoint - 0.1);
    const fillEnd = Math.min(1, circleScrollPoint + 0.05);
    
    return useTransform(
      scrollYProgress, 
      [fillStart, fillEnd], 
      [0, 1]
    );
  };

  return (
    <div
      className="c-space section-spacing pb-20 overflow-hidden"
      ref={containerRef}
    >
      <h2 className="text-heading">My Experiences</h2>
      <div ref={ref} className="relative pb-40">
        {data.map((item, index) => {
          const circleFillProgress = getCircleFillProgress(index);
          
          return (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-28 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute -left-[15px] w-10 rounded-full bg-midnight flex items-center justify-center">
                  {/* Base circle */}
                  <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2 relative overflow-hidden">
                    {/* Gradient fill that animates */}
                    <motion.div
                      style={{
                        scaleY: circleFillProgress,
                      }}
                      className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-500 via-lavender/70 to-purple-400 origin-bottom"
                    />
                  </div>
                </div>
                <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-300">
                  <h3>{item.title}</h3>
                  <h3 className="text-3xl text-neutral-400">{item.job}</h3>
                  <h3 className="text-3xl text-neutral-500">{item.date}</h3>
                </div>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <div className="block mb-4 text-2xl font-bold text-left text-neutral-300 md:hidden">
                  <h3>{item.date}</h3>
                  <h3>{item.job}</h3>
                </div>
                {item.contents.map((content, i) => (
                  <p className="mb-3 font-normal text-neutral-400" key={i}>
                    {content}
                  </p>
                ))}
              </div>
            </div>
          );
        })}

        {/* Progress Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] 
             bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
             from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  
             [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] 
               bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent 
               from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};