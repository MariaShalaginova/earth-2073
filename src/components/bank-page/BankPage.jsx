// import React, { useState } from "react";
import css from './BankPage.module.css';
import logo from '../../assets/logo.svg';
import Button from '../buttons/Button';
import { useNavigate } from 'react-router-dom';

const BankPage = () => {
  const navigate = useNavigate();

  // const [isAddStyle, setIsAddStyle] = useState(false);

  return (
  
    <header className={css.header}>
        <img className={css.logo} src={logo} alt="logo" />
        <h1>
        Земля-<span className={css.mainTitle}>2073</span>
        </h1>
        <Button onClick={async event => {navigate('/game')}}>Играть</Button>
  </header>
  )
};

export default BankPage;