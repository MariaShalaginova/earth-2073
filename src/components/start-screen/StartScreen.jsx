import React, { useEffect, useRef  } from "react";
import css from './StartScreen.module.css';
import logo from '../../assets/logo.svg';
// import startScreen from '../../assets/startScreen.png';
import startScreenAdd from '../../assets/startScreenAdd.png';
import Button from '../buttons/Button';
import { useNavigate } from 'react-router-dom';
import sound from '../../assets/Earth.mp3';



const StartScreen = () => {
  const audioRef = useRef(null);
  
  useEffect(() => {
    // Получение ссылки на аудиоэлемент
    const audioElement = audioRef.current;

    // При монтировании компонента начинаем воспроизведение
    audioElement.play();

    // При размонтировании компонента останавливаем воспроизведение
    return () => {
      // audioElement.pause();
      audioElement.currentTime = 0;
    };
  }, []);

  const navigate = useNavigate();

  const handleClick = async (event) => {
    event.preventDefault();

    // Обнуление сцены в локальном хранилище
    localStorage.removeItem('currentScene');

    // Переход на страницу игры
    navigate('/game');
  };

  return (
     <>
     <audio ref={audioRef} src={sound} />
    <div className={css.startScreen}>
      {/* <img  src={startScreen}  alt="start screen"/> */}
      <img  src={startScreenAdd}  alt="start screen"/>
      <div className={css.menuBlock}>
        <img className={css.logo} src={logo} alt="logo" />
        <h1 className={css.title}>
          Земля-<span className={css.mainTitle}>2073</span>
        </h1>
        <div className={css.buttonsBlock}>
          <Button type="button" onClick={handleClick}>Новая игра</Button>
          <Button type="button" onClick={async event => {navigate('/game')}}>Продолжить</Button>
          <Button type="button" onClick={async event => {navigate('/')}}>Выход</Button>
        </div>
      </div>
    </div>    
  </>  
  )
};

export default StartScreen;