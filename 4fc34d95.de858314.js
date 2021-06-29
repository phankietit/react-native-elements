(window.webpackJsonp=window.webpackJsonp||[]).push([[77,13],{178:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return O}));var n=a(3),r=a(8),c=(a(0),a(293)),b=a(61),l={id:"avatar",title:"Avatar",slug:"/avatar"},i={unversionedId:"main/avatar",id:"main/avatar",isDocsHomePage:!1,title:"Avatar",description:"Avatars are found all over ui design from lists to profile screens. They are",source:"@site/docs/main/avatar.md",slug:"/avatar",permalink:"/docs/next/avatar",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/avatar.md",version:"current",sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/docs/next/troubleshooting"},next:{title:"Badge",permalink:"/docs/next/badge"}},o=[{value:"Usage",id:"usage",children:[]}],p={rightToc:o};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Avatars are found all over ui design from lists to profile screens. They are\ncommonly used to represent a user and can contain photos, icons, or even text."),Object(c.b)("div",{class:"component-preview component-preview--grid"},Object(c.b)("figure",null,Object(c.b)("img",{src:"/img/avatar/avatar--photo.jpg",alt:"Standard Avatar"}),Object(c.b)("figcaption",null,"Standard")),Object(c.b)("figure",null,Object(c.b)("img",{src:"/img/avatar/avatar--title.jpg",alt:"Avatar with Title"}),Object(c.b)("figcaption",null,"Title")),Object(c.b)("figure",null,Object(c.b)("img",{src:"/img/avatar/avatar--icon.jpg",alt:"Avatar with Icon"}),Object(c.b)("figcaption",null,"Icon")),Object(c.b)("figure",null,Object(c.b)("img",{src:"/img/avatar/avatar--edit.jpg",alt:"Standard Avatar with accessory"}),Object(c.b)("figcaption",null,"Standard with accessory"))),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("div",{className:"snack-player","data-snack-name":"RNE Avatar","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Avatar%20%7D%20from%20'react-native-elements'%3B%0A%0Aconst%20YourApp%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7B%7B%20flex%3A%201%2C%20justifyContent%3A%20'center'%2C%20alignItems%3A%20'center'%20%7D%7D%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fs3.amazonaws.com%2Fuifaces%2Ffaces%2Ftwitter%2Fladylexy%2F128.jpg'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CAvatar%20rounded%20title%3D%22MD%22%20%2F%3E%0A%20%20%20%20%20%20%3CAvatar%20rounded%20icon%3D%7B%7B%20name%3A%20'home'%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fs3.amazonaws.com%2Fuifaces%2Ffaces%2Ftwitter%2Fadhamdannaway%2F128.jpg'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CAvatar.Accessory%20%2F%3E%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20YourApp%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(c.b)("h4",{id:"avatar-with-initials"},"Avatar with initials"),Object(c.b)("img",{src:"/img/avatar_with_initials.png",width:"500"}),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import { Avatar } from "react-native-elements";\n\n<Avatar\n  size="small"\n  rounded\n  title="MT"\n  onPress={() => console.log("Works!")}\n  activeOpacity={0.7}\n/>\n<Avatar\n  size="medium"\n  title="BP"\n  onPress={() => console.log("Works!")}\n  activeOpacity={0.7}\n/>\n<Avatar\n  size="large"\n  title="LW"\n  onPress={() => console.log("Works!")}\n  activeOpacity={0.7}\n/>\n<Avatar\n  size="xlarge"\n  rounded\n  title="CR"\n  onPress={() => console.log("Works!")}\n  activeOpacity={0.7}\n/>\n')),Object(c.b)("h4",{id:"avatar-with-icons"},"Avatar with icons"),Object(c.b)("img",{src:"/img/avatar_with_icons.png",width:"500"}),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { Avatar } from \"react-native-elements\";\n\n<Avatar\n  rounded\n  icon={{name: 'user', type: 'font-awesome'}}\n  onPress={() => console.log(\"Works!\")}\n  activeOpacity={0.7}\n  containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}\n/>\n<Avatar\n  size=\"small\"\n  rounded\n  icon={{name: 'user', type: 'font-awesome'}}\n  onPress={() => console.log(\"Works!\")}\n  activeOpacity={0.7}\n  containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}\n/>\n<Avatar\n  size=\"medium\"\n  overlayContainerStyle={{backgroundColor: 'blue'}}\n  icon={{name: 'meetup', color: 'red', type: 'font-awesome'}}\n  onPress={() => console.log(\"Works!\")}\n  activeOpacity={0.7}\n  containerStyle={{flex: 3, marginTop: 100}}\n/>\n<Avatar\n  size=\"large\"\n  icon={{name: 'rocket', color: 'orange', type: 'font-awesome'}}\n  overlayContainerStyle={{backgroundColor: 'white'}}\n  onPress={() => console.log(\"Works!\")}\n  activeOpacity={0.7}\n  containerStyle={{flex: 4, marginTop: 75}}\n/>\n<Avatar\n  size=\"xlarge\"\n  rounded\n  icon={{name: 'home', type: 'font-awesome'}}\n  onPress={() => console.log(\"Works!\")}\n  activeOpacity={0.7}\n  containerStyle={{flex: 5, marginRight: 60}}\n/>\n<Avatar\n  size={200}\n  rounded\n  icon={{name: 'user', type: 'font-awesome'}}\n  onPress={() => console.log(\"Works!\")}\n  activeOpacity={0.7}\n  containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}\n/>\n")),Object(c.b)("h4",{id:"avatar-with-title-placeholder"},"Avatar with title placeholder"),Object(c.b)("img",{src:"/img/avatar_with_title_placeholder.gif",width:"500"}),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { Avatar, ListItem } from 'react-native-elements';\n\n<ListItem>\n  <Avatar\n    title={name[0]}\n    source={{ uri: avatar_url }}\n  />\n  <ListItem.Content>\n    <ListItem.Title>{name}</ListItem.Title>\n    <ListItem.SubTitle>{role}</ListItem.Subtitle>\n  </ListItem.Content>\n  <ListItem.Chevron/>\n/>;\n")),Object(c.b)("hr",null),Object(c.b)(b.default,{mdxType:"Props"}),Object(c.b)("hr",null))}O.isMDXComponent=!0},293:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},O=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),O=p(a),d=n,m=O["".concat(b,".").concat(d)]||O[d]||j[d]||c;return a?r.a.createElement(m,l(l({ref:t},o),{},{components:a})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var o=2;o<c;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},61:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),c=(a(0),a(293)),b={},l={unversionedId:"main/props/avatar",id:"main/props/avatar",isDocsHomePage:!1,title:"avatar",description:"Props",source:"@site/docs/main/props/avatar.md",slug:"/main/props/avatar",permalink:"/docs/next/main/props/avatar",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/props/avatar.md",version:"current"},i=[{value:"Props",id:"props",children:[]},{value:"Child Components",id:"child-components",children:[{value:"Accessory",id:"accessory",children:[]}]},{value:"Reference",id:"reference",children:[{value:"<code>activeOpacity</code>",id:"activeopacity",children:[]},{value:"<code>avatarStyle</code>",id:"avatarstyle",children:[]},{value:"<code>Component</code>",id:"component",children:[]},{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>icon</code>",id:"icon",children:[]},{value:"<code>iconStyle</code>",id:"iconstyle",children:[]},{value:"<code>ImageComponent</code>",id:"imagecomponent",children:[]},{value:"<code>imageProps</code>",id:"imageprops",children:[]},{value:"<code>onLongPress</code>",id:"onlongpress",children:[]},{value:"<code>onPress</code>",id:"onpress",children:[]},{value:"<code>overlayContainerStyle</code>",id:"overlaycontainerstyle",children:[]},{value:"<code>placeholderStyle</code>",id:"placeholderstyle",children:[]},{value:"<code>renderPlaceholderContent</code>",id:"renderplaceholdercontent",children:[]},{value:"<code>rounded</code>",id:"rounded",children:[]},{value:"<code>size</code>",id:"size",children:[]},{value:"<code>source</code>",id:"source",children:[]},{value:"<code>title</code>",id:"title",children:[]},{value:"<code>titleStyle</code>",id:"titlestyle",children:[]}]}],o={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#activeopacity"}),Object(c.b)("inlineCode",{parentName:"a"},"activeOpacity"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#avatarstyle"}),Object(c.b)("inlineCode",{parentName:"a"},"avatarStyle"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#component"}),Object(c.b)("inlineCode",{parentName:"a"},"Component"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#containerstyle"}),Object(c.b)("inlineCode",{parentName:"a"},"containerStyle"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#icon"}),Object(c.b)("inlineCode",{parentName:"a"},"icon"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#iconstyle"}),Object(c.b)("inlineCode",{parentName:"a"},"iconStyle"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#imagecomponent"}),Object(c.b)("inlineCode",{parentName:"a"},"ImageComponent"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#imageprops"}),Object(c.b)("inlineCode",{parentName:"a"},"imageProps"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#onlongpress"}),Object(c.b)("inlineCode",{parentName:"a"},"onLongPress"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#onpress"}),Object(c.b)("inlineCode",{parentName:"a"},"onPress"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#overlaycontainerstyle"}),Object(c.b)("inlineCode",{parentName:"a"},"overlayContainerStyle"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#placeholderstyle"}),Object(c.b)("inlineCode",{parentName:"a"},"placeholderStyle"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#renderplaceholdercontent"}),Object(c.b)("inlineCode",{parentName:"a"},"renderPlaceholderContent"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#rounded"}),Object(c.b)("inlineCode",{parentName:"a"},"rounded"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#size"}),Object(c.b)("inlineCode",{parentName:"a"},"size"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#source"}),Object(c.b)("inlineCode",{parentName:"a"},"source"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#title"}),Object(c.b)("inlineCode",{parentName:"a"},"title"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#titlestyle"}),Object(c.b)("inlineCode",{parentName:"a"},"titleStyle")))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"child-components"},"Child Components"),Object(c.b)("h3",{id:"accessory"},"Accessory"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Receives either all ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/main/props/icon#props"}),"Icon")," or ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/main/props/image#props"}),"Image")," props.")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"reference"},"Reference"),Object(c.b)("h3",{id:"activeopacity"},Object(c.b)("inlineCode",{parentName:"h3"},"activeOpacity")),Object(c.b)("p",null,"Opacity when pressed"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0.2")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"avatarstyle"},Object(c.b)("inlineCode",{parentName:"h3"},"avatarStyle")),Object(c.b)("p",null,"Style for avatar image"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"component"},Object(c.b)("inlineCode",{parentName:"h3"},"Component")),Object(c.b)("p",null,"Component for enclosing element (eg: TouchableHighlight, View, etc)"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"TouchableHighlight")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"containerstyle"},Object(c.b)("inlineCode",{parentName:"h3"},"containerStyle")),Object(c.b)("p",null,"Styling for outer container"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"icon"},Object(c.b)("inlineCode",{parentName:"h3"},"icon")),Object(c.b)("p",null,"Displays an icon as the main content of the Avatar. ",Object(c.b)("strong",{parentName:"p"},"Cannot be used alongside\ntitle"),". When used with the ",Object(c.b)("inlineCode",{parentName:"p"},"source")," prop it will be used as the placeholder."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object {name: string, color: string, size: number, type: string (default is material, or choose from ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/main/props/icon#available-icon-sets"}),"supported icon sets"),"), iconStyle: object(style)}"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"iconstyle"},Object(c.b)("inlineCode",{parentName:"h3"},"iconStyle")),Object(c.b)("p",null,"Extra styling for icon component (optional)"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"imagecomponent"},Object(c.b)("inlineCode",{parentName:"h3"},"ImageComponent")),Object(c.b)("p",null,"Custom ImageComponent for Avatar"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"React component or element"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Image")))),Object(c.b)("h3",{id:"imageprops"},Object(c.b)("inlineCode",{parentName:"h3"},"imageProps")),Object(c.b)("p",null,'Optional properties to pass to the avatar e.g "resizeMode"'),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"{",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/main/props/image#props"}),"...Image props"),"}"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"onlongpress"},Object(c.b)("inlineCode",{parentName:"h3"},"onLongPress")),Object(c.b)("p",null,"Callback function when long pressing component"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"onpress"},Object(c.b)("inlineCode",{parentName:"h3"},"onPress")),Object(c.b)("p",null,"Callback function when pressing component"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"overlaycontainerstyle"},Object(c.b)("inlineCode",{parentName:"h3"},"overlayContainerStyle")),Object(c.b)("p",null,"Style for the view outside image or icon"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"placeholderstyle"},Object(c.b)("inlineCode",{parentName:"h3"},"placeholderStyle")),Object(c.b)("p",null,"Adds style to the placeholder wrapper"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"{ backgroundColor: '#BDBDBD' }"))))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"renderplaceholdercontent"},Object(c.b)("inlineCode",{parentName:"h3"},"renderPlaceholderContent")),Object(c.b)("p",null,"Custom placeholder element (by default, it's the title)"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"React component or element"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"rounded"},Object(c.b)("inlineCode",{parentName:"h3"},"rounded")),Object(c.b)("p",null,"Makes the avatar circular"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"size"},Object(c.b)("inlineCode",{parentName:"h3"},"size")),Object(c.b)("p",null,"Size of the avatar"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string(",Object(c.b)("inlineCode",{parentName:"td"},"small"),", ",Object(c.b)("inlineCode",{parentName:"td"},"medium"),", ",Object(c.b)("inlineCode",{parentName:"td"},"large"),", ",Object(c.b)("inlineCode",{parentName:"td"},"xlarge"),") or number"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"small"))))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"source"},Object(c.b)("inlineCode",{parentName:"h3"},"source")),Object(c.b)("p",null,"Image source"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://reactnative.dev/docs/images"}),"ImageSource")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"title"},Object(c.b)("inlineCode",{parentName:"h3"},"title")),Object(c.b)("p",null,"Renders title in the placeholder"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"titlestyle"},Object(c.b)("inlineCode",{parentName:"h3"},"titleStyle")),Object(c.b)("p",null,"Style for the title"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))))}p.isMDXComponent=!0}}]);