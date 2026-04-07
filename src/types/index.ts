export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export type ThemeVariant = 'light' | 'dark' | 'brand';

export interface SectionProps extends BaseProps {
  id?: string;
  variant?: ThemeVariant;
  padding?: 'none' | 'small' | 'medium' | 'large';
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
}

export interface CardProps extends BaseProps {
  image?: string;
  title?: string;
  description?: string;
  href?: string;
  tag?: string;
}
