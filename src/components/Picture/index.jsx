/* eslint-disable react/prop-types */
import { styled } from '@mui/material/styles';

const StyledImage = styled('img')(() => ({
    maxWidth: '100%',
    width: 'auto',
    height: '100%',
}));


const Picture = ({ className, imageUrl, imageAlt }) => {
    return(
        <StyledImage className={className} src={imageUrl} alt={imageAlt}/>
    )
}

export default Picture