import Image from "next/image";

export default function Skill() {
  return (
    <div>
      <div className="grid text-center grid-cols-2 gap-20">
        <Image src="/js.svg" alt="next.js" width={150} height={150} />
        <Image src="/react.svg" alt="next.js" width={150} height={150} />
        <Image src="/next.svg" alt="next.js" width={150} height={150} />
        <Image src="/tailwind.svg" alt="next.js" width={150} height={150} />
      </div>
    </div>
  );
}
