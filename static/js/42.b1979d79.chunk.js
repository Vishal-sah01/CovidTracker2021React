(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[42],{297:function(t,e,r){"use strict";r.r(e);var n=r(110),i=r(120),a=r.n(i),c=r(158),o=r(51),s=r(10),l=r(25),u=r(219),d=r(300),f=r(153),p=r(281),b=r(264),j=r(286),v=r(258),m=r(150),O=r(218),h=r(78),g=r(260),x=r(2),k=r(293),y=r(124),w=r(20);var A=function(t){t.data;var e=t.statistic,r=t.mapViz,n=t.mapScale,i=Object(k.a)().t,a=Object(x.useRef)(null),c=Object(y.a)(),A=Object(o.a)(c,2),N=A[0],S=A[1],C=S.width,E=S.height;return Object(x.useEffect)((function(){if(C&&E){var t=Object(g.a)(a.current),i=s.x[e];if(r===s.q.BUBBLES){var c=t.transition().duration(s.c);t.select(".ramp").transition(c).attr("opacity",0).attr("xlink:href",null),t.select(".bars").selectAll("rect").transition(c).attr("opacity",0).remove(),t.selectAll(".axis > *:not(.axistext)").remove(),t.select(".axistext").text("");var x=n.domain(),k=Object(o.a)(x,2)[1],y=t.select(".circles").attr("transform","translate(48,40)").attr("text-anchor","middle"),w=[.1,.4,1].map((function(t){return t*k}));y.selectAll("circle").data(w).join("circle").attr("fill","none").attr("stroke","#ccc").transition(c).attr("cy",(function(t){return-n(t)})).attr("r",n);var A=n.copy().range([0,-2*n(k)]);t.select(".circleAxis").attr("transform","translate(48,50)").transition(c).call(Object(f.b)(A).tickSize(0).tickPadding(0).tickValues(w).tickFormat((function(t){return Object(l.e)(t,"long"===i.format?"short":i.format)}))).selectAll(".tick text").style("text-anchor","middle"),t.select(".circleAxis").call((function(t){return t.select(".domain").remove()}))}else{var N;t.call((function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.svg,r=t.color,n=t.title,i=t.tickSize,a=void 0===i?6:i,c=t.width,o=void 0===c?320:c,l=t.height,g=void 0===l?44+a:l,x=t.marginTop,k=void 0===x?18:x,y=t.marginRight,w=void 0===y?0:y,A=t.marginBottom,N=void 0===A?16+a:A,S=t.marginLeft,C=void 0===S?0:S,E=t.ticks,R=void 0===E?o/64:E,T=t.tickFormat,M=t.tickValues,L=t.ordinalWeights,q=e.transition().duration(s.c);e.select(".circles").selectAll("circle").transition(q).attr("r",0).attr("cy",0).remove(),e.selectAll(".circleAxis > *").remove();var F,_=function(t){t.selectAll(".tick line").attr("y1",k+N-g)};if(r.interpolate){var U=Math.min(r.domain().length,r.range().length);F=r.copy().rangeRound(Object(b.a)(Object(j.a)(C,o-w),U)),e.select(".ramp").attr("class","ramp").attr("x",C).attr("y",k).attr("width",o-C-w).attr("height",g-k-N).attr("preserveAspectRatio","none").attr("xlink:href",B(r.copy().domain(Object(b.a)(Object(j.a)(0,1),U))).toDataURL())}else if(r.interpolator){if(e.select(".bars").selectAll("rect").transition(q).attr("opacity",0).remove(),F=Object.assign(r.copy().interpolator(Object(v.a)(C,o-w)),{range:function(){return[C,o-w]}}),e.select(".ramp").attr("class","ramp").attr("x",C).attr("y",k).attr("width",o-C-w).attr("height",g-k-N).attr("preserveAspectRatio","none").attr("xlink:href",B(r.interpolator()).toDataURL()).transition(q).attr("opacity",1),!F.ticks){if(void 0===M){var z=Math.round(R+1);M=Object(u.a)(z).map((function(t){return Object(d.a)(r.domain(),t/(z-1))}))}"function"!==typeof T&&(T=Object(p.a)(void 0===T?",f":T))}}else if(r.invertExtent){var D=r.thresholds?r.thresholds():r.quantiles?r.quantiles():r.domain(),V=void 0===T?function(t){return t}:"string"===typeof T?Object(p.a)(T):T;F=Object(m.a)().domain([-1,r.range().length-1]).rangeRound([C,o-w]),e.append("g").selectAll("rect").data(r.range()).join("rect").attr("x",(function(t,e){return F(e-1)})).attr("y",k).attr("width",(function(t,e){return F(e)-F(e-1)})).attr("height",g-k-N).attr("fill",(function(t){return t})),M=Object(u.a)(-1,D.length),T=function(t){return-1===t?V(1):t!==D.length-1?t===D.length-2?V(D[t]+"+",t):V(D[t],t):void 0}}else{if(e.select(".ramp").transition(q).attr("opacity",0).attr("xlink:href",null),L){var H=Object(m.a)().domain([0,L.reduce((function(t,e){return t+e}))]).rangeRound([0,o-C-w]),P=L.map((function(t,e){return L.slice(0,e).reduce((function(t,e){return t+H(e)}),C)}));F=Object(h.a)().domain(r.domain()).range(P),e.select(".bars").selectAll("rect").data(r.domain()).join((function(t){return t.append("rect").attr("x",F).attr("width",(function(t,e){return H(L[e])}))})).attr("y",k).attr("height",g-k-N).attr("fill",r).transition(q).attr("x",F).attr("width",(function(t,e){return H(L[e])})).attr("opacity",1)}else F=Object(O.a)().domain(r.domain().filter((function(t){return t}))).rangeRound([C,o-w]),e.select(".bars").selectAll("rect").data(r.domain().filter((function(t){return t}))).join("rect").attr("x",F).attr("y",k).attr("width",Math.max(0,F.bandwidth()-1)).attr("height",g-k-N).attr("fill",r);_=function(){}}return e.select(".axis").attr("transform","translate(0,".concat(g-N,")")).transition(q).attr("class","axis").call(Object(f.a)(F).ticks(R,"string"===typeof T?T:void 0).tickFormat("function"===typeof T?T:void 0).tickSize(a).tickValues(M)).on("start",(function(){e.call(_).call((function(t){return t.select(".domain").remove()}))})).call((function(t){return t.select(".axistext").attr("class","axistext").attr("x",C).attr("y",k+N-g-6).attr("fill","currentColor").attr("text-anchor","start").attr("font-weight","bold").text(n)})),e.node()}({svg:t,color:n,width:C,height:E,ticks:5,tickFormat:function(t,e,n){var a;return(null===i||void 0===i||null===(a=i.mapConfig)||void 0===a?void 0:a.colorScale)?t:r!==s.q.CHOROPLETH||Number.isInteger(t)?e===n.length-1?Object(l.e)(t,i.format)+"+":Object(l.e)(t,i.format):""},marginLeft:2,marginRight:0})})),t.attr("class",(null===i||void 0===i||null===(N=i.mapConfig)||void 0===N?void 0:N.colorScale)?"zone":"")}}}),[i,C,E,e,n,r]),Object(w.jsxs)("div",{className:"svg-parent maplegend",style:{height:s.l},ref:N,children:[Object(w.jsxs)("svg",{id:"legend",preserveAspectRatio:"xMidYMid meet",ref:a,children:[Object(w.jsx)("image",{className:"ramp"}),Object(w.jsx)("g",{className:"bars"}),Object(w.jsx)("g",{className:"circles"}),Object(w.jsx)("g",{className:"circleAxis"}),Object(w.jsx)("g",{className:"axis",children:Object(w.jsx)("text",{className:"axistext"})})]}),Object(w.jsx)("canvas",{className:"color-scale",style:{position:"absolute",height:0}})]})};function B(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256,r=Object(g.a)(".color-scale").node(),n=(r.width=e,r.height=1,r).getContext("2d"),i=0;i<e;++i)n.fillStyle=t(i/(e-1)),n.fillRect(i,0,1,1);return r}var N=r(104),S=r(102),C=r.n(S),E=r(129),R=r(272),T=r(283),M=r(282),L=r(223),q=r(298),F=r(265),_=r(266),U=r(267),z=r(268),D=r(269),V=r(270),H=r(271),P=r(116),Y=r(5),I=r(118),W=r(231);e.default=function(t){var e,r=this,i=t.mapCode,o=t.isDistrictView,u=t.mapViz,d=t.data,f=t.regionHighlighted,p=t.setRegionHighlighted,b=t.statistic,j=t.getMapStatistic,v=t.transformStatistic,m=t.noDistrictData,O=Object(k.a)().t,h=Object(x.useRef)(null),y=s.m[i],B=Object(Y.g)(),S=Object(I.a)(y.geoDataFile,function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(R.a)(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{suspense:!1,revalidateOnFocus:!1}).data,J=Object(x.useMemo)((function(){return j(d[i])}),[d,i,j]),G=s.x[b],K=Object(x.useCallback)((function(t){return((null===G||void 0===G?void 0:G.color)||"#343a40")+t}),[G]),Q=Object(x.useMemo)((function(){return S?(o?y.mapType===s.o.COUNTRY&&u===s.q.BUBBLES?[].concat(Object(n.a)(Object(W.a)(S,S.objects.states).features),Object(n.a)(Object(W.a)(S,S.objects.districts).features)):Object(W.a)(S,S.objects.districts).features:Object(W.a)(S,S.objects.states).features).map((function(t){var e=t.properties.district,r=t.properties.st_nm,n=Object.assign({},t);return n.id="".concat(i,"-").concat(r).concat(e?"-"+e:""),n})):null}),[S,i,o,u,y]),X=Object(x.useMemo)((function(){return S&&o?Object(W.a)(S,S.objects.districts).features.reduce((function(t,e){var r=s.u[e.properties.st_nm];return t[r]||(t[r]=new Set),t[r].add(e.properties.district),t}),{}):{}}),[S,o]),Z=Object(x.useMemo)((function(){var t=Object.keys(d).filter((function(t){return"TT"!==t&&Object.keys(s.m).includes(t)}));if(o){var e=t.reduce((function(t,e){var r,i=Object.keys((null===(r=d[e])||void 0===r?void 0:r.districts)||[]).filter((function(t){return((null===X||void 0===X?void 0:X[e])||new Set).has(t)||u===s.q.BUBBLES&&t===s.F}));return t.push.apply(t,Object(n.a)(i.map((function(t){return v(j(d[e].districts[t]))})))),t}),[]);return Object(E.a)(e)}return Object(E.a)(t,(function(t){return v(j(d[t]))}))}),[d,o,j,u,X,v]),$=Object(x.useMemo)((function(){var t,e;return u===s.q.BUBBLES?Object(L.b)([0,Math.max(1,Z||0)],[0,40]).clamp(!0).nice(3):(null===(t=s.x[b])||void 0===t||null===(e=t.mapConfig)||void 0===e?void 0:e.colorScale)?s.x[b].mapConfig.colorScale:Object(q.a)([0,Math.max(1,Z||0)],function(t){var e;return"confirmed"===t?function(t){return Object(F.a)(.85*t)}:"active"===t?function(t){return Object(_.a)(.85*t)}:"recovered"===t?function(t){return Object(U.a)(.85*t)}:"deceased"===t?function(t){return Object(z.a)(.85*t)}:"tested"===t?function(t){return Object(D.a)(.85*t)}:"tpr"===t||"cfr"===t||"other"===t?function(t){return Object(V.a)(.85*t)}:"vaccinated"===(null===(e=s.x[t])||void 0===e?void 0:e.category)?function(t){return Object(H.a)(.15+.35*(1-t))}:function(t){return Object(V.a)(.85*t)}}(b)).clamp(!0)}),[u,b,Z]),tt=Object(x.useCallback)((function(t){var e,r=s.u[t.properties.st_nm],n=t.properties.district,i=d[r],a=null===i||void 0===i||null===(e=i.districts)||void 0===e?void 0:e[n],c=v(j(n?a:i));return c?$(c):"#ffffff00"}),[d,$,j,v]),et=Object(x.useCallback)((function(t){t.select("title").text((function(t){if(u===s.q.BUBBLES&&!(null===G||void 0===G?void 0:G.nonLinear)){var e,r,n=t.properties.st_nm,i=s.u[n],a=t.properties.district,c=d[i],o=null===c||void 0===c||null===(e=c.districts)||void 0===e?void 0:e[a];return r=j(a?o:c),"".concat(Object(l.e)(r/(J||.001)*100,"%")," from ").concat(Object(l.l)(a||n))}}))}),[u,d,j,J,G]),rt=Object(x.useRef)(null);Object(x.useEffect)((function(){Object(g.a)(h.current).attr("pointer-events","auto").on("click",(function(){rt.current=null,p({stateCode:i,districtName:null})}))}),[i,p]);var nt=Object(x.useMemo)((function(){return S?Object(T.a)(Object(M.a)()):null}),[S]);return Object(x.useEffect)((function(){if(S){var t=Object(g.a)(h.current),e=Object(P.b)().duration(s.c);t.select(".regions").selectAll("path").data(u!==s.q.BUBBLES?Q:[],(function(t){return t.id})).join((function(t){return t.append("path").attr("d",nt).attr("stroke-width",1.8).attr("stroke-opacity",0).style("cursor","pointer").on("mouseenter",(function(t,e){rt.current||p({stateCode:s.u[e.properties.st_nm],districtName:e.properties.district})})).on("pointerdown",(function(t,e){rt.current===e?rt.current=null:rt.current=e,p({stateCode:s.u[e.properties.st_nm],districtName:e.properties.district})})).attr("fill","#fff0").attr("stroke","#fff0")}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").attr("fill","#fff0").remove()})).attr("pointer-events","all").on("click",(function(e,r){var n;e.stopPropagation();var i=s.u[r.properties.st_nm];!rt.current&&y.mapType!==s.o.STATE&&(null===(n=d[i])||void 0===n?void 0:n.districts)&&(t.attr("pointer-events","none"),t.select(".regions").selectAll("path").attr("pointer-events","none"),B.push("/state/".concat(i).concat(window.innerWidth<769?"#MapExplorer":"")))})).call((function(t){t.transition(e).attr("fill",tt).attr("stroke",K.bind(r,""))}))}}),[u,d,Q,tt,S,B,y.mapType,nt,p,K]),Object(x.useEffect)((function(){if(Q){var t=Object(g.a)(h.current),e=Object(P.b)().duration(s.c),r=[];u===s.q.BUBBLES&&(r=Q.map((function(t){var e=s.u[t.properties.st_nm],r=t.properties.district,n=d[e];if(o){var i,a,c=null===n||void 0===n||null===(i=n.districts)||void 0===i?void 0:i[r];t.value=j(r?c:null===n||void 0===n||null===(a=n.districts)||void 0===a?void 0:a[s.F])}else t.value=j(n);return t})).sort((function(t,e){return e.value-e.value})));var n=t.select(".circles").selectAll("circle").data(r,(function(t){return t.id})).join((function(t){return t.append("circle").attr("transform",(function(t){return"translate(".concat(nt.centroid(t),")")})).attr("fill-opacity",.25).style("cursor","pointer").attr("pointer-events","all").call((function(t){t.append("title")}))}),(function(t){return t}),(function(t){return t.call((function(t){return t.transition(e).attr("r",0).remove()}))})).on("mouseenter",(function(t,e){rt.current||p({stateCode:s.u[e.properties.st_nm],districtName:o?e.properties.district||s.F:null})})).on("pointerdown",(function(t,e){rt.current===e?rt.current=null:rt.current=e,p({stateCode:s.u[e.properties.st_nm],districtName:o?e.properties.district||s.F:null})})).on("click",(function(t,e){t.stopPropagation(),rt.current||y.mapType===s.o.STATE||B.push("/state/".concat(s.u[e.properties.st_nm]).concat(window.innerWidth<769?"#MapExplorer":""))})).call((function(t){t.transition(e).attr("fill",G.color+"70").attr("stroke",G.color+"70").attr("r",(function(t){return $(t.value)}))}));window.requestIdleCallback((function(){et(n)}))}}),[y.mapType,u,o,d,Q,B,$,nt,p,et,G,j]),Object(x.useEffect)((function(){if(S){var t=Object(g.a)(h.current),e=Object(P.b)().duration(s.c),n=[],a=[];y.mapType===s.o.COUNTRY&&((n=[Object(W.b)(S,S.objects.states)])[0].id="".concat(i,"-states")),(y.mapType===s.o.STATE||o&&u===s.q.CHOROPLETH)&&((a=[Object(W.b)(S,S.objects.districts)])[0].id="".concat(i,"-districts")),t.select(".state-borders").attr("fill","none").attr("stroke-width",1.5).selectAll("path").data(n,(function(t){return t.id})).join((function(t){return t.append("path").attr("d",nt).attr("stroke","#fff0")}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").remove()})).transition(e).attr("stroke",K.bind(r,"40")),t.select(".district-borders").attr("fill","none").attr("stroke-width",1.5).selectAll("path").data(a,(function(t){return t.id})).join((function(t){return t.append("path").attr("d",nt).attr("d",nt).attr("stroke","#fff0")}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").remove()})).transition(e).attr("stroke",K.bind(r,"40"))}}),[S,y,i,u,o,b,nt,K]),Object(x.useEffect)((function(){var t=f.stateCode,e=s.w[t],r=f.districtName,n=Object(g.a)(h.current);u===s.q.BUBBLES?n.select(".circles").selectAll("circle").attr("fill-opacity",(function(n){var a;return e===n.properties.st_nm&&(!r&&t!==i||r===(null===(a=n.properties)||void 0===a?void 0:a.district)||!o||r===s.F&&!n.properties.district)?1:.25})):n.select(".regions").selectAll("path").each((function(n){var a,c=e===n.properties.st_nm&&(!r&&t!==i||r===(null===(a=n.properties)||void 0===a?void 0:a.district)||!o);c&&this.parentNode.appendChild(this),Object(g.a)(this).attr("stroke-opacity",c?1:0)}))}),[S,d,i,o,u,f.stateCode,f.districtName,b]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"svg-parent",children:[Object(w.jsxs)("svg",{id:"chart",className:C()({zone:!!(null===G||void 0===G||null===(e=G.mapConfig)||void 0===e?void 0:e.colorScale)}),viewBox:"0 0 ".concat(432," ").concat(488),preserveAspectRatio:"xMidYMid meet",ref:h,children:[Object(w.jsx)("g",{className:"regions"}),Object(w.jsx)("g",{className:"state-borders"}),Object(w.jsx)("g",{className:"district-borders"}),Object(w.jsx)("g",{className:"circles"})]}),m&&(null===G||void 0===G?void 0:G.hasPrimary)&&Object(w.jsxs)("div",{className:C()("disclaimer","is-".concat(b)),children:[Object(w.jsx)(N.a,{}),Object(w.jsx)("span",{children:O("District-wise data not available in state bulletin")})]})]}),$&&Object(w.jsx)(A,{data:d,statistic:b,mapViz:u,mapScale:$}),Object(w.jsx)("svg",{style:{position:"absolute",height:0},children:Object(w.jsx)("defs",{children:Object(w.jsx)("filter",{id:"balance-color",colorInterpolationFilters:"sRGB",children:Object(w.jsx)("feColorMatrix",{type:"matrix",values:"0.91372549  0           0            0  0.08627451 0           0.91372549  0            0  0.08627451 0           0           0.854901961  0  0.145098039 0           0           0            1  0"})})})})]})}}}]);
//# sourceMappingURL=42.b1979d79.chunk.js.map