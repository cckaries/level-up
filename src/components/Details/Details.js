// import { useEffect, useReducer } from 'react';

import { useParams } from 'react-router-dom';
import styles from './Details.module.scss';

const Details = props => {
  const params = useParams();

  console.log('params:', params);

  return (
    <div id="details-container" className={styles.Container}>
      <h1>this is details page {params.sentenceId}</h1>
    </div>
  );
};

export default Details;
