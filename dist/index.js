var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var classVarianceAuthority = require('class-variance-authority');
var AutocompleteClient = require('./Autocomplete-client-7JGBU5tm.js');
var reactNumberFormat = require('react-number-format');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return n;
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

const alertVariants = classVarianceAuthority.cva("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7", {
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
const Alert = /*#__PURE__*/ React__namespace.forwardRef(({ className, variant, ...props }, ref)=>/*#__PURE__*/ jsxRuntime.jsx("div", {
        ref: ref,
        role: "alert",
        className: AutocompleteClient.cn(alertVariants({
            variant
        }), className),
        ...props
    }));
Alert.displayName = "Alert";
const AlertTitle = /*#__PURE__*/ React__namespace.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsxRuntime.jsx("h5", {
        ref: ref,
        className: AutocompleteClient.cn("mb-1 font-medium leading-none tracking-tight", className),
        ...props
    }));
AlertTitle.displayName = "AlertTitle";
const AlertDescription = /*#__PURE__*/ React__namespace.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsxRuntime.jsx("div", {
        ref: ref,
        className: AutocompleteClient.cn("text-sm [&_p]:leading-relaxed", className),
        ...props
    }));
AlertDescription.displayName = "AlertDescription";

const Input = /*#__PURE__*/ React__namespace.forwardRef(({ className, type, error, errorHelper, ...props })=>{
    return /*#__PURE__*/ jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("input", {
                type: type,
                className: AutocompleteClient.cn('flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50', className, error ? 'border-red-500' : ''),
                ...props
            }),
            error && errorHelper && /*#__PURE__*/ jsxRuntime.jsx("p", {
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
    return /*#__PURE__*/ jsxRuntime.jsx(reactNumberFormat.NumberFormatBase, {
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
    return /*#__PURE__*/ jsxRuntime.jsxs("span", {
        className: AutocompleteClient.cn("pointer-events-none relative flex h-3 w-3", className),
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("span", {
                className: `${isActive ? "animate-ping" : ""} absolute inline-flex h-full w-full rounded-full ${colorClass} opacity-75`
            }),
            /*#__PURE__*/ jsxRuntime.jsx("span", {
                className: `relative inline-flex h-3 w-3 rounded-full ${colorClass}`
            })
        ]
    });
};

exports.Autocomplete = AutocompleteClient.Autocomplete;
exports.Button = AutocompleteClient.Button;
exports.Alert = Alert;
exports.CurrencyInput = CurrencyInput;
exports.Input = Input;
exports.Ping = Ping;
