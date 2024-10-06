import styled from 'styled-components';

const FooterStyled = styled.footer`
    display: flex;
    padding: 32px 0;
    flex-direction: column;
    align-items: center;
    .FooterStyled__line{
        background-color: var(--gray);
        height: 1px;
        margin-bottom: 20px;
        width: 100%;
    }
    .FooterStyled__paragraph{
        font-size: 16px;
        color: var(--gray);
        font-weight: 400;
        font-family: var(--font-family);    
    }

` 
const Footer = () => {
    return(
        <FooterStyled>
            <div className="FooterStyled__line"></div>
            <p className="FooterStyled__paragraph">&copy; Copyright {new Date().getFullYear()}. Made by Maciel </p>
        </FooterStyled>
    )   
}

export default Footer;