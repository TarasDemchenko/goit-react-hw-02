import React from "react";
import s from "./Feedback.module.css";

const Feedback = ({ clicks, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <p className={s.wwawa}>Good:{clicks.good}</p>
      <p>Neutral:{clicks.neutral}</p>
      <p>Bad:{clicks.bad}</p>
      <p>Total:{totalFeedback}</p>
      <p>Positive:{positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
