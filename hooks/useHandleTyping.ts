import { useEffect } from "react";

import { useTyping } from "@/contexts/TypingContext";

function useHandleTyping() {
  const { dispatch, gameStatus } = useTyping();

  function handleKeyPress(e: KeyboardEvent) {
    // Check if user is typing in an input
    const inputs = [
      ...document.querySelectorAll("input"),
      ...document.querySelectorAll("textarea"),
    ];
    if (inputs.some((input) => document.activeElement === input)) return;

    // Don't execute event handlers if the game has already ended
    if (gameStatus === "ended") return;

    // On "Space" press
    if (e.key === " ") return dispatch({ type: "typing/space" });

    // On "Backspace" press
    if (e.key === "Backspace") return dispatch({ type: "typing/backspace" });

    /**
     * Ensure it's a single character and not something like "Enter" or "Delete"
     * Ensure it's not whitespace
     */
    if (e.key.length === 1 && /\S/.test(e.key))
      return dispatch({ type: "typing/keypress", payload: e.key });
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [gameStatus]);
}

export default useHandleTyping;
