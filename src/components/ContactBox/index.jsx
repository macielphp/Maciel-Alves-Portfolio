/* eslint-disable react/prop-types */
import SubTitle from "../SubTitle";
import styled from "styled-components";
import DOMPurify from 'dompurify';
import { HiOutlineMailOpen } from "react-icons/hi";

const ContactBoxStyled = styled.div`
  border: 1px solid var(--gray);
  padding: 16px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  max-width: 329px;
  flex-wrap: wrap;

  .ContactBoxStyled__container{
    display: flex;
    align-items: center;
    gap: 4px;
    .container__email-link{
        font-family: var(--font-family);
        color: var(--gray);
        font-size: 16px;
        font-weight: regular
    }
  }
`;

const ContactBox = ({
  titleType,
  titleSize,
  titleText,
  emailTo,
  emailAddress,
}) => {
  return (
    <ContactBoxStyled>
      <SubTitle
        titleType={titleType}
        titleSize={titleSize}
        titleText={titleText}
      />
      <div className="ContactBoxStyled__container">
        <HiOutlineMailOpen size={22} color='var(--gray)'/>
        <a className="container__email-link" href={emailTo} rel="noopener noreferrer">
          {DOMPurify.sanitize(emailAddress)}
        </a>
      </div>
      <div>

      </div>
    </ContactBoxStyled>
  );
};

export default ContactBox;
