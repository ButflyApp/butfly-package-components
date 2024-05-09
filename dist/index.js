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
var classVarianceAuthority = require('class-variance-authority');
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

__insertCSS("*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::after,::before{--tw-content:''}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:var(--font-sans),ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}:root{--background:0 0% 100%;--foreground:222.2 47.4% 11.2%;--muted:210 40% 96.1%;--muted-foreground:215.4 16.3% 46.9%;--popover:0 0% 100%;--popover-foreground:222.2 47.4% 11.2%;--border:214.3 31.8% 91.4%;--input:214.3 31.8% 91.4%;--card:0 0% 100%;--card-foreground:222.2 47.4% 11.2%;--primary:222.2 47.4% 11.2%;--primary-foreground:210 40% 98%;--secondary:210 40% 96.1%;--secondary-foreground:222.2 47.4% 11.2%;--accent:210 40% 96.1%;--accent-foreground:222.2 47.4% 11.2%;--destructive:0 100% 50%;--destructive-foreground:210 40% 98%;--ring:215 20.2% 65.1%;--radius:0.5rem}*{border-color:hsl(var(--border))}body{background-color:hsl(var(--background));color:hsl(var(--foreground));font-feature-settings:\"rlig\" 1,\"calt\" 1}*,::after,::before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.pointer-events-none{pointer-events:none}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0px}.inset-x-0{left:0;right:0}.bottom-0{bottom:0}.left-\\[50\\%\\]{left:50%}.right-4{right:1rem}.top-4{top:1rem}.top-\\[50\\%\\]{top:50%}.z-10{z-index:10}.z-50{z-index:50}.-mx-1{margin-left:-.25rem;margin-right:-.25rem}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:.25rem}.ml-2{margin-left:.5rem}.ml-3{margin-left:.75rem}.ml-auto{margin-left:auto}.mr-2{margin-right:.5rem}.mt-0{margin-top:0}.mt-1{margin-top:.25rem}.mt-24{margin-top:6rem}.mt-4{margin-top:1rem}.mt-auto{margin-top:auto}.block{display:block}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.hidden{display:none}.h-10{height:2.5rem}.h-2{height:.5rem}.h-3{height:.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-auto{height:auto}.h-full{height:100%}.h-px{height:1px}.max-h-\\[300px\\]{max-height:300px}.min-h-\\[60px\\]{min-height:60px}.w-3{width:.75rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-72{width:18rem}.w-9{width:2.25rem}.w-\\[100px\\]{width:100px}.w-full{width:100%}.max-w-lg{max-width:32rem}.flex-1{flex:1 1 0%}.shrink-0{flex-shrink:0}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes ping{100%,75%{transform:scale(2);opacity:0}}.animate-ping{animation:ping 1s cubic-bezier(0,0,.2,1) infinite}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-default{cursor:default}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-1\\.5{gap:.375rem}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(.375rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.375rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.whitespace-nowrap{white-space:nowrap}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-t-\\[10px\\]{border-top-left-radius:10px;border-top-right-radius:10px}.rounded-t-none{border-top-left-radius:0;border-top-right-radius:0}.border{border-width:1px}.border-b{border-bottom-width:1px}.border-destructive\\/50{border-color:hsl(var(--destructive) / .5)}.border-input{border-color:hsl(var(--input))}.border-primary{border-color:hsl(var(--primary))}.border-red-500{--tw-border-opacity:1;border-color:rgb(239 68 68 / var(--tw-border-opacity))}.bg-background{background-color:hsl(var(--background))}.bg-black\\/80{background-color:rgb(0 0 0 / .8)}.bg-blue-500{--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity))}.bg-border{background-color:hsl(var(--border))}.bg-destructive{background-color:hsl(var(--destructive))}.bg-gray-500{--tw-bg-opacity:1;background-color:rgb(107 114 128 / var(--tw-bg-opacity))}.bg-green-500{--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))}.bg-muted{background-color:hsl(var(--muted))}.bg-popover{background-color:hsl(var(--popover))}.bg-primary{background-color:hsl(var(--primary))}.bg-purple-500{--tw-bg-opacity:1;background-color:rgb(168 85 247 / var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity:1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.bg-secondary{background-color:hsl(var(--secondary))}.bg-transparent{background-color:transparent}.bg-yellow-500{--tw-bg-opacity:1;background-color:rgb(234 179 8 / var(--tw-bg-opacity))}.p-0{padding:0}.p-1{padding:.25rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-8{padding-left:2rem;padding-right:2rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.pt-0{padding-top:0}.text-center{text-align:center}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.tracking-widest{letter-spacing:.1em}.text-current{color:currentColor}.text-destructive{color:hsl(var(--destructive))}.text-destructive-foreground{color:hsl(var(--destructive-foreground))}.text-foreground{color:hsl(var(--foreground))}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-muted-foreground{color:hsl(var(--muted-foreground))}.text-popover-foreground{color:hsl(var(--popover-foreground))}.text-primary{color:hsl(var(--primary))}.text-primary-foreground{color:hsl(var(--primary-foreground))}.text-red-700{--tw-text-opacity:1;color:rgb(185 28 28 / var(--tw-text-opacity))}.text-secondary-foreground{color:hsl(var(--secondary-foreground))}.underline-offset-4{text-underline-offset:4px}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-40{opacity:.4}.opacity-50{opacity:.5}.opacity-70{opacity:.7}.opacity-75{opacity:.75}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1),0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1),0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1),0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring-offset-background{--tw-ring-offset-color:hsl(var(--background))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}.duration-200{transition-duration:.2s}@keyframes enter{from{opacity:var(--tw-enter-opacity, 1);transform:translate3d(var(--tw-enter-translate-x,0),var(--tw-enter-translate-y,0),0) scale3d(var(--tw-enter-scale,1),var(--tw-enter-scale,1),var(--tw-enter-scale,1)) rotate(var(--tw-enter-rotate,0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity, 1);transform:translate3d(var(--tw-exit-translate-x,0),var(--tw-exit-translate-y,0),0) scale3d(var(--tw-exit-scale,1),var(--tw-exit-scale,1),var(--tw-exit-scale,1)) rotate(var(--tw-exit-rotate,0))}}.duration-200{animation-duration:.2s}.popover-content-width-same-as-its-trigger{width:var(--radix-popover-trigger-width);max-height:var(--radix-popover-content-available-height)}.file\\:border-0::file-selector-button{border-width:0}.file\\:bg-transparent::file-selector-button{background-color:transparent}.file\\:text-sm::file-selector-button{font-size:.875rem;line-height:1.25rem}.file\\:font-medium::file-selector-button{font-weight:500}.placeholder\\:text-muted-foreground::-moz-placeholder{color:hsl(var(--muted-foreground))}.placeholder\\:text-muted-foreground::placeholder{color:hsl(var(--muted-foreground))}.hover\\:bg-accent:hover{background-color:hsl(var(--accent))}.hover\\:bg-destructive\\/90:hover{background-color:hsl(var(--destructive) / .9)}.hover\\:bg-primary\\/90:hover{background-color:hsl(var(--primary) / .9)}.hover\\:bg-secondary\\/80:hover{background-color:hsl(var(--secondary) / .8)}.hover\\:text-accent-foreground:hover{color:hsl(var(--accent-foreground))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-ring:focus{--tw-ring-color:hsl(var(--ring))}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-1:focus-visible{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus-visible\\:ring-ring:focus-visible{--tw-ring-color:hsl(var(--ring))}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.aria-selected\\:bg-accent[aria-selected=true]{background-color:hsl(var(--accent))}.aria-selected\\:text-accent-foreground[aria-selected=true]{color:hsl(var(--accent-foreground))}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[state\\=checked\\]\\:bg-primary[data-state=checked]{background-color:hsl(var(--primary))}.data-\\[state\\=open\\]\\:bg-accent[data-state=open]{background-color:hsl(var(--accent))}.data-\\[state\\=checked\\]\\:text-primary-foreground[data-state=checked]{color:hsl(var(--primary-foreground))}.data-\\[state\\=open\\]\\:text-muted-foreground[data-state=open]{color:hsl(var(--muted-foreground))}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation-name:enter;animation-duration:150ms;--tw-enter-opacity:initial;--tw-enter-scale:initial;--tw-enter-rotate:initial;--tw-enter-translate-x:initial;--tw-enter-translate-y:initial}.data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation-name:exit;animation-duration:150ms;--tw-exit-opacity:initial;--tw-exit-scale:initial;--tw-exit-rotate:initial;--tw-exit-translate-x:initial;--tw-exit-translate-y:initial}.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--tw-exit-opacity:0}.data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--tw-enter-opacity:0}.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale:.95}.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale:.95}.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom]{--tw-enter-translate-y:-0.5rem}.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left]{--tw-enter-translate-x:0.5rem}.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right]{--tw-enter-translate-x:-0.5rem}.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top]{--tw-enter-translate-y:0.5rem}.data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state=closed]{--tw-exit-translate-x:-50%}.data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state=closed]{--tw-exit-translate-y:-48%}.data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state=open]{--tw-enter-translate-x:-50%}.data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state=open]{--tw-enter-translate-y:-48%}.dark\\:border-destructive:is(.dark *){border-color:hsl(var(--destructive))}@media (min-width:640px){.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}.sm\\:space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.sm\\:rounded-lg{border-radius:var(--radius)}.sm\\:text-left{text-align:left}}.\\[\\&\\>svg\\+div\\]\\:translate-y-\\[-3px\\]>svg+div{--tw-translate-y:-3px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\[\\&\\>svg\\]\\:absolute>svg{position:absolute}.\\[\\&\\>svg\\]\\:left-4>svg{left:1rem}.\\[\\&\\>svg\\]\\:top-4>svg{top:1rem}.\\[\\&\\>svg\\]\\:text-destructive>svg{color:hsl(var(--destructive))}.\\[\\&\\>svg\\]\\:text-foreground>svg{color:hsl(var(--foreground))}.\\[\\&\\>svg\\~\\*\\]\\:pl-7>svg~*{padding-left:1.75rem}.\\[\\&_\\[cmdk-group-heading\\]\\]\\:px-2 [cmdk-group-heading]{padding-left:.5rem;padding-right:.5rem}.\\[\\&_\\[cmdk-group-heading\\]\\]\\:py-1\\.5 [cmdk-group-heading]{padding-top:.375rem;padding-bottom:.375rem}.\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-xs [cmdk-group-heading]{font-size:.75rem;line-height:1rem}.\\[\\&_\\[cmdk-group-heading\\]\\]\\:font-medium [cmdk-group-heading]{font-weight:500}.\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-muted-foreground [cmdk-group-heading]{color:hsl(var(--muted-foreground))}.\\[\\&_\\[cmdk-group\\]\\:not\\(\\[hidden\\]\\)_\\~\\[cmdk-group\\]\\]\\:pt-0 [cmdk-group]:not([hidden])~[cmdk-group]{padding-top:0}.\\[\\&_\\[cmdk-group\\]\\]\\:px-2 [cmdk-group]{padding-left:.5rem;padding-right:.5rem}.\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:h-5 [cmdk-input-wrapper] svg{height:1.25rem}.\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:w-5 [cmdk-input-wrapper] svg{width:1.25rem}.\\[\\&_\\[cmdk-input\\]\\]\\:h-12 [cmdk-input]{height:3rem}.\\[\\&_\\[cmdk-item\\]\\]\\:px-2 [cmdk-item]{padding-left:.5rem;padding-right:.5rem}.\\[\\&_\\[cmdk-item\\]\\]\\:py-3 [cmdk-item]{padding-top:.75rem;padding-bottom:.75rem}.\\[\\&_\\[cmdk-item\\]_svg\\]\\:h-5 [cmdk-item] svg{height:1.25rem}.\\[\\&_\\[cmdk-item\\]_svg\\]\\:w-5 [cmdk-item] svg{width:1.25rem}.\\[\\&_p\\]\\:leading-relaxed p{line-height:1.625}");

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
