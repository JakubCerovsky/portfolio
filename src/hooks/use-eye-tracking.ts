import { type RefObject, useEffect, useState } from "react";

export type EyeOffset = {
  x: number;
  y: number;
};

export function useEyeTracking<T extends Element>(
  ref: RefObject<T | null>,
  disabled = false,
  options?: {
    maxMovement?: number;
    maxDistance?: number;
  },
) {
  const { maxMovement = 4, maxDistance = 300 } = options ?? {};
  const [eyeOffset, setEyeOffset] = useState<EyeOffset>({ x: 0, y: 0 });

  const offset = disabled ? { x: 0, y: 0 } : eyeOffset;

  useEffect(() => {
    if (disabled) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;
      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const movement = Math.min(distance / maxDistance, 1) * maxMovement;

      setEyeOffset({
        x: Math.cos(angle) * movement,
        y: Math.sin(angle) * movement,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [disabled, maxDistance, maxMovement, ref]);

  return offset;
}
