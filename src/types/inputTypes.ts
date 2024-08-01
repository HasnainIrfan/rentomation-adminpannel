import { FieldErrors } from 'react-hook-form';

export interface InputProps {
  type: string;
  label: string;
  title?: string;
  placeholder?: string;
  errors?: FieldErrors | undefined | any;
  check?: any;
  value?: string;
  register?: (
    label: any,
    check?: { minLength?: number | undefined; pattern?: RegExp }
  ) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  onClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  extraClasses?: string;
  bgColor?: string;
  eyesColor?: string;
  inputIcon?: React.ReactNode;
}
