import React from "react";
import { useAppContext } from "../context/app-context";

export default function DisplayTheme() {
  const context = useAppContext();
  return (
    <div>
      <p>{context.theme}</p>
    </div>
  );
}
