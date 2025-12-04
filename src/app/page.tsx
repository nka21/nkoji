import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Image
        src="/na.webp"
        alt="nkoji"
        width={200}
        height={200}
        className="max-w-full h-auto rounded-2xl"
      />
    </div>
  );
}