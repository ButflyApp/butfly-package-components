'use client';
import { jsx, jsxs } from 'react/jsx-runtime';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Command as Command$1 } from 'cmdk';
import * as React from 'react';
import './Dialog-client-TIf3CQW7.js';
import { c as cn } from './Autocomplete-client-YWxfZj5j.js';
import { PatternFormat } from 'react-number-format';

const Command = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx(Command$1, {
        ref: ref,
        className: cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className),
        ...props
    }));
Command.displayName = Command$1.displayName;
const MaskedCommandInput = ({ className, ...props })=>{
    return /*#__PURE__*/ jsxs("div", {
        className: "flex items-center border-b px-3",
        "cmdk-input-wrapper": "",
        children: [
            /*#__PURE__*/ jsx(MagnifyingGlassIcon, {
                className: "mr-2 h-4 w-4 shrink-0 opacity-50"
            }),
            /*#__PURE__*/ jsx(PatternFormat, {
                className: cn("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
                ...props
            })
        ]
    });
};
const CommandInput = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>{
    return /*#__PURE__*/ jsxs("div", {
        className: "flex items-center border-b px-3",
        "cmdk-input-wrapper": "",
        children: [
            /*#__PURE__*/ jsx(MagnifyingGlassIcon, {
                className: "mr-2 h-4 w-4 shrink-0 opacity-50"
            }),
            /*#__PURE__*/ jsx(Command$1.Input, {
                ref: ref,
                className: cn("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
                ...props
            })
        ]
    });
});
CommandInput.displayName = Command$1.Input.displayName;
const CommandList = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx(Command$1.List, {
        ref: ref,
        className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
        ...props
    }));
CommandList.displayName = Command$1.List.displayName;
const CommandEmpty = /*#__PURE__*/ React.forwardRef((props, ref)=>/*#__PURE__*/ jsx(Command$1.Empty, {
        ref: ref,
        className: "py-6 text-center text-sm",
        ...props
    }));
CommandEmpty.displayName = Command$1.Empty.displayName;
const CommandGroup = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx(Command$1.Group, {
        ref: ref,
        className: cn("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className),
        ...props
    }));
CommandGroup.displayName = Command$1.Group.displayName;
const CommandSeparator = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx(Command$1.Separator, {
        ref: ref,
        className: cn("-mx-1 h-px bg-border", className),
        ...props
    }));
CommandSeparator.displayName = Command$1.Separator.displayName;
const CommandItem = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx(Command$1.Item, {
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props
    }));
CommandItem.displayName = Command$1.Item.displayName;

export { Command as C, MaskedCommandInput as M, CommandInput as a, CommandGroup as b, CommandEmpty as c, CommandItem as d };
