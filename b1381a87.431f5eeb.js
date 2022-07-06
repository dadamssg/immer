(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(99)),i={id:"map-set",title:"Map and Set"},c={unversionedId:"map-set",id:"map-set",isDocsHomePage:!1,title:"Map and Set",description:"\u26a0 Since version 6 support for Maps and Sets has to be enabled explicitly by calling enableMapSet() once when starting your application.",source:"@site/docs/map-set.md",slug:"/map-set",permalink:"/immer/map-set",editUrl:"https://github.com/immerjs/immer/edit/master/website/docs/map-set.md",version:"current",sidebar:"Immer",previous:{title:"API overview",permalink:"/immer/api"},next:{title:"Classes",permalink:"/immer/complex-objects"}},s=[],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("center",null,Object(o.b)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",class:"horizontal bordered"})),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"\u26a0 Since version 6 support for ",Object(o.b)("inlineCode",{parentName:"em"},"Map"),"s and ",Object(o.b)("inlineCode",{parentName:"em"},"Set"),"s has to be enabled explicitly by calling ",Object(o.b)("a",{parentName:"em",href:"/immer/installation#pick-your-immer-version"},Object(o.b)("inlineCode",{parentName:"a"},"enableMapSet()"))," once when starting your application.")),Object(o.b)("p",null,"Plain objects, arrays, ",Object(o.b)("inlineCode",{parentName:"p"},"Map"),"s and ",Object(o.b)("inlineCode",{parentName:"p"},"Set"),"s are always drafted by Immer. An example of using Maps with immer:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'test("Producers can update Maps", () => {\n    const usersById_v1 = new Map()\n\n    const usersById_v2 = produce(usersById_v1, draft => {\n        // Modifying a map results in a new map\n        draft.set("michel", {name: "Michel Weststrate", country: "NL"})\n    })\n\n    const usersById_v3 = produce(usersById_v2, draft => {\n        // Making a change deep inside a map, results in a new map as well!\n        draft.get("michel").country = "UK"\n    })\n\n    // We got a new map each time!\n    expect(usersById_v2).not.toBe(usersById_v1)\n    expect(usersById_v3).not.toBe(usersById_v2)\n    // With different content obviously\n    expect(usersById_v1).toMatchInlineSnapshot(`Map {}`)\n    expect(usersById_v2).toMatchInlineSnapshot(`\n        Map {\n          "michel" => Object {\n            "country": "NL",\n            "name": "Michel Weststrate",\n          },\n        }\n    `)\n    expect(usersById_v3).toMatchInlineSnapshot(`\n        Map {\n          "michel" => Object {\n            "country": "UK",\n            "name": "Michel Weststrate",\n          },\n        }\n    `)\n    // The old one was never modified\n    expect(usersById_v1.size).toBe(0)\n    // And trying to change a Map outside a producers is going to: NO!\n    expect(() => usersById_v3.clear()).toThrowErrorMatchingInlineSnapshot(\n        `"This object has been frozen and should not be mutated"`\n    )\n})\n')),Object(o.b)("p",null,"Maps and Sets that are produced by Immer will be made artificially immutable. This means that they will throw an exception when trying mutative methods like ",Object(o.b)("inlineCode",{parentName:"p"},"set"),", ",Object(o.b)("inlineCode",{parentName:"p"},"clear")," etc. outside a producer."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Note: The ",Object(o.b)("strong",{parentName:"em"},"keys")," of a map are never drafted! This is done to avoid confusing semantics and keep keys always referentially equal")))}l.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?a.a.createElement(b,c(c({ref:t},p),{},{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);