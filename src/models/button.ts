export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  variant?: 'contained' | 'outlined';
  description: string;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
