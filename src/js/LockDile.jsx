import React from "react";
import PropTypes from "prop-types";

const LockDile = ({currentNumber, handleClickButton, solution, id}) => {
  return (<div className={`lockDile lock${id}`}>
    <button className="arrow" data-sum="up" data-id={id} onClick={handleClickButton}></button>
    <p>{currentNumber}</p>
    <button className="arrow ArrowDown" data-sum="down" data-id={id} onClick={handleClickButton}></button>
  </div>);
};

LockDile.propTypes = {
  currentNumber: PropTypes.number.isRequired,
  handleClickButton: PropTypes.func.isRequired,
  solution: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};

export default LockDile;
