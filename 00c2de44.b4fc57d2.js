(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{202:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,u=m["".concat(r,".").concat(d)]||m[d]||s[d]||l;return n?i.a.createElement(u,o(o({ref:t},c),{},{components:n})):i.a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<l;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),l=(n(0),n(202)),r={title:"React Native Elements 1.0",author:"Core Team",authorURL:"https://opencollective.com/react-native-elements#team"},o={permalink:"/react-native-elements/blog/2019/01/27/1.0-release",source:"@site/blog/2019-01-27-1.0-release.md",description:"React Native Elements has UI elements that are easy to use & really customizable. It also has theming, platform specific search bars, React Native Web support, and much more.",date:"2019-01-27T00:00:00.000Z",tags:[],title:"React Native Elements 1.0",readingTime:7.64,truncated:!1,prevItem:{title:"Version 2.3 Upgrade Guide",permalink:"/react-native-elements/blog/2020/08/10/2.3-upgrade-guide"},nextItem:{title:"React Native Web",permalink:"/react-native-elements/blog/2018/12/13/react-native-web"}},b=[{value:"Installation",id:"installation",children:[]},{value:"Breaking changes",id:"breaking-changes",children:[{value:"<code>Avatar</code>",id:"avatar",children:[]},{value:"<code>Badge</code>",id:"badge",children:[]},{value:"<code>Button</code>",id:"button",children:[]},{value:"<code>ButtonGroup</code>",id:"buttongroup",children:[]},{value:"<code>Card</code>",id:"card",children:[]},{value:"<code>Form</code>",id:"form",children:[]},{value:"<code>Header</code>",id:"header",children:[]},{value:"<code>SearchBar</code>",id:"searchbar",children:[]},{value:"<code>List</code>",id:"list",children:[]},{value:"<code>ListItem</code>",id:"listitem",children:[]},{value:"<code>PricingCard</code>",id:"pricingcard",children:[]},{value:"<code>Text</code>",id:"text",children:[]}]},{value:"New features",id:"new-features",children:[]},{value:"Assorted fixes &amp; improvements",id:"assorted-fixes--improvements",children:[]},{value:"Ecosystem and web support",id:"ecosystem-and-web-support",children:[{value:"Independent Projects",id:"independent-projects",children:[]},{value:"Web Support",id:"web-support",children:[]}]}],c={rightToc:b};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"React Native Elements has UI elements that are easy to use & really customizable. It also has theming, platform specific search bars, ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/necolas/react-native-web"}),"React Native Web")," support, and much more.")),Object(l.b)("p",null,"It's finally here! Let's put our hands together and welcome React Native Elements 1.0 \ud83c\udf89"),Object(l.b)("p",null,"This release is centered around making RNE components that everyone loves more intuitive to use & stable. This is not to say that all the work is done, but this is definitely a giant leap in the right direction and one that we have been working on for over a year."),Object(l.b)("p",null,"I want like to say thank you to our users for using RNE and giving us feedback through issues on the repo and also the contributors who have the taken time to contribute and help improve RNE together. Finally, I'd like to say a big thanks to ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://twitter.com/roach_iam"}),"Kyle Roach")," and ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://twitter.com/xaviervllgr"}),"Xavier Villel\xe9gier")," without whom this project would not have been as awesome as it is today!!"),Object(l.b)("p",null,"This blog post is meant to serve as a migration guide for upgrading to ",Object(l.b)("inlineCode",{parentName:"p"},'react-native-elements: "^1.0.0"')," from ",Object(l.b)("inlineCode",{parentName:"p"},"0.19.1")," and also a way to document and share all the breaking changes, new features and other improvements in this release. For those updating from ",Object(l.b)("inlineCode",{parentName:"p"},"1.0.0-beta7")," you can view those release notes ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-elements/react-native-elements/releases/tag/v1.0.0"}),"here"),"."),Object(l.b)("p",null,"The wait is over!! Get excited, cause we certainly are. 14K \ud83c\udf1f and counting..."),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("p",null,"First, install the library using your favorite package manager: ",Object(l.b)("inlineCode",{parentName:"p"},"yarn add react-native-elements")),Object(l.b)("p",null,"Also if you are using an older version, just update the ",Object(l.b)("inlineCode",{parentName:"p"},"react-native-elements")," version in ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," to ",Object(l.b)("inlineCode",{parentName:"p"},"^1.0.0")),Object(l.b)("h2",{id:"breaking-changes"},"Breaking changes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Updated all components that have the ",Object(l.b)("inlineCode",{parentName:"p"},"component")," prop to ",Object(l.b)("inlineCode",{parentName:"p"},"Component")," prop as per convention (",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1479"}),"#1479"),")")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Some colors have been removed from the colors file and some changed. Here's the list of colors from 0.19.1."))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  primary: '#9E9E9E',\n  primary1: '#4d86f7',\n  primary2: '#6296f9',\n  secondary: '#8F0CE8',\n  secondary2: '#00B233',\n  secondary3: '#00FF48',\n  grey0: '#393e42',\n  grey1: '#43484d',\n  grey2: '#5e6977',\n  grey3: '#86939e',\n  grey4: '#bdc6cf',\n  grey5: '#e1e8ee',\n  dkGreyBg: '#232323',\n  greyOutline: '#bbb',\n  searchBg: '#303337',\n  disabled: '#dadee0',\n  white: '#ffffff',\n  error: '#ff190c',\n};\n")),Object(l.b)("h3",{id:"avatar"},Object(l.b)("inlineCode",{parentName:"h3"},"Avatar")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Props ",Object(l.b)("inlineCode",{parentName:"li"},"small"),", ",Object(l.b)("inlineCode",{parentName:"li"},"medium"),", ",Object(l.b)("inlineCode",{parentName:"li"},"large"),", ",Object(l.b)("inlineCode",{parentName:"li"},"xlarge")," have been removed. Usage is now ",Object(l.b)("inlineCode",{parentName:"li"},'size="small"')," etc. ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1098"}),"#1098"))),Object(l.b)("h3",{id:"badge"},Object(l.b)("inlineCode",{parentName:"h3"},"Badge")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"wrapperStyle")," prop has been removed - use ",Object(l.b)("inlineCode",{parentName:"li"},"containerStyle")," prop instead (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1545"}),"#1545"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"badgeStyle")," prop replaces previous behaviour of ",Object(l.b)("inlineCode",{parentName:"li"},"containerStyle")," prop (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1545"}),"#1545"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"element")," prop which was undocumented is removed - use ",Object(l.b)("inlineCode",{parentName:"li"},"value")," prop instead (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1545"}),"#1545"),")"),Object(l.b)("li",{parentName:"ul"},"can no longer render children - instead use ",Object(l.b)("inlineCode",{parentName:"li"},"value")," prop which now supports rendering react components (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1545"}),"#1545"),")")),Object(l.b)("h3",{id:"button"},Object(l.b)("inlineCode",{parentName:"h3"},"Button")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"By default on Android there's no more elevation (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1538"}),"#1538"),"). To get elevation, use the ",Object(l.b)("inlineCode",{parentName:"li"},"raised")," prop."),Object(l.b)("li",{parentName:"ul"},"Renamed ",Object(l.b)("inlineCode",{parentName:"li"},"textStyle")," to ",Object(l.b)("inlineCode",{parentName:"li"},"titleStyle")),Object(l.b)("li",{parentName:"ul"},"Renamed ",Object(l.b)("inlineCode",{parentName:"li"},"containerViewStyle")," to ",Object(l.b)("inlineCode",{parentName:"li"},"containerStyle")),Object(l.b)("li",{parentName:"ul"},"Removed props ",Object(l.b)("inlineCode",{parentName:"li"},"transparent")," and ",Object(l.b)("inlineCode",{parentName:"li"},"outline")," (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1540"}),"#1540"),"). Instead use the ",Object(l.b)("inlineCode",{parentName:"li"},"type")," prop.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// Transparent\n<Button type="clear" />\n\n// Outline\n<Button type="outline" />\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Removed props ",Object(l.b)("inlineCode",{parentName:"li"},"secondary"),", ",Object(l.b)("inlineCode",{parentName:"li"},"secondary2"),", ",Object(l.b)("inlineCode",{parentName:"li"},"secondary3"),", ",Object(l.b)("inlineCode",{parentName:"li"},"primary1"),", ",Object(l.b)("inlineCode",{parentName:"li"},"primary2"),", ",Object(l.b)("inlineCode",{parentName:"li"},"backgroundColor"),". Use the ",Object(l.b)("inlineCode",{parentName:"li"},"buttonStyle")," prop to set the background color."),Object(l.b)("li",{parentName:"ul"},"Removed ",Object(l.b)("inlineCode",{parentName:"li"},"iconComponent")," prop. If you want to use a different Icon component - the ",Object(l.b)("inlineCode",{parentName:"li"},"icon")," prop supports custom elements."),Object(l.b)("li",{parentName:"ul"},"Removed ",Object(l.b)("inlineCode",{parentName:"li"},"loadingRight")," prop. Loading indicator ",Object(l.b)("strong",{parentName:"li"},"displays without title"),". May re-add in future."),Object(l.b)("li",{parentName:"ul"},"Removed ",Object(l.b)("inlineCode",{parentName:"li"},"borderRadius")," prop. To control the border radius use the ",Object(l.b)("inlineCode",{parentName:"li"},"buttonStyle")," prop."),Object(l.b)("li",{parentName:"ul"},"Removed props ",Object(l.b)("inlineCode",{parentName:"li"},"color"),", ",Object(l.b)("inlineCode",{parentName:"li"},"fontSize"),", ",Object(l.b)("inlineCode",{parentName:"li"},"fontWeight"),", and ",Object(l.b)("inlineCode",{parentName:"li"},"fontFamily"),". Instead use the ",Object(l.b)("inlineCode",{parentName:"li"},"titleStyle")," prop to set attributes for the title."),Object(l.b)("li",{parentName:"ul"},"Removed ",Object(l.b)("inlineCode",{parentName:"li"},"large")," prop. May re-add in future.")),Object(l.b)("h3",{id:"buttongroup"},Object(l.b)("inlineCode",{parentName:"h3"},"ButtonGroup")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"disableSelected")," prop has been removed (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1587"}),"#1587"),")")),Object(l.b)("h3",{id:"card"},Object(l.b)("inlineCode",{parentName:"h3"},"Card")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"fontFamily")," prop is deprecated - instead use ",Object(l.b)("inlineCode",{parentName:"li"},"titleStyle")," prop (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1587"}),"#1659"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"flexDirection")," prop is deprecated - instead use ",Object(l.b)("inlineCode",{parentName:"li"},"wrapperStyle")," prop (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1587"}),"#1659"),")")),Object(l.b)("h3",{id:"form"},Object(l.b)("inlineCode",{parentName:"h3"},"Form")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"FormInput")," been renamed to ",Object(l.b)("inlineCode",{parentName:"p"},"Input")," (",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-elements/react-native-elements/pull/497"}),"#497"),")"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"clearText")," method renamed to ",Object(l.b)("inlineCode",{parentName:"li"},"clear")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"textInputRef")," and ",Object(l.b)("inlineCode",{parentName:"li"},"containerRef")," props removed"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"normalizeFontSize")," prop removed. You can use the ",Object(l.b)("inlineCode",{parentName:"li"},"normalize")," helper along with the ",Object(l.b)("inlineCode",{parentName:"li"},"inputStyle")," prop to normalize font sizes."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"FormLabel")," has been removed. This is now built into the ",Object(l.b)("inlineCode",{parentName:"p"},"Input")," component by use of ",Object(l.b)("inlineCode",{parentName:"p"},"label")," prop. Props ",Object(l.b)("inlineCode",{parentName:"p"},"labelStyle")," and ",Object(l.b)("inlineCode",{parentName:"p"},"labelProps")," can be used to customize it.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"FormValidationMessage")," has been removed. This is now built into the ",Object(l.b)("inlineCode",{parentName:"p"},"Input")," component by use of ",Object(l.b)("inlineCode",{parentName:"p"},"errorMessage")," prop. Props ",Object(l.b)("inlineCode",{parentName:"p"},"errorStyle")," and ",Object(l.b)("inlineCode",{parentName:"p"},"errorProps")," can be used to customize it."))),Object(l.b)("h3",{id:"header"},Object(l.b)("inlineCode",{parentName:"h3"},"Header")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Props ",Object(l.b)("inlineCode",{parentName:"li"},"innerContainerStyles"),", ",Object(l.b)("inlineCode",{parentName:"li"},"outerContainerStyles")," removed ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1221"}),"#1221"),". Instead use the ",Object(l.b)("inlineCode",{parentName:"li"},"containerStyle")," prop for main styling, along with props ",Object(l.b)("inlineCode",{parentName:"li"},"leftContainerStyle"),", ",Object(l.b)("inlineCode",{parentName:"li"},"centerContainerStyle"),", and ",Object(l.b)("inlineCode",{parentName:"li"},"rightContainerStyle")," when needed.")),Object(l.b)("h3",{id:"searchbar"},Object(l.b)("inlineCode",{parentName:"h3"},"SearchBar")),Object(l.b)("p",null,"SearchBar now supports different platform styles! To get an iOS or Android themed SearchBar, use the ",Object(l.b)("inlineCode",{parentName:"p"},"platform")," prop. ",Object(l.b)("inlineCode",{parentName:"p"},'platform="ios"')," or ",Object(l.b)("inlineCode",{parentName:"p"},'platform="android"')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"noIcon")," prop removed. Instead to remove the search icon use the ",Object(l.b)("inlineCode",{parentName:"li"},"searchIcon")," prop. E.g ",Object(l.b)("inlineCode",{parentName:"li"},"searchIcon={null}")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"showLoadingIcon")," prop renamed to ",Object(l.b)("inlineCode",{parentName:"li"},"showLoading")," ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/837"}),"#837")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"containerRef")," prop removed")),Object(l.b)("h3",{id:"list"},Object(l.b)("inlineCode",{parentName:"h3"},"List")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"strong"},"List")," component has been removed!")," ",Object(l.b)("inlineCode",{parentName:"li"},"List")," was just a regular React Native View with some small margin styles. It wasn't actually needed to use the ",Object(l.b)("inlineCode",{parentName:"li"},"ListItem")," component. Instead we recommend using the ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://facebook.github.io/react-native/docs/flatlist"}),Object(l.b)("inlineCode",{parentName:"a"},"FlatList"))," or ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://facebook.github.io/react-native/docs/sectionlist"}),Object(l.b)("inlineCode",{parentName:"a"},"SectionList"))," components from React Native which function both as Views and also displaying items, pull to refresh and more."),Object(l.b)("li",{parentName:"ul"},"If you want to apply the same styles that the ",Object(l.b)("inlineCode",{parentName:"li"},"List")," component provided prior to 1.0, ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/issues/1565#issuecomment-436982251"}),"see this comment"),".")),Object(l.b)("h3",{id:"listitem"},Object(l.b)("inlineCode",{parentName:"h3"},"ListItem")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"leftIconOnPress"),", ",Object(l.b)("inlineCode",{parentName:"li"},"leftIconOnLongPress"),", ",Object(l.b)("inlineCode",{parentName:"li"},"leftIconUnderlayColor"),", and ",Object(l.b)("inlineCode",{parentName:"li"},"leftIconContainerStyle"),", removed. The ",Object(l.b)("inlineCode",{parentName:"li"},"leftIcon")," prop can accept props.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<ListItem\n  title=\"Yea\"\n  leftIcon={{ name: 'home', onPress: () => alert('hello') }}\n/>\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"avatar"),", ",Object(l.b)("inlineCode",{parentName:"li"},"avatarStyle"),", ",Object(l.b)("inlineCode",{parentName:"li"},"avatarContainerStyle"),", ",Object(l.b)("inlineCode",{parentName:"li"},"roundAvatar"),", and ",Object(l.b)("inlineCode",{parentName:"li"},"avatarOverlayContainerStyle")," removed. Avatars can now be customized using the ",Object(l.b)("inlineCode",{parentName:"li"},"rightAvatar")," and ",Object(l.b)("inlineCode",{parentName:"li"},"leftAvatar")," props which can either render a custom element or an object that describes the props from Avatar.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<ListItem\n  leftAvatar={{\n    title: 'MD',\n    rounded: false,\n    containerStyle: { margin: 5 },\n    onPress: () => alert('hey'),\n  }}\n  rightAvatar={{ title: 'DW', onLongPress: () => alert('hey') }}\n/>\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"wrapperStyle")," prop removed. Use the ",Object(l.b)("inlineCode",{parentName:"li"},"containerStyle")," prop instead."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"titleNumberOfLines"),", ",Object(l.b)("inlineCode",{parentName:"li"},"subtitleNumberOfLines"),", and ",Object(l.b)("inlineCode",{parentName:"li"},"rightTitleNumberOfLines")," props removed. Use the ",Object(l.b)("inlineCode",{parentName:"li"},"titleProps"),", ",Object(l.b)("inlineCode",{parentName:"li"},"rightTitleProps"),", and ",Object(l.b)("inlineCode",{parentName:"li"},"subtitleProps")," props to pass props for each..")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<ListItem titleProps={{ numberOfLines: 4 }} />\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"hideChevron")," removed. Use the ",Object(l.b)("inlineCode",{parentName:"li"},"chevron")," prop instead. However, the behaviour is swapped ",Object(l.b)("inlineCode",{parentName:"li"},"hideChevron={true}")," behaves like ",Object(l.b)("inlineCode",{parentName:"li"},"chevron={false}")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"chevronColor")," removed. The ",Object(l.b)("inlineCode",{parentName:"li"},"chevron")," prop now can accept an object describing it's appearance.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<ListItem chevron={{ color: 'pink' }} />\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"fontFamily")," removed. Use the ",Object(l.b)("inlineCode",{parentName:"li"},"titleStyle")," and ",Object(l.b)("inlineCode",{parentName:"li"},"subTitleStyle")," props to set change the text styling"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"titleContainerStyle")," removed. Use the ",Object(l.b)("inlineCode",{parentName:"li"},"titleStyle")," prop instead."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"rightTitleContainerStyle")," removed. Use the ",Object(l.b)("inlineCode",{parentName:"li"},"rightTitleStyle")," prop instead."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"subtitleContainerStyle")," removed. Use the ",Object(l.b)("inlineCode",{parentName:"li"},"subtitleStyle")," prop instead."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"label")," prop removed."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"switchButton"),", ",Object(l.b)("inlineCode",{parentName:"li"},"onSwitch"),", ",Object(l.b)("inlineCode",{parentName:"li"},"switchDisabled"),", ",Object(l.b)("inlineCode",{parentName:"li"},"switchOnTintColor"),", ",Object(l.b)("inlineCode",{parentName:"li"},"switchThumbTintColor"),", ",Object(l.b)("inlineCode",{parentName:"li"},"switchTintColor"),", and ",Object(l.b)("inlineCode",{parentName:"li"},"switched")," removed. Instead use the ",Object(l.b)("inlineCode",{parentName:"li"},"switch")," prop wich accepts an object describing its props."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"textInput"),",",Object(l.b)("inlineCode",{parentName:"li"},"textInputAutoCapitalize"),",",Object(l.b)("inlineCode",{parentName:"li"},"textInputAutoCorrect"),",",Object(l.b)("inlineCode",{parentName:"li"},"textInputAutoFocus"),",",Object(l.b)("inlineCode",{parentName:"li"},"textInputEditable"),",",Object(l.b)("inlineCode",{parentName:"li"},"textInputKeyboardType"),",",Object(l.b)("inlineCode",{parentName:"li"},"textInputMaxLength"),",",Object(l.b)("inlineCode",{parentName:"li"},"textInputMultiline"),",",Object(l.b)("inlineCode",{parentName:"li"},"textInputOnChangeText"),",",Object(l.b)("inlineCode",{parentName:"li"},"textInputOnFocus"),",",Object(l.b)("inlineCode",{parentName:"li"},"textInputOnBlur"),",",Object(l.b)("inlineCode",{parentName:"li"},"textInputSelectTextOnFocus"),",",Object(l.b)("inlineCode",{parentName:"li"},"textInputReturnKeyType"),",",Object(l.b)("inlineCode",{parentName:"li"},"textInputValue"),",",Object(l.b)("inlineCode",{parentName:"li"},"textInputSecure"),",",Object(l.b)("inlineCode",{parentName:"li"},"textInputStyle"),",",Object(l.b)("inlineCode",{parentName:"li"},"textInputContainerStyle"),",",Object(l.b)("inlineCode",{parentName:"li"},"textInputPlaceholder")," removed. We now expose a single ",Object(l.b)("inlineCode",{parentName:"li"},"input")," prop which accepts an object describing its props."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"onPressRightIcon")," removed. Use the ",Object(l.b)("inlineCode",{parentName:"li"},"rightIcon")," prop which can accept an object now describing its props.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<ListItem rightIcon={{ name: 'home', onPress: () => console.log('clicked') }} />\n")),Object(l.b)("h3",{id:"pricingcard"},Object(l.b)("inlineCode",{parentName:"h3"},"PricingCard")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"titleFont")," removed. Use the ",Object(l.b)("inlineCode",{parentName:"li"},"titleStyle")," prop instead to customize the title. ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1231"}),"#1231")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"pricingFont")," removed. Use the ",Object(l.b)("inlineCode",{parentName:"li"},"pricingStyle")," prop instead to customize the price. ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1231"}),"#1231")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"infoFont")," removed. Use the ",Object(l.b)("inlineCode",{parentName:"li"},"infoStyle")," prop instead to customize the info. ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1231"}),"#1231")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"buttonFont")," removed. Use the ",Object(l.b)("inlineCode",{parentName:"li"},"button")," prop with a ",Object(l.b)("inlineCode",{parentName:"li"},"buttonStyle")," key to set this.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<PricingCard button={{ buttonStyle: { fontFamily: 'Arial' } }} />\n")),Object(l.b)("h3",{id:"text"},Object(l.b)("inlineCode",{parentName:"h3"},"Text")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"fontFamily")," prop is removed - instead use ",Object(l.b)("inlineCode",{parentName:"li"},"style")," prop (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1587"}),"#1659"),")")),Object(l.b)("h2",{id:"new-features"},"New features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Support for React Native Web - read more on it ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/react-native-elements/blog/2018/12/13/react-native-web"}),"here")," (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1664"}),"#1664"),")"),Object(l.b)("li",{parentName:"ul"},"Theming support across components - easily build light & dark modes and theme your components from one place (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1454"}),"#1454"),")"),Object(l.b)("li",{parentName:"ul"},"New ",Object(l.b)("inlineCode",{parentName:"li"},"<Image />")," Component - displays images with a placeholder and smooth image load transitioning (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1582"}),"#1582"),")"),Object(l.b)("li",{parentName:"ul"},"New ",Object(l.b)("inlineCode",{parentName:"li"},"<Input />")," Component - a branch new and improved replacement for ",Object(l.b)("inlineCode",{parentName:"li"},"<FormInput />")," (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/497"}),"#497"),")"),Object(l.b)("li",{parentName:"ul"},"New ",Object(l.b)("inlineCode",{parentName:"li"},"withBadge")," HOC allows you to easily add badges to icons and other components (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1604"}),"#1604"),")"),Object(l.b)("li",{parentName:"ul"},'New "mini badge" with the ',Object(l.b)("inlineCode",{parentName:"li"},"<Badge />")," component - Perfect for status indicators and notifications ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1545"}),"#1545")),Object(l.b)("li",{parentName:"ul"},"New Tap Rating ",Object(l.b)("inlineCode",{parentName:"li"},"<AirbnbRating />")," component - powered by ",Object(l.b)("inlineCode",{parentName:"li"},"react-native-ratings")," (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1671"}),"#1671"),")"),Object(l.b)("li",{parentName:"ul"},"Platform-specific ",Object(l.b)("inlineCode",{parentName:"li"},"<SearchBar />")," component - drop-in usage with native look and feel (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/837"}),"#837"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<Slider />")," Component - supports ",Object(l.b)("inlineCode",{parentName:"li"},"vertical")," orientation (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1698"}),"#1698"),")"),Object(l.b)("li",{parentName:"ul"},"Button types! Easily have solid, clear, and outline buttons with one prop. (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1540"}),"#1540"),")"),Object(l.b)("li",{parentName:"ul"},"Background image support in the ",Object(l.b)("inlineCode",{parentName:"li"},"<Header />")," (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1556"}),"#1556"),")"),Object(l.b)("li",{parentName:"ul"},"Add support for ",Object(l.b)("inlineCode",{parentName:"li"},"AntDesign")," icons (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1529"}),"#1529"),")")),Object(l.b)("h2",{id:"assorted-fixes--improvements"},"Assorted fixes & improvements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Updated ",Object(l.b)("inlineCode",{parentName:"li"},"react-native-vector-icons")," peerDependency to ",Object(l.b)("inlineCode",{parentName:"li"},">4.2.0")),Object(l.b)("li",{parentName:"ul"},"Expose ",Object(l.b)("inlineCode",{parentName:"li"},"helpers")," methods that are used internally"),Object(l.b)("li",{parentName:"ul"},"Close to 100% types coverage"),Object(l.b)("li",{parentName:"ul"},"Docs",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Add descriptions for every Component (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1527"}),"#1527"),")"),Object(l.b)("li",{parentName:"ul"},"Add central place to show supported icon sets (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1532"}),"#1532"),")"),Object(l.b)("li",{parentName:"ul"},"Added Showcase section to display apps using RNE (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-elements/react-native-elements/pull/1704"}),"#1704"),")")))),Object(l.b)("h2",{id:"ecosystem-and-web-support"},"Ecosystem and web support"),Object(l.b)("h3",{id:"independent-projects"},"Independent Projects"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Mock iOS Settings Screen - Check it out on the ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Monte9/react-native-elements-app"}),"RNE-App here"))),Object(l.b)("h3",{id:"web-support"},"Web Support"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Follow ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/react-native-elements/blog/2018/12/13/react-native-web"}),"this detailed Blog Post")," to use RNElements with RNWeb")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Lastly, here is the RNE v1 release in numbers:"),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"470 commits (with over 272 PR's)"),Object(l.b)("li",{parentName:"ul"},"371 files changes (52,920 additions and 32,737 deletions)"),Object(l.b)("li",{parentName:"ul"},"Over 80 contributors"),Object(l.b)("li",{parentName:"ul"},"Over \\$1500 awarded to contributors"))),Object(l.b)("hr",null),Object(l.b)("p",null,"Thanks for reading! Feel free to share this post if you enjoyed reading it."),Object(l.b)("p",null,"If you run into any trouble using RNE, please open a new issue ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-elements/react-native-elements/issues"}),"here"),". Also if you want to support us, you can contribute to our Open Collective ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://opencollective.com/react-native-elements"}),"here"),"."))}p.isMDXComponent=!0}}]);