/* eslint-disable react/prop-types */
import styled from 'styled-components';
import searchIcon from './assets/search-01.svg'

const StyledFilterDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    padding: 20px 0 20px 20px;
    margin: 0 auto;
    .styledfilterdiv__input{
        position: relative;
        border: 2px solid var(--gray);
        color: var(--white);
        font-family: var(--font-family);
        font-size: 16px;
        padding: 8px 8px 8px 48px;
        width: 315px;
        outline: none;
        transition: cubic-bezier(0, 0, 1,-0.2);
        background: url(${searchIcon}) no-repeat 15px center;
        &:focus {
            border-color: var(--primary);
        }
    }
`;

const FilterBar = ({ handleSearch }) => {
    return(
        <StyledFilterDiv>
            <input 
                type="search" 
                className='styledfilterdiv__input'
                placeholder='Search for...'
                aria-label='Search'
                onChange={(e) => handleSearch(e.target.value)} //Call handleSearch on input change event
            />
        </StyledFilterDiv>
    )
}

export default FilterBar;