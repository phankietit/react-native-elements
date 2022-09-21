(self.webpackChunk=self.webpackChunk||[]).push([[53673],{19979:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(67294),l=n(13925),r=n(54236),i=n(40318),o=n(62290);const d=function(){var e=(0,i.Z)({componentName:"Tile",props:{activeOpacity:{value:.5,type:o.n.Number},caption:{value:"Tile caption",type:o.n.String,description:""},captionStyle:{type:o.n.Object,value:"{}"},containerStyle:{type:o.n.Object,value:"{}"},contentContainerStyle:{type:o.n.Object,value:"{}"},featured:{type:o.n.Boolean,value:!1},height:{type:o.n.Number,value:300},icon:{type:o.n.Object,value:"",description:"object {name: string, color: string, size: number, type: string (default is material, or choose from supported icon sets), iconStyle: object(style)}"},iconContainerStyle:{type:o.n.Object,value:"{}"},ImageComponent:{type:o.n.ReactNode,value:null},imageContainerStyle:{type:o.n.Object,value:"{}"},imageProps:{type:o.n.Object,value:"{}"},onPress:{type:o.n.Function,value:'() => console.log("imageProps()")'},overlayContainerStyle:{type:o.n.Object,value:"{}"},title:{type:o.n.String,value:""},titleNumberOfLines:{type:o.n.Number,value:null},titleStyle:{type:o.n.Object,value:"{}"},width:{type:o.n.Number,value:"400"}},scope:{Tile:l.Tile},imports:{"@rneui/base":{named:["Tile"]}}});return a.createElement(a.Fragment,null,a.createElement(r.Z,{params:e}))}},37047:(e,t,n)=>{"use strict";n.d(t,{w:()=>d});var a=n(67294),l=n(35742),r=n(14330),i=n(98576),o=n(61720),d=function(){return a.createElement(l.Z,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+o.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+r.Z+") format('truetype');\n          }\n        "))}},54236:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(87462),l=n(67294),r=n(91262),i=n(18421),o=n(77356),d=n(41652),p=n(24309),m=n(16042),c=n(20346),s=n(30650);const u=function(e){var t=e.params,n=e.containerStyle,u=void 0===n?{}:n;return l.createElement(r.Z,{fallback:l.createElement(l.Fragment,null,"Loading...")},(function(){return l.createElement(c.X9.Provider,null,l.createElement(c.PK,{initialMetrics:s.o},l.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},u)},l.createElement(i.Z,(0,a.Z)({},t.compilerProps,{minHeight:62,placeholder:o.Z}))),l.createElement(d.Z,{msg:t.errorProps.msg,isPopup:!0}),l.createElement(p.Z,t.knobProps),l.createElement(d.Z,t.errorProps),l.createElement(m.E,t.actions)))}))}},22365:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var a=n(87462),l=n(63366),r=n(67294),i=n(10407),o=n(86010),d=(n(95999),n(52263)),p=n(91262),m=n(66412);const c="playgroundContainer_TGbA",s="playgroundEditor_PvJ1",u="playgroundPreview_bb8I",k="toggleIcon_OnrQ";var g=n(72389),N=n(5434),y=["children","transformCode"];function A(){return r.createElement("div",null,"Loading...")}function h(){var e=(0,g.Z)();return r.createElement(i.uz,{key:String(e),className:s})}function C(){var e=r.useState(!0),t=e[0],n=e[1],a=r.useState(void 0),l=(a[0],a[1],function(){n((function(e){return!e}))});return r.createElement(r.Fragment,null,r.createElement("div",{className:u},r.createElement(p.Z,{fallback:r.createElement(A,null)},(function(){return r.createElement(r.Fragment,null,r.createElement(i.i5,null),r.createElement(i.IF,null),r.createElement("div",{className:(0,o.Z)(k)},r.createElement(N.xoN,{onClick:l})," "))}))),t&&r.createElement(r.Fragment,null," ",r.createElement(h,null)))}function f(e){var t=e.children,n=e.transformCode,o=(0,l.Z)(e,y),p=((0,d.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,m.p)());return r.createElement("div",{className:c},r.createElement(i.nu,(0,a.Z)({code:t.replace(/\n$/,""),transformCode:n||function(e){return e},theme:p},o),r.createElement(r.Fragment,null,r.createElement(C,null))))}},56922:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(67294),l=n(32408),r=n(13925),i=n(97288),o=n(83279);const d=Object.assign({React:a,LinearGradient:o.Z},l,r,i,{Switch:function(){var e=a.useState(!1),t=e[0],n=e[1];return a.createElement(r.Switch,{value:t,onValueChange:n})}},a)},85285:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>C,frontMatter:()=>k,metadata:()=>N,toc:()=>A});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=n(37047),o=(n(9877),n(72360),n(89279)),d=n(47516),p=["components"],m={toc:[]};function c(e){var t=e.components,n=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE Tile","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20ScrollView%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Text%2C%20Tile%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Atype%20TilesComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Tiles%3A%20React.FunctionComponent%3CTilesComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CView%20style%3D%7B%7B%20alignItems%3A%20'center'%20%7D%7D%3E%0A%20%20%20%20%20%20%3CScrollView%20style%3D%7B%7B%20paddingVertical%3A%2010%20%7D%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EFeatured%20Tile%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CTile%0A%20%20%20%20%20%20%20%20%20%20imageSrc%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fwww.mediastorehouse.com%2Fp%2F191%2Fsunset-porthmeor-beach-st-ives-cornwall-11702500.jpg.webp'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D%22When%20I%20admire%20the%20wonders%20of%20a%20sunset%20or%20the%20beauty%20of%20the%20moon%2C%20my%20soul%20expands%20in%20the%20worship%20of%20the%20creator.%22%0A%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2015%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20featured%0A%20%20%20%20%20%20%20%20%20%20caption%3D%22Mahatma%20Gandhi%22%0A%20%20%20%20%20%20%20%20%20%20activeOpacity%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20width%3D%7B310%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EFeatured%20Tile%20with%20Icon%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20paddingTop%3A%2020%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTile%0A%20%20%20%20%20%20%20%20%20%20%20%20imageSrc%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fawildgeographer.files.wordpress.com%2F2015%2F02%2Fjohn_muir_glacier.jpg'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'heart'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'font-awesome'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2060%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'red'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20featured%0A%20%20%20%20%20%20%20%20%20%20%20%20activeOpacity%3D%7B0.8%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'Tile%20pressed'%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B310%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20paddingTop%3A%2020%2C%20paddingBottom%3A%20100%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTile%0A%20%20%20%20%20%20%20%20%20%20%20%20imageSrc%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd6%2FHalf_Dome_from_Glacier_Point%252C_Yosemite_NP_-_Diliff.jpg%2F320px-Half_Dome_from_Glacier_Point%252C_Yosemite_NP_-_Diliff.jpg'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Half%20Dome%2C%20Yosemite%22%0A%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2020%2C%20textAlign%3A%20'center'%2C%20paddingBottom%3A%205%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20activeOpacity%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B310%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20contentContainerStyle%3D%7B%7B%20height%3A%2070%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20paddingBottom%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20flex%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-between'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'green'%20%7D%7D%3EVisit%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%20%7D%7D%3EFind%20out%20More%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FTile%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0AsubHeader%3A%20%7B%0A%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20color%20%3A%20%22white%22%2C%0A%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20paddingVertical%20%3A%205%2C%0A%20%20marginBottom%20%3A%2010%0A%7D%0A%7D)%3B%0A%0Aexport%20default%20Tiles%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}c.isMDXComponent=!0;var s=n(19979),u=["components"],k={id:"tile",title:"Tile"},g=void 0,N={unversionedId:"components/tile",id:"components/tile",title:"Tile",description:"Tiles like Cards, are a convenient way to display related content about a single subject.",source:"@site/docs/components/Tile.mdx",sourceDirName:"components",slug:"/components/tile",permalink:"/docs/next/components/tile",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/Tile.mdx",tags:[],version:"current",frontMatter:{id:"tile",title:"Tile"},sidebar:"docs",previous:{title:"Text",permalink:"/docs/next/components/text"},next:{title:"Tooltip",permalink:"/docs/next/components/tooltip"}},y={},A=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],h={toc:A};function C(e){var t=e.components,n=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.w,{mdxType:"IconsStyle"}),(0,r.kt)("p",null,"Tiles like Cards, are a convenient way to display related content about a single subject.\nAlso receives all ",(0,r.kt)("a",{parentName:"p",href:"http://reactnative.dev/docs/touchablenativefeedback.html#props"},"TouchableNativeFeedback")," (Android) or ",(0,r.kt)("a",{parentName:"p",href:"http://reactnative.dev/docs/touchableopacity.html#props"},"TouchableOpacity")," (iOS) props."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("div",{class:"row inline-flex-center"},(0,r.kt)("div",{class:"col col--3"},(0,r.kt)("h4",null,"Import")),(0,r.kt)("div",{class:"col col--9"},(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"import { Tile } from '@rneui/themed';")),(0,r.kt)("div",{class:"col col--3"},(0,r.kt)("h4",null,"Theme Key"," ",(0,r.kt)("a",{href:"../customizing#using-themeprovider"},(0,r.kt)(d.Fs0,{mdxType:"BiInfoCircle"})))),(0,r.kt)("div",{class:"col col--9"},(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"Tile"))),(0,r.kt)(c,{mdxType:"Usage"}),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Includes all ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props."))),(0,r.kt)("div",{class:"table-responsive"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ImageComponent")),(0,r.kt)("td",{parentName:"tr",align:null},"typeof Component"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RNE Image")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom ImageComponent for Tile.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"activeOpacity")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Number passed to control opacity on press.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"caption")),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Text inside the tilt when tile is featured.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"captionStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Styling for the caption (optional); You only use this if ",(0,r.kt)("inlineCode",{parentName:"td"},"caption")," is a string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"View Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Styling for the outer tile container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contentContainerStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"View Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Styling for bottom container when not featured tile.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"featured")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Changes the look of the tile.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"height")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'width/2'")),(0,r.kt)("td",{parentName:"tr",align:null},"Height for the tile.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"icon")),(0,r.kt)("td",{parentName:"tr",align:null},"IconObject"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Icon Component Props.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"iconContainerStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"View Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Styling for the outer icon container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"imageContainerStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"View Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Styling for the image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"imageProps")),(0,r.kt)("td",{parentName:"tr",align:null},"ImageProps(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null},'Optional properties to pass to the image if provided e.g "resizeMode".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"imageSrc")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"ImageSourcePropType")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Source for the image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"overlayContainerStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"View Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Styling for the overlay container when using featured tile.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Text inside the tile.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"titleNumberOfLines")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Number of lines for Title.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"titleStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Styling for the title.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"width")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'screen width'")),(0,r.kt)("td",{parentName:"tr",align:null},"Width for the tile."))))),(0,r.kt)("h2",{id:"playground"},"Playground"),(0,r.kt)(s.Z,{mdxType:"Play"}))}C.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);