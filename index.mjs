// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function r(r){var s,o;if("object"!=typeof r||null===r)throw new TypeError(e("invalid argument. Must provide an object. Value: `%s`.",r));for(o in s={},r)t(r,o)&&(""===o?s[o]=r[o]:s[o.charAt(0).toLowerCase()+o.slice(1)]=r[o]);return s}export{r as default};
//# sourceMappingURL=index.mjs.map
