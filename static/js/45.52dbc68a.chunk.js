(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[45],{274:function(e,t,a){"use strict";a.r(t);var n=a(51),c=a(10),r=a(25),i=a(102),s=a.n(i),o=a(149),l=a(129),u=a(153),j=a(232),b=a(127),d=a(280),h=a(150),O=a(260),f=a(275),m=a(292),v=a(227),x=a(262),p=(a(116),a(77)),g=a(61),k=a(92),y=a(100),M=a.n(y),N=a(2),w=a(59),E=a.n(w),C=a(124),S=a(20),B=0,D=35,H=20,I=25;function P(e){var t=e.timeseries,a=e.dates,i=e.currentBrushSelection,y=e.endDate,M=e.lookback,w=e.setBrushSelectionEnd,P=e.setLookback,A=e.animationIndex,J=Object(N.useRef)(),R=Object(C.a)(),T=Object(n.a)(R,2),U=T[0],X=T[1],z=X.width,L=X.height,W=null!==M?Object(o.a)([Object(p.a)(Object(g.a)(Object(r.j)(a[0]),M),{representation:"date"}),y]):y,Y=Object(N.useMemo)((function(){var e=a.length,t=z-D;return Object(d.a)().clamp(!0).domain([Object(r.j)(a[0]||y),Object(r.j)(a[e-1]||y)]).range([I,t])}),[z,y,a]);Object(N.useEffect)((function(){if(z&&L){var e=L-H,i=Object(m.a)().keys(c.b).value((function(e,a){return Math.max(0,Object(r.h)(t[e],"delta",a))}))(a),s=Object(h.a)().clamp(!0).domain([0,Object(l.a)(i[i.length-1],(function(e){return 1.2*Object(n.a)(e,2)[1]}))]).range([e,B]),o=Object(O.a)(J.current),j=o.transition().duration(c.c);o.select(".x-axis").attr("pointer-events","none").style("transform","translate3d(0, ".concat(e,"px, 0)")).transition(j).call((function(e){return e.attr("class","x-axis").call(Object(u.a)(Y).ticks(function(e){return e<480?4:6}(z)))}));var d=Object(v.a)().curve(x.a).x((function(e){return Y(Object(r.j)(e.data))})).y0((function(e){return s(e[0])})).y1((function(e){return s(e[1])}));o.select(".trend-areas").selectAll(".trend-area").data(i).join((function(e){return e.append("path").attr("class","trend-area").attr("fill",(function(e){var t=e.key;return c.x[t].color})).attr("fill-opacity",.4).attr("stroke",(function(e){var t=e.key;return c.x[t].color})).attr("d",d).attr("pointer-events","none")}),(function(e){return e.transition(j).attrTween("d",(function(e){var t=Object(O.a)(this).attr("d"),a=d(e);return Object(b.a)(t,a)})).selection()}))}}),[a,z,L,Y,t]);var _=i.map((function(e){return Y(Object(r.j)(e))})),q=Object(N.useMemo)((function(){if(z&&L){var e=z-D,t=L-H;return Object(j.b)().extent([[I,B],[e,t]]).handleSize(20)}}),[z,L]),F=Object(N.useCallback)((function(e){var t=e.sourceEvent,a=e.selection;if(t){var c=a.map(Y.invert),r=Object(n.a)(c,2),i=r[0],s=r[1];E.a.unstable_batchedUpdates((function(){w(Object(p.a)(s,{representation:"date"})),P(Object(k.a)(s,i))}))}}),[Y,w,P]),G=Object(N.useCallback)((function(e){var t=Object(O.a)(J.current),a=Object(j.a)(t.select(".brush").node());if(a){var c=a[1]-a[0],r=Object(f.a)(e),i=Object(n.a)(r,1),s=Object(n.a)(i[0],1)[0],o=s-c/2,l=s+c/2,u=Y.range(),b=Object(n.a)(u,2),d=b[0],h=b[1];t.select(".brush").call(q.move,l>h?[h-c,h]:o<d?[d,d+c]:[o,l])}}),[q,Y]),K=Object(N.useCallback)((function(e){var t=e.sourceEvent,a=e.selection;if(t&&a){var n=a.map(Y.invert).map((function(e){return Object(p.a)(e,{representation:"date"})}));Object(O.a)(J.current).select(".brush").call(q.move,n.map((function(e){return Y(Object(r.j)(e))}))).call((function(e){return e.select(".overlay").attr("cursor","pointer")}))}}),[q,Y]);Object(N.useEffect)((function(){q&&(q.on("start brush",F).on("end",K),Object(O.a)(J.current).select(".brush").call(q).call((function(e){return e.select(".overlay").attr("cursor","pointer").datum({type:"selection"}).on("mousedown touchstart",G)})))}),[q,F,K,G]),Object(N.useEffect)((function(){q&&Object(O.a)(J.current).select(".brush").call(q.move,_)}),[q,_]);return Object(S.jsx)("div",{className:"Timeseries",children:Object(S.jsx)("div",{className:s()("svg-parent is-brush fadeInUp"),ref:U,onWheel:function(e){e.deltaX&&w(Object(l.a)([W,a[Math.max(0,Math.min(a.length-1,a.indexOf(i[1])+10*Math.sign(e.deltaX)))]]))},style:{animationDelay:"".concat(250*A,"ms")},children:Object(S.jsxs)("svg",{ref:J,preserveAspectRatio:"xMidYMid meet",children:[Object(S.jsxs)("defs",{children:[Object(S.jsx)("clipPath",{id:"clipPath",children:Object(S.jsx)("rect",{x:0,y:"".concat(B),width:z,height:"".concat(Math.max(0,L-H))})}),Object(S.jsxs)("mask",{id:"mask",children:[Object(S.jsx)("rect",{x:0,y:"".concat(B),width:z,height:"".concat(Math.max(0,L-H)),fill:"hsl(0, 0%, 40%)"}),Object(S.jsx)("use",{href:"#selection",fill:"white"})]})]}),Object(S.jsx)("g",{className:"brush",clipPath:"url(#clipPath)",children:Object(S.jsxs)("g",{mask:"url(#mask)",children:[Object(S.jsx)("rect",{className:"overlay"}),Object(S.jsx)("g",{className:"trend-areas"}),Object(S.jsx)("rect",{className:"selection",id:"selection"})]})}),Object(S.jsx)("g",{className:"x-axis"})]})})})}var A=function(e,t){return!!M()(t.currentBrushSelection,e.currentBrushSelection)&&(!!M()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&(!!M()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(!!M()(t.endDate,e.endDate)&&(!!M()(t.lookback,e.lookback)&&(!!M()(t.animationIndex,e.animationIndex)&&!!M()(t.dates,e.dates))))))};t.default=Object(N.memo)(P,A)}}]);
//# sourceMappingURL=45.52dbc68a.chunk.js.map