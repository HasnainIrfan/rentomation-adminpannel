export type ButtonPropsType = {
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text';
  size?: 'large' | 'middle' | 'small';
  color?:
    | 'primary'
    | 'default'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | undefined;
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  onClick?: (_e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  leadingIcon?: React.ReactNode;
  shape?: 'circle' | 'round' | 'default';
  htmlType?: 'button' | 'submit' | 'reset';
};
