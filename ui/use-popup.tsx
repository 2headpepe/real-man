import { useState, useEffect, useRef, useCallback, RefObject } from "react";
import clsx from "clsx";

type TriggerType = "click" | "hover";

interface UsePopupOptions<T extends TriggerType = TriggerType> {
  text: string;
  triggerType?: T;
  hideDelay?: number;
  ref?: RefObject<HTMLElement>;
}

type TriggerProps<T extends TriggerType> = {
  ref: React.RefObject<HTMLElement>;
} & (T extends "click"
  ? {
      onClick: () => void;
    }
  : {
      onMouseEnter: () => void;
      onMouseLeave: () => void;
    });

export const usePopup = <T extends TriggerType = TriggerType>({
  text,
  triggerType = "click" as T,
  hideDelay = 2000,
  ref,
}: UsePopupOptions<T>) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const updatePosition = useCallback(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX + rect.width / 2,
      });
    }
  }, []);

  const showPopup = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
    updatePosition();
    setIsVisible(true);

    if (triggerType === "click") {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, hideDelay);
    }
  }, [triggerType, hideDelay, updatePosition]);

  const hidePopup = useCallback(() => {
    if (triggerType === "hover") {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 300);
    }
  }, [triggerType]);

  useEffect(() => {
    if (isVisible) {
      window.addEventListener("resize", updatePosition);
      return () => {
        window.removeEventListener("resize", updatePosition);
        timeoutRef.current && clearTimeout(timeoutRef.current);
      };
    }
  }, [isVisible, updatePosition]);

  const PopupComponent = () => (
    <div
      className={clsx(
        "z-10",
        "fixed mx-auto max-w-max bg-gray-900 text-white text-sm py-2 px-4 rounded-lg shadow-lg",
        "transition-all duration-300 origin-bottom -translate-x-1/2",
        "sm:top-[var(--popup-top)] sm:left-[var(--popup-left)] sm:bottom-auto",
        "bottom-4 left-1/2 top-auto",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      )}
      style={
        {
          "--popup-top": `${position.top}px`,
          "--popup-left": `${position.left}px`,
        } as React.CSSProperties
      }
    >
      {text}
    </div>
  );

  const triggerProps = getTriggerProps(
    triggerRef,
    triggerType,
    showPopup,
    hidePopup
  );

  return {
    PopupComponent,
    ...triggerProps,
    isVisible,
    show: showPopup,
    hide: hidePopup,
  };
};

const getTriggerProps = <T extends TriggerType>(
  ref: React.RefObject<HTMLElement | null>,
  type: T,
  show: () => void,
  hide: () => void
): TriggerProps<T> => {
  const base = { ref };
  return type === "hover"
    ? ({
        ...base,
        onMouseEnter: show,
        onMouseLeave: hide,
      } as unknown as TriggerProps<T>)
    : ({ ...base, onClick: show } as unknown as TriggerProps<T>);
};
