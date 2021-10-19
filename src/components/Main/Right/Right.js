import { useState, useEffect, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';

import styles from './Right.module.scss';
import { Link } from 'react-router-dom';

const tabsObj = {
  0: 'Suggest',
  1: 'Grammar',
  2: 'Vocabulary',
  3: '94Pro',
};

/* const sentencesObj = {
  sent1: 'this is sentence 1',
  sent2: 'this is sentence 2',
  sent3: 'this is sentence 33',
  sent5: 'this is sentence 5',
  sent4: 'this is sentence 4',
}; */

const Right = ({ onOptionClick = () => {} }) => {
  // const [currentTab, setCurrentTab] = useState('0');
  // const [currentSentence, setCurrentSentence] = useState(null);
  const { sentences } = useSelector(state => state.text);
  const [{ currentTab, currentSentence }, setState] = useReducer(
    (prevState, nextState) => ({ ...prevState, ...nextState }),
    {
      currentTab: null,
      currentSentence: null,
    }
  );

  useEffect(() => {
    setState({ currentTab: '1' });

    return () => {
      setState({ currentTab: '2' });
    };
  }, []);

  useEffect(() => {
    setState({ currentSentence: 'sent3' });
  }, [currentTab]);

  return (
    <div className={styles.Right}>
      <div className={styles.TabBar}>
        <div className={styles.Tabs}>
          {Object.keys(tabsObj).map(tabKey => (
            <button
              key={tabKey}
              className={cx(tabKey == currentTab && styles.active)}
              onClick={() => {
                // setCurrentTab(tabKey);
                setState({ currentTab: tabKey, currentSentence: 'sent2' });
              }}
            >
              {tabsObj[tabKey]}
            </button>
          ))}
        </div>
        <div className={styles.Levels}>levels</div>
      </div>
      <div className={styles.Sentences}>
        {Object.keys(sentences).map(sentenceKey => (
          <div
            key={sentenceKey}
            className={cx(
              styles.Sentence,
              sentenceKey == currentSentence && styles.active
            )}
            onClick={() => {
              // setCurrentSentence(sentenceKey);
              setState({ currentSentence: sentenceKey });
            }}
          >
            {sentences[sentenceKey]}
            <Link to={`/details/${sentenceKey}`}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Right;
