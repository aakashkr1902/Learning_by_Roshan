import React, { useEffect, useState } from "react";

export default function Header({names}) {
  const [name, setName] = useState("roshan");

  function handleChange(e) {
    setName(e.target.value)
    console.log(e)
  }
 

  return (
    <div className="Header_conterner">
      <input
        onChange={(e) =>handleChange(e)}
        style={{
          color: "wheat",
          background: "gray",
          padding: "1rem",
          borderRadius: "8px",
          border: "1px solid #fff",
        }}
      />
      {names}
    </div>
  );
}
