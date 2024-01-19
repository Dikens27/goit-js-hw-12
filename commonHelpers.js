import{a as v,S as q,i as M}from"./assets/vendor-bad0427b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const S=document.querySelector(".form"),m=document.querySelector(".gallery"),p=document.querySelector(".loader"),c=document.querySelector(".load-more");let y=1,f=!1;const g=40;let u,h;S.addEventListener("submit",async e=>{if(e.preventDefault(),y=1,w(),m.innerHTML="",u=e.currentTarget.elements.search.value.trim(),u.length===0)l(i),d();else try{c.style.display="none";const r=await L(u);b(r)}catch(r){console.error(r),l(i)}finally{d()}});async function L(e=""){const r=v.create({baseURL:"https://pixabay.com/api/",headers:{"Content-Type":"application/json"},params:{key:"41729431-93e496ed3cd794296b45db789",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:y,per_page:g}});try{const a=await(await r.get()).data;if(a.hits.length)return h=a.totalHits,a.hits;l(i),d();return}catch{l(i);return}}const k=async()=>{try{if(f){l("We're sorry, but you've reached the end of search results.");return}y++;try{w(),c.style.display="none";const e=await L(u);b(e),window.scrollBy({top:C()*2,behavior:"smooth"})}catch(e){console.error(e),l(i)}finally{d()}y>=h/g&&(f=!0,c.style.display="none",l("We're sorry, but you've reached the end of search results."))}catch{l(i)}};c.addEventListener("click",e=>{k()});const T=({largeImageURL:e,webformatURL:r,tags:s,likes:a,views:t,comments:o,downloads:n})=>`           
    <li class="gallery-item">
        <div class=gallery-card>
            <a class="gallery-link" href="${e}">
                <img class="gallery-image" src="${r}" alt="${s}" width="360" height="200" />
            </a>

            <ul class="gallery-card-list">
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Likes</h2>
                    <p class="gallery-card-information">${a}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Views</h2>
                    <p class="gallery-card-information">${t}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Comments</h2>
                    <p class="gallery-card-information">${o}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Downloads</h2>
                    <p class="gallery-card-information">${n}</p>
                </li>
            </ul>
        </div>
    </li>
`,$=new q(".gallery a",{captionsData:"alt",captionDelay:250});function b(e){if(e!==void 0){const r=e.map(s=>T(s)).join("");m.insertAdjacentHTML("beforeend",r),$.refresh(),d(),Math.floor(h/g)>0&&(c.style.display="block")}}function C(){return document.querySelector(".gallery-item").getBoundingClientRect().height}function l(e){M.show({title:e,titleColor:"white",color:"white",backgroundColor:"red",position:"topRight"})}const i="Sorry, there are no images matching your search query. Please try again!Reqest is not ok";function w(){p.classList.add("loading")}function d(){p.classList.remove("loading")}
//# sourceMappingURL=commonHelpers.js.map
