import { Button as AntdButton } from 'antd';

// Types
import { ButtonPropsType } from '@/src/types/buttonTypes';

const Button = (props: ButtonPropsType) => {
  const {
    type,
    size,
    color,
    disabled,
    isLoading,
    className,
    children,
    onClick,
    leadingIcon,
    shape,
  } = props;

  return (
    <AntdButton
      className={className || 'w-full'}
      onClick={onClick}
      color={color || 'primary'}
      size={size || 'middle'}
      type={type || 'primary'}
      disabled={disabled}
      loading={isLoading}
      icon={leadingIcon}
      shape={shape}
    >
      {children}
    </AntdButton>
  );
};

export default Button;
