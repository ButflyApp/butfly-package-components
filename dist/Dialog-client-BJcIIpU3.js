'use client';
function __insertCSS(code) {
  if (!code || typeof document == 'undefined') return
  let head = document.head || document.getElementsByTagName('head')[0]
  let style = document.createElement('style')
  style.type = 'text/css'
  head.appendChild(style)
  ;style.styleSheet ? (style.styleSheet.cssText = code) : style.appendChild(document.createTextNode(code))
}

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var DialogPrimitive = require('@radix-ui/react-dialog');
var reactIcons = require('@radix-ui/react-icons');
var AutocompleteClient = require('./Autocomplete-client-ByPbkBYv.js');

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
var DialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(DialogPrimitive);

const Dialog = DialogPrimitive__namespace.Root;
const DialogPortal = DialogPrimitive__namespace.Portal;
const DialogOverlay = /*#__PURE__*/ React__namespace.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsxRuntime.jsx(DialogPrimitive__namespace.Overlay, {
        ref: ref,
        className: AutocompleteClient.cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }));
DialogOverlay.displayName = DialogPrimitive__namespace.Overlay.displayName;
const DialogContent = /*#__PURE__*/ React__namespace.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ jsxRuntime.jsxs(DialogPortal, {
        children: [
            /*#__PURE__*/ jsxRuntime.jsx(DialogOverlay, {}),
            /*#__PURE__*/ jsxRuntime.jsxs(DialogPrimitive__namespace.Content, {
                ref: ref,
                className: AutocompleteClient.cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    Dialog.propTypes?.onOpenChange && /*#__PURE__*/ jsxRuntime.jsxs(DialogPrimitive__namespace.Close, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ jsxRuntime.jsx(reactIcons.Cross2Icon, {
                                className: "h-4 w-4"
                            }),
                            /*#__PURE__*/ jsxRuntime.jsx("span", {
                                className: "sr-only",
                                children: "Close"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
DialogContent.displayName = DialogPrimitive__namespace.Content.displayName;
const DialogTitle = /*#__PURE__*/ React__namespace.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsxRuntime.jsx(DialogPrimitive__namespace.Title, {
        ref: ref,
        className: AutocompleteClient.cn("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }));
DialogTitle.displayName = DialogPrimitive__namespace.Title.displayName;
const DialogDescription = /*#__PURE__*/ React__namespace.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsxRuntime.jsx(DialogPrimitive__namespace.Description, {
        ref: ref,
        className: AutocompleteClient.cn("text-sm text-muted-foreground", className),
        ...props
    }));
DialogDescription.displayName = DialogPrimitive__namespace.Description.displayName;
