import React, { useRef, useEffect } from "react";

const OutsideClick = ({ children, onClickOutside }: { children: React.ReactNode; onClickOutside: any }) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleClickOutside = (e: any) => {
    if (ref.current && !ref?.current?.contains(e.target)) {
      onClickOutside && onClickOutside();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  if (!children) {
    return null;
  }
  return <div ref={ref}>{children}</div>;
};

export default OutsideClick;
