/* eslint-disable react/prop-types */
import styled from "styled-components";

const PagesTitleStyled = styled.h2`
    font-size: 32px;
    font-weight: 600;
    color: var(--white);
    font-family: var(--font-family);
    width: 90%;
    
    margin-top: 100px;
    align-self: start;
    &::before{
        content: "/";
        color: var(--primary);
        margin-right: 2px;
    }

`

const PagesTitle = ({ title }) => {
    return(
        <PagesTitleStyled>
            {title}
        </PagesTitleStyled>
    )
}

export default PagesTitle;