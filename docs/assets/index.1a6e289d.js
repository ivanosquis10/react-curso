import{r as l,j as C,R as _,a as O}from"./vendor.e4541fd3.js";const k=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}};k();function w(t,o){const[s,a]=l.exports.useState(!1),[n,r]=l.exports.useState(!0),[d,c]=l.exports.useState(o);return l.exports.useEffect(()=>{setTimeout(()=>{try{const u=localStorage.getItem(t);let m;u?m=JSON.parse(u):(localStorage.setItem(t,JSON.stringify(o)),m=o),c(m),r(!1)}catch(u){a(u)}},1e3)},[]),{item:d,saveItem:u=>{try{const m=JSON.stringify(u);localStorage.setItem(t,m),c(u)}catch(m){a(m)}},loading:n,error:s}}const e=C.exports.jsx,f=C.exports.jsxs,y=()=>e("div",{children:e("p",{children:"Hubo un error, espere..."})}),g=l.exports.createContext();function b(t){const{item:o,saveItem:s,loading:a,error:n}=w("TODOS_V1",[]),[r,d]=l.exports.useState(""),[c,v]=l.exports.useState(!1),u=o.length,m=o.filter(i=>i.completed).length;let x=[];!r.length>=1?x=o:x=o.filter(i=>{const h=i.text.toLowerCase(),p=r.toLowerCase();return h.includes(p)});const S=i=>{const h=[...o];if(i==="")return alert("Ingrese una tarea por favor shi!");h.push({completed:!1,text:i}),s(h)},I=i=>{const h=o.findIndex(T=>T.text===i),p=[...o];p[h].completed=!0,s(p)},N=i=>{const h=o.findIndex(T=>T.text===i),p=[...o];p.splice(h,1),s(p)};return e(g.Provider,{value:{error:n,loading:a,totalTodo:u,completedTodo:m,search:r,setSearch:d,searchedTodo:x,addTodo:S,completeTodos:I,deleteTodo:N,openModal:c,setOpenModal:v},children:t.children})}function L(){const{totalTodo:t,completedTodo:o}=l.exports.useContext(g);return f("h2",{className:"TodoCounter",children:["Has completado ",o," de ",t," TODOs"]})}function M(){const{search:t,setSearch:o}=l.exports.useContext(g);return e("input",{className:"todo__search",placeholder:"Search a task...",value:t,onChange:a=>{o(a.target.value)}})}function j(t){return e("section",{children:e("ul",{className:"todo__container",children:t.children})})}function B({text:t,completed:o,onComplete:s,onDelete:a}){return f("li",{className:"todo__item",children:[e("span",{className:`Icon icon__check ${o&&"Icon-check--active"}`,onClick:s,children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})})}),e("p",{className:`todo__item__p ${o&&"todo__item__p--complete"}`,children:t}),e("span",{className:"Icon icon__delete",onClick:a,children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"})})})]})}function D({setOpenModal:t}){return e("button",{className:"CreateTodoButton",onClick:()=>{t(s=>!s)},children:"+"})}function $({children:t}){return _.createPortal(e("div",{className:"modal__bg",children:t}),document.getElementById("modal"))}function E(){const[t,o]=l.exports.useState(""),{addTodo:s,setOpenModal:a}=l.exports.useContext(g);return f("form",{onSubmit:c=>{c.preventDefault(),s(t),a(!1)},children:[e("label",{htmlFor:"valueForm",children:"Add a TODO"}),e("textarea",{id:"valueForm",value:t,onChange:c=>{o(c.target.value)},placeholder:"Make a cake..."}),f("div",{className:"container__btn",children:[e("button",{className:"btn btn__cancel",type:"button",onClick:()=>{a(!1)},children:"Cancel"}),e("button",{className:"btn btn__add",type:"submit",children:"Add"})]})]})}const A=()=>e("div",{className:"loading__container",children:e("p",{className:"loading__text",children:"Cargando TODOs..."})}),F=()=>e("div",{children:e("p",{children:"\xA1Crea tu primer TODO!"})}),P=()=>{const{error:t,loading:o,searchedTodo:s,completeTodos:a,deleteTodo:n,openModal:r,setOpenModal:d}=l.exports.useContext(g);return f(O.Fragment,{children:[e(L,{}),e(M,{}),f(j,{children:[t&&e(y,{error:t}),o&&e(A,{}),!o&&!s.length&&e(F,{}),s.map(c=>e(B,{text:c.text,completed:c.completed,onComplete:()=>a(c.text),onDelete:()=>n(c.text)},c.text))]}),r&&e($,{children:e(E,{})}),e(D,{setOpenModal:d})]})};function V(){return e(b,{children:e(P,{})})}_.render(e(V,{}),document.getElementById("root"));
