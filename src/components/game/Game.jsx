import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
// import StartScreen from "./StartScreen";
import Button from "../buttons/Button";
import DarkButton from "../buttons/DarkButton";
import TypewriterText from './TypewriterText';
import css from '../game/Game.module.css';
import classNames from 'classnames';

const Games = () => {
  const [dialogues, setDialogues] = useState([]); // в этот массив придет dialogues
  const navigate = useNavigate();
  const typingSpeed = 30; //Скорость печати в миллисекундах 
  const [currentScene, setCurrentScene] = useState(0);
  // const [isAddStyle, setIsAddStyle] = useState(true);
  // const [currentWindowIndex, setCurrentWindowIndex] = useState(0); //для сохранения в локал текущего диалога
  const [currentDialog, setCurrentDialog] = useState(0);  
  const [nextDialog, setNextDialog] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Получение данных из localStorage
    const savedScene = parseInt(localStorage.getItem('currentScene') ?? 0);
    if (savedScene) {
      setCurrentScene(savedScene);
    }
    fetchDialogs();
    console.log(savedScene);

  }, []);

  const fetchDialogs = async () => {
    try {
      const response = await fetch('https://latikdesu.art/api/dialog/', {
        method: 'POST',
        // Дополнительные параметры запроса, если необходимо
        headers: {
          'Content-Type': 'application/json',
          // Другие заголовки, если необходимо
        },
        body: JSON.stringify({start: '0', end: '100'}),
      });

      if (response.ok) {
        const data = await response.json();
        setDialogues(data.dialogues);
        console.log(data.dialogues);
        setLoading(false); 
        // localStorage.setItem("dialogues", JSON.stringify(data.dialogues));
      } else {
        console.error('Ошибка получения диалогов:', response.status);
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };


  // useEffect(() => {
  //   const image = new Image();
  //   image.src = src;
  //   image.onload = () => {
  //     setLoading(false);
  //   };
  // }, [src]);

  // useEffect(() => {
  //   // Проверяем, все ли изображения загружены
  //   if (dialogues) {
  //     const images = [];
  //     dialogues.forEach(item => {
  //       const img = new Image();
  //       img.src = item.imagePath;
  //       images.push(img);
  //     });

  //     Promise.all(images.map(img => {
  //       return new Promise((resolve, reject) => {
  //         img.onload = resolve;
  //         img.onerror = reject;
  //       });
  //     }))
  //       .then(() => {
  //         setImagesLoaded(true); // Все изображения загружены
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       });
  //   }
  // }, [data]); 

//   useEffect(() => {
//     const images = [
//       require('../../\'+dialogues[currentScene].scene[0].path_img)'),
//      require('../../\'+dialogues[currentScene].windows[currentDialog].path_img)')
//     ];
// console.log(images);
//     const loadImage = (image) => {
//       return new Promise((resolve) => {
//         const img = new Image();
//         img.src = image;
//         img.onload = () => resolve();
//       });
//     };

//     Promise.all(images.map((image) => loadImage(image))).then(() => {
//       setImagesLoaded(true);
//     });
//   }, []);

  // const backgroundImageStyle = {
  //   backgroundImage: `url(${require('../../'+dialogues[currentScene].scene[0].path_img)})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   transition: "background-image 0.5s ease-in-out",
  // };

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
      setNextDialog(true);
      return;
      // setIsAddStyle(true);
    }

    if ( currentScene === sceneLength ) {
      
      console.log("Конец");
      localStorage.setItem("currentScene", '0')
      return;
    }

    setCurrentScene( currentScene + 1 );
    setNextDialog(true);
    localStorage.setItem("currentScene", currentScene+1);
    console.log(localStorage);
    setCurrentDialog(0);
    // setIsAddStyle(true);
  };


  return (

      <div>
          {!loading ? (
            // <div className={classNames(css.scene, isAddStyle ? css.sceneFade : '')}>
              
              
              <div className={classNames(css.scene, css.sceneFade)}>
              {/* <img className={css.sceneImg} src={dialogues[currentScene].scene[0].path_img}  alt={dialogues[currentScene].scene[0].name}/> */}
              <img className={css.sceneImg} src={require('../../'+dialogues[currentScene].scene[0].path_img)} alt={dialogues[currentScene].scene[0].name}/>
              <div className={css.backMain}>
                <Button onClick={async event => {navigate('/start')}}>Главная страница</Button>
              </div>
              {/* { dialogues[currentScene].windows[currentDialog].position === 'left' ? (
                <div className={css.positionLeft}>
                  <img className={css.positionChar} src={require('../../'+dialogues[currentScene].windows[currentDialog].path_img)} alt={dialogues[currentScene].windows[currentDialog].character}/>
                </div> 
              ) : (
                <div className={css.positionRight}>
                  <img className={css.positionChar} src={require('../../'+dialogues[currentScene].windows[currentDialog].path_img)} alt={dialogues[currentScene].windows[currentDialog].character}/>
                </div> 
              )} */}
              {/* <div className={classNames(css.position,  dialogues[currentScene].windows[currentDialog].position === 'left' ? css.positionLeft : css.positionRight, dialogues[currentScene].windows[currentDialog].position === '0' ? css.windowHide : '')} > */}

              <div className={classNames(css.position,  dialogues[currentScene].windows[currentDialog].position === '0' ? css.windowHide : '')} >
                  <img className={classNames(css.positionChar,  dialogues[currentScene].windows[currentDialog].position === 'left' ? css.positionLeft : css.positionRight)} src={require('../../'+dialogues[currentScene].windows[currentDialog].path_img)} alt={dialogues[currentScene].windows[currentDialog].character}/>
                </div> 

              {/* <div className={css.positionRight}>
                <img className={css.positionChar} src={require('../../'+dialogues[currentScene].windows[currentDialog].path_img)} alt={dialogues[currentScene].windows[currentDialog].character}/>
              </div>   */}
              <div className={classNames(css.window, dialogues[currentScene].windows[currentDialog].text === '0' ? css.windowHide : '')}>
                <div className={css.character}>{dialogues[currentScene].windows[currentDialog].character}</div> 
                <div className={css.message}>
                  <TypewriterText
                    text={dialogues[currentScene].windows[currentDialog].text}
                    speed={typingSpeed}
                    nextDialog={nextDialog}
                  />
                  {/* {dialogues[currentScene].windows[currentDialog].text} */}
                </div>
                {/* <div className={css.buttons}>
                    <DarkButton onClick={handlePrevDialog}>Назад</DarkButton>
                    <DarkButton onClick={handleNextDialog}>Далее</DarkButton>
                </div> */}
              </div>
              <div className={css.buttons}>
                    <DarkButton onClick={handlePrevDialog}>Назад</DarkButton>
                    <DarkButton onClick={handleNextDialog}>Далее</DarkButton>
              </div>
          </div>) : (
          // Отображаем загрузочный экран или спиннер
          <p className={css.loading}>Loading...</p>
        )}
      </div>    

  )
};

export default Games;
