interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Contact({ className, children }: Props) {
  return (
    <div className={`${className}`} id="contact">
      <p className="mb-4 text-3xl font-bold">Get in Touch</p>
      {children}
    </div>
  );
}
