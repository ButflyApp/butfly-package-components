'use client';
function __insertCSS(code) {
  if (!code || typeof document == 'undefined') return
  let head = document.head || document.getElementsByTagName('head')[0]
  let style = document.createElement('style')
  style.type = 'text/css'
  head.appendChild(style)
  ;style.styleSheet ? (style.styleSheet.cssText = code) : style.appendChild(document.createTextNode(code))
}

import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { c as cn } from './Autocomplete-client-BfB2klvb.js';

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = /*#__PURE__*/ React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ jsx(PopoverPrimitive.Portal, {
        children: /*#__PURE__*/ jsx(PopoverPrimitive.Content, {
            ref: ref,
            align: align,
            sideOffset: sideOffset,
            className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        })
    }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover as P, PopoverTrigger as a, PopoverContent as b };
