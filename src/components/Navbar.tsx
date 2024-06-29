interface Props {
  className?: string;
}

export default function Navbar({ className }: Props) {
  return (
    <div className={`${className}`}>
      <div className="mx-auto h-[60px] w-full rounded-lg border-2 border-black bg-white text-lg text-gray-600 shadow-lg">
        <div className="flex h-full flex-row items-center justify-between px-4">
          <a href="#">
            <span className="text-2xl text-black">ANDY LEON</span>
          </a>
          <div className="flex flex-row gap-x-3">
            <a href="#about">
              <span className="rounded ring-gray-200 transition-all duration-150 hover:bg-gray-200 hover:text-black hover:ring-4">
                About
              </span>
            </a>
            <a href="#projects">
              <span className="rounded ring-gray-200 transition-all duration-150 hover:bg-gray-200 hover:text-black hover:ring-4">
                Projects
              </span>
            </a>
            <a href="#contact">
              <span className="rounded ring-gray-200 transition-all duration-150 hover:bg-gray-200 hover:text-black hover:ring-4">
                Contact
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
