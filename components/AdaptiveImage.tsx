"use client";

import React, { useEffect, useRef } from "react";

type Orientation = "portrait" | "landscape" | "square";

interface Props {
  src: string;
  alt?: string;
  className?: string;
  onOrientation?: (o: Orientation) => void;
}

export default function AdaptiveImage({ src, alt = "", className = "", onOrientation }: Props) {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const detect = () => {
      const w = img.naturalWidth || 0;
      const h = img.naturalHeight || 0;
      const orientation: Orientation = h > w ? "portrait" : w > h ? "landscape" : "square";
      onOrientation?.(orientation);
    };

    if (img.complete && img.naturalWidth) {
      detect();
    } else {
      img.addEventListener("load", detect);
      // also attempt to detect if metadata already available
      setTimeout(detect, 50);
    }

    return () => img.removeEventListener("load", detect);
  }, [src, onOrientation]);

  return (
    // img is intentionally a plain <img> to avoid Next/Image layout restrictions here
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      draggable={false}
      decoding="async"
    />
  );
}
