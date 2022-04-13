"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[410],{84010:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return i},default:function(){return d}});var n,s=t(63366),o=(t(67294),t(64983)),l=t(43086),r=["components"],i={},p=(n="Message",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),c={_frontmatter:i},m=l.Z;function d(e){var a=e.components,t=(0,s.Z)(e,r);return(0,o.kt)(m,Object.assign({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Masala Design System provides front-end developers & engineers a collection of reusable React components, css with dynamic theming support and static markup to develop user interfaces using design system principles and guidelines. This enables developers to use consistent markup, styles, and behavior in prototype and production work."),(0,o.kt)(p,{appearance:"info",description:"If your app runs on Innovaccer UI engine, you don't need to follow any of the following steps. You can directly jump to 'Using components' section bellow.",mdxType:"Message"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"getting-started"},"Getting started"),(0,o.kt)("br",null),(0,o.kt)("h5",{id:"installing-component-library"},"Installing component library"),(0,o.kt)("p",null,"Run the following command using npm to add the component library to your project."),(0,o.kt)("div",{className:"gatsby-highlight","data-language":"shell"},(0,o.kt)("pre",{parentName:"div",className:"language-shell"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},(0,o.kt)("span",{parentName:"code",className:"token function"},"npm")," ",(0,o.kt)("span",{parentName:"code",className:"token function"},"install")," @innovaccer/design-system"))),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h5",{id:"adding-style"},"Adding style"),(0,o.kt)("p",null,"As this component library is part of a framework-agnostic design system used at Innovaccer the styling is done with CSS using CSS variables for theming and BEM methodology for reusable and modular styling. So it requires you to include CSS in your project by either importing or serving it as a static file. The complete stylesheet is published as part of the component library at path @innovaccer/design-system/css."),(0,o.kt)("p",null,"Import style at your app’s root."),(0,o.kt)("div",{className:"gatsby-highlight","data-language":"shell"},(0,o.kt)("pre",{parentName:"div",className:"language-shell"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},(0,o.kt)("span",{parentName:"code",className:"token function"},"import")," ",(0,o.kt)("span",{parentName:"code",className:"token string"},"'@innovaccer/design-system/css'"),(0,o.kt)("span",{parentName:"code",className:"token punctuation"},";")))),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h5",{id:"using-font"},"Using font"),(0,o.kt)("p",null,"The css sets the font family as ‘Nunito Sans’ for the body. To add this font in your project you need to load this font. The recommended way to do it is by adding the following google font cdn link to your app’s head."),(0,o.kt)("div",{className:"gatsby-highlight","data-language":"text"},(0,o.kt)("pre",{parentName:"div",className:"language-text"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},'<link href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&display=swap" rel="stylesheet">'))),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h5",{id:"updating-font"},"Updating font"),(0,o.kt)("p",null,"If you don’t add the font described above font family will not be affected by css. However, if you want to update the font family update it via the following css variable."),(0,o.kt)("div",{className:"gatsby-highlight","data-language":"shell"},(0,o.kt)("pre",{parentName:"div",className:"language-shell"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"--font-family"))),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h5",{id:"updating-font-1"},"Updating font"),(0,o.kt)("p",null,"As BEM is used reset.css is not used and no style reset is done."),(0,o.kt)("br",null),(0,o.kt)("h5",{id:"polyfill-for-ie"},"Polyfill for IE"),(0,o.kt)("p",null,"For css variables to work on IE we use a polyfill at runtime to achieve dynamic theming through variables. Please add the following polyfill in your page."),(0,o.kt)("div",{className:"gatsby-highlight","data-language":"shell"},(0,o.kt)("pre",{parentName:"div",className:"language-shell"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},(0,o.kt)("span",{parentName:"code",className:"token operator"},"<"),"script ",(0,o.kt)("span",{parentName:"code",className:"token assign-left variable"},"src"),(0,o.kt)("span",{parentName:"code",className:"token operator"},"="),(0,o.kt)("span",{parentName:"code",className:"token string"},'"https://cdn.jsdelivr.net/npm/css-vars-ponyfill@2"'),(0,o.kt)("span",{parentName:"code",className:"token operator"},">"),(0,o.kt)("span",{parentName:"code",className:"token operator"},"<"),"/script",(0,o.kt)("span",{parentName:"code",className:"token operator"},">"),"\n",(0,o.kt)("span",{parentName:"code",className:"token operator"},"<"),"script",(0,o.kt)("span",{parentName:"code",className:"token operator"},">"),"\n  cssVars",(0,o.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,o.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    onlyLegacy: ",(0,o.kt)("span",{parentName:"code",className:"token boolean"},"true"),"\n  ",(0,o.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,o.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,o.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n",(0,o.kt)("span",{parentName:"code",className:"token operator"},"<"),"/script",(0,o.kt)("span",{parentName:"code",className:"token operator"},">")))),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"using-components"},"Using components"),(0,o.kt)("p",null,"Available components along with live code editor and API documentation can be found here. Components can be imported as mentioned below."),(0,o.kt)("div",{className:"gatsby-highlight","data-language":"javascript"},(0,o.kt)("pre",{parentName:"div",className:"language-javascript"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},(0,o.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n",(0,o.kt)("span",{parentName:"code",className:"token operator"},"..."),"\nAvatar",(0,o.kt)("span",{parentName:"code",className:"token punctuation"},","),"\nBackdrop",(0,o.kt)("span",{parentName:"code",className:"token punctuation"},","),"\nBadge",(0,o.kt)("span",{parentName:"code",className:"token punctuation"},","),"\nBreadcrumbsWrapper",(0,o.kt)("span",{parentName:"code",className:"token punctuation"},","),"\nBreadcrumb",(0,o.kt)("span",{parentName:"code",className:"token punctuation"},","),"\n",(0,o.kt)("span",{parentName:"code",className:"token operator"},"..."),"\n",(0,o.kt)("span",{parentName:"code",className:"token punctuation"},"}")," ",(0,o.kt)("span",{parentName:"code",className:"token keyword"},"from")," ",(0,o.kt)("span",{parentName:"code",className:"token string"},"'@innovaccer/design-system'")))),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"how-to-run-locally"},"How to run locally?"),(0,o.kt)("br",null),(0,o.kt)("div",{className:"gatsby-highlight","data-language":"shell"},(0,o.kt)("pre",{parentName:"div",className:"language-shell"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},(0,o.kt)("span",{parentName:"code",className:"token comment"},"#clone repository"),"\n",(0,o.kt)("span",{parentName:"code",className:"token function"},"git")," clone https://github.com/innovaccer/design-system.git\n\n",(0,o.kt)("span",{parentName:"code",className:"token comment"},"#install dependencies"),"\n",(0,o.kt)("span",{parentName:"code",className:"token function"},"npm")," ",(0,o.kt)("span",{parentName:"code",className:"token function"},"install"),"\n\n",(0,o.kt)("span",{parentName:"code",className:"token comment"},"#start development server"),"\n",(0,o.kt)("span",{parentName:"code",className:"token function"},"npm")," run dev"))),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"how-to-contribute"},"How to contribute?"),(0,o.kt)("p",null,"We are happy that you wish to contribute to this project. Please refer to the Contribution Guidelines for more information about setting up the project and contributing to it."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-introduction-get-started-developers-mdx-9ad6afad17d226b813cb.js.map