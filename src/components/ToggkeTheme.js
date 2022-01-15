import React from "react";
import { useAppContext } from "../context/app-context";

export default function ToggkeTheme() {
  const context = useAppContext();
  return (
    <div>
      <button
        onClick={() =>
          context.setTheme(context.theme === "light" ? "dark" : "light")
        }
      >
        Toggle Theme
      </button>
    </div>
  );
}
