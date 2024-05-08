'use client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as React from 'react';
import { forwardRef, Children, isValidElement, createElement, cloneElement, Fragment, useState, useMemo } from 'react';
import { cva } from 'class-variance-authority';
import { Loader2Icon } from 'lucide-react';
import { C as Command, M as MaskedCommandInput, a as CommandInput, b as CommandGroup, c as CommandEmpty, d as CommandItem } from './Command-client-fFkSfAzQ.js';
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from './Popover-client-BOeR2yNg.js';
import { patternFormatter } from 'react-number-format';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}

/**
 * Set a given ref to a given value
 * This utility takes care of different types of refs: callback refs and RefObject(s)
 */ function $6ed0406888f73fc4$var$setRef(ref, value) {
    if (typeof ref === 'function') ref(value);
    else if (ref !== null && ref !== undefined) ref.current = value;
}
/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */ function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
    return (node)=>refs.forEach((ref)=>$6ed0406888f73fc4$var$setRef(ref, node));
}

/* -------------------------------------------------------------------------------------------------
 * Slot
 * -----------------------------------------------------------------------------------------------*/ const $5e63c961fc1ce211$export$8c6ed5c666ac1360 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { children: children, ...slotProps } = props;
    const childrenArray = Children.toArray(children);
    const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
    if (slottable) {
        // the new element to render is the one passed as a child of `Slottable`
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child)=>{
            if (child === slottable) {
                // because the new element will be the one rendered, we are only interested
                // in grabbing its children (`newElement.props.children`)
                if (Children.count(newElement) > 1) return Children.only(null);
                return /*#__PURE__*/ isValidElement(newElement) ? newElement.props.children : null;
            } else return child;
        });
        return /*#__PURE__*/ createElement($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
            ref: forwardedRef
        }), /*#__PURE__*/ isValidElement(newElement) ? /*#__PURE__*/ cloneElement(newElement, undefined, newChildren) : null);
    }
    return /*#__PURE__*/ createElement($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
        ref: forwardedRef
    }), children);
});
$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = 'Slot';
/* -------------------------------------------------------------------------------------------------
 * SlotClone
 * -----------------------------------------------------------------------------------------------*/ const $5e63c961fc1ce211$var$SlotClone = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { children: children, ...slotProps } = props;
    if (/*#__PURE__*/ isValidElement(children)) return /*#__PURE__*/ cloneElement(children, {
        ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
        ref: forwardedRef ? $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref) : children.ref
    });
    return Children.count(children) > 1 ? Children.only(null) : null;
});
$5e63c961fc1ce211$var$SlotClone.displayName = 'SlotClone';
/* -------------------------------------------------------------------------------------------------
 * Slottable
 * -----------------------------------------------------------------------------------------------*/ const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children: children })=>{
    return /*#__PURE__*/ createElement(Fragment, null, children);
};
/* ---------------------------------------------------------------------------------------------- */ function $5e63c961fc1ce211$var$isSlottable(child) {
    return /*#__PURE__*/ isValidElement(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
    // all child props should override
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            // if the handler exists on both, we compose them
            if (slotPropValue && childPropValue) overrideProps[propName] = (...args)=>{
                childPropValue(...args);
                slotPropValue(...args);
            };
            else if (slotPropValue) overrideProps[propName] = slotPropValue;
        } else if (propName === 'style') overrideProps[propName] = {
            ...slotPropValue,
            ...childPropValue
        };
        else if (propName === 'className') overrideProps[propName] = [
            slotPropValue,
            childPropValue
        ].filter(Boolean).join(' ');
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}

const buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ React.forwardRef(({ className, variant, size, asChild = false, isLoading = false, ...props }, ref)=>{
    const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "button";
    return /*#__PURE__*/ jsxs(Comp, {
        className: cn(buttonVariants({
            variant,
            size,
            className
        }), isLoading && "pointer-events-none opacity-50"),
        ref: ref,
        disabled: isLoading,
        ...props,
        children: [
            isLoading && /*#__PURE__*/ jsx("div", {
                className: "flex items-center",
                children: /*#__PURE__*/ jsx(Loader2Icon, {
                    className: "mr-2 h-5 w-5 animate-spin"
                })
            }),
            props.children
        ]
    });
});
Button.displayName = "Button";

function getObjectItem(object, field) {
    const chaves = field.split('.');
    let value = object;
    for (const chave of chaves){
        if (value && typeof value === 'object' && chave in value) {
            value = value[chave];
        } else {
            return "";
        }
    }
    return value;
}

function Autocomplete({ title, options = [], mask = "", onValueChange, labelValue, defaultOption, required, searchText = "Pesquise as opções", actions }) {
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultOption || null);
    const [typedValue, setTypedValue] = useState("");
    const [maskedValue, setMaskedValue] = useState("");
    const selectedValue = useMemo(()=>getObjectItem(selectedOption, labelValue), [
        selectedOption
    ]);
    function maskValue(value) {
        if (!value) return "";
        return mask ? patternFormatter(value, {
            format: mask
        }) : value;
    }
    function resetAutocomplete() {
        setTypedValue("");
        setMaskedValue("");
        setOpen(false);
    }
    return /*#__PURE__*/ jsxs("div", {
        className: "flex flex-1 flex-col",
        children: [
            /*#__PURE__*/ jsxs("label", {
                className: "ml-3 text-sm font-medium text-gray-500",
                children: [
                    title,
                    required ? "*" : ""
                ]
            }),
            /*#__PURE__*/ jsxs(Popover, {
                open: open,
                onOpenChange: setOpen,
                children: [
                    /*#__PURE__*/ jsx(PopoverTrigger, {
                        asChild: true,
                        children: /*#__PURE__*/ jsxs(Button, {
                            variant: "outline",
                            role: "combobox",
                            "aria-expanded": open,
                            className: "justify-between",
                            children: [
                                selectedOption ? maskValue(selectedValue) : "Selecione uma opção...",
                                /*#__PURE__*/ jsx(CaretSortIcon, {
                                    className: "ml-2 h-4 w-4 shrink-0 opacity-50"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx(PopoverContent, {
                        className: "popover-content-width-same-as-its-trigger p-0",
                        children: /*#__PURE__*/ jsxs(Command, {
                            filter: (fieldValue)=>{
                                if (fieldValue.includes(typedValue)) return 1;
                                return 0;
                            },
                            children: [
                                mask ? /*#__PURE__*/ jsx(MaskedCommandInput, {
                                    format: mask,
                                    onValueChange: ({ value, formattedValue })=>{
                                        setTypedValue(value);
                                        setMaskedValue(formattedValue);
                                    }
                                }) : null,
                                /*#__PURE__*/ jsx("div", {
                                    className: cn(mask ? "hidden" : "block"),
                                    children: /*#__PURE__*/ jsx(CommandInput, {
                                        placeholder: searchText,
                                        value: typedValue,
                                        onValueChange: setTypedValue
                                    })
                                }),
                                /*#__PURE__*/ jsx(CommandGroup, {
                                    className: "p-1 gap-1",
                                    children: options?.length === 0 ? /*#__PURE__*/ jsx(CommandEmpty, {
                                        children: "Nenhum registro encontrado"
                                    }) : options?.map((option, key)=>{
                                        const label = getObjectItem(option, labelValue);
                                        return /*#__PURE__*/ jsxs(CommandItem, {
                                            value: JSON.stringify(option),
                                            disabled: false,
                                            onSelect: (currentValue)=>{
                                                setSelectedOption(JSON.parse(currentValue));
                                                setOpen(false);
                                                onValueChange && onValueChange(JSON.parse(currentValue));
                                            },
                                            children: [
                                                maskValue(label),
                                                /*#__PURE__*/ jsx(CheckIcon, {
                                                    className: cn("ml-auto h-4 w-4", JSON.stringify(option) === JSON.stringify(selectedOption) ? "opacity-100" : "opacity-0")
                                                })
                                            ]
                                        }, key);
                                    })
                                }),
                                actions?.CreationComponent && /*#__PURE__*/ jsx("div", {
                                    className: cn("p-1 pt-0"),
                                    children: actions.CreationComponent({
                                        typedValue,
                                        maskedValue,
                                        setOpen,
                                        setSelectedOption,
                                        resetAutocomplete
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

export { Autocomplete as A, Button as B, cn as c };
