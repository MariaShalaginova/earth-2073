import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
// import StartScreen from "./StartScreen";
// import startScreen from '../../assets/classroom.png';
import Button from "../buttons/Button";
import DarkButton from "../buttons/DarkButton";
// import GameScreen from "./GameScreen";
// import EndScreen from "./EndScreen";
import css from '../game/Game.module.css';
import classNames from 'classnames';

const Games = () => {

  // const savedScene = localStorage.getItem('currentScene') ?? 0;
  const navigate = useNavigate();
  const [currentScene, setCurrentScene] = useState(0);
  const [isAddStyle, setIsAddStyle] = useState(false);
  // const [currentWindowIndex, setCurrentWindowIndex] = useState(0); //для сохранения в локал текущего диалога
  const [currentDialog, setCurrentDialog] = useState(0);
  const [dialogues, setDialogues] = useState([]); // в этот массив придет dialogues

  useEffect(() => {
    // Получение данных из localStorage
    const savedScene = parseInt(localStorage.getItem('currentScene') ?? 0);
    if (savedScene) {
      setCurrentScene(savedScene);
    }
    console.log(savedScene);
  }, []);


 
  // const api = "http://31.28.27.163:8000/scenes/?name=string";

  // useEffect(() => {
  //   fetch(api)
  //     .then(response => response.json())
  //     .then(data => {
  //       setDialogues(data.dialogues);
  // 
  //     })
  //     .catch(error => {
  //       console.log('Ошибка:', error);
  //     });
  // }, []);



  // const dialogues = [
  //   {
  //     scene: [
  //       {
  //         id: 0,
  //         name: 'класс',
  //         path_img:'assets/classroom.png',
  //         position: 'right'
  //       }
  //   ],   
  //   windows: [
  //       {
  //         window_id: 0,
  //         character: 'Алиса',
  //         text: 'Привет, ребята!',
  //         path_img: 'assets/alisaSmile.png',
  //         position: 'right'
  //       }, 
  //       {
  //         window_id: 1,
  //         character: 'Элина',
  //         text: 'О, привет, Алиса!',
  //         path_img: '',
  //         position: 'right'
  //       },
  //       {
  //         window_id: 2,
  //         character: 'Артем',
  //         text: 'Денис, как твоя новая игра? Понравилась?',
  //         path_img: '',
  //         position: 'right'
  //       },
  //       {
  //         window_id: 3,
  //         character: 'Денис',
  //         text: 'Да, супер! Концовка - отпад.',
  //         path_img: '',
  //         position: 'right'
  //       },
  //       {
  //         window_id: 4,
  //         character: 'Марина',
  //         text: 'Ну и каквы думаете, зачем нас попросили остаться после уроков?',
  //         path_img: '',
  //         position: 'right'
  //       },
  //       {
  //         window_id: 5,
  //         character: 'Артем',
  //         text: 'Странный этот новый учитель биологии Максим Владимирович. Очень странный!',
  //         path_img: '',
  //         position: 'right'
  //       },
  //       {
  //         window_id: 6,
  //         character: 'Денис',
  //         text: 'А я как-то слышал, как он с кем-то по телефону говорил о каких-то роботах в теплицах Интересно, что он хочет нам сейчас тут рассказать...',
  //         path_img: '',
  //         position: 'right'
  //       }
  //     ]  
  //   },
  //   {
  //     scene: [
  //       {
  //         id: 1,
  //         name: 'класс c учителем',
  //         path_img:'assets/house.png'
  //       }
  //    ],
  //     windows: [
  //       {
  //         window_id: 0,
  //         character: 'Марина',
  //         text: 'Кажется, к нам кто-то идет. О, это новый учитель?',
  //         path_img: '',
  //         position: 'left'
  //       },
  //       {
  //         window_id: 1,
  //         character: 'Алиса',
  //         text: 'Выглядит, конечно, странно.',
  //         path_img: '',
  //         position: 'left'
  //       },
  //       {
  //         window_id: 2,
  //         character: 'Артем',
  //         text: 'Похоже, он хочет у нас что-то спросить.',
  //         path_img: '',
  //         position: 'left'
  //       },
  //       {
  //         window_id: 3,
  //         character: 'Алиса',
  //         text: 'Здравствуйте! Вам что-то подсказать?',
  //         path_img: '',
  //         position: 'left'
  //       },
  //       {
  //         window_id: 4,
  //         character: 'Максим',
  //         text: 'Привет, ребята. Мне сказали, что вы интересуетесь экологией и инновациями.',
  //         path_img: '',
  //         position: 'left' 
  //       },
  //       {
  //         window_id: 5,
  //         character: 'Артем',
  //         text: 'Даже интересно, кто это доложил?',
  //         path_img: '',
  //         position: 'left'
  //       },
  //       {
  //         window_id: 6,
  //         character: 'Максим',
  //         text: 'Меня зовут Максим Владимирович. И я пришёл из будущего. Я – ученый. Знаю, что у вас есть задачи, связанные с будущим нашей планеты.',
  //         path_img: '',
  //         position: 'right'
  //       },
  //       {
  //         window_id: 7,
  //         character: 'Артем',
  //         text: 'Из будущего? Вы серьезно? У вас есть машина времени?',
  //         path_img: '',
  //         position: 'left'
  //       },
  //       {
  //         window_id: 8,
  //         character: 'Алиса',
  //         text: 'Похоже на фантастику. Но если это правда, мы открыты новым идеям и возможностям.',
  //         path_img: '',
  //         position: 'left'
  //       },
  //       {
  //         window_id: 9,
  //         character: 'Марина',
  //         text: 'Интересненько...',
  //         path_img: '',
  //         position: 'left'
  //       }
  //     ]  
  //   }
  // ]
  

  const handlePrevDialog = () => {
    let dialogLength = dialogues[currentScene].windows.length;

    if( currentDialog === 0 && currentScene !==0 ) {
      setCurrentScene(currentScene - 1);
      dialogLength = dialogues[currentScene-1].windows.length;
      setCurrentDialog(dialogLength-1);
      return;
    }

    if (currentDialog === 0 && currentScene === 0) {
      return;
    }
    
    if (currentDialog < dialogLength) {
      setCurrentDialog(currentDialog - 1);
      // setIsAddStyle(true);
    }
  };

  const handleNextDialog = () => {    
    const dialogLength = dialogues[currentScene].windows.length;
    const sceneLength = dialogues.length - 1;
  
    if ( currentDialog < dialogLength -1 ) {
      setCurrentDialog(currentDialog + 1);
      return;
      // setIsAddStyle(true);
    }

    if ( currentScene === sceneLength ) {
      
      console.log("Конец");
      localStorage.setItem("currentScene", '0')
      return;
    }

    setCurrentScene( currentScene + 1 );
    localStorage.setItem("currentScene", currentScene+1);
    console.log(localStorage);
    setCurrentDialog(0);
    setIsAddStyle(true);
  };


  return (
 
      <div className={classNames(css.scene, isAddStyle ? 'css.sceneShow' : '')}>
        {/* <img className={css.sceneImg} src={dialogues[currentScene].scene[0].path_img}  alt={dialogues[currentScene].scene[0].name}/> */}
        <img className={css.sceneImg} src={require('../../'+dialogues[currentScene].scene[0].path_img)} alt={dialogues[currentScene].scene[0].name}/>
        <div className={css.backMain}>
          <Button onClick={async event => {navigate('/start')}}>Главная страница</Button>
        </div>
        { dialogues[currentScene].windows[currentDialog].position == 'right' ? (
          <div className={css.positionRight}>
          <img className={css.positionChar} src={require('../../'+dialogues[currentScene].windows[currentDialog].path_img)} alt={dialogues[currentScene].windows[currentDialog].character}/>
        </div> 
        ) : (
          <div className={css.positionLeft}>
            <img className={css.positionChar} src={require('../../'+dialogues[currentScene].windows[currentDialog].path_img)} alt={dialogues[currentScene].windows[currentDialog].character}/>
          </div> 
        )
        
        }
          {/* <div className={css.positionRight}>
            <img className={css.positionChar} src={require('../../'+dialogues[currentScene].windows[currentDialog].path_img)} alt={dialogues[currentScene].windows[currentDialog].character}/>
          </div>   */}
          <div className={css.window}>
          <div className={css.character}>{dialogues[currentScene].windows[currentDialog].character}</div> 
            <div className={css.message}>{dialogues[currentScene].windows[currentDialog].text}</div>
              <div className={css.buttons}>
                <DarkButton onClick={handlePrevDialog}>Назад</DarkButton>
                <DarkButton onClick={handleNextDialog}>Далее</DarkButton>
            </div>
          </div>
        {/* </div>   */}
      </div>

  )
};

export default Games;
