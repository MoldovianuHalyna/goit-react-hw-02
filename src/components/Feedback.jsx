import styles from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalPoints, positive }) => {
  const getClassName = (value) => {
    if (value > 0) {
      return styles.change;
    } else {
      return styles.feedbackItem;
    }
  };
  return (
    <div className={styles.feedbackList}>
      <p className={`${getClassName(good)}`}>Good:{good}</p>
      <p className={`${getClassName(neutral)}`}>Neutral:{neutral}</p>
      <p className={`${getClassName(bad)}`}>Bad:{bad}</p>
      <p className={`${getClassName(totalPoints)}`}>Total:{totalPoints}</p>
      <p className={`${getClassName(positive)}`}>Positive:{positive}%</p>
    </div>
  );
};

export default Feedback;
