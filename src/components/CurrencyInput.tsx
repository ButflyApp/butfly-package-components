import { Input, InputProps } from "@/components/Input";
import { NumberFormatBase, NumericFormatProps } from "react-number-format";

interface CurrencyInputProps extends NumericFormatProps {
  onValueChange?: ({
    floatValue,
    value,
    formattedValue,
  }: {
    floatValue: number;
    value: string;
    formattedValue: string;
  }) => void;
  value?: string | number;
}
export function CurrencyInput({
  onChange,
  onValueChange,
  required,
  value: valueProp,
  ...props
}: InputProps & CurrencyInputProps) {
  const formatCurrencyByEnd = (value?: string): string => {
    if (!value || !Number(value)) return "";

    let finalValue
    finalValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(parseFloat(value.replace(".", "")) / 100);

    if(valueProp){
      finalValue = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
      }).format(parseFloat(valueProp as string));
    }
    return `${finalValue}`;
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

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event);

    if (valueProp) {
      onValueChange &&
        onValueChange({
          floatValue: Number(revertFormat(event.target.value)),
          value: revertFormat(event.target.value),
          formattedValue: event.target.value,
        });
    }
  };

  return (
    <>
      <NumberFormatBase
        {...props}
        customInput={Input}
        onChange={onInputChange}
        value={valueProp}
        onValueChange={({ formattedValue }) => {
          console.log('ValueCHange')
          onValueChange &&
            onValueChange({
              floatValue: Number(revertFormat(formattedValue)),
              value: revertFormat(formattedValue),
              formattedValue,
            });
        }}
        format={formatCurrencyByEnd}
        maxLength={21}
      />
    </>
  );
}
