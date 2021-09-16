import styles from './Main.module.scss';

const Main = ({ text, buttonText, onButtonClick }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Left}>
        <div className={styles.Preview}>{text}</div>
        <div className={styles.Input}>
          <textarea
            id="level-up-textarea"
            name="textarea"
            placeholder="type anything here..."
          />
        </div>
        <div className={styles.Buttons}>
          buttons
          <button onClick={() => onButtonClick()}>{buttonText}</button>
        </div>
      </div>
      <div className={styles.Right}>
        <div className={styles.TabBar}>
          <div className={styles.Tabs}>
            <button className={styles.active}>Suggest</button>
            <button>Grammar</button>
            <button>Vocabulary</button>
          </div>
          <div className={styles.Levels}>levels</div>
        </div>
        <div className={styles.Sentences}>
          <div className={styles.Sentence}>sentence 1</div>
          <div className={styles.Sentence}>sentence 2</div>
          <div className={styles.Sentence}>sentence 3</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
