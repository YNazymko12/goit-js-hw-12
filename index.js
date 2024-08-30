import{a as p,S,i as y}from"./assets/vendor-CRwkH7JT.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const w="40905423-24d24966a8b04fca12252a818";p.defaults.baseURL="https://pixabay.com/api/";const f=(o,e,a)=>{const s={params:{key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:a}};return console.log("Fetching images with params:",s.params),p.get("",s)},b=({webformatURL:o,largeImageURL:e,tags:a,likes:s,views:t,comments:r,downloads:i})=>`
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
          </li>`,d=document.querySelector(".js-search-form"),g=document.querySelector(".js-gallery"),M=document.querySelector(".loader"),h=document.querySelector(".js-load-more");let n=1;const u=15;let l="",P=new S(".js-gallery a");const c=()=>{M.classList.toggle("is-hidden")},L=()=>{h.classList.add("is-hidden")},v=()=>{h.classList.remove("is-hidden")},m=o=>{y.error({message:o,position:"topRight",maxWidth:400})},q=()=>{const o=document.querySelector(".js-gallery .gallery-card");if(o){const e=o.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}},E=async o=>{try{if(o.preventDefault(),l=d.elements.user_query.value.trim(),l==="")return;g.innerHTML="",L(),c(),n=1;const e=await f(l,n,u);if(e.data.hits.length===0){m("Sorry, there are no images matching your search query. Please try again!");return}const a=e.data.hits.map(s=>b(s)).join("");g.innerHTML=a,e.data.totalHits>15&&v(),P.refresh(),d.reset()}catch(e){console.log(e),m(`${e}`)}finally{c()}},$=async o=>{try{n+=1,L(),c();const e=await f(l,n,u),a=e.data.hits.map(t=>b(t)).join("");g.insertAdjacentHTML("beforeend",a),q();const s=Math.ceil(e.data.totalHits/u);n<s?v():y.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",maxWidth:400})}catch(e){console.log(e),m(`${e}`)}finally{c()}};d.addEventListener("submit",E);h.addEventListener("click",$);
//# sourceMappingURL=index.js.map
