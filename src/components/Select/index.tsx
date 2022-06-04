import React, {
  ForwardedRef,
  useCallback,
  useContext,
  useState,
  useRef,
  useEffect,
} from 'react';
import {
  SelectContextProps,
  SelectItemProps,
  SelectProps,
} from '../../types/select';
import Text from '../Text';
import {
  SelectWrapper,
  StyledSelectInput,
  StyledSelectItem,
  StyledSelectItemContainer,
} from './styled';

const SelectContext = React.createContext<SelectContextProps | undefined>(
  undefined
);

const SelectItem = ({ children, value }: SelectItemProps) => {
  const { selectValue, color, onChange, size } = useContext(
    SelectContext
  ) as SelectContextProps;

  return (
    <StyledSelectItem
      className={selectValue === value ? 'active' : ''}
      color={color}
      size={size}
      onClick={() => onChange(value)}>
      {children}
    </StyledSelectItem>
  );
};

const Select = Object.assign(
  React.forwardRef(
    (
      {
        children,
        value,
        width,
        height,
        size = 'medium',
        shape = 'rect',
        placeholder = '',
        disabled = false,
        color = 'primary',
        mt = 0,
        mr = 0,
        mb = 0,
        ml = 0,
        onChange,
      }: SelectProps,
      ref: ForwardedRef<HTMLDivElement>
    ) => {
      const [isOpenSelect, setIsOpenSelect] = useState(false);
      const inputRef = useRef<HTMLDivElement>(null);
      const props = {
        mt,
        mr,
        mb,
        ml,
        size,
        color,
        width,
      };
      const inputProps = {
        color,
        shape,
        disabled,
        size,
      };

      const handleToggleSelect = useCallback(() => {
        if (!disabled) {
          setIsOpenSelect(!isOpenSelect);
        }
      }, [isOpenSelect]);

      const handleChange = useCallback(
        (value: string | number) => {
          if (onChange) {
            onChange(value);
            setIsOpenSelect(false);
          }
        },
        [onChange]
      );

      useEffect(() => {
        const menuClickEvent = (e: any) => {
          if (inputRef.current !== null && !inputRef.current.contains(e.target))
            setIsOpenSelect(false);
        };

        if (isOpenSelect) window.addEventListener('click', menuClickEvent);
        return () => window.removeEventListener('click', menuClickEvent);
      }, [isOpenSelect]);

      return (
        <SelectContext.Provider
          value={{ size, color, selectValue: value, onChange: handleChange }}>
          <SelectWrapper ref={ref} {...props}>
            <StyledSelectInput
              ref={inputRef}
              className={isOpenSelect ? 'active' : ''}
              onClick={handleToggleSelect}
              {...inputProps}>
              <Text className={value ? '' : 'placeholder'}>
                {value ? value : placeholder}
              </Text>
              <Text>▾</Text>
            </StyledSelectInput>

            {isOpenSelect && (
              <StyledSelectItemContainer size={size} height={height}>
                {children}
              </StyledSelectItemContainer>
            )}
          </SelectWrapper>
        </SelectContext.Provider>
      );
    }
  ),
  {
    Item: SelectItem,
  }
);

export default Select;
