import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React$1 from 'react';
import { VariantProps } from 'class-variance-authority';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { NumericFormatProps } from 'react-number-format';

declare const Alert: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLDivElement>>;

interface AutocompleteProps {
    title?: string;
    required?: boolean;
    labelValue: string;
    mask?: string;
    value?: {
        [field: string]: any;
    };
    options: {
        [field: string]: any;
    }[];
    defaultOption?: {
        [field: string]: any;
    };
    onValueChange?: (value: {
        [field: string]: any;
    }) => void;
    searchText?: string;
    actions?: {
        CreationComponent: ({ typedValue, maskedValue, setOpen, setSelectedOption, resetAutocomplete, }: {
            typedValue: string;
            maskedValue: string;
            setOpen: (value: boolean) => void;
            setSelectedOption: (value: any) => void;
            resetAutocomplete: VoidFunction;
        }) => React.ReactElement;
    };
}
declare function Autocomplete({ title, options, mask, onValueChange, labelValue, defaultOption, required, searchText, actions, }: AutocompleteProps): react_jsx_runtime.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    isLoading?: boolean;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

interface InputProps extends React$1.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    errorHelper?: string;
}
declare const Input: React$1.ForwardRefExoticComponent<InputProps & React$1.RefAttributes<HTMLInputElement>>;

interface CurrencyInputProps extends NumericFormatProps {
    onInputChange?: (value: string) => void;
}
declare function CurrencyInput({ onChange, onInputChange, ...props }: InputProps & CurrencyInputProps): react_jsx_runtime.JSX.Element;

declare const Ping: ({ color, isActive, className, }: {
    color?: "success" | "error" | "warn" | "info" | "default" | "deactivated";
    isActive?: boolean;
    className?: string;
}) => react_jsx_runtime.JSX.Element;

export { Alert, Autocomplete, Button, CurrencyInput, Input, Ping };
