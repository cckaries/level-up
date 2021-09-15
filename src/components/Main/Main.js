import styles from './Main.module.scss';

const Main = ({ text, buttonText, onButtonClick }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Left}>
        <div className={styles.Preview}>{text}</div>
        <div className={styles.Input}>
          <textarea name="textarea" placeholder="type anything here..." />
        </div>
        <div className={styles.Buttons}>
          buttons
          <button onClick={() => onButtonClick()}>{buttonText}</button>
        </div>
      </div>
      <div className={styles.Right}>right</div>
    </div>
  );
};

export default Main;
