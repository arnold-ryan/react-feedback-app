// import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  // CALCULATE RATINGS AVERAGE
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, ""); // remove zero after decimal using regular expression

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

// NOT NEEDED WHEN USING CONTEXT API
// FeedbackStats.protoTypes = {
//   feedback: PropTypes.array.isRequired,
// };

export default FeedbackStats;
