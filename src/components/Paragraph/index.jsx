/* eslint-disable react/prop-types */
import styled from 'styled-components';

const ParagraphStyled = styled.p`
    font-size: ${(props) => props.$pSize};
    color: ${(props) => props.$pColor};
    font-family: ${(props) => props.$pFontFamily};
`;

const Paragraph = ({children, pSize, pColor, pFontFamily}) => {
    return(
        <ParagraphStyled $pSize={pSize} $pColor={pColor} $pFontFamily={pFontFamily}>
            {children}
        </ParagraphStyled>
    )
}

export default Paragraph;