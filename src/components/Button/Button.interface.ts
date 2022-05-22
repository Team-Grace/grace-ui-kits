export interface ButtonProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  shape?: 'rect' | 'round';
  fullWidth?: boolean;
}

export type ButtonStyledProps = Omit<ButtonProps, 'children' | 'onClick'>;
