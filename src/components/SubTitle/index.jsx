/* eslint-disable react/prop-types */
import styled from 'styled-components';

// Styled component for subtitle container
const SubTitleStyled = styled.div`
  .SubTitleStyled__DynamicTag {
    font-size: ${(props) => props.$titleSize};
    font-family: var(--font-family);
    color: var(--white);
    font-weight: 600;
  }
`;

const SubTitle = ({ titleType: DynamicTag, titleText, titleSize }) => {
  return (
    <SubTitleStyled $titleSize={titleSize}>
      <DynamicTag className="SubTitleStyled__DynamicTag">{titleText}</DynamicTag> {/* Dynamic tag used here */}
    </SubTitleStyled>
  );
};

export default SubTitle;
