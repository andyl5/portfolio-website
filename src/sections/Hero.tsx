interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Hero({ className, children }: Props) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  )
}
