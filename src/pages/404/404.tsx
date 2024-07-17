import styles from "../../styles/main.module.scss";

export function NotFoundPage() {
  return (
    <div className={styles.flexColumn}>
      <h1>ой, а такого у нас нет</h1>
      {/*<img src={`/404.png`} />*/}
    </div>
  );
}
