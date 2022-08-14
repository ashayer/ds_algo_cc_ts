const HighlightLineText = ({ lineNum, setHoveredLine }) => {
  return (
    <span
      style={{ color: "#ff7b00" }}
      onMouseOver={() => setHoveredLine(lineNum)}
      onMouseLeave={() => setHoveredLine([])}
      onFocus={() => setHoveredLine(lineNum)}
    >
      {` (LINE ${lineNum[0]}) `}
    </span>
  );
};

export default HighlightLineText;
