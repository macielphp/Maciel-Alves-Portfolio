import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';


const StyledNavButton = styled('a')(({ bordercolor }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px solid ${bordercolor || 'gray'}`,
    borderRadius: '1px',
    padding: '8px 16px',
    color: 'var(--white)',
    textDecoration: 'none',
    transition: 'background-color 0.3s',
    fontFamily: 'var(--font-family)',
    fontSize: '',

    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
}));

const AncorButton = ({ href, icon: Icon, children }) => {
    return (
        <StyledNavButton href={href} target='_blank'>
            {Icon && <Icon style={{ marginRight: 8 }} />}
            {children}
        </StyledNavButton>
    );
};

AncorButton.propTypes = {
    href: PropTypes.string.isRequired, 
    children: PropTypes.node.isRequired,
    icon: PropTypes.elementType,
};

export default AncorButton;
