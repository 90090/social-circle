import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { WorkSample } from "../data/site";

interface OurWorkProps {
  samples: WorkSample[];
}

export default function OurWork({ samples }: OurWorkProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openLightbox = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 p-4">
        {samples.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => openLightbox(i)}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            aria-label={`Open ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-[150px] object-cover sm:h-[180px] md:h-[200px]"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={samples.map((img) => ({ src: img.src, alt: img.alt }))}
      />
    </>
  );
}
