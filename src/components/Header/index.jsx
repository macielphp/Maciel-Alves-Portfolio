/* eslint-disable react/prop-types */
import Logo from './assets/logo.svg';
import LangSwitcher from '../LangSwitcher';
import styled from 'styled-components';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeaderStyled = styled.header`
  position: fixed;
  z-index: 3;
  background-color: var(--background);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  align-items: center;

  .header__logo {
    grid-column: 1/2;
    padding-left: 6.25em;
    display: flex;
    align-items: center;
  }
  .header__logo span {
    color: var(--white);
    align-self: center;
    font-weight: bold;
    font-size: 16px;
    font-family: var(--font-family);
  }
  .header__name {
    display: none;
  }
  .header__list {
    display: flex;
    justify-content: space-evenly;
    grid-column: 2/3;
    list-style: none;
    align-items: center;

    .header__list__item a {
      font-size: 16px;
      text-decoration: none;
      font-family: var(--font-family);
      color: var(--gray);
      position: relative;
    }
    .header__list__item a::before {
      content: "#";
      color: var(--primary);
      margin-right: 2px;
    }
  }
  .menu-toggle {
    display: none;
    font-size: 25px;
    cursor: pointer;
  }
  .menu-toggle svg {
    color: var(--white);
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .header__logo {
      padding-left: 1em;
      span {
        display: none;
      }
    }
    .header__name {
      display: block;
      color: var(--white);
      font-weight: bold;
      font-size: 16px;
      font-family: var(--font-family);
    }
    .menu-toggle {
      display: block;
      padding-right: 1em;
    }

    .header__list {
      align-self: center;
      position: fixed;
      top: 127px;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: var(--background);
      opacity: 0.9;
      flex-direction: column;
      align-items: center;
      padding: 10px 20px;
      gap: 10px;
      width: 100vw;
      max-width: none;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    }
  }
  @media (max-width: 400px) {
    padding: 10px 1em;
    .header__logo span {
      font-size: 14px;
    }
  }
`;

const Header = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <HeaderStyled $isOpen={isOpen}>
      <div className="header__logo">
        <img src={Logo} alt="" />
        <span>Maciel A. Santos</span>
      </div>
      <span className="header__name">Maciel A. Santos</span>
      <ul className="header__list">
        <li className="header__list__item">
          <Link to="/">{t('header.home')}</Link>
        </li>
        <li className="header__list__item">
          <Link to="/works">{t('header.works')}</Link>
        </li>
        <LangSwitcher language={language} setLanguage={setLanguage} />
      </ul>
      <div className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <FiX /> : <FiMenu />}
      </div>
    </HeaderStyled>
  );
};

export default Header;