import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const screenshots = [
    { src: "./worksamples/bigdipper1.jpg", alt: "Instagram post #1", platform: "instagram" },
    { src: "./worksamples/duck1.jpg", alt: "Facebook ad #2", platform: "facebook" },
    { src: "./worksamples/farm1.jpg", alt: "Instagram story #3", platform: "instagram" },
    { src: "./worksamples/duck2.jpg", alt: "Instagram story #3", platform: "instagram" },
    { src: "./worksamples/jimmy1.jpg", alt: "Instagram story #3", platform: "instagram" },
    { src: "./worksamples/nardelli1.jpg", alt: "Instagram story #3", platform: "instagram" },
    { src: "./worksamples/weightloss1.jpg", alt: "Instagram story #3", platform: "instagram" },
    { src: "./worksamples/wellness1.jpg", alt: "Instagram story #3", platform: "instagram" },
    { src: "./worksamples/unlimited1.jpg", alt: "Instagram story #3", platform: "instagram" },
  ];

  export default function OurWork() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
  
    const openLightbox = (i) => {
      setIndex(i);
      setOpen(true);
    };
  
    return (
      <section id="our-work" className="py-10 bg-white text-black text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Our Work</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 p-4">
          {screenshots.map((img, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[150px] object-cover sm:h-[180px] md:h-[200px]"
              />
            </div>
          ))}
        </div>
  
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={screenshots.map((img) => ({ src: img.src }))}
        />
      </section>
    );
  }