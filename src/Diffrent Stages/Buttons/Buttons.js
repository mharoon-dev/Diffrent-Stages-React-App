export default function Buttons() {
  const buttons = ["Perivous", "Next"];
  return (
    <div className="d-flex justify-content-around align-items-center w-75">
      {buttons.map((element) => (
        <h3
          key={element}
          style={{
            marginBottom: "0",
            color: "black",
          }}
        >
          <button
            style={{
              backgroundColor: "#6f45f1",
              borderRadius: "15px",
              fonstSize: "10px",
              color: "white",
              border: "none",
              padding: "12px",
            }}
          >
            {element}
          </button>
        </h3>
      ))}
    </div>
  );
}
