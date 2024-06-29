interface Props {
  className?: string;
}

export default function ProfilePicture({ className }: Props) {
  return (
    <div className={`${className}`}>
      <img
        src="https://media.licdn.com/dms/image/D4E03AQHJA9ROIWFnhw/profile-displayphoto-shrink_400_400/0/1689187555190?e=1724889600&v=beta&t=wOTW0_gW3oXXAHKKXe0SpbzI30F8GQwd4MBofLNAZKE"
        alt="headshot"
        className="rounded-lg"
      />
    </div>
  );
}
