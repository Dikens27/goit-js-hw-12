import{a as b,S as w,i as k}from"./assets/vendor-bad0427b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=l(r);fetch(r.href,a)}})();const S=document.querySelector(".form"),m=document.querySelector(".gallery"),f=document.querySelector(".loader"),n=document.querySelector(".load-more");let d=1,h=!1;const u=40;let y,g;S.addEventListener("submit",async e=>{if(e.preventDefault(),d=1,L(),m.innerHTML="",y=e.currentTarget.elements.search.value.trim(),y.length===0)s("Sorry, there are no images matching your search query. Please try again!Reqest is not ok"),c();else try{n.style.display="none";const t=await p(y);q(t)}catch(t){console.error(t),s("Sorry, there are no images matching your search query. Please try again!Reqest is not ok")}finally{c()}});async function p(e=""){const t=b.create({baseURL:"https://pixabay.com/api/",headers:{"Content-Type":"application/json"},params:{key:"41729431-93e496ed3cd794296b45db789",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:d,per_page:u}});try{const o=await(await t.get()).data;if(console.log(o),o.hits.length)return g=o.totalHits,o.hits;s("Sorry, there are no images matching your search query. Please try again!Reqest is not ok"),c();return}catch{s("Sorry, there are no images matching your search query. Please try again!Reqest is not ok");return}}const v=async()=>{try{if(h){s("We're sorry, but you've reached the end of search results.");return}d++;try{L(),n.style.display="none";const e=await p(y);q(e)}catch(e){console.error(e),s("Sorry, there are no images matching your search query. Please try again!Reqest is not ok")}finally{c()}d>=g/u&&(h=!0,n.style.display="none",s("We're sorry, but you've reached the end of search results."))}catch{s("Sorry, there are no images matching your search query. Please try again!Reqest is not ok")}};n.addEventListener("click",e=>{v()});const P=({largeImageURL:e,webformatURL:t,tags:l,likes:o,views:r,comments:a,downloads:i})=>`           
    <li class="gallery-item">
        <div class=gallery-card>
            <a class="gallery-link" href="${e}">
                <img class="gallery-image" src="${t}" alt="${l}" width:"360" height:"200" />
            </a>

            <ul class="gallery-card-list">
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Likes</h2>
                    <p class="gallery-card-information">${o}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Views</h2>
                    <p class="gallery-card-information">${r}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Comments</h2>
                    <p class="gallery-card-information">${a}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Downloads</h2>
                    <p class="gallery-card-information">${i}</p>
                </li>
            </ul>
        </div>
    </li>
`,M=new w(".gallery a",{captionsData:"alt",captionDelay:250});function q(e){if(console.log(e),e!==void 0){const t=e.map(l=>P(l)).join("");m.insertAdjacentHTML("beforeend",t),M.refresh(),c(),Math.floor(g/u)>0&&(n.style.display="block")}}function s(e){k.show({title:e,titleColor:"white",color:"white",backgroundColor:"red",position:"topRight"})}function L(){f.classList.add("loading")}function c(){f.classList.remove("loading")}
//# sourceMappingURL=commonHelpers.js.map
