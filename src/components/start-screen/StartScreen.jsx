// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import css from './StartScreen.module.css';
import logo from '../../assets/logo.svg';
// import startScreen from '../../assets/startScreen.png'
import Button from '../buttons/Button';
import { useNavigate } from 'react-router-dom';

const StartScreen = () => {
  const navigate = useNavigate();
  const [dialogues, setDialogues] = useState([]); // в этот массив придет dialogues

  
  useEffect(() => {
    fetchDialogs();
  }, []);

  // const [isAddStyle, setIsAddStyle] = useState(false);

  const fetchDialogs = async () => {
    try {
      const response = await fetch('https://latikdesu.art/api/dialog/', {
        method: 'POST',
        // Дополнительные параметры запроса, если необходимо
        headers: {
          'Content-Type': 'application/json',
          // Другие заголовки, если необходимо
        },
        body: JSON.stringify({start: '0', end: '5'}),
      });

      if (response.ok) {
        const data = await response.json();
        setDialogues(data.dialogues);
        console.log(data.dialogues);
        // localStorage.setItem("dialogues", JSON.stringify(data.dialogues));
      } else {
        console.error('Ошибка получения диалогов:', response.status);
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();

    // Обнуление сцены в локальном хранилище
    localStorage.removeItem('currentScene');

    // Переход на страницу игры
    navigate('/game', { state: { data: dialogues } });
  };

  return (
    <>
    
        <div className={css.startScreen}>
            {/* <img  src={startScreen}  alt="start screen"/> */}

            <img className={css.logo} src={logo} alt="logo" />
            <h1 className={css.title}>
            Земля-<span className={css.mainTitle}>2073</span>
            </h1>
            <div className={css.buttonsBlock}>
                <Button type="button" onClick={handleClick}>Новая игра</Button>
                <Button type="button" onClick={async event => {navigate('/game', { state: { data: dialogues } })}}>Продолжить</Button>
                <Button type="button" onClick={async event => {navigate('/')}}>Выход</Button>
            </div>
        </div>
      
      
    
    </>
  )
};

export default StartScreen;