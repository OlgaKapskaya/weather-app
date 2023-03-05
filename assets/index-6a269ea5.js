import{m as k,Q as x,j as n,F as _,f as e,T as d,V as f,S as L,r as h,n as j,I as Y,o as O,p as V,q,s as v,t as G,D as A,v as W,w as J,x as K,M as Q,y as E,z as U,d as H,E as X,G as Z,J as ee,K as te,L as R,H as z,N as ne,O as se,R as ae,P as M,U as re,X as ce,Y as oe,Z as ie,_ as le,$ as de,a0 as he,a1 as ue,a2 as me,a3 as pe}from"./vendor-8beb7045.js";import{u as y,a as r,b as fe,s as Se,c as D,t as ge,d as Ce,e as ye,f as we,w as Te,g as I,h as g,i as _e,j as ve,k as Ie,x as C,m as xe,l as He,n as Me,o as Ne,p as be,q as ke,r as Ae,v as Ee,O as B,P,y as $,z as Re,A as ze,B as De,C as Be,D as Pe,E as $e,F as Fe}from"./common-2918b010.js";const Le=()=>{const t=y(),s=r(fe),{colorMode:a}=k();return{message:s,notify:()=>{x.info(s,{position:x.POSITION.TOP_CENTER,theme:a}),t(Se(null))}}},je="_infoContainer_1ffrp_1",Ye="_tempContainer_1ffrp_2",Oe="_currentTemp_1ffrp_8",T={infoContainer:je,tempContainer:Ye,currentTemp:Oe},Ve=()=>{const t=r(D),s=r(ge),a=r(Ce),c=r(ye),i=r(we),o=r(Te),l=r(I);return n(_,{children:[n("div",{className:T.infoContainer,children:[e(d,{fontSize:"5xl",children:t}),n(f,{align:"end",children:[n(d,{fontSize:"lg",marginTop:"0",children:[a," "]}),n(d,{fontSize:"lg",marginTop:"0",children:[s," "]})]})]}),e("div",{className:T.tempContainer,children:e("div",{className:T.currentTemp,children:n(L,{isLoaded:l!=="loading",children:[n(d,{fontSize:"7xl",children:[g(c)," °C"]}),n(d,{fontSize:"lg",children:["Real feel: ",g(i)," °C"]}),e(d,{fontSize:"md",children:o[0]&&o[0].description})]})})})]})},qe=(t,s)=>{const[a,c]=h.useState(t);return h.useEffect(()=>{const i=setTimeout(()=>c(t),s||500);return()=>{clearTimeout(i)}},[t,s]),a},Ge="_searchButton_ocpca_1",We="_container_ocpca_7",N={searchButton:Ge,container:We},Je=h.memo(({label:t,searchValue:s,onChangeText:a,disabled:c,placeholder:i,options:o,onClickOption:l})=>{const[m,p]=h.useState(s),S=qe(m,500),w=u=>{p(u.currentTarget.value)},F=u=>{l==null||l(u.target.innerText),p("")};return h.useEffect(()=>{m!==s&&p(s)},[s]),h.useEffect(()=>{a==null||a(S)},[S]),n(_,{children:[t&&e(j,{children:t}),n(Y,{children:[e(O,{onChange:w,value:m,disabled:c,placeholder:i}),e(V,{pointerEvents:"none",children:e(q,{color:"gray.300"})})]}),o&&(o==null?void 0:o.length)>0&&e(f,{className:N.container,children:o.map(u=>e(v,{colorScheme:"blue",onClick:F,className:N.searchButton,children:`${u.name}, ${u.countryCode}`},u.latitude))})]})}),Ke=t=>t.cities.searchCities,Qe=()=>{const t=r(Ke),a=r(I)==="loading",c=y();return e("div",{style:{position:"relative",width:"100%"},children:e(Je,{searchValue:"",onChangeText:l=>{l.trim()!==""&&c(_e(l))},disabled:a,placeholder:"Enter city...",options:t,onClickOption:l=>{c(ve(l)),c(Ie({cities:[]}))}})})},Ue=()=>{const{colorMode:t,toggleColorMode:s}=k();return n("div",{className:C.header,children:[e(Qe,{}),e(G,{height:"40px",children:e(A,{orientation:"vertical"})}),e(W,{hasArrow:!0,label:"Change color mode",children:e(J,{"aria-label":"Set theme",variant:"outline",onClick:s,icon:t==="dark"?e(K,{color:"gray.300"}):e(Q,{color:"gray.500"})})})]})},Xe=()=>{const t=E(),s=r(xe),a=r(He),c=r(Me),i=r(Ne),o=r(be),l=r(ke),m=r(Ae),p=r(Ee),S=r(D),w=()=>{t(P.DETAILS+`/${S}`)};return n("div",{className:C.weatherContainer,children:[e(Ue,{}),n(U,{spacing:3,className:C.stack,children:[e(Ve,{}),e(v,{onClick:w,children:" Show hourly forecast "}),e(A,{}),e(B,{sunset:i,sunrise:c,maxTemp:s,minTemp:a,pressure:o,visibility:p,windSpeed:m,humidity:l})]})]})},Ze="_container_8lm65_1",et="_weather_8lm65_9",b={container:Ze,weather:et},tt=({currentDate:t,currentTime:s,temp:a,icon:c,feels_like:i,description:o})=>n(_,{children:[n(f,{alignItems:"flex-start",children:[n(d,{as:"b",children:[" ",t," "]}),n(d,{as:"b",children:[" ",s]})]}),n(f,{className:b.container,children:[n("div",{className:b.weather,children:[e("img",{src:`https://openweathermap.org/img/w/${c}.png`,alt:"weather icon"}),n(d,{as:"b",fontSize:"2xl",children:[" ",g(a)," °C"]})]}),n("div",{children:[" ",o," "]})]}),e(f,{width:"200px",children:n(d,{children:[" Real feel: ",g(i)," °C"]})})]}),nt=({item:t})=>{const s=H.unix(t.dt).format("HH:mm"),a=H.unix(t.dt).format("DD.MM.YYYY");return n(X,{children:[n(Z,{children:[e(tt,{currentDate:a,currentTime:s,icon:t.weather[0].icon,description:t.weather[0].description,temp:t.main.temp,feels_like:t.main.feels_like}),e(ee,{})]}),e(te,{children:e(B,{maxTemp:t.main.temp_max,minTemp:t.main.temp_min,pressure:t.main.pressure,visibility:t.visibility,windSpeed:t.wind.speed,humidity:t.main.humidity})})]})},st=()=>{const{city:t}=R(),s=E(),a=()=>{s("/")};return n(z,{className:$.header,children:[n(d,{fontSize:"4xl",children:[" Hourly forecast: ",e(d,{as:"b",children:t})]}),e(v,{leftIcon:e(ne,{}),onClick:a,children:" Back "})]})},at=()=>{const{city:t}=R(),s=r(Re),a=y();return h.useEffect(()=>{t&&a(ze(t))},[]),e("div",{className:C.weatherContainer,children:n(z,{spacing:3,className:$.stack,children:[e(st,{}),e(se,{defaultIndex:[0],width:"100%",allowMultiple:!0,children:s.map((c,i)=>e(nt,{item:c},i))})]})})},rt=()=>n(ae,{children:[e(M,{index:!0,path:"/",element:e(Xe,{})}),e(M,{path:P.DETAILS+"/:city",element:e(at,{})})]});function ct(){const t=y(),s=r(I),{message:a,notify:c}=Le();return a&&c(),h.useEffect(()=>{t(De()),t(Be())},[]),n("div",{className:"App",children:[s==="loading"&&e(re,{size:"xs",isIndeterminate:!0}),e(rt,{}),e(ce,{autoClose:3e3})]})}const ot=oe({reducer:{app:Pe,weather:$e,cities:Fe},middleware:[...ie({serializableCheck:!1})]}),it={initialColorMode:"system",useSystemColorMode:!0},lt=le({config:it});de.createRoot(document.getElementById("root")).render(e(he,{store:ot,children:n(ue,{children:[e(me,{initialColorMode:lt.config.initialColorMode}),e(pe,{children:e(ct,{})})]})}));
