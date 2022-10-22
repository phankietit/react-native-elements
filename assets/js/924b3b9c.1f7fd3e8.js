"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[88439],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=d(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||s[m]||l;return n?a.createElement(k,i(i({ref:e},u),{},{components:n})):a.createElement(k,i({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},72360:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_OmH5";function i(t){var e=t.children,n=t.hidden,i=t.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},e)}},9877:(t,e,n)=>{n.d(e,{Z:()=>m});var a=n(87462),r=n(67294),l=n(72389),i=n(67392),o=n(7094),p=n(12466),d=n(86010);const u="tabList_uSqn",s="tabItem_LplD";function c(t){var e,n,l,c=t.lazy,m=t.block,k=t.defaultValue,g=t.values,N=t.groupId,A=t.className,y=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=g?g:y.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),C=(0,i.l)(f,(function(t,e){return t.value===e.value}));if(C.length>0)throw new Error('Docusaurus error: Duplicate values "'+C.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===k?k:null!=(e=null!=k?k:null==(n=y.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(l=y[0])?void 0:l.props.value;if(null!==b&&!f.some((function(t){return t.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,o.U)(),h=v.tabGroupChoices,D=v.setTabGroupChoices,w=(0,r.useState)(b),B=w[0],S=w[1],E=[],T=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=N){var P=h[N];null!=P&&P!==B&&f.some((function(t){return t.value===P}))&&S(P)}var I=function(t){var e=t.currentTarget,n=E.indexOf(e),a=f[n].value;a!==B&&(T(e),S(a),null!=N&&D(N,a))},O=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=E.indexOf(t.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(t.currentTarget)-1;n=E[r]||E[E.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:(0,d.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":m},A)},f.map((function(t){var e=t.value,n=t.label,l=t.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:B===e?0:-1,"aria-selected":B===e,key:e,ref:function(t){return E.push(t)},onKeyDown:O,onFocus:I,onClick:I},l,{className:(0,d.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":B===e})}),null!=n?n:e)}))),c?(0,r.cloneElement)(y.filter((function(t){return t.props.value===B}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==B})}))))}function m(t){var e=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(e)},t))}},76217:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>s,default:()=>N,frontMatter:()=>u,metadata:()=>c,toc:()=>k});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=(n(9877),n(72360),n(32408),["components"]),o={toc:[]};function p(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE Social Icon","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20ScrollView%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20SocialIcon%2C%20SocialIconProps%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Atype%20IconData%20%3D%20%7B%0Atype%3A%20SocialMediaType%3B%0AiconType%3A%20string%3B%0A%7D%3B%0A%0Aconst%20dataList%3A%20Partial%3CIconData%3E%5B%5D%20%3D%20%5B%0A%7B%0A%20%20type%3A%20'facebook'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'twitter'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'google-plus-official'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'google'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'pinterest'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'linkedin'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'youtube'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'vimeo'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'tumblr'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'instagram'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'quora'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'flickr'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'foursquare'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'wordpress'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'stumbleupon'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'github'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'github-alt'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'twitch'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'medium'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'soundcloud'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'stack-overflow'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'gitlab'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'angellist'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'codepen'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'weibo'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'vk'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'facebook-messenger'%2C%0A%20%20iconType%3A%20'material-community'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'whatsapp'%2C%0A%7D%2C%0A%5D%3B%0A%0Atype%20SocialIconsComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20SocialIcons%3A%20React.FunctionComponent%3CSocialIconsComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20socialProps%20%3D%20%7B%7D%3B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%7B_.chunk(dataList%2C%203).map(%0A%20%20%20%20%20%20%20%20(chunk%3A%20Partial%3CIconData%3E%5B%5D%2C%20chunkIndex%3A%20React.Key)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginTop%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'%234c4c4c'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7BchunkIndex%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bchunk.map((l%3A%20Partial%3CIconData%3E%2C%20i%3A%20React.Key)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CSocialIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%7Bl.type%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20iconType%3D%7Bl.iconType%20%3F%20l.iconType%20%3A%20'font-awesome'%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7B%60%24%7BchunkIndex%7D-%24%7Bi%7D%60%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20)%7D%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aexport%20default%20SocialIcons%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}p.isMDXComponent=!0;var d=["components"],u={id:"socialicon",title:"SocialIcon"},s=void 0,c={unversionedId:"components/socialicon",id:"version-4.0.0-rc.1/components/socialicon",title:"SocialIcon",description:"SocialIcons are visual cues to online and social media networks. We offer a varied range of social icons.",source:"@site/versioned_docs/version-4.0.0-rc.1/components/SocialIcon.mdx",sourceDirName:"components",slug:"/components/socialicon",permalink:"/docs/4.0.0-rc.1/components/socialicon",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.1/components/SocialIcon.mdx",tags:[],version:"4.0.0-rc.1",frontMatter:{id:"socialicon",title:"SocialIcon"},sidebar:"docs",previous:{title:"Skeleton",permalink:"/docs/4.0.0-rc.1/components/skeleton"},next:{title:"SpeedDial",permalink:"/docs/4.0.0-rc.1/components/speeddial"}},m={},k=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],g={toc:k};function N(t){var e=t.components,n=(0,r.Z)(t,d);return(0,l.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"SocialIcons are visual cues to online and social media networks. We offer a varied range of social icons."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(p,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Component")),(0,l.kt)("td",{parentName:"tr",align:null},"React Component"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Press handlers present then Pressable else View")),(0,l.kt)("td",{parentName:"tr",align:null},"Type of button.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"activityIndicatorStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style to render when in loading state.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"button")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Creates button with a social icon.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Disables the button, if true.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fontFamily")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Specify different font family.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fontStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Specify text styling.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fontWeight")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Specify font weight of title if set as a button with a title.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"iconColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"white")),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the color of the icon.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"iconSize")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"24")),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the size of the icon.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"iconStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Extra styling for icon component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"iconType")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"font-awesome")),(0,l.kt)("td",{parentName:"tr",align:null},"Type of icon set. ",(0,l.kt)("a",{parentName:"td",href:"icon#available-icon-sets"},"Supported sets here"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"light")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Reverses icon color scheme, setting background to white and icon to primary color.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"loading")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Shows loading indicator.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onLongPress")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a long-tap gesture is detected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPress")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a single tap gesture is detected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPressIn")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a touch is engaged before ",(0,l.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPressOut")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a touch is released before ",(0,l.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pressableProps")),(0,l.kt)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"raised")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Raised adds a drop shadow, set to false to remove.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"small")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Decides the size of the activity indicator.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"style")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Adds styling to the button.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"title")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Title if made into a button.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},"SocialMediaType"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Social media type.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"underlayColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Add Underlay color."))))))}N.isMDXComponent=!0}}]);