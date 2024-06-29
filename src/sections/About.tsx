interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function About({ className, children }: Props) {
  return (
    <div className={`${className}`} id="about">
      <p className="mb-4 text-3xl font-bold">About Me</p>
      {children}
    </div>
  );
}
