const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        border: "1px solid white",
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // Changed from alignContent to alignItems
        cursor: "pointer", // Adds a pointer cursor for better UX
      }}
    >
      <h5 className="board-square">{props.value}</h5>
    </div>
  );
};

export default Square;
