import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { cva } from 'class-variance-authority';
import { c as cn } from './Autocomplete-client-YWxfZj5j.js';
export { A as Autocomplete, B as Button } from './Autocomplete-client-YWxfZj5j.js';
import { NumberFormatBase } from 'react-number-format';

const alertVariants = cva("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7", {
    variants: {
        variant: {
            default: "bg-background text-foreground",
            destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Alert = /*#__PURE__*/ React.forwardRef(({ className, variant, ...props }, ref)=>/*#__PURE__*/ jsx("div", {
        ref: ref,
        role: "alert",
        className: cn(alertVariants({
            variant
        }), className),
        ...props
    }));
Alert.displayName = "Alert";
const AlertTitle = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx("h5", {
        ref: ref,
        className: cn("mb-1 font-medium leading-none tracking-tight", className),
        ...props
    }));
AlertTitle.displayName = "AlertTitle";
const AlertDescription = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx("div", {
        ref: ref,
        className: cn("text-sm [&_p]:leading-relaxed", className),
        ...props
    }));
AlertDescription.displayName = "AlertDescription";

const Input = /*#__PURE__*/ React.forwardRef(({ className, type, error, errorHelper, ...props })=>{
    return /*#__PURE__*/ jsxs(Fragment, {
        children: [
            /*#__PURE__*/ jsx("input", {
                type: type,
                className: cn('flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50', className, error ? 'border-red-500' : ''),
                ...props
            }),
            error && errorHelper && /*#__PURE__*/ jsx("p", {
                className: "ml-3 mt-1 text-xs text-red-700",
                children: errorHelper
            })
        ]
    });
});
Input.displayName = 'Input';

function CurrencyInput({ onChange, onInputChange, ...props }) {
    const formatCurrencyByEnd = (value)=>{
        if (!Number(value)) return "";
        const amount = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2
        }).format(parseFloat(value) / 100);
        return `${amount}`;
    };
    const revertFormat = (value)=>{
        if (!value) return "";
        return parseFloat(value.replaceAll('.', '').replace(',', '.').replace(/[^0-9.]/g, '')).toString();
    };
    const onValueChange = (event)=>{
        if (onChange) onChange(event);
        if (onInputChange) onInputChange(revertFormat(event.target.value));
    };
    return /*#__PURE__*/ jsx(NumberFormatBase, {
        customInput: Input,
        ...props,
        onChange: onValueChange,
        format: formatCurrencyByEnd,
        maxLength: 21
    });
}

const colorClasses = {
    success: "bg-green-500",
    error: "bg-red-500",
    warn: "bg-yellow-500",
    info: "bg-blue-500",
    default: "bg-purple-500",
    deactivated: "bg-gray-500"
};
const Ping = ({ color = "default", isActive = true, className })=>{
    const colorClass = colorClasses[color] || colorClasses.default;
    return /*#__PURE__*/ jsxs("span", {
        className: cn("pointer-events-none relative flex h-3 w-3", className),
        children: [
            /*#__PURE__*/ jsx("span", {
                className: `${isActive ? "animate-ping" : ""} absolute inline-flex h-full w-full rounded-full ${colorClass} opacity-75`
            }),
            /*#__PURE__*/ jsx("span", {
                className: `relative inline-flex h-3 w-3 rounded-full ${colorClass}`
            })
        ]
    });
};

export { Alert, CurrencyInput, Input, Ping };
