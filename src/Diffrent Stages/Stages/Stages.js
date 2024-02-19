export default function Stages() {
  const numbers = [1, 2, 3];
  return (
    <div className="col-12 d-flex justify-content-around align-items-center " 
    >
{numbers.map((element) => (
        <p
          key={element}  // Add a key to each element when rendering in a loop
          style={{
            marginBottom: "0",
            color: "white",
            backgroundColor: "#6f45f1",
            borderRadius: "50%",
            height: "50px",
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {element}
        </p>
      ))}
    </div>
  );
}
