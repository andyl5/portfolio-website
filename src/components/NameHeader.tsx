"use client";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
}
export default function NameHeader({ className }: Props) {
  const options: string[] = [
    "Software Engineer",
    "Full-Stack Developer",
    "Problem Solver",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setActiveIndex((activeIndex) => (activeIndex + 1) % options.length);
        setIsVisible(true);
      }, 750);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`${className}`}>
      <div className="flex flex-col gap-y-2">
        <p className="mb-3 text-4xl font-bold">
          Hi, I&apos;m Andy! A{" "}
          <span
            className={`transition-all duration-500 ease-in-out ${isVisible ? "translate-y-0 transform opacity-100" : "translate-y-2 transform opacity-0"}`}
          >
            {options[activeIndex]}
          </span>
        </p>
        <p className="text-xl">Self-motivated Software Engineer</p>
        <p className="text-xl">
          Computer Science Student at CUNY Baruch College
        </p>
        <p className="text-xl">Based in New York City</p>
      </div>
      <a href="#contact">
        <button className="mt-6 rounded-xl bg-black px-5 py-4 text-white">
          Contact Me
        </button>
      </a>
    </div>
  );
}
