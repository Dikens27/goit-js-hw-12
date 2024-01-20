import{S as v,a as q,i as M}from"./assets/vendor-bad0427b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();const S=document.querySelector(".form"),m=document.querySelector(".gallery"),p=document.querySelector(".loader"),c=document.querySelector(".load-more"),k=new v(".gallery a",{captionsData:"alt",captionDelay:250});let y=1,g=!1;const f=40;let u,h;S.addEventListener("submit",async e=>{if(e.preventDefault(),y=1,w(),m.innerHTML="",g=!1,u=e.currentTarget.elements.search.value.trim(),u.length===0)l(i),d();else try{c.style.display="none";const r=await L(u);b(r)}catch(r){console.error(r),l(i)}finally{d()}});async function L(e=""){const r=q.create({baseURL:"https://pixabay.com/api/",headers:{"Content-Type":"application/json"},params:{key:"41729431-93e496ed3cd794296b45db789",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:y,per_page:f}});try{const o=await(await r.get()).data;if(o.hits.length)return h=o.totalHits,o.hits;l(i),d();return}catch{l(i);return}}const T=async()=>{try{if(g){l("We're sorry, but you've reached the end of search results.");return}y++;try{w(),c.style.display="none";const e=await L(u);b(e),window.scrollBy({top:C()*2,behavior:"smooth"})}catch(e){console.error(e),l(i)}finally{d()}y>=h/f&&(g=!0,c.style.display="none",l("We're sorry, but you've reached the end of search results."))}catch{l(i)}};c.addEventListener("click",e=>{T()});const $=({largeImageURL:e,webformatURL:r,tags:s,likes:o,views:t,comments:a,downloads:n})=>`           
    <li class="gallery-item">
        <div class=gallery-card>
            <a class="gallery-link" href="${e}">
                <img class="gallery-image" src="${r}" alt="${s}" width="360" height="200" />
            </a>

            <ul class="gallery-card-list">
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Likes</h2>
                    <p class="gallery-card-information">${o}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Views</h2>
                    <p class="gallery-card-information">${t}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Comments</h2>
                    <p class="gallery-card-information">${a}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Downloads</h2>
                    <p class="gallery-card-information">${n}</p>
                </li>
            </ul>
        </div>
    </li>
`;function b(e){if(e!==void 0){const r=e.map(s=>$(s)).join("");m.insertAdjacentHTML("beforeend",r),k.refresh(),d(),Math.floor(h/f)>0&&(c.style.display="block")}}function C(){return document.querySelector(".gallery-item").getBoundingClientRect().height}function l(e){M.show({title:e,titleColor:"white",color:"white",backgroundColor:"red",position:"topRight"})}const i="Sorry, there are no images matching your search query. Please try again!Reqest is not ok";function w(){p.classList.add("loading")}function d(){p.classList.remove("loading")}
//# sourceMappingURL=commonHelpers.js.map
