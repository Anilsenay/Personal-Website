import React from "react";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 56,
        width: "auto",
      }}
    >
      <div className="outer-circle">
        <div className="inner-circle" />
      </div>
    </div>
  );
}
