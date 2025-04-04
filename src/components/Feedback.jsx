import clsx from "clsx";
import styles from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalPoints, positive }) => {
  return (
    <div className={styles.feedbackList}>
      <p className={clsx(styles.feedbackItem, good > 0 && styles.change)}>
        Good:{good}
      </p>
      <p className={clsx(styles.feedbackItem, neutral > 0 && styles.change)}>
        Neutral:{neutral}
      </p>
      <p className={clsx(styles.feedbackItem, bad > 0 && styles.change)}>
        Bad:{bad}
      </p>
      <p
        className={clsx(styles.feedbackItem, totalPoints > 0 && styles.change)}
      >
        Total:{totalPoints}
      </p>
      <p className={clsx(styles.feedbackItem, positive > 0 && styles.change)}>
        Positive:{positive}%
      </p>
    </div>
  );
};

export default Feedback;
