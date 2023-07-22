import React, { useState } from "react";
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

  const navigate = useNavigate();
  const [currentScene, setCurrentScene] = useState(0);
  const [isAddStyle, setIsAddStyle] = useState(false);
  const [currentWindowIndex, setCurrentWindowIndex] = useState(0);
  const [currentDialog, setCurrentDialog] = useState(0);
 

  // const scenes = [
  //   {
  //     id: 0,
  //     name: 'класс',
  //     dialogue: "Добро пожаловать в игру!",
  //     characters: ["Алиса", "Артем", "Максим"],
  //     img: require('../../assets/classroom.png'),
  //   },
  //   {
  //     id: 1,
  //     name: 'портал',
  //     dialogue: "Продолжение сюжета...",
  //     characters: ["Персонаж 3", "Персонаж 4"],
  //     img: '../../assets/room-2.png',
  //   },
  //   {
  //     id: 2,
  //     name: 'теплица',
  //     dialogue: "Завершение игры.",
  //     characters: ["Персонаж 5", "Персонаж 6"],
  //     img: '../../assets/greenhouse-3.png',
  //   },
  // ];

  const scenes = [
    {
      scene_id: 0,
      sceneName: 'класс',
      background: require('../../assets/classroom.png'), 
      replies: [
        {
          window_id: 0,
          characterName: 'Алиса',
          text: 'Привет, ребята!',
          characterImage: ''
        }, 
        {
          window_id: 1,
          characterName: 'Элина',
          text: 'О, привет, Алиса!',
          characterImage: ''
        },
        {
           window_id: 2,
          characterName: 'Артем',
          text: 'Денис, как твоя новая игра? Понравилась?',
          characterImage: ''
        },
        {
          window_id: 3,
          characterName: 'Денис',
          text: 'Да, супер! Концовка - отпад.',
          characterImage: ''
        },
        {
          window_id: 4,
          characterName: 'Марина',
          text: 'Ну и каквы думаете, зачем нас попросили остаться после уроков?',
          characterImage: '' 
        },
        {
          window_id: 5,
          characterName: 'Артем',
          text: 'Странный этот новый учитель биологии Максим Владимирович. Очень странный!',
          characterImage: ''
        },
        {
          window_id: 6,
          characterName: 'Денис',
          text: 'А я как-то слышал, как он с кем-то по телефону говорил о каких-то роботах в теплицах Интересно, что он хочет нам сейчас тут рассказать...',
          characterImage: ''
        }
      ]
    },
    {
      scene_id: 1,
      sceneName: 'класс c учителем',
      background: require('../../assets/house.png'), 
      replies: [
        {
          window_id: 0,
          characterName: 'Марина',
          text: 'Кажется, к нам кто-то идёт. О, это новый учитель?',
          characterImage: ''
        }, 
        {
          window_id: 1,
          characterName: 'Алиса',
          text: 'Выглядит, конечно, странно.',
          characterImage: ''
        },
        {
           window_id: 2,
          characterName: 'Артем',
          text: 'Похоже, он хочет у нас что-то спросить.',
          characterImage: ''
        },
        {
          window_id: 3,
          characterName: 'Алиса',
          text: 'Здравствуйте! Вам что-то подсказать?',
          characterImage: ''
        },
        {
          window_id: 4,
          characterName: 'Максим',
          text: 'Привет, ребята. Мне сказали, что вы интересуетесь экологией и инновациями.',
          characterImage: '' 
        },
        {
          window_id: 5,
          characterName: 'Артем',
          text: 'Даже интересно, кто это доложил?',
          characterImage: ''
        },
        {
          window_id: 6,
          characterName: 'Максим',
          text: 'Меня зовут Максим Владимирович. И я пришёл из будущего. Я – ученый. Знаю, что у вас есть задачи, связанные с будущим нашей планеты.',
          characterImage: ''
        },
        {
          window_id: 7,
          characterName: 'Артем',
          text: 'Из будущего? Вы серьезно? У вас есть машина времени?',
          characterImage: ''
        },
        {
          window_id: 8,
          characterName: 'Алиса',
          text: 'Похоже на фантастику. Но если это правда, мы открыты новым идеям и возможностям.',
          characterImage: ''
        },
        {
          window_id: 9,
          characterName: 'Марина',
          text: 'Интересненько...',
          characterImage: ''
        }
      ]

    }  
  ]
  // от бека нужен 1 endpoint типо getScenesAndDialog получаем. массив объектов всей игры сразу за 1 запрос. В юзе еффеект пишем фетч запрос. получаем данные 1 раз. dialogues
  //todo хранить в локалсторадж номер диалога и номер сцены.
  // структура данных будет расширяться, будут хранится пути к картинкам персонажей, и данные для отрисовки если она будет разная. если статичное не понадобится.
  const dialogues = [
    {
      scene: [
        {
          id: 0,
          name: 'класс',
          path_img: require('../../assets/classroom.png')
        }
    ],   
    windows: [
        {
          window_id: 0,
          character: 'Алиса',
          text: 'Привет, ребята!',
          path_img: ''
        }, 
        {
          window_id: 1,
          character: 'Элина',
          text: 'О, привет, Алиса!',
          path_img: ''
        },
        {
          window_id: 2,
          character: 'Артем',
          text: 'Денис, как твоя новая игра? Понравилась?',
          path_img: ''
        },
        {
          window_id: 3,
          character: 'Денис',
          text: 'Да, супер! Концовка - отпад.',
          path_img: ''
        },
        {
          window_id: 4,
          character: 'Марина',
          text: 'Ну и каквы думаете, зачем нас попросили остаться после уроков?',
          path_img: ''
        },
        {
          window_id: 5,
          character: 'Артем',
          text: 'Странный этот новый учитель биологии Максим Владимирович. Очень странный!',
          path_img: ''
        },
        {
          window_id: 6,
          character: 'Денис',
          text: 'А я как-то слышал, как он с кем-то по телефону говорил о каких-то роботах в теплицах Интересно, что он хочет нам сейчас тут рассказать...',
          path_img: ''
        }
      ]  
    },
    {
      scene: [
        {
          id: 1,
          name: 'класс c учителем',
          path_img: require('../../assets/house.png')
        }
     ],
      windows: [
        {
          window_id: 0,
          character: 'Алиса',
          text: 'Привет, ребята!',
          path_img: ''
        },
        {
          window_id: 1,
          character: 'Алиса',
          text: 'Выглядит, конечно, странно.',
          path_img: ''
        },
        {
          window_id: 2,
          character: 'Артем',
          text: 'Похоже, он хочет у нас что-то спросить.',
          path_img: ''
        },
        {
          window_id: 3,
          character: 'Алиса',
          text: 'Здравствуйте! Вам что-то подсказать?',
          path_img: ''
        },
        {
          window_id: 4,
          character: 'Максим',
          text: 'Привет, ребята. Мне сказали, что вы интересуетесь экологией и инновациями.',
          path_img: '' 
        },
        {
          window_id: 5,
          character: 'Артем',
          text: 'Даже интересно, кто это доложил?',
          path_img: ''
        },
        {
          window_id: 6,
          character: 'Максим',
          text: 'Меня зовут Максим Владимирович. И я пришёл из будущего. Я – ученый. Знаю, что у вас есть задачи, связанные с будущим нашей планеты.',
          path_img: ''
        },
        {
          window_id: 7,
          character: 'Артем',
          text: 'Из будущего? Вы серьезно? У вас есть машина времени?',
          path_img: ''
        },
        {
          window_id: 8,
          character: 'Алиса',
          text: 'Похоже на фантастику. Но если это правда, мы открыты новым идеям и возможностям.',
          path_img: ''
        },
        {
          window_id: 9,
          character: 'Марина',
          text: 'Интересненько...',
          path_img: ''
        }
      ]  
    }
  ]
  

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
      return;
    }

    setCurrentScene( currentScene + 1 );
    setCurrentDialog(0);    
  };


  return (
    <>
    
      <div className={classNames(css.scene, isAddStyle ? '.sceneShow' : '')}>
        <img  src={dialogues[currentScene].scene[0].path_img}  alt={dialogues[currentScene].scene[0].name}/>
        {/* <div className={css.backMain}>
          <Button onClick={async event => {navigate('/')}}>Главная страница</Button>
        </div> */}
        <div className={css.window}>
         <div className={css.character}>{dialogues[currentScene].windows[currentDialog].character}</div> 
          <div className={css.message}>{dialogues[currentScene].windows[currentDialog].text}</div>
            <div className={css.buttons}>
              <DarkButton onClick={handlePrevDialog}>Назад</DarkButton>
              <DarkButton onClick={handleNextDialog}>Далее</DarkButton>
          </div>
        </div>
      </div>
      {/* <div>Персонажи: {scenes[currentScene].characters.join(", ")}</div> */}
      
    
    </>
  )
};

export default Games;