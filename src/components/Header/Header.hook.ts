import { useEffect, useRef, useState } from 'react';

export function useHeader() {
  const [isSticked, setIsSticked] = useState(false);
  const headerContainer = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function changeHeaderStyle() {
      if (!headerContainer.current) return;

      setIsSticked(() => !!window.scrollY);
    }

    window.addEventListener('scroll', changeHeaderStyle);

    return () => {
      window.removeEventListener('scroll', changeHeaderStyle);
    };
  }, []);

  return {
    isSticked,
    headerContainer,
  };
}
