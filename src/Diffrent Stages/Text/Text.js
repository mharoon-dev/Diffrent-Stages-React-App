export default function Text() {
    const texts = [
        "Step 1: Learn JavaScript",
        "Step 2: Learn React",
        "Step 3: Invest Your new Income",
    ]
    return (
        <div className="col-12 w-75 d-flex flex-column justify-content-around align-items-center">
            {/* {texts.map((element) => (
        <h3
          key={element} 
          style={{
            marginBottom: "0",
            color: "black",
          }}
        >
          {element}
        </h3>
      ))} */}
      {/* dammy text */}
      <h3>
        Step 1: Learn JavaScript
      </h3>

        </div>
    )
}
