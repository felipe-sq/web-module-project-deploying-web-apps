(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function i(){var{ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e||t&&n}},"/a9y":function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=void 0;var r=a(n("q1tI")),o=a(n("8Kt/")),i={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function s(e){var{res:t,err:n}=e;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}class d extends r.default.Component{render(){var{statusCode:e}=this.props,t=this.props.title||i[e]||"An unexpected error has occurred";return r.default.createElement("div",{style:u.error},r.default.createElement(o.default,null,r.default.createElement("title",null,e,": ",t)),r.default.createElement("div",null,r.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?r.default.createElement("h1",{style:u.h1},e):null,r.default.createElement("div",{style:u.desc},r.default.createElement("h2",{style:u.h2},t,"."))))}}t.default=d,d.displayName="ErrorPage",d.getInitialProps=s,d.origGetInitialProps=s;var u={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"04ac":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n("/a9y")}])},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),s=n("FYa8"),d=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((e,t)=>{var n=r.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(c,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return r=>{var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var s=0,d=p.length;s<d;s++){var u=p[s];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var l=r.props[u],c=a[u]||new Set;c.has(l)?o=!1:(c.add(l),a[u]=c)}}}return o}}()).reverse().map((e,t)=>{var n=e.key||t;return r.default.cloneElement(e,{key:n})})}function h(e){var{children:t}=e,n=(0,r.useContext)(i.AmpStateContext),a=(0,r.useContext)(s.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:f,headManager:a,inAmpMode:(0,d.isInAmpMode)(n)},t)}h.rewind=()=>{};var m=h;t.default=m},FYa8:function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=r},Xuae:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a=n("q1tI"),r=!1;class o extends a.Component{constructor(e){super(e),this._hasHeadManager=void 0,this.emitChange=()=>{this._hasHeadManager&&this.props.headManager.updateHead(this.props.reduceComponentsToState([...this.props.headManager.mountedInstances],this.props))},this._hasHeadManager=this.props.headManager&&this.props.headManager.mountedInstances,r&&this._hasHeadManager&&(this.props.headManager.mountedInstances.add(this),this.emitChange())}componentDidMount(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}componentDidUpdate(){this.emitChange()}componentWillUnmount(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}render(){return null}}t.default=o},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r}},[["04ac",1,2,0]]]);