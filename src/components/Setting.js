import React from "react";
import { useAppContext } from "../context/app-context";

export default function Setting() {
  const context = useAppContext();
  return (
    <div>
      <input
        type="text"
        placeholder="Chnage Name"
        onChange={(e) =>
          context.setUser({
            ...context.user,
            name: e.target.value,
          })
        }
        value={context.user.name ?? ""}
      />
    </div>
  );
}
