"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75907],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),p=r,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||l;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72360:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_OmH5";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),r=n(67294),l=n(72389),o=n(67392),i=n(7094),c=n(12466),u=n(86010);const s="tabList_uSqn",d="tabItem_LplD";function m(e){var t,n,l,m=e.lazy,p=e.block,f=e.defaultValue,v=e.values,g=e.groupId,k=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=v?v:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===f?f:null!=(t=null!=f?f:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=h[0])?void 0:l.props.value;if(null!==N&&!b.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var E=(0,i.U)(),w=E.tabGroupChoices,C=E.setTabGroupChoices,O=(0,r.useState)(N),x=O[0],T=O[1],P=[],I=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var Z=w[g];null!=Z&&Z!==x&&b.some((function(e){return e.value===Z}))&&T(Z)}var j=function(e){var t=e.currentTarget,n=P.indexOf(t),a=b[n].value;a!==x&&(I(t),T(a),null!=g&&C(g,a))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=P.indexOf(e.currentTarget)+1;n=P[a]||P[0];break;case"ArrowLeft":var r=P.indexOf(e.currentTarget)-1;n=P[r]||P[P.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},k)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return P.push(e)},onKeyDown:_,onFocus:j,onClick:j},l,{className:(0,u.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),m?(0,r.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function p(e){var t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},37047:(e,t,n)=>{n.d(t,{w:()=>c});var a=n(67294),r=n(35742),l=n(14330),o=n(98576),i=n(61720),c=function(){return a.createElement(r.Z,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+o.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n        "))}},22365:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(63366),l=n(67294),o=n(10407),i=n(86010),c=(n(95999),n(52263)),u=n(91262),s=n(66412);const d="playgroundContainer_TGbA",m="playgroundEditor_PvJ1",p="playgroundPreview_bb8I",f="toggleIcon_OnrQ";var v=n(72389),g=n(5434),k=["children","transformCode"];function h(){return l.createElement("div",null,"Loading...")}function b(){var e=(0,v.Z)();return l.createElement(o.uz,{key:String(e),className:m})}function y(){var e=l.useState(!0),t=e[0],n=e[1],a=l.useState(void 0),r=(a[0],a[1],function(){n((function(e){return!e}))});return l.createElement(l.Fragment,null,l.createElement("div",{className:p},l.createElement(u.Z,{fallback:l.createElement(h,null)},(function(){return l.createElement(l.Fragment,null,l.createElement(o.i5,null),l.createElement(o.IF,null),l.createElement("div",{className:(0,i.Z)(f)},l.createElement(g.xoN,{onClick:r})," "))}))),t&&l.createElement(l.Fragment,null," ",l.createElement(b,null)))}function N(e){var t=e.children,n=e.transformCode,i=(0,r.Z)(e,k),u=((0,c.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,s.p)());return l.createElement("div",{className:d},l.createElement(o.nu,(0,a.Z)({code:t.replace(/\n$/,""),transformCode:n||function(e){return e},theme:u},i),l.createElement(l.Fragment,null,l.createElement(y,null))))}},56922:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(32408),l=n(13925),o=n(97288),i=n(83279);const c=Object.assign({React:a,LinearGradient:i.Z},r,l,o,{Switch:function(){var e=a.useState(!1),t=e[0],n=e[1];return a.createElement(l.Switch,{value:t,onValueChange:n})}},a)},30238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>f});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(37047),i=(n(9877),n(72360),n(89279)),c=n(47516),u=["components"],s={id:"card_image",title:"Card.Image"},d=void 0,m={unversionedId:"components/card_image",id:"components/card_image",title:"Card.Image",description:"Add information in the form of image to the card.",source:"@site/docs/components/Card.Image.mdx",sourceDirName:"components",slug:"/components/card_image",permalink:"/docs/next/components/card_image",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/Card.Image.mdx",tags:[],version:"current",frontMatter:{id:"card_image",title:"Card.Image"},sidebar:"docs",previous:{title:"Card.FeaturedTitle",permalink:"/docs/next/components/card_featuredtitle"},next:{title:"Card.Title",permalink:"/docs/next/components/card_title"}},p={},f=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],v={toc:f};function g(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o.w,{mdxType:"IconsStyle"}),(0,l.kt)("p",null,"Add information in the form of image to the card.\nThis, Receives all ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/components/image#props"},"Image")," props."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("div",{class:"row inline-flex-center"},(0,l.kt)("div",{class:"col col--3"},(0,l.kt)("h4",null,"Import")),(0,l.kt)("div",{class:"col col--9"},(0,l.kt)(i.Z,{mdxType:"CodeBlock"},"import { Card } from '@rneui/themed';")),(0,l.kt)("div",{class:"col col--3"},(0,l.kt)("h4",null,"Theme Key"," ",(0,l.kt)("a",{href:"../customizing#using-themeprovider"},(0,l.kt)(c.Fs0,{mdxType:"BiInfoCircle"})))),(0,l.kt)("div",{class:"col col--9"},(0,l.kt)(i.Z,{mdxType:"CodeBlock"},"CardImage"))),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Includes all ",(0,l.kt)("a",{parentName:"p",href:"image#props"},"Image")," props."))),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onLongPress")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a long-tap gesture is detected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPress")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a single tap gesture is detected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPressIn")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a touch is engaged before ",(0,l.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPressOut")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a touch is released before ",(0,l.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pressableProps")),(0,l.kt)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None")),(0,l.kt)("td",{parentName:"tr",align:null}))))))}g.isMDXComponent=!0}}]);