(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{186:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return O}));var r=a(3),n=a(7),b=(a(0),a(284)),c={id:"overlay",title:"Overlay"},l={unversionedId:"overlay",id:"version-1.2.0/overlay",isDocsHomePage:!1,title:"Overlay",description:"The Overlay is a view that floats above an app\u2019s content. Overlays are an easy",source:"@site/versioned_docs/version-1.2.0/overlay.md",slug:"/overlay",permalink:"/docs/1.2.0/overlay",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-1.2.0/overlay.md",version:"1.2.0",sidebar:"version-1.2.0/docs",previous:{title:"ListItem",permalink:"/docs/1.2.0/listitem"},next:{title:"Pricing",permalink:"/docs/1.2.0/pricing"}},i=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>borderRadius</code>",id:"borderradius",children:[]},{value:"<code>children</code>",id:"children",children:[]},{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>fullScreen</code>",id:"fullscreen",children:[]},{value:"<code>height</code>",id:"height",children:[]},{value:"<code>isVisible</code>",id:"isvisible",children:[]},{value:"<code>overlayBackgroundColor</code>",id:"overlaybackgroundcolor",children:[]},{value:"<code>overlayStyle</code>",id:"overlaystyle",children:[]},{value:"<code>onBackdropPress</code>",id:"onbackdroppress",children:[]},{value:"<code>width</code>",id:"width",children:[]},{value:"<code>windowBackgroundColor</code>",id:"windowbackgroundcolor",children:[]}]}],o={rightToc:i};function O(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The Overlay is a view that floats above an app\u2019s content. Overlays are an easy\nway to inform or request information from the user."),Object(b.b)("img",{src:"/img/overlay.png",width:"400"}),Object(b.b)("h2",{id:"usage"},"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import { Overlay } from \'react-native-elements\';\n\n<Overlay isVisible={this.state.isVisible}>\n  <Text>Hello from Overlay!</Text>\n</Overlay>;\n\n{\n  this.state.visible && (\n    <Overlay isVisible>\n      <Text>Hello from Overlay!</Text>\n    </Overlay>\n  );\n}\n\n<Overlay\n  isVisible={this.state.isVisible}\n  windowBackgroundColor="rgba(255, 255, 255, .5)"\n  overlayBackgroundColor="red"\n  width="auto"\n  height="auto"\n>\n  <Text>Hello from Overlay!</Text>\n</Overlay>;\n\n<Overlay\n  isVisible={this.state.isVisible}\n  onBackdropPress={() => this.setState({ isVisible: false })}\n>\n  <Text>Hello from Overlay!</Text>\n</Overlay>;\n')),Object(b.b)("hr",null),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Also receives all\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactnative.dev/docs/modal#props-1"}),"Modal")," props")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#borderradius"}),Object(b.b)("inlineCode",{parentName:"a"},"borderRadius"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#children"}),Object(b.b)("inlineCode",{parentName:"a"},"children"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#containerstyle"}),Object(b.b)("inlineCode",{parentName:"a"},"containerStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#fullscreen"}),Object(b.b)("inlineCode",{parentName:"a"},"fullScreen"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#height"}),Object(b.b)("inlineCode",{parentName:"a"},"height"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#isvisible"}),Object(b.b)("inlineCode",{parentName:"a"},"isVisible"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#overlaybackgroundcolor"}),Object(b.b)("inlineCode",{parentName:"a"},"overlayBackgroundColor"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#onbackdroppress"}),Object(b.b)("inlineCode",{parentName:"a"},"onBackdropPress"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#overlaystyle"}),Object(b.b)("inlineCode",{parentName:"a"},"overlayStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#width"}),Object(b.b)("inlineCode",{parentName:"a"},"width"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#windowbackgroundcolor"}),Object(b.b)("inlineCode",{parentName:"a"},"windowBackgroundColor")))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"reference"},"Reference"),Object(b.b)("h3",{id:"borderradius"},Object(b.b)("inlineCode",{parentName:"h3"},"borderRadius")),Object(b.b)("p",null,"Border radius for the overlay"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"number"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"3")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"children"},Object(b.b)("inlineCode",{parentName:"h3"},"children")),Object(b.b)("p",null,"What the modal will render"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"React Element"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"containerstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"containerStyle")),Object(b.b)("p",null,"Style of the overlay container"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"View Style (object)"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Internal Style")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"fullscreen"},Object(b.b)("inlineCode",{parentName:"h3"},"fullScreen")),Object(b.b)("p",null,"If set to true, the modal will take up the entire screen width and height"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"false")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"height"},Object(b.b)("inlineCode",{parentName:"h3"},"height")),Object(b.b)("p",null,"Height of the overlay"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"string or number"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"window height - 180")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"isvisible"},Object(b.b)("inlineCode",{parentName:"h3"},"isVisible")),Object(b.b)("p",null,"If true, the overlay is visible"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"false")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"overlaybackgroundcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"overlayBackgroundColor")),Object(b.b)("p",null,"Background color of the actual overlay"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"white")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"overlaystyle"},Object(b.b)("inlineCode",{parentName:"h3"},"overlayStyle")),Object(b.b)("p",null,"style of the actual overlay"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"View Style (object)"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Internal Style")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onbackdroppress"},Object(b.b)("inlineCode",{parentName:"h3"},"onBackdropPress")),Object(b.b)("p",null,"callback for overlay background press"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"function"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"width"},Object(b.b)("inlineCode",{parentName:"h3"},"width")),Object(b.b)("p",null,"Width of the overlay"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"string or number"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"window width - 80")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"windowbackgroundcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"windowBackgroundColor")),Object(b.b)("p",null,"Background color for the overlay background"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"rgba(0, 0, 0, .5)")))))}O.isMDXComponent=!0},284:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),O=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=O(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=O(a),p=r,m=d["".concat(c,".").concat(p)]||d[p]||j[p]||b;return a?n.a.createElement(m,l(l({ref:t},o),{},{components:a})):n.a.createElement(m,l({ref:t},o))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<b;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);