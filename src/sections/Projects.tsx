interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Projects({ className, children }: Props) {
  return (
    <div className={`${className}`} id="projects">
      <p className="mb-4 text-3xl font-bold">Projects</p>
      {children}
    </div>
  );
}
