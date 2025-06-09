import { useEffect } from "react";

function useHandleButtonsFocus() {
  // Unfocus every button each time it's clicked to avoid issues when the user wants to type a space but presses the button instead
  function handleButtonClick(e: Event) {
    const button = e.target as HTMLButtonElement;
    button.blur();
  }

  useEffect(() => {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
      button.addEventListener("click", handleButtonClick);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", handleButtonClick);
      });
    };
  }, []);
}

export default useHandleButtonsFocus;
