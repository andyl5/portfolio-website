interface Props {
  className?: string;
}

export default function AboutMe({ className }: Props) {
  return (
    <div className={`${className}`}>
      <div>
        <p>
          I&apos;m a Software Engineer passionate about crafting full-stack
          applications. My professional journey include valuable internships at
          Horizon Media and Dahlia, where I developed full-stack and data
          science projects pivotal to business operations. I have experience
          with React, TypeScript, Tailwind, Python, Django, SQL, and more.
          Beyond coding, I enjoy hunting for retro video games and exploring
          music production.
        </p>
      </div>
    </div>
  );
}
