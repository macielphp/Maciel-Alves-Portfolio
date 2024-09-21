import './style.css';
import ButtonMaterial from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types'; // Import PropTypes//

const StyledButton = styled(ButtonMaterial)(({ borderColor }) => ({
    border: `1px solid ${borderColor || 'gray'}`,
    borderRadius: '0px',
    color: 'var(--white)',
  }));


  const Button = ({ onClick, borderColor, icon: Icon, children }) => {
    return (
        <StyledButton onClick={onClick} borderColor={borderColor} variant="outlined">
            {Icon && <Icon style={{ marginRight: 8 }} />} {/* Adiciona o ícone se existir */}
            {children} {/* Renderiza os filhos aqui */}
        </StyledButton>
    );
    };

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    borderColor: PropTypes.string,
    icon: PropTypes.elementType,
};


export default Button