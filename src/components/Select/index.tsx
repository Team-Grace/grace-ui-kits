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
  StyledSelect,
  StyledSelectInput,
  StyledSelectItem,
  StyledSelectItemContainer,
} from './styled';

const SelectContext = React.createContext<SelectContextProps | undefined>(
  undefined
);

const SelectItem = ({ children, value }: SelectItemProps) => {
  const { selectValue, color, onChange } = useContext(
    SelectContext
  ) as SelectContextProps;

  return (
    <StyledSelectItem
      className={selectValue === value ? 'active' : ''}
      color={color}
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
      const refEl = useRef<HTMLDivElement>(null);
      const props = {
        mt,
        mr,
        mb,
        ml,
        color,
        width,
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
          if (refEl.current !== null && !refEl.current.contains(e.target))
            setIsOpenSelect(false);
        };

        if (isOpenSelect) window.addEventListener('click', menuClickEvent);
        return () => window.removeEventListener('click', menuClickEvent);
      }, [isOpenSelect]);

      return (
        <SelectContext.Provider
          value={{ color, selectValue: value, onChange: handleChange }}>
          <StyledSelect ref={ref} {...props}>
            <StyledSelectInput
              ref={refEl}
              className={isOpenSelect ? 'active' : ''}
              color={color}
              shape={shape}
              disabled={disabled}
              onClick={handleToggleSelect}>
              <Text className={value ? '' : 'placeholder'}>
                {value ? value : placeholder}
              </Text>
              <Text>▾</Text>
            </StyledSelectInput>

            {isOpenSelect && (
              <StyledSelectItemContainer height={height}>
                {children}
              </StyledSelectItemContainer>
            )}
          </StyledSelect>
        </SelectContext.Provider>
      );
    }
  ),
  {
    Item: SelectItem,
  }
);

export default Select;
