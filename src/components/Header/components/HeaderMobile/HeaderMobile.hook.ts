import { useState } from 'react';

export function useHeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return { isOpen, handleMenu };
}
