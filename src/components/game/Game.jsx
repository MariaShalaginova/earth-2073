//import React, { useState } from "react";
import React from 'react';
// import StartScreen from "./StartScreen";
// import GameScreen from "./GameScreen";
// import EndScreen from "./EndScreen";

const Game = () => {
    // const [currentScreen, setCurrentScreen] = useState("start");

  // const changeScreen = (screenName) => {
  //   setCurrentScreen(screenName);
  // };

  // const renderScreen = () => {
  //   // switch (currentScreen) {
  //   //   case "start":
  //   //     return <StartScreen changeScreen={changeScreen} />;
  //   //   case "game":
  //   //     return <GameScreen changeScreen={changeScreen} />;
  //   //   case "end":
  //   //     return <EndScreen changeScreen={changeScreen} />;
  //   //   default:
  //   //     return null;
  //   // }
  //   return null
  // }
  return (
    <h1>bbb</h1>
  )
};

export default Game;
// import React from 'react';

// // Компонент сцены
// const Scene = ({ scenes, currentScene, onSceneChange }) => {
//   // Обработчик смены сцены
//   const handleSceneChange = (scene) => {
//     if (onSceneChange) {
//       onSceneChange(scene);
//     }
//   };

//   // Рендеринг компонента сцены
//   return (
//     <div className="scene">
//       {scenes.map((scene) => (
//         <button
//           key={scene.id}
//           className={currentScene === scene.id ? 'active' : ''}
//           onClick={() => handleSceneChange(scene.id)}
//         >
//           {scene.name}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Scene;