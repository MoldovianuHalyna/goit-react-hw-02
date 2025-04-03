import styles from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetNotes }) => {
  const options = ["good", "neutral", "bad"];
  return (
    <ul className={styles.optionsList}>
      {options.map((option) => {
        return (
          <li key={option}>
            <button
              className={styles.optionBTN}
              onClick={() => updateFeedback(option)}
            >
              {option}
            </button>
          </li>
        );
      })}

      {totalFeedback !== 0 && (
        <li key="reset">
          <button className={styles.optionBTN} onClick={resetNotes}>
            Reset points
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
