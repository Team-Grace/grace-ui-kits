export interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'modern';
  variant?: 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  shape?: 'rect' | 'round';
  fullWidth?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export type ButtonStyledProps = Omit<ButtonProps, 'children' | 'onClick'>;
