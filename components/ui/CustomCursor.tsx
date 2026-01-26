"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (dotRef.current && ringRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
        ringRef.current.style.transform = `translate3d(${e.clientX - 24}px, ${e.clientY - 24}px, 0)`;
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] w-2 h-2 bg-blue-600 rounded-full mix-blend-difference"
        style={{ transition: "transform 0.12s cubic-bezier(0.22,1,0.36,1)", left: 0, top: 0 }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[9998] w-12 h-12 border-2 border-blue-400 rounded-full opacity-40 mix-blend-difference"
        style={{ transition: "transform 0.18s cubic-bezier(0.22,1,0.36,1)", left: 0, top: 0 }}
      />
    </>
  );
}
