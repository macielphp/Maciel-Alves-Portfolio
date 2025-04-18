/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Flag from 'react-world-flags';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const LangSwitcherStyled = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 110,
    color: 'rgb(55, 65, 81)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 16,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
    ...theme.applyStyles('dark', {
      color: theme.palette.grey[300],
    }),
  },
}));

const LangSwitcher = ({ language, setLanguage }) => { 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { t } = useTranslation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
    handleClose();
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        disableRipple 
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          backgroundColor: 'var(--background)',
          color: 'var(--gray)',
          fontFamily: 'var(--font-family)',
          '&:hover': {
            backgroundColor: 'var(--background)',
          },
        }}
      >
      {t('header.language')}
      </Button>
      <LangSwitcherStyled
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleLanguageChange('en')}>
          <Flag code="GB" style={{ width: 25, marginRight: 10 }} />  ENG
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange('pt')}>
          <Flag code="BR" style={{ width: 25, marginRight: 10 }} /> PT-BR
        </MenuItem>

        <MenuItem onClick={() => handleLanguageChange('es')}>
          <Flag code="ES" style={{ width: 25, marginRight: 10 }} /> ESP
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange('fr')}>
          <Flag code="FR" style={{ width: 25, marginRight: 10 }} /> FRA
        </MenuItem>
      </LangSwitcherStyled>
    </div>
  );
};

export default LangSwitcher;
