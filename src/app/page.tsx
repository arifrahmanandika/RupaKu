import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="relative z-[-1] flex flex-col place-items-center">
        <h3 className="text-2xl">Hello, I'm Arif</h3>
        <Image
          className="shadow-xl rounded-2xl"
          src="/myphoto.svg"
          // src="/photo.png"
          alt="Arif"
          width={320}
          height={148}
          priority
        />
        <h3 className="text-2xl pt-4">I'm Magician!</h3>
        <p className="text-lg">
          With my Magic, Build your Web App from nothing to everything!
        </p>
      </div>
    </div>
  );
}
