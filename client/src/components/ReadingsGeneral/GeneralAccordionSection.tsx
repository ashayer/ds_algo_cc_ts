import InsertionGeneral from "../AlgoReading/InsertionInfo/InsertionGeneral";
import SelectionGeneral from "../AlgoReading/SelectionInfo/SelectionGeneral";
import MergeGeneral from "../AlgoReading/MergeInfo/MergeGeneral";
import QuickGeneral from "../AlgoReading/QuickInfo/QuickGeneral";

const GeneralAccordionSection = ({
  sectionNum,
  isAlgo,
}: {
  sectionNum: number;
  isAlgo: boolean;
}) => {
  return (
    <>
      {isAlgo && sectionNum === 0 ? (
        <InsertionGeneral />
      ) : sectionNum === 1 ? (
        <SelectionGeneral />
      ) : sectionNum === 2 ? (
        <MergeGeneral />
      ) : sectionNum === 3 ? (
        <QuickGeneral />
      ) : null}
      {!isAlgo && sectionNum === 0 ? (
        <InsertionGeneral />
      ) : sectionNum === 1 ? (
        <SelectionGeneral />
      ) : sectionNum === 2 ? (
        <MergeGeneral />
      ) : sectionNum === 3 ? (
        <QuickGeneral />
      ) : null}
    </>
  );
};

export default GeneralAccordionSection;
