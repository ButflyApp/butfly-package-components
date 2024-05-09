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
var reactIcons = require('@radix-ui/react-icons');
var cmdk = require('cmdk');
var React = require('react');
require('./Dialog-client-BJcIIpU3.js');
var AutocompleteClient = require('./Autocomplete-client-ByPbkBYv.js');
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

const Command = /*#__PURE__*/ React__namespace.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsxRuntime.jsx(cmdk.Command, {
        ref: ref,
        className: AutocompleteClient.cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className),
        ...props
    }));
Command.displayName = cmdk.Command.displayName;
const MaskedCommandInput = ({ className, ...props })=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("div", {
        className: "flex items-center border-b px-3",
        "cmdk-input-wrapper": "",
        children: [
            /*#__PURE__*/ jsxRuntime.jsx(reactIcons.MagnifyingGlassIcon, {
                className: "mr-2 h-4 w-4 shrink-0 opacity-50"
            }),
            /*#__PURE__*/ jsxRuntime.jsx(reactNumberFormat.PatternFormat, {
                className: AutocompleteClient.cn("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
                ...props
            })
        ]
    });
};
const CommandInput = /*#__PURE__*/ React__namespace.forwardRef(({ className, ...props }, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("div", {
        className: "flex items-center border-b px-3",
        "cmdk-input-wrapper": "",
        children: [
            /*#__PURE__*/ jsxRuntime.jsx(reactIcons.MagnifyingGlassIcon, {
                className: "mr-2 h-4 w-4 shrink-0 opacity-50"
            }),
            /*#__PURE__*/ jsxRuntime.jsx(cmdk.Command.Input, {
                ref: ref,
                className: AutocompleteClient.cn("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
                ...props
            })
        ]
    });
});
CommandInput.displayName = cmdk.Command.Input.displayName;
const CommandList = /*#__PURE__*/ React__namespace.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsxRuntime.jsx(cmdk.Command.List, {
        ref: ref,
        className: AutocompleteClient.cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
        ...props
    }));
CommandList.displayName = cmdk.Command.List.displayName;
const CommandEmpty = /*#__PURE__*/ React__namespace.forwardRef((props, ref)=>/*#__PURE__*/ jsxRuntime.jsx(cmdk.Command.Empty, {
        ref: ref,
        className: "py-6 text-center text-sm",
        ...props
    }));
CommandEmpty.displayName = cmdk.Command.Empty.displayName;
const CommandGroup = /*#__PURE__*/ React__namespace.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsxRuntime.jsx(cmdk.Command.Group, {
        ref: ref,
        className: AutocompleteClient.cn("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className),
        ...props
    }));
CommandGroup.displayName = cmdk.Command.Group.displayName;
const CommandSeparator = /*#__PURE__*/ React__namespace.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsxRuntime.jsx(cmdk.Command.Separator, {
        ref: ref,
        className: AutocompleteClient.cn("-mx-1 h-px bg-border", className),
        ...props
    }));
CommandSeparator.displayName = cmdk.Command.Separator.displayName;
const CommandItem = /*#__PURE__*/ React__namespace.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsxRuntime.jsx(cmdk.Command.Item, {
        ref: ref,
        className: AutocompleteClient.cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props
    }));
CommandItem.displayName = cmdk.Command.Item.displayName;

exports.Command = Command;
exports.CommandEmpty = CommandEmpty;
exports.CommandGroup = CommandGroup;
exports.CommandInput = CommandInput;
exports.CommandItem = CommandItem;
exports.MaskedCommandInput = MaskedCommandInput;
