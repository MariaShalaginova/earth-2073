import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
// import StartScreen from "./StartScreen";
import startScreen from '../../assets/classroom.png';
import Button from "../buttons/Button";
import DarkButton from "../buttons/DarkButton";
// import GameScreen from "./GameScreen";
// import EndScreen from "./EndScreen";
import css from '../game/Game.module.css';
import classNames from 'classnames';

const Games = () => {

  const navigate = useNavigate();
  const [currentScene, setCurrentScene] = useState(0);
  const [isAddStyle, setIsAddStyle] = useState(false);

  const scenes = [
    {
      id: 0,
      name: 'стартовая',
      dialogue: "Добро пожаловать в игру!",
      characters: ["Алиса", "Артем", "Максим"],
      img: startScreen,
    },
    {
      id: 1,
      name: 'портал',
      dialogue: "Продолжение сюжета...",
      characters: ["Персонаж 3", "Персонаж 4"],
      img: '../../assets/room-2.png',
    },
    {
      id: 2,
      name: 'теплица',
      dialogue: "Завершение игры.",
      characters: ["Персонаж 5", "Персонаж 6"],
      img: '../../assets/greenhouse-3.png',
    },
  ];

  const handleNextScene = () => {
    if (currentScene < scenes.length - 1) {
      setCurrentScene(currentScene + 1);
      setIsAddStyle(true);
    } else {
      console.log("Достигнут конец игры.");
    }
  };

  

  return (
    <>
    
      <div className={classNames(css.scene, isAddStyle ? '.sceneShow' : '')}>
        <img  src={scenes[currentScene].img}  alt="classroom"/>
        <div className={css.backMain}>
          <Button onClick={async event => {navigate('/')}}>Главная страница</Button>
        </div>
        <div className={css.window}>
         <div className={css.character}>{scenes[currentScene].characters[1]}</div> 
          <div className={css.message}>{scenes[currentScene].dialogue}</div>
            <div className={css.buttons}>
              <DarkButton onClick={handleNextScene}>Пропустить</DarkButton>
              <DarkButton onClick={handleNextScene}>Далее</DarkButton>
          </div>
        </div>
      </div>
      {/* <div>Персонажи: {scenes[currentScene].characters.join(", ")}</div> */}
      
    
    </>
  )
};

export default Games;