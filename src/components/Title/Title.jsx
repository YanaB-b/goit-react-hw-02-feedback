import css from './Title.module.css'

const Title = ({ title, children }) => {
  return (
    <div className={css.title}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Title;
