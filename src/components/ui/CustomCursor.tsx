import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [showCursor, setShowCursor] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check for touch devices only once
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) {
      setShowCursor(false);
      return;
    }

    setShowCursor(true); // Desktop: show cursor

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isInitialized) {
        setIsInitialized(true);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [isInitialized]);

  if (!showCursor) return null;

  return (
    <>
      {/* Light Effect - Large glowing trail only */}
      <div
        className="fixed pointer-events-none transition-all duration-300 ease-out z-10"
        style={{
          left: position.x - 300,
          top: position.y - 300,
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(254, 215, 170, 0.25) 0%, rgba(254, 215, 170, 0.18) 25%, rgba(254, 215, 170, 0.12) 50%, rgba(254, 215, 170, 0.06) 75%, transparent 100%)",
          borderRadius: "50% 40% 60% 30%",
          filter: "blur(60px)",
          transform: "scale(1.2)",
          opacity: isInitialized ? 0.18 : 0,
        }}
      />
    </>
  );
}
