import './style.css'
import Logo from './assets/logo.svg'
import StyledMenu from '../Lang-switcher'
const Header = () => {
    return (
        <>
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
                        <StyledMenu /> 
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header