(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d=document.body.querySelector("#p-loader");d.addEventListener("transitionend",()=>d.remove());window.addEventListener("load",()=>{setTimeout(()=>{d.classList.add("opacity-0")},1e3)});const u=document.body.querySelector("#intro"),l=document.body.querySelector("#p-menu"),f=document.body.querySelector(".link-panel"),y=document.body.querySelectorAll(".link-panel");f.classList.add("active-link");let o,r=!1;const m=()=>{if(!o||r)return;r=!0,l.classList.add("disabled"),l.classList.remove("slide-menu"),u.classList.remove("slide-intro"),o.classList.remove("slide-panel"),o=void 0,document.body.querySelector(".active-link").classList.remove("active-link"),f.classList.add("active-link"),setTimeout(()=>{r=!1,l.classList.remove("disabled")},1100)},p=(s,i)=>{if(r)return;o&&m(),r=!0,l.classList.add("disabled","slide-menu"),u.classList.add("slide-intro"),o=document.body.querySelector(i),o.classList.add("slide-panel"),document.body.querySelector(".active-link").classList.remove("active-link"),s.classList.add("active-link"),setTimeout(()=>{r=!1,l.classList.remove("disabled")},1100)};for(const s of y)s.addEventListener("click",i=>{i.preventDefault();const n=s.getAttribute("href");n==="#intro"?m():p(s,n)});
