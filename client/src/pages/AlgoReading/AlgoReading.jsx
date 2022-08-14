import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import axios from "axios";
import SortingAlgorithmAccordion from "../../components/AlgoReading/Accordion/SortingAlgorithmAccordion";
import { useQuery } from "@tanstack/react-query";
import useAuthStore from "../../stores/authStore";

// const updateLocalUser = async (array) => {
//   try {
//     const response = await axios.patch(`${API_URL}updateAlgo/${localUser._id}`, {
//       algoReading: array,
//     });
//     localUser.algoReading = array;
//     sessionStorage.setItem("user", JSON.stringify(localUser));
//     return response;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

const getUserAlgoReading = async (id: string) => {
  const response = await axios.get(`/api/user/getAlgoReading/${id}`);
  return response.data;
};

const AlgoReading = () => {
  const [sectionNum, setSectionNum] = useState(0);
  const id = useAuthStore((state) => state.id);

  const {
    data: sectionArray,
    isLoading,
    isSuccess,
    isError,
  } = useQuery(["user-stats"], () => getUserAlgoReading(id));

  const nextSection = () => {
    if (sectionNum < sectionArray.length - 1) setSectionNum(sectionNum + 1);
  };

  const prevSection = () => {
    if (sectionNum > 0) setSectionNum(sectionNum - 1);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <Box>
      {isSuccess && !isLoading && sectionArray.length > 0 && (
        <>
          <SortingAlgorithmAccordion
            sectionNum={sectionNum}
            sectionArray={sectionArray}
            isLoading={isLoading}
          />
          <Grid
            container
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2vh",
            }}
          >
            <Button
              onClick={prevSection}
              variant="contained"
              disabled={sectionNum < 1}
              sx={{
                visibility: `${sectionNum === 0 ? "hidden" : "visible"}`,
              }}
            >
              <ArrowBackIcon />
              {sectionNum > 0 ? `${sectionArray[sectionNum - 1].sectionName}` : null}
            </Button>

            <Button
              onClick={nextSection}
              variant="contained"
              disabled={
                sectionNum === sectionArray.length - 1 || !sectionArray[sectionNum].completed
              }
              sx={{
                visibility: `${sectionNum === sectionArray.length - 1 ? "hidden" : "visible"}`,
              }}
            >
              {sectionNum < sectionArray.length - 1
                ? `${sectionArray[sectionNum + 1].sectionName}`
                : null}
              <ArrowForwardIcon />
            </Button>
          </Grid>
        </>
      )}
    </Box>
  );
};

export default AlgoReading;
