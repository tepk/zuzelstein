import React, { useState } from "react";
import "./App.css";
import styles from "./styles.module.scss";

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <div className={styles.main}>Hello world!</div>
      <button onClick={() => setCount((oldV) => oldV + 1)}>
        click me {count}!
      </button>
    </>
  );
}

export default App;
