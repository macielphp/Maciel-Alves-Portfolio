/* eslint-disable react/prop-types */
import { styled } from '@mui/material/styles';


const StyledNavButton = styled('a')(({ borderColor }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px solid ${borderColor || 'gray'}`,
    borderRadius: '1px',
    padding: '8px 16px',
    color: 'var(--white)',
    textDecoration: 'none',
    transition: 'background-color 0.3s',
    fontFamily: 'var(--font-family)',
    fontSize: '',
    width: 'auto',

    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
}));

const AncorButton = ({ href, icon: Icon, children, borderColor }) => {
    return (
        <StyledNavButton href={href} target='_blank' borderColor={borderColor}>
            {Icon && <Icon style={{ marginRight: 8 }} />}
            {children}
        </StyledNavButton>
    );
};


export default AncorButton;
