import { Fragment } from "react";
function Equation(props) {
  return (
    <>
      <div className="col-5">{props.question}</div>
      <div className="col-2">=</div>
      <div className="col-5">{props.answer}</div>
    </>
  );
}

export default Equation;
