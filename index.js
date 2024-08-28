import{a as d,S as f,i as m}from"./assets/vendor-CRwkH7JT.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="40905423-24d24966a8b04fca12252a818";d.defaults.baseURL="https://pixabay.com/api/";const g=o=>{const r={params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:24}};return d.get("",r)},y=({webformatURL:o,largeImageURL:r,tags:s,likes:a,views:e,comments:t,downloads:i})=>`
        <li class='gallery-card'>
            <a href="${r}">
                <img class="gallery-img" src="${o}" alt="${s} loading='lazy" />
            </a>
            <div class="gallery-info">
                <p class="gallery-info-item">
                    <b>Likes</b>${a}
                </p>
                    <p class="gallery-info-item">
                <b>Views</b>${e}
                </p>
                <p class="gallery-info-item">
                    <b>Comments</b>${t}
                </p>
                <p class="gallery-info-item">
                    <b>Downloads</b>${i}
                </p>
            </div>
          </li>`,l=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),h=document.querySelector(".loader");let b=new f(".js-gallery a");const c=()=>{h.classList.toggle("is-hidden")},u=o=>{m.error({message:o,position:"topRight",maxWidth:400})},L=async o=>{try{o.preventDefault();const r=l.elements.user_query.value.trim();if(r==="")return;n.innerHTML="",c();const s=await g(r);if(s.data.hits.length===0){u("Sorry, there are no images matching your search query. Please try again!");return}const a=s.data.hits.map(e=>y(e)).join("");n.innerHTML=a,b.refresh(),l.reset()}catch(r){console.log(r),u(`${r}`)}finally{c()}};l.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
