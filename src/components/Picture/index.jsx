import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

const StyledImage = styled('img')({
    maxWidth: '100%',
    width: 'auto',
    height: '100%',

})


const Picture = ({ className, imageSrc, imageAlt }) => {
    return(
        <StyledImage className={className} src={imageSrc} alt={imageAlt}/>
    )
}

Picture.propTypes = {
    className: PropTypes.string,
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
}

export default Picture