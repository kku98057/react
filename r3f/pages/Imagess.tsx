import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from "./Images.module.css";

function Imagess(props: any) {
  type imgTypes = { src: String };

  const [imgs, setImgs] = useState<imgTypes[]>([
    {
      src: "/imgs/art_0",
    },
    {
      src: "/imgs/art_1",
    },
    {
      src: "/imgs/art_2",
    },
    {
      src: "/imgs/art_3",
    },
    {
      src: "/imgs/art_4",
    },
  ]);

  const wraps = useRef<GSAPTimeline>();
  const wrap = useRef(null);
  const imgsd = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      wraps.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: wrap.current,
            pin: true,
            scrub: 0.5,
            end: "+=3000",
          },
        })
        .to(".imgs", {
          xPercent: 100,
        });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className={styles.ImageWrap} ref={wrap}>
      <div className={`${styles.imgs} imgs`} ref={imgsd}>
        {imgs.map((img, idx) => (
          <img key={idx} src={`${img.src}.jpg`} />
        ))}
      </div>
    </div>
  );
}

export default Imagess;
