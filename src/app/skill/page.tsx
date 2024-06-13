// import Image from "next/image";

// export default function Skill() {
//   return (
//     <div>
//       <div className="grid text-center grid-cols-2 gap-20">
//         <Image src="/js.svg" alt="next.js" width={150} height={150} />
//         <Image src="/react.svg" alt="next.js" width={150} height={150} />
//         <Image src="/next.svg" alt="next.js" width={150} height={150} />
//         <Image src="/tailwind.svg" alt="next.js" width={150} height={150} />
//       </div>
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import styles from "./Skill.module.css";

export default function Skill() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 45);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div
        className={`grid text-center grid-cols-2 gap-20 ${styles.imageContainer}`}
      >
        <div
          className={`${styles.imageWrapper} ${styles.image1}`}
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <img
            src="/js.svg"
            alt="JavaScript"
            width={150}
            height={150}
            className={styles.image}
          />
        </div>
        <div
          className={`${styles.imageWrapper} ${styles.image2}`}
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <img
            src="/react.svg"
            alt="React.js"
            width={150}
            height={150}
            className={styles.image}
          />
        </div>
        <div
          className={`${styles.imageWrapper} ${styles.image3}`}
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <img
            src="/next.svg"
            alt="Next.js"
            width={150}
            height={150}
            className={styles.image}
          />
        </div>
        <div
          className={`${styles.imageWrapper} ${styles.image4}`}
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <img
            src="/tailwind.svg"
            alt="Tailwind CSS"
            width={150}
            height={150}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}
