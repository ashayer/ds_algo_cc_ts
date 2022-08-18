import { Grid, Box, Typography } from "@mui/material";
import CodeBlock from "../CodeBlock/CodeBlock";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const DragCode = ({ questionContent }: { questionContent: DragArrayType[] }) => {
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
              {questionContent?.map((value: DragArrayType, idx: number) => (
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

const DragBars = ({ questionContent }: { questionContent: DragArrayType[] }) => {
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
            {questionContent?.map((value: DragArrayType, idx: number) => (
              <Draggable draggableId={idx.toString()} index={idx} key={idx}>
                {(provided) => (
                  <Grid
                    item
                    key={value.lineContent}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    sx={{ height: "25vh", width: "10vw" }}
                    md={1}
                    sm={0}
                  >
                    <Box
                      sx={{
                        height: `${(value.lineContent as number) * 3}vh`,
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

const ArrayBarsContent = ({ questionContent }: { questionContent: number[] }) => {
  return (
    <Grid container sx={{ position: "relative", justifyContent: "center" }}>
      {questionContent?.map((value: number, index: number) => (
        <Grid item key={index} sx={{ height: "25vh", width: "8vw" }} md={1} sm={0}>
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

const TextContent = ({ questionContent }: { questionContent: string }) => {
  return (
    <Typography variant="h1" fontWeight="bold">
      {questionContent}
    </Typography>
  );
};

const PseudoCodeContent = ({ questionContent }: { questionContent: string }) => {
  return <CodeBlock hoveredLine={[]} code={questionContent} startingLineNumber={1} />;
};

const GameQuestionContent = ({ questionDisplay }: { questionDisplay: GameDisplayInfo }) => {
  switch (questionDisplay.contentType) {
    case "TEXT":
      return <TextContent questionContent={questionDisplay.content as string} />;
    case "CODE":
      return <PseudoCodeContent questionContent={questionDisplay.content as string} />;
    case "ARRAY-BARS":
      return <ArrayBarsContent questionContent={questionDisplay.content as number[]} />;
    case "DRAGGABLE-CODE":
      return <DragCode questionContent={questionDisplay.content as DragArrayType[]} />;
    case "DRAGGABLE-ARRAY-BARS":
      return <DragBars questionContent={questionDisplay.content as DragArrayType[]} />;
    default:
      return <div>Error</div>;
  }
};

export default GameQuestionContent;
