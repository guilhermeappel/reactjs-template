import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import { styled } from '@mui/system';

interface Props {
  href: string;
  description: string;
  disabled?: boolean;
}

const StyledMuiLink = styled(MuiLink)(({ theme }) => ({
  cursor: 'pointer',
  fontSize: '0.9em',
  fontFamily: 'Roboto',

  '&.disabled': {
    color: theme.palette.neutral.main,
    pointerEvents: 'none',
    cursor: 'default',
  },
}));

const Link = ({ href, description, disabled }: Props) => {
  const navigate = useNavigate();

  return (
    <StyledMuiLink
      className={disabled ? 'disabled' : ''}
      onClick={() => navigate(href)}
      underline='hover'
    >
      {description}
    </StyledMuiLink>
  );
};

export default React.memo(Link);
