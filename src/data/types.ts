import { UserData } from '../types/userTypes';

export type SelectOption = {
  label: string;
  value?: string;
  src?: string;
  leadingIcon?: React.ReactNode;
  children?: React.ReactNode;
  icon?: React.ReactNode;
};

export type RadioOptionTypes = {
  label: string;
  value: boolean | string;
};

export type GenderOptionType = {
  label: string;
  value: string;
};

export type AuthSliderDataTypes = {
  title: string;
  description: string;
  src: string;
};

export type SidebarItems = {
  title: string;
  href: string;
  icon: any;
};

export interface SelectBoxOption {
  label: string;
  value: string;
}

export interface SelectProps {
  title: string;
  options: SelectBoxOption[];
  field: {
    onChange: (value: string[]) => void;
    onBlur: () => void;
    value: string[] | any;
    name: string;
  };
  errors?: any;
  placeholder?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  required?: boolean;
  loading?: boolean;
  onclick?: () => void;
  onSearch?: (search: string) => void;
  showValue?: boolean;
  labelInCol?: boolean;
  labelInValue?: boolean;
  onChange?: (value: string) => void;
}

export interface TextAreaProps {
  label: string;
  title?: string;
  placeholder?: string;
  errors?: any;
  check?: {
    required?: string;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  };
  value?: string;
  register?: (
    label: any,
    check?: { minLength?: number | undefined; pattern?: RegExp }
  ) => void;
  onChange?: any;
  name?: string;
  onClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  extraClasses?: string;
  bgColor?: string;
  required?: boolean;
  labelInCol?: boolean;
}

export interface ResponseData {
  data?: UserData;
  message: string;
  success: boolean;
}

export interface PaginationType {
  page: number;
  pageSize: number;
}
