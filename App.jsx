import { useEffect, useState } from "react";
import Header from "./src/components/Header";
import Options from "./src/components/Options";
import Feedback from "./src/components/Feedback";
import Notification from "./src/components/Notification";
import styles from "/src/components/Container.module.css";

function App() {
  const initialState = { good: 0, neutral: 0, bad: 0 };

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : initialState;
  });

  const updateFeedback = (feedbackType) => {
    setNotes({ ...notes, [feedbackType]: notes[feedbackType] + 1 });
  };

  const totalPoints = Object.values(notes).reduce((acc, item) => acc + item, 0);
  const positive = Math.round((notes.good / totalPoints) * 100);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const resetNotes = () => {
    setNotes({ good: 0, neutral: 0, bad: 0 });
  };
  return (
    <div className={styles.container}>
      <Header />
      <Options
        totalFeedback={totalPoints}
        updateFeedback={updateFeedback}
        resetNotes={resetNotes}
      />
      {totalPoints === 0 ? (
        <Notification />
      ) : (
        <Feedback {...notes} totalPoints={totalPoints} positive={positive} />
      )}
    </div>
  );
}

export default App;
