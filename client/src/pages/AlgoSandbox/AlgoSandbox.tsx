import { useState, useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import sortArrayInsertion from "../../utils/SortHistoryGenerators/insertionGen";
import sortArraySelection from "../../utils/SortHistoryGenerators/selectionGen";
import sortArrayMerge from "../../utils/SortHistoryGenerators/mergeGen";
// import sortArrayQuick from "../../utils/SortHistoryGenerators/quickGen";
// import CodeBlock from "../Reading/CodeBlock";
import SubArrayBars from "../../components/SortingSandbox/SubArrayBars/SubArrayBars";
import SortOptions from "../../components/SortingSandbox/SortingAppBar/SortOptions";
import ArrayBars from "../../components/SortingSandbox/ArrayBars/ArrayBars";
import * as codeString from "../../assets/AlgoStrings";
import CodeBlock from "../../components/CodeBlock/CodeBlock";

const AlgoSandbox = () => {
  const [algorithm, setAlgorithm] = useState<number>(2);
  const arraySize = useRef<number>(10);
  const [arrayElements, setArrayElements] = useState<SortHistoryElement[]>([]);
  const [arrayMax, setArrayMax] = useState<number>(0);
  const [sortHistoryArray, setSortHistoryArray] = useState<SortHistoryElement[][]>([]);
  const [codeHighlight, setCodeHighlight] = useState<number[][]>([]);
  const [varLabelArray, setVarLabelArray] = useState<SortLabelHistoryElement[][]>([]);
  const [step, setStep] = useState(0);
  const [pseudoCodeString, setPseudoCodeString] = useState<string>(codeString.mergeString);
  const [sortHistorySubArray, setSortHistorySubArray] = useState<SortHistoryElement[][]>([]);
  const [varLabelSubArray, setVarLabelSubArray] = useState<SortLabelHistoryElement[][]>([]);
  const createRandomArray = () => {
    setStep(0);
    setVarLabelArray([]);
    setCodeHighlight([]);

    const initialSortStateArray: SortHistoryElement[] = [];

    let max = 0;
    for (let i = 0; i < arraySize.current; i += 1) {
      const randomValue = Math.floor(Math.random() * (80 - 15) + 15);
      max = Math.max(max, randomValue);
      const elementObject: SortHistoryElement = {
        value: randomValue,
        color: "lightblue",
      };
      initialSortStateArray.push(elementObject);
    }
    setArrayElements(initialSortStateArray);
    setArrayMax(max);
    setSortHistoryArray([initialSortStateArray]);
  };

  const sortArrayWithCurrentAlgorithm = () => {
    if (algorithm === 0) {
      const { historyArray, codeLinesHistory, varLabelArray } = sortArrayInsertion(arrayElements);
      setSortHistoryArray(historyArray);
      setVarLabelArray(varLabelArray);
      setCodeHighlight(codeLinesHistory);
    } else if (algorithm === 1) {
      const { historyArray, codeLinesHistory, varLabelArray } = sortArraySelection(arrayElements);
      setSortHistoryArray(historyArray);
      setVarLabelArray(varLabelArray);
      setCodeHighlight(codeLinesHistory);
    } else if (algorithm === 2) {
      const { historyArray, codeLinesHistory, varLabelArray, varSubLabelArray, subArrayHistory } =
        sortArrayMerge(arrayElements);
      setSortHistoryArray(historyArray);
      setVarLabelArray(varLabelArray);
      setCodeHighlight(codeLinesHistory);
      setSortHistorySubArray(subArrayHistory);
      setVarLabelSubArray(varSubLabelArray);
    }
  };

  const nextStep = () => {
    if (step < sortHistoryArray.length - 1) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep((pStep) => pStep - 1);
    }
  };

  useEffect(() => {
    createRandomArray();
  }, []);

  const handleAlgoChange = (e: any) => {
    createRandomArray();
    setAlgorithm(e.target.value);
    if (e.target.value === 0) {
      setPseudoCodeString(codeString.insertionString);
    } else if (e.target.value === 1) {
      setPseudoCodeString(codeString.selectionString);
    } else if (e.target.value === 2) {
      setPseudoCodeString(codeString.mergeString);
    } //else {
    //   setPseudoCodeString(codeString.quickString);
    // }
  };

  const handleSizeSliderChange = (e: any, value: any) => {
    if (!(arraySize.current === value)) {
      arraySize.current = value;
      createRandomArray();
    }
  };

  const handleHistorySliderChange = (e: any, value: any) => {
    if (!(step === value)) {
      setStep(value);
    }
  };

  return (
    <>
      <SortOptions
        algorithm={algorithm}
        handleAlgoChange={handleAlgoChange}
        createRandomArray={createRandomArray}
        handleSizeSliderChange={handleSizeSliderChange}
        sortArrayWithCurrentAlgorithm={sortArrayWithCurrentAlgorithm}
        prevStep={prevStep}
        nextStep={nextStep}
        sortHistoryArray={sortHistoryArray}
        step={step}
        handleHistorySliderChange={handleHistorySliderChange}
      />
      <Grid container>
        <Grid item lg={8} md={6} xs={12}>
          <ArrayBars
            sortHistoryArray={sortHistoryArray}
            step={step}
            varLabelArray={varLabelArray}
            arrayMax={arrayMax}
          />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xs={12}
          sx={{
            display: "flex",
            alignItems: "end",
          }}
        >
          <CodeBlock
            hoveredLine={codeHighlight[step]}
            code={pseudoCodeString}
            startingLineNumber={0}
          />
        </Grid>
        {algorithm === 2 && !(sortHistoryArray.length === 1) && (
          <Grid item lg={8} md={6} xs={12}>
            <SubArrayBars
              sortHistorySubArray={sortHistorySubArray}
              step={step}
              varLabelSubArray={varLabelSubArray}
              arrayMax={arrayMax}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default AlgoSandbox;
