"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8621],{67295:function(a,t,e){e.r(t),e.d(t,{_frontmatter:function(){return s},default:function(){return f}});var i=e(63366),n=(e(67294),e(64983)),o=e(43086),p=["components"],s={},l=function(a){return function(t){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)}},g=l("Preview"),c=l("Card"),d=l("Table"),r={_frontmatter:s},b=o.Z;function f(a){var t=a.components,e=(0,i.Z)(a,p);return(0,n.kt)(b,Object.assign({},r,e,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"variants"},"Variants"),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"basic"},"Basic"),(0,n.kt)("p",null,"The simplest form of pagination which lets the user jump to the previous or the next page on demand."),(0,n.kt)(g,{name:"components-pagination-basic-pagination",mdxType:"Preview"}),(0,n.kt)("h4",{id:"with-jump"},"With Jump"),(0,n.kt)("p",null,"Jump pagination lets the users jump to a specific page by entering the page number. Use this type when the users can have a rough estimate of finding the required data on a certain page."),(0,n.kt)(g,{name:"components-pagination-pagination-with-jump",mdxType:"Preview"}),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("br",null),(0,n.kt)(c,{shadow:"none",mdxType:"Card"},(0,n.kt)(d,{showMenu:!1,separator:!0,data:[{Property:"Current page",Value:"<current-page>",Configurable:"-"},{Property:"Total pages",Value:"<total-pages>",Configurable:"✅"}],schema:[{name:"Property",displayName:"Property",width:"33%",sorting:!1,separator:!0},{name:"Value",displayName:"Value",width:"33%",sorting:!1,separator:!0},{name:"Configurable",displayName:"Configurable?",width:"33%",sorting:!1,separator:!0}],withHeader:!1,mdxType:"Table"})),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"position-of-pagination"},"Position of Pagination"),(0,n.kt)("p",null,"Pagination control usually appears inside a card with a table or list. It is horizontally aligned to the center of the container. It is fixed at the bottom of the card."),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"21.180555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAiklEQVQY03WO2woCMQxE+/+f6ZOgqMHtprk0I4nu4goGhiblzCStD48hClUJ1XyPEpE//YHbvNHoeQHRPcYYcPdSGn/7OSeSqXlOyNeCDxtmhkbnUzxuV5h7AChj7x0RUVqWZQ/M/wzNEmYQUc3xrmSiMTtUbb8olZu2EGYu07qupZ0zKy6Zjc0LX2uDOdXidPl9AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Pagination control is centrally aligned",title:"Pagination control is centrally aligned",src:"/static/fec8df1231dee0eb1495a2414b6c2ebd/3cbba/pagination-1.png",srcSet:["/static/fec8df1231dee0eb1495a2414b6c2ebd/7fc1e/pagination-1.png 288w","/static/fec8df1231dee0eb1495a2414b6c2ebd/a5df1/pagination-1.png 576w","/static/fec8df1231dee0eb1495a2414b6c2ebd/3cbba/pagination-1.png 1152w","/static/fec8df1231dee0eb1495a2414b6c2ebd/0b124/pagination-1.png 1728w","/static/fec8df1231dee0eb1495a2414b6c2ebd/4ea69/pagination-1.png 2304w","/static/fec8df1231dee0eb1495a2414b6c2ebd/8dc0b/pagination-1.png 2880w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"pagination-vs-infinite-scroll"},"Pagination vs Infinite Scroll"),(0,n.kt)("p",null,"Use pagination over infinite scroll so that the user can navigate to an item’s detail page and return back to the same page."),(0,n.kt)("h4",{id:"selection-with-pagination"},"Selection with pagination"),(0,n.kt)("p",null,"When using pagination, the “Select all” control should select only the visible items. "),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.44444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABGklEQVQoz21S7W7DIAzM+z/ifm3qKu0jTZpBbAeIPZ0LLKlmCXEY+3w2DPcf0riSibCyiG3bZjlnSyk5xnrGKZ39KSV9+FMe1nAz4ag5F9v3vQcBg5iIHJdSHMOHMzO7D7guxXmYl4t+fV+NiNXMemILFBG4OwkKwnhLHgvThznp8PG+2Ph5N2bChQeFEHr1GGMnX9fV1cMiyZHQKqENYXqxebzYSmKqe1eCHUFQi0RgqG0Kk0jv5ET4Oke7jpMJkWltDSpaAEhawpFQzi0fFb7p7Z8ZPuOmts2UWXw0teDfDMMULCxBy146CVpuFTFDqEIiZtgUbiJ+h1evCtUV5lw0l2I5P/4SAkDacPt/7YXbH0VO8Tw/a93LL4NZwffw/kMeAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Selection with pagination",title:"Selection with pagination",src:"/static/f7df8f805dbfe3f53feba1f76513313e/3cbba/pagination-2.png",srcSet:["/static/f7df8f805dbfe3f53feba1f76513313e/7fc1e/pagination-2.png 288w","/static/f7df8f805dbfe3f53feba1f76513313e/a5df1/pagination-2.png 576w","/static/f7df8f805dbfe3f53feba1f76513313e/3cbba/pagination-2.png 1152w","/static/f7df8f805dbfe3f53feba1f76513313e/0b124/pagination-2.png 1728w","/static/f7df8f805dbfe3f53feba1f76513313e/4ea69/pagination-2.png 2304w","/static/f7df8f805dbfe3f53feba1f76513313e/8dc0b/pagination-2.png 2880w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),(0,n.kt)("br",null),(0,n.kt)("p",null,"However, there is an option present to select all the items."),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.44444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpklEQVQoz42SW2vbQBBG9f9/TWn7UCiObV1sQykUWnDa1MaJnTSutJLlvd/mC7uO+9SHPIjvDDM6OxJbnEZJ41mg708khIJzEdYFOBdyvvGh1/RFz3Yw4kBaHuFNC2daWHVEdH1mxf9kDraD4k/wpkN0DFo8w9sLB8cQXUfenlAcDhNq9x+hWEVQKwTeQLM5Il8g8gZmKAG5BIkFdD+HH+tcm6FGODevvSVB1IjyOxWb9Rd09zfQfQkSqzzEj1OELFxAtDNEvkQUS8h2BjtUgFxBsCRcZE7vkWiSEMXx4QOGw3tIVqeTskSzMmeqFZvnQxKbvoTLG67ghgqqu3wJZWl9Ea73X/G4n8CwMjfSNnao/7EZqiy7CCu4sclCc2r+s+EPFM/3n6h/eAfZTfN/COMcqp3gwiVUd5OZRNpoAtNPAVlDsyn48XOuSdREfIYov1Hx92kLwX5S0FvA7pBSn+9AdoeotxDDGk7+huG/IE+3cHKT5yy/gxhu4dUmz5LdUjQHFCEQ+QB4T+Q8pUQIwJVtupc2QGuX76i/9gIQIq41pVnnY3gBV9ulJRkJ1OMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Selection with pagination",title:"Selection with pagination",src:"/static/ccb369065ef71772760d09bd52c8d6db/3cbba/pagination-3.png",srcSet:["/static/ccb369065ef71772760d09bd52c8d6db/7fc1e/pagination-3.png 288w","/static/ccb369065ef71772760d09bd52c8d6db/a5df1/pagination-3.png 576w","/static/ccb369065ef71772760d09bd52c8d6db/3cbba/pagination-3.png 1152w","/static/ccb369065ef71772760d09bd52c8d6db/0b124/pagination-3.png 1728w","/static/ccb369065ef71772760d09bd52c8d6db/4ea69/pagination-3.png 2304w","/static/ccb369065ef71772760d09bd52c8d6db/8dc0b/pagination-3.png 2880w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),(0,n.kt)("br",null),(0,n.kt)("p",null,"For more info - check selection in a Table."))}f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-pagination-usage-mdx-cdc82d7fc86cc991d896.js.map