import Image from "next/image";

export default function About() {
  return (
    <div>
      <code className="font-mono font-bold m-2 ">app/about/page.tsx</code>

      <Image
        className="rounded-xl shadow-xl drop-shadow-2xl hover:shadow-2xl"
        src="/about-json.png"
        alt="about"
        width={400}
        height={400}
      />
    </div>
  );
}
