import { Input, InputProps } from "@/components/Input";
import { NumberFormatBase, NumericFormatProps } from "react-number-format";

interface CurrencyInputProps extends NumericFormatProps {
  onInputChange?: (value: string) => void;
  label?: string;
  value?: number;
}
export function CurrencyInput({
  onChange,
  onInputChange,
  label,
  required,
  value,
  ...props
}: InputProps & CurrencyInputProps) {
  const formatCurrencyByEnd = (value: string): string => {
    if (!Number(value)) return "";

    const amount = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(parseFloat(value) / 100);

    return `${amount}`;
  };

  const revertFormat = (value: string): string => {
    if (!value) return "";
    return parseFloat(
      value
        .replaceAll(".", "")
        .replace(",", ".")
        .replace(/[^0-9.]/g, "")
    ).toString();
  };

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (value) return;
    if (onChange) onChange(event);
    if (onInputChange) onInputChange(revertFormat(event.target.value));
  };

  return (
    <>
      <NumberFormatBase
        customInput={({ ...props }) => (
          <Input
            label={label}
            {...props}
            onChange={(event) => {
              if (value) return;
              props?.onChange && props?.onChange(event)
            }}
          />
        )}
        {...props}
        value={value ? Number(value).toFixed(2).replace(".", "") : null}
        onChange={onValueChange}
        format={formatCurrencyByEnd}
        maxLength={21}
      />
    </>
  );
}
