import InsertionCode from "../AlgoReading/InsertionInfo/InsertionCode";
import SelectionCode from "../AlgoReading/SelectionInfo/SelectionCode";
import MergeCode from "../AlgoReading/MergeInfo/MergeCode";
import QuickCode from "../AlgoReading/QuickInfo/QuickCode";

const CodeAccordionSection = ({ sectionNum, isAlgo }: { sectionNum: number; isAlgo: boolean }) => {
  return (
    <>
      {isAlgo && sectionNum === 0 ? (
        <InsertionCode />
      ) : sectionNum === 1 ? (
        <SelectionCode />
      ) : sectionNum === 2 ? (
        <MergeCode />
      ) : sectionNum === 3 ? (
        <QuickCode />
      ) : null}
    </>
  );
};

export default CodeAccordionSection;
