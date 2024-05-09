'use client';
function __insertCSS(code) {
  if (!code || typeof document == 'undefined') return
  let head = document.head || document.getElementsByTagName('head')[0]
  let style = document.createElement('style')
  style.type = 'text/css'
  head.appendChild(style)
  ;style.styleSheet ? (style.styleSheet.cssText = code) : style.appendChild(document.createTextNode(code))
}

import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { c as cn } from './Autocomplete-client-BfB2klvb.js';

const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx(DialogPrimitive.Overlay, {
        ref: ref,
        className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = /*#__PURE__*/ React.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ jsxs(DialogPortal, {
        children: [
            /*#__PURE__*/ jsx(DialogOverlay, {}),
            /*#__PURE__*/ jsxs(DialogPrimitive.Content, {
                ref: ref,
                className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    Dialog.propTypes?.onOpenChange && /*#__PURE__*/ jsxs(DialogPrimitive.Close, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ jsx(Cross2Icon, {
                                className: "h-4 w-4"
                            }),
                            /*#__PURE__*/ jsx("span", {
                                className: "sr-only",
                                children: "Close"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogTitle = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx(DialogPrimitive.Title, {
        ref: ref,
        className: cn("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx(DialogPrimitive.Description, {
        ref: ref,
        className: cn("text-sm text-muted-foreground", className),
        ...props
    }));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
