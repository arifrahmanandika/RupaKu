import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <div className="flex flex-col gap-10">
        <Link className="flex justify-items-center gap-2" href="/contact">
          <Image src="/contact/mail.svg" alt="mail" width={30} height={20} />
          <p className="font-bold hover:underline underline-offset-8">
            arifrahmanandika@gmail.com
          </p>
        </Link>
        <Link
          className="flex justify-items-center gap-2"
          href="https://wa.me/6285766666262"
          target="blank"
        >
          <Image src="/contact/wa.svg" alt="wa" width={32} height={20} />
          <p className="font-bold hover:underline underline-offset-8">
            +62 857 6666 6262
          </p>
        </Link>
        <Link
          className="flex justify-items-center gap-2"
          href="https://t.me/arifrahmanandika"
          target="blank"
        >
          <Image
            src="/contact/telegram.svg"
            alt="telegram"
            width={35}
            height={20}
          />
          <p className="font-bold hover:underline underline-offset-8">
            @arifrahmanandika
          </p>
        </Link>
        <Link
          className="flex justify-items-center gap-2"
          href="https://ig.me/m/arifrahmanandika"
          target="blank"
        >
          <Image src="/contact/ig.svg" alt="instagram" width={32} height={20} />
          <p className="font-bold hover:underline underline-offset-8">
            @arifrahmanandika
          </p>
        </Link>
      </div>
    </div>
  );
}
