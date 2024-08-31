import{a as f,S as M,i as y}from"./assets/vendor-CRwkH7JT.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const w="40905423-24d24966a8b04fca12252a818";f.defaults.baseURL="https://pixabay.com/api/";const p=(o,e,a)=>{const s={params:{key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:a}};return f.get("",s)},b=({webformatURL:o,largeImageURL:e,tags:a,likes:s,views:t,comments:r,downloads:i})=>`
        <li class='gallery-card'>
            <a href="${e}">
                <img class="gallery-img" src="${o}" alt="${a} loading='lazy" />
            </a>
            <div class="gallery-info">
                <p class="gallery-info-item">
                    <b>Likes</b>${s}
                </p>
                    <p class="gallery-info-item">
                <b>Views</b>${t}
                </p>
                <p class="gallery-info-item">
                    <b>Comments</b>${r}
                </p>
                <p class="gallery-info-item">
                    <b>Downloads</b>${i}
                </p>
            </div>
          </li>`,d=document.querySelector(".js-search-form"),u=document.querySelector(".js-gallery"),P=document.querySelector(".loader"),m=document.querySelector(".js-load-more");let n=1;const g=15;let l="",L=new M(".js-gallery a");const c=()=>{P.classList.toggle("is-hidden")},v=()=>{m.classList.add("is-hidden")},S=()=>{m.classList.remove("is-hidden")},h=o=>{y.error({message:o,position:"topRight",maxWidth:400})},q=()=>{const o=document.querySelector(".js-gallery .gallery-card");if(o){const e=o.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}},E=async o=>{try{if(o.preventDefault(),l=d.elements.user_query.value.trim(),l==="")return;u.innerHTML="",v(),c(),n=1;const e=await p(l,n,g);if(e.data.hits.length===0){h("Sorry, there are no images matching your search query. Please try again!");return}const a=e.data.hits.map(s=>b(s)).join("");u.innerHTML=a,e.data.totalHits>15&&S(),L.refresh(),d.reset()}catch(e){console.log(e),h(`${e}`)}finally{c()}},$=async o=>{try{n+=1,v(),c();const e=await p(l,n,g),a=e.data.hits.map(t=>b(t)).join("");u.insertAdjacentHTML("beforeend",a),q(),L.refresh();const s=Math.ceil(e.data.totalHits/g);n<s?S():y.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",maxWidth:400})}catch(e){console.log(e),h(`${e}`)}finally{c()}};d.addEventListener("submit",E);m.addEventListener("click",$);
//# sourceMappingURL=index.js.map
