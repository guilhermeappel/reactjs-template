import { styled } from '@mui/material/styles';

interface Props {
  text: string;
}

const StyledP = styled('p')(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.error.main,
  margin: 0,
}));

const ErrorLabel = ({ text }: Props) => {
  return <StyledP>{text}</StyledP>;
};

export default ErrorLabel;
