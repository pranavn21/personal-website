"use client";

import React, { useEffect, useRef } from "react";

const STAR_LAYERS = [
  { count: 60, size: 1.5, speed: 60 },
  { count: 40, size: 2.5, speed: 90 },
  { count: 20, size: 3.5, speed: 120 },
];

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function ParallaxStars() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    refs.current.forEach((layer, i) => {
      if (!layer) return;
      const stars = Array.from(layer.children) as HTMLDivElement[];
      stars.forEach((star, _) => {
        const duration = STAR_LAYERS[i].speed + random(-10, 10);
        star.animate(
          [
            { transform: `translateY(0px)` },
            { transform: `translateY(100vh)` },
          ],
          {
            duration: duration * 1000,
            iterations: Infinity,
            delay: random(0, duration * 1000),
            easing: "linear",
          }
        );
      });
    });
  }, []);

  return (
    <div className="fixed inset-0 -z-20 pointer-events-none w-full h-full">
      {STAR_LAYERS.map((layer, i) => (
        <div
          key={i}
          ref={el => { refs.current[i] = el; }}
          style={{ position: "absolute", inset: 0 }}
        >
          {Array.from({ length: layer.count }).map((_, j) => (
            <div
              key={j}
              style={{
                position: "absolute",
                left: `${random(0, 100)}vw`,
                top: `${random(0, 100)}vh`,
                width: layer.size,
                height: layer.size,
                borderRadius: "50%",
                background: "white",
                opacity: random(0.3, 0.8),
                filter: `blur(${random(0, 1.5)}px)`
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
} 