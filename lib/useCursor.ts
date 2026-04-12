import { useEffect, useRef } from "react";

export type PointerState = {
  x: number;
  y: number;
  hoveringTitle: boolean;
};

export default function useCursor() {
  const pointer = useRef<PointerState>({ x: -9999, y: -9999, hoveringTitle: false });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pointer.current.x = e.clientX;
      pointer.current.y = e.clientY;
    };

    const onLeave = () => {
      pointer.current.x = -9999;
      pointer.current.y = -9999;
    };

    const titleEl = document.querySelector(".gold-shimmer-title");
    const onTitleEnter = () => (pointer.current.hoveringTitle = true);
    const onTitleLeave = () => (pointer.current.hoveringTitle = false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    if (titleEl) {
      titleEl.addEventListener("mouseenter", onTitleEnter);
      titleEl.addEventListener("mouseleave", onTitleLeave);
    }

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      if (titleEl) {
        titleEl.removeEventListener("mouseenter", onTitleEnter);
        titleEl.removeEventListener("mouseleave", onTitleLeave);
      }
    };
  }, []);

  return pointer;
}
