import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

const StyledImage = styled('img')({
    maxWidth: '100%',
    width: '375px',
    height: '375px',
})


const Picture = ({ imageSrc, imageAlt}) => {
    return(
        <StyledImage src={imageSrc} alt={imageAlt}/>
    )
}

Picture.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
}

export default Picture