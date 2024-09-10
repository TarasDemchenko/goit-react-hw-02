import React from "react";
import s from "./Options.module.css";
const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <>
      <div className={s.btn_group}>
        <button className={s.btn} onClick={() => updateFeedback("good")}>
          Good
        </button>
        <button className={s.btn} onClick={() => updateFeedback("neutral")}>
          Neutral
        </button>
        <button className={s.btn} onClick={() => updateFeedback("bad")}>
          Bad
        </button>
        {totalFeedback > 0 && (
          <button className={s.btn_reset} onClick={resetFeedback}>
            Reset
          </button>
        )}
      </div>
    </>
  );
};

export default Options;
