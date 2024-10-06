import Logo from './assets/logo.svg'
import LangSwitcher from '../LangSwitcher'
import styled from 'styled-components'

const HeaderStyled = styled.header`
.header{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
   align-items: center;

    .header__logo{
        grid-column: 1/2;
        padding-left: 6.25em;
        display: flex;
        align-items: center;
    }
    .header__logo span{      
        color: var(--white);
        align-self: center;
        font-weight: bold;
        font-size: 16px;
        font-family: var(--font-family);
    }
    .header__list{
        display: flex;
        justify-content: space-evenly;
        grid-column: 2/3;
        list-style: none;
        align-items: center;
        
        .header__list__item a{
            font-size: 16px;
            text-decoration: none;
            font-family: var(--font-family);
            color: var(--gray);
            position: relative;
        }
        .header__list__item a::before{
            content: "#";
            color: var(--primary);
            margin-right: 2px;
        }
    }
}
`


const Header = () => {
    return (

        <HeaderStyled>
            <header>
                <nav className="header">
                    <div className="header__logo">
                        <img src={Logo} alt="" />
                        <span>Maciel A. Santos</span>
                    </div>
                    <ul className="header__list">
                        <li className="header__list__item">
                            <a href="#">Home</a>
                        </li>
                        <li className="header__list__item">
                            <a href="#">works</a>
                        </li>
                        <li className="header__list__item">
                            <a href="#">about-me</a>
                        </li >
                        <li className="header__list__item">
                            <a href="#">contacts</a>
                        </li>
                        <LangSwitcher /> 
                    </ul>
                </nav>
            </header>
        </HeaderStyled>
    )
}

export default Header