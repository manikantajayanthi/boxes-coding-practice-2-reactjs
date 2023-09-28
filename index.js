const Box = (props) => {
  const { box, message } = props;
  return;
  <div className={box}>
    <p>{message}</p>
  </div>;
};

const element = (
  <div>
    <h1 className="mainHeading">Boxes</h1>
    <div className="containerBox">
      <Box className="box box1" message="Small" />
      <Box className="box box2" message="Medium" />
      <Box className="box box3" message="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
