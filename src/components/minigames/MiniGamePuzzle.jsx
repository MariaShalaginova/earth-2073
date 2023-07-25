import css from './MiniGame.module.css';
// import logo from '../../assets/logo.svg';
// import startScreen from '../../assets/startScreen.png'
import Button from '../buttons/Button';
import { useNavigate } from 'react-router-dom';

const MiniGamePuzzle = () => {
  const navigate = useNavigate();

  // const [isAddStyle, setIsAddStyle] = useState(false);


  return (
    
        <div className={css.gameScreen}>
            {/* <img  src={startScreen}  alt="start screen"/> */}

            <h1>Мини-игра 1</h1>
            <div className={css.buttons}>
              {/* <DarkButton onClick={handlePrevDialog}>Назад</DarkButton> */}
              <Button type="button" onClick={async event => {navigate('/game')}}>Продолжить</Button>
          </div>
            {/* <div className={css.buttonsBlock}>
                <Button type="button" onClick={handleClick}>Новая игра</Button>
                <Button type="button" onClick={async event => {navigate('/game')}}>Продолжить</Button>
                <Button type="button" onClick={async event => {navigate('/')}}>Выход</Button>
            </div> */}
        </div>

  )
};

export default MiniGamePuzzle;