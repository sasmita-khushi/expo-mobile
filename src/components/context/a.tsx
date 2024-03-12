import { NameContext } from "../context/name-context";
import { useState } from "react";
import B from "../context/b";

export default function A() {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClear = () => {
    setName("");
  };

  return (
    <div className="   w-96 h-96 flex bg-purple-500 justify-center items-center ">
      <NameContext.Provider value={{ name, handleClear }}>
        <input type="text" value={name} onChange={handleChange} />
        <h2>A</h2>
        <B />
      </NameContext.Provider>
    </div>
  );
}
