webpackJsonp([0],{207:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),u=n.n(a),c=n(209),l=n(13),s=n(12),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),p=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),f(t,[{key:"render",value:function(){return u.a.createElement(l.a,null,u.a.createElement(s.b,{to:"/"},"Main"),u.a.createElement("br",null),u.a.createElement(c.a,null))}}]),t}(a.Component);t.default=p},209:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),u=n.n(a),c=n(12),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isBlocking:!1},n}return i(t,e),l(t,[{key:"isBlocked",value:function(){return this.state.isBlocking}},{key:"render",value:function(){var e=this,t=this.state.isBlocking;return u.a.createElement("form",{onSubmit:function(t){t.preventDefault(),t.target.reset(),e.setState({isBlocking:!1}),window.isFormDirty=!1}},u.a.createElement(c.c,{when:this.isBlocked(),message:function(e){return console.log("location",e),"You have unsaved changes. Are you sure you want to go to "+e.pathname+"?"}}),u.a.createElement("p",null,"Blocking? ",t?"Yes, click a link or the back button":"Nope"),u.a.createElement("p",null,u.a.createElement("input",{size:"50",placeholder:"type something to block transitions",onChange:function(t){window.isFormDirty=!0,e.setState({isBlocking:t.target.value.length>0})}})),u.a.createElement("p",null,u.a.createElement("button",null,"Submit to stop blocking")))}}]),t}(a.Component);t.a=s}});
//# sourceMappingURL=0.9e2142b9.chunk.js.map