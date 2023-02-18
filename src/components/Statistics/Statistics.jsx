import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (
    <ul className={css.statList}>
      <li className={css.statItem}>Good: {good}</li>
      <li className={css.statItem}>Neutral : {neutral}</li>
      <li className={css.statItem}>Bad: {bad}</li>
      <li className={css.statItem}>Total: {total}</li>
      <li className={css.statItem}>Positive feedback: {percent} %</li>
    </ul>
  );
};

export default Statistics;
