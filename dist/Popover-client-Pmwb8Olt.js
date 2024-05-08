'use client';
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var PopoverPrimitive = require('@radix-ui/react-popover');
var AutocompleteClient = require('./Autocomplete-client-7JGBU5tm.js');

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
var PopoverPrimitive__namespace = /*#__PURE__*/_interopNamespace(PopoverPrimitive);

const Popover = PopoverPrimitive__namespace.Root;
const PopoverTrigger = PopoverPrimitive__namespace.Trigger;
const PopoverContent = /*#__PURE__*/ React__namespace.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ jsxRuntime.jsx(PopoverPrimitive__namespace.Portal, {
        children: /*#__PURE__*/ jsxRuntime.jsx(PopoverPrimitive__namespace.Content, {
            ref: ref,
            align: align,
            sideOffset: sideOffset,
            className: AutocompleteClient.cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        })
    }));
PopoverContent.displayName = PopoverPrimitive__namespace.Content.displayName;

exports.Popover = Popover;
exports.PopoverContent = PopoverContent;
exports.PopoverTrigger = PopoverTrigger;
