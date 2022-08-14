import { useState } from "react";
import StructureOptions from "./StructureOptions";
import QueueDisplay from "./Structures/QueueDisplay";
import StackDisplay from "./Structures/StackDisplay";
import LinkedListDisplay from "./Structures/LinkedListDisplay";
import BinaryTreeDisplay from "./Structures/BinaryTreeDisplay";

const StructureSandbox = () => {
  const [dataStructure, setDataStructures] = useState("0");

  const handleStructureChange = (e) => {
    setDataStructures(e.target.value);
  };

  return (
    <>
      <StructureOptions
        handleStructureChange={handleStructureChange}
        dataStructure={dataStructure}
      />
      {dataStructure === "0" ? (
        <QueueDisplay />
      ) : dataStructure === "1" ? (
        <StackDisplay />
      ) : dataStructure === "2" ? (
        <LinkedListDisplay />
      ) : dataStructure === "3" ? (
        <BinaryTreeDisplay />
      ) : null}
    </>
  );
};

export default StructureSandbox;
