import FeedbackItem from "./FeedbackItem";
// import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";
// import { motion, AnimatePresence } from "framer-motion";

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No feedback yet</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>

    // WITH FRAMER-MOTION ANIMATIONS
    //  <div className="feedback-list">
    //     <AnimatePresence>
    //       {feedback.map((item) => (
    //         <motion.div
    //           key={item.id}
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           exit={{ opacity: 0 }}
    //         >
    //           <FeedbackItem
    //             key={item.id}
    //             item={item}
    //             handleDelete={handleDelete}
    //           />
    //         </motion.div>
    //       ))}
    //     </AnimatePresence>
    //   </div>
  );
}

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       // id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// };

export default FeedbackList;
