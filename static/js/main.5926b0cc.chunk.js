(this["webpackJsonpmath-magicians"]=this["webpackJsonpmath-magicians"]||[]).push([[0],{10:function(t,n,e){},11:function(t,n,e){},13:function(t,n,e){"use strict";e.r(n);var o=e(1),a=e.n(o),r=e(4),i=e.n(r),l=(e(10),e(11),e(5)),c=e(3),u=e.n(c);function x(t,n,e){var o=u()(t),a=u()(n);if("+"===e)return o.plus(a).toString();if("-"===e)return o.minus(a).toString();if("x"===e)return o.times(a).toString();if("\xf7"===e)return o.div(a).toString();if("%"===e)return o.mod(a).toString();throw Error("Unknown operation '".concat(e,"'"))}var s=e(0),p=function(t){var n=t.onClick;return Object(s.jsx)("div",{className:"buttons",children:["AC","+/-","%","\xf7",7,8,9,"x",4,5,6,"-",1,2,3,"+",0,".","="].map((function(t){return Object(s.jsx)("button",{type:"button",onClick:function(t){return n(t)},children:t},t)}))})},d=function(){var t=Object(o.useState)({total:null,next:null,operation:null}),n=Object(l.a)(t,2),e=n[0],a=n[1],r=(e.total||"")+(e.operation||"")+(e.next||"");return Object(s.jsxs)("div",{className:"calculator",children:[Object(s.jsx)("p",{className:"result",children:r}),Object(s.jsx)(p,{onClick:function(t){var n=t.target.innerText,o=function(t,n){return"AC"===n?{total:null,next:null,operation:null}:n.match(/[0-9]+/)?"0"===n&&"0"===t.next?{}:t.operation?t.next?{next:t.next+n}:{next:n}:t.next?{next:t.next+n,total:null}:{next:n,total:null}:"."===n?t.next?t.next.includes(".")?{}:{next:"".concat(t.next,".")}:t.operation?{next:"0."}:t.total?t.total.includes(".")?{}:{total:"".concat(t.total,".")}:{total:"0."}:"="===n?t.next&&t.operation?{total:x(t.total,t.next,t.operation),next:null,operation:null}:{}:"+/-"===n?t.next?{next:(-1*parseFloat(t.next)).toString()}:t.total?{total:(-1*parseFloat(t.total)).toString()}:{}:t.operation?{total:x(t.total,t.next,t.operation),next:null,operation:n}:t.next?{total:t.next,next:null,operation:n}:{operation:n}}(e,n),r=e.operation,i=e.next,l=e.total;a({operation:void 0===o.operation?r:o.operation,next:void 0===o.next?i:o.next,total:void 0===o.total?l:o.total})}})]})},f=function(){return Object(s.jsx)(d,{})},j=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,14)).then((function(n){var e=n.getCLS,o=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;e(t),o(t),a(t),r(t),i(t)}))};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),j()}},[[13,1,2]]]);
//# sourceMappingURL=main.5926b0cc.chunk.js.map