import { css } from "lit";
export const style = css `html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

:focus {
  outline: 0;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-decoration,
input[type=search]::-webkit-search-results-button,
input[type=search]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  -moz-appearance: none;
}

input[type=search] {
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

textarea {
  overflow: auto;
  vertical-align: top;
  resize: vertical;
}

audio,
canvas,
video {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  max-width: 100%;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

[hidden] {
  display: none;
}

html {
  font-size: 100%;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -ms-text-size-adjust: 100%;
  /* 2 */
}

a:focus {
  outline: thin dotted;
}

a:active,
a:hover {
  outline: 0;
}

img {
  border: 0;
  /* 1 */
  -ms-interpolation-mode: bicubic;
  /* 2 */
}

figure {
  margin: 0;
}

form {
  margin: 0;
}

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

legend {
  border: 0;
  padding: 0;
  white-space: normal;
  *margin-left: -7px;
}

button,
input,
select,
textarea {
  font-size: 100%;
  margin: 0;
  vertical-align: baseline;
  *vertical-align: middle;
}

button,
input {
  line-height: normal;
}

button,
select {
  text-transform: none;
}

button,
html input[type=button],
input[type=reset],
input[type=submit] {
  -webkit-appearance: button;
  cursor: pointer;
  *overflow: visible;
}

button[disabled],
html input[disabled] {
  cursor: default;
}

input[type=checkbox],
input[type=radio] {
  box-sizing: border-box;
  /* 1 */
  padding: 0;
  *height: 13px;
  *width: 13px;
}

input[type=search] {
  -webkit-appearance: textfield;
  /* 1 */
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  /* 2 */
  box-sizing: content-box;
}

input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

textarea {
  overflow: auto;
  /* 1 */
  vertical-align: top;
  /* 2 */
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

html,
button,
input,
select,
textarea {
  color: #222;
}

::-moz-selection {
  background: #b3d4fc;
  text-shadow: none;
}

::selection {
  background: #b3d4fc;
  text-shadow: none;
}

img {
  vertical-align: middle;
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

textarea {
  resize: vertical;
}

.chromeframe {
  margin: 0.2em 0;
  background: #ccc;
  color: #000;
  padding: 0.2em 0;
}

* {
  box-sizing: border-box;
}

/* untitled-font-1 */
@font-face {
  font-family: "untitled-font-1";
  src: url("https://file.myfontastic.com/pvaqcASjfomSubUJPVp6Nm/fonts/1625558285.eot");
  src: url("https://file.myfontastic.com/pvaqcASjfomSubUJPVp6Nm/fonts/1625558285.eot?#iefix") format("embedded-opentype"), url("https://file.myfontastic.com/pvaqcASjfomSubUJPVp6Nm/fonts/1625558285.woff") format("woff"), url("https://file.myfontastic.com/pvaqcASjfomSubUJPVp6Nm/fonts/1625558285.ttf") format("truetype"), url("https://file.myfontastic.com/pvaqcASjfomSubUJPVp6Nm/fonts/1625558285.svg#1625558285") format("svg");
  font-weight: normal;
  font-style: normal;
}
[data-icon]:before {
  font-family: "untitled-font-1" !important;
  content: attr(data-icon);
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

[class^=icon-]:before,
[class*=" icon-"]:before {
  font-family: "untitled-font-1" !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-twitter:before {
  content: "a";
}

.icon-bars:before {
  content: "b";
}

.icon-times:before {
  content: "d";
}

.icon-sun-o:before {
  content: "f";
}

.icon-paintbrush:before {
  content: "h";
}

.icon-paintbucket:before {
  content: "i";
}

.icon-color-mode:before {
  content: "j";
}

.icon-contrast:before {
  content: "k";
}

.icon-ying-yang:before {
  content: "l";
}

.icon-moon-o:before {
  content: "m";
}

.font-system .font-content {
  font-size: 20px;
  font-family: "Source Code Pro";
}
.font-system .font-header {
  font-size: 30px;
  font-family: "Source Code Pro";
  font-weight: bold;
}
.font-system .font-link {
  font-size: 20px;
  font-family: "Source Code Pro";
}
.font-system .font-acent {
  font-size: 20px;
}
.font-system .font-icon {
  font-size: 23px;
}
.font-system .font-header,
.font-system .font-link,
.font-system .font-icon {
  text-decoration: none;
}

.color-system {
  background-color: #F7F5FB;
}
.color-system nav[class~=container] {
  background: #F7F5FB;
}
.color-system .color-header {
  color: #32746D;
}
.color-system .color-header--reverse {
  color: #F7F5FB;
}
.color-system .color-content {
  color: #262626;
}
.color-system .color-content--reverse {
  color: #F7F5FB;
}
.color-system .color-link {
  color: #32746D;
}
.color-system .color-acent {
  color: #32746D;
}
.color-system .color-icon {
  color: #32746D;
}

.color-system--dark {
  background-color: #262626;
}
.color-system--dark nav[class~=container] {
  background: #262626;
}
.color-system--dark .color-header {
  color: #FF980B;
}
.color-system--dark .color-header--reverse {
  color: #262626;
}
.color-system--dark .color-content {
  color: #F7F5FB;
}
.color-system--dark .color-content--reverse {
  color: #262626;
}
.color-system--dark .color-link {
  color: #FF980B;
}
.color-system--dark .color-acent {
  color: #FF980B;
}
.color-system--dark .color-icon {
  color: #FF980B;
}
`;
//# sourceMappingURL=style.js.map