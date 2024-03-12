import { useContext } from "react";
import { NameContext } from "../context/name-context";

export default function C() {
  const { name, handleClear } = useContext(NameContext);
  const clear = () => {
    handleClear();
  };
  return (
    <div className=" w-44 flex h-44 bg-green-900 ">
      <h2>C</h2>
      <h2>{name}</h2>
      <button onClick={clear}>clear</button>
    </div>
  );
}
