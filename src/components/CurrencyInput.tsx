import { Input, InputProps } from './Input'
import { NumberFormatBase,  NumericFormatProps } from 'react-number-format'

interface CurrencyInputProps extends NumericFormatProps {
  onInputChange?: (value: string) => void
}
export function CurrencyInput({ onChange, onInputChange, ...props }: InputProps & CurrencyInputProps) {
  const formatCurrencyByEnd = (value: string): string => {
    if (!Number(value)) return "";

    const amount = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2
    }).format(parseFloat(value) / 100);

    return `${amount}`;
  };

  const revertFormat = (value: string): string => {
    if(!value) return "";
    return (parseFloat(value.replaceAll('.', '').replace(',', '.').replace(/[^0-9.]/g, ''))).toString();
  }

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event)
    if (onInputChange) onInputChange(revertFormat(event.target.value))
  }

  return <NumberFormatBase customInput={Input} {...props} onChange={onValueChange} format={formatCurrencyByEnd} maxLength={21} />
}