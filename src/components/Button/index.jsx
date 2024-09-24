
import ButtonMaterial from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const StyledButton = styled(ButtonMaterial)(({ bordercolor }) => ({
    border: `1px solid ${bordercolor || 'gray'}`,
    borderRadius: '0px',
    color: 'var(--white)',
  }));


  const Button = ({ onClick, bordercolor, icon: Icon, children }) => {
    return (
        <StyledButton onClick={onClick} bordercolor={bordercolor} variant="outlined">
            {Icon && <Icon style={{ marginRight: 2 }} />} {/* Adiciona o ícone se existir */}
            {children} {/* Renderiza os filhos aqui */}
        </StyledButton>
    );
    };

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    bordercolor: PropTypes.string,
    icon: PropTypes.elementType,
};


export default Button