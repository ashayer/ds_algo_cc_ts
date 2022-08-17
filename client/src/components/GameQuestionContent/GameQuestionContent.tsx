import { Grid, Box, Typography } from "@mui/material";
import CodeBlock from "../CodeBlock/CodeBlock";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const DragCode = ({ questionContent }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <DragDropContext onDragEnd={() => console.log("asd")}>
        <Droppable droppableId="1">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ justifyContent: "center", border: "1px solid black" }}
            >
              {questionContent?.map((value: any, idx: number) => (
                <Draggable draggableId={idx.toString()} index={idx} key={idx}>
                  {(provided) => (
                    <Typography
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      variant="h5"
                      sx={{
                        backgroundColor: "white",
                        "&:hover": {
                          color: "red",
                        },
                      }}
                    >
                      {`${value.lineContent}`}
                    </Typography>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
};

const DragBars = ({ questionContent }: any) => {
  return (
    <DragDropContext onDragEnd={() => console.log("asd")}>
      <Droppable droppableId="1" direction="horizontal">
        {(provided) => (
          <Grid
            container
            {...provided.droppableProps}
            ref={provided.innerRef}
            sx={{ position: "relative", justifyContent: "center" }}
          >
            {questionContent?.map((value: any, idx: number) => (
              <Draggable draggableId={idx.toString()} index={idx} key={idx}>
                {(provided) => (
                  <Grid
                    item
                    key={value}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    sx={{ height: "25vh", width: "10vw" }}
                    md={1}
                    sm={0}
                  >
                    <Box
                      sx={{
                        height: `${value.lineContent * 3}vh`,
                        backgroundColor: "#036bfc",
                        color: "white",
                        position: "absolute",
                        bottom: "0",
                        borderRadius: "5px 5px 0px 0px",
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="h4" sx={{ width: "4vw" }}>
                        {`${value.lineContent}`}
                      </Typography>
                    </Box>
                  </Grid>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Grid>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const ArrayBarsContent = ({ questionContent }: any) => {
  return (
    <Grid container sx={{ position: "relative", justifyContent: "center" }}>
      {questionContent.map((value: number) => (
        <Grid item key={value} sx={{ height: "25vh", width: "8vw" }} md={1} sm={0}>
          <Box
            sx={{
              height: `${value * 3}vh`,
              backgroundColor: "#036bfc",
              color: "white",
              position: "absolute",
              bottom: "0",
              borderRadius: "5px 5px 0px 0px",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" sx={{ width: "4vw" }}>{`${value}`}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

const TextContent = ({ questionContent }: any) => {
  return (
    <Typography variant="h1" fontWeight="bold">
      {questionContent}
    </Typography>
  );
};

const PseudoCodeContent = ({ questionContent }: any) => {
  return <CodeBlock hoveredLine={[]} code={questionContent} startingLineNumber={1} />;
};

const GameQuestionContent = ({ questionInfo, questionContent }: any) => {
  switch (questionInfo.qType) {
    case "STATE-AFTER-SWAPS":
      return <ArrayBarsContent questionContent={questionContent} />;
    case "TIME-COMPLEXITY-DIRECT":
      return <TextContent questionContent={questionContent} />;
    case "SPACE-COMPLEXITY":
      return <TextContent questionContent={questionContent} />;
    case "CHOOSE-PSEUDOCODE":
      return <PseudoCodeContent questionContent={questionContent} />;
    case "TIME-COMPLEXITY-FROM-ARRAY":
      return <ArrayBarsContent questionContent={questionContent} />;
    case "DRAG-CODE":
      return <DragCode questionContent={questionContent} />;
    case "DRAG-ARRAY-BARS":
      return <DragBars questionContent={questionContent} />;
    default:
      return <div>Error</div>;
  }
};

export default GameQuestionContent;
