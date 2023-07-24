import React, { useEffect, useState } from "react";

const TypewriterText = ({ text, speed, nextDialog }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dialog, setDialog] = useState(nextDialog);

  useEffect(() => {
    let interval;
    if (!dialog && nextDialog) {
      setDisplayText(""); // Сбросим текст при начале следующего диалога
      setCurrentIndex(0);
      setDialog(true);
    }

    if (currentIndex < text.length) {
      interval = setInterval(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);
    } else {
      setDialog(false);
    }

    return () => clearInterval(interval);
  }, [text, speed, currentIndex, nextDialog]);

  return <div>{displayText}</div>;
};

export default TypewriterText;