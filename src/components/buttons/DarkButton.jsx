import css from './Button.module.css';
import classNames from 'classnames';

const DarkButton = ({ onClick, children }) => {
  return (
    <button className={classNames(css.darkButton, css.button)} onClick={onClick}>
      {children}
    </button>
  );
};

export default DarkButton;