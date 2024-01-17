import{S as h,i as n}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const u=document.querySelector(".form"),c=document.querySelector(".gallery"),d=document.querySelector(".loader"),g=new h(".gallery a",{captionsData:"alt",captionDelay:250});u.addEventListener("submit",l=>{l.preventDefault(),p();const r=l.currentTarget.elements.search.value.trim();r.length===0?n.show({title:"Sorry, there are no images matching your search query. Please try again!Reqest is not ok",titleColor:"white",color:"white",backgroundColor:"red",position:"topRight"}):f(r)});const y=(l="")=>{const r="https://pixabay.com/api/",i=new URLSearchParams({key:"41729431-93e496ed3cd794296b45db789",q:l,image_type:"photo",rientation:"horizontal",safesearch:"true"});return fetch(`${r}?${i}`).then(o=>(o.ok||n.show({title:"Sorry, there are no images matching your search query. Please try again!Reqest is not ok",titleColor:"white",color:"white",backgroundColor:"red",position:"topRight"}),o.json())).then(o=>{if(o.hits.length)return o.hits;n.show({title:"Sorry, there are no images matching your search query. Please try again!Reqest is not ok",titleColor:"white",color:"white",backgroundColor:"red",position:"topRight"}),s()}).finally(s())},m=({largeImageURL:l,webformatURL:r,tags:i,likes:o,views:e,comments:t,downloads:a})=>`           
    <li class="gallery-item">
        <div class=gallery-card>
            <a class="gallery-link" href="${l}">
                <img class="gallery-image" src="${r}" alt="${i}" width:"360" height:"200" />
            </a>

            <ul class="gallery-card-list">
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Likes</h2>
                    <p class="gallery-card-information">${o}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Views</h2>
                    <p class="gallery-card-information">${e}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Comments</h2>
                    <p class="gallery-card-information">${t}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Downloads</h2>
                    <p class="gallery-card-information">${a}</p>
                </li>
            </ul>
        </div>
    </li>
`;function f(l){y(l).then(r=>{if(c.innerHTML="",r!==void 0){const i=r.map(o=>m(o)).join("");c.insertAdjacentHTML("beforeend",i),g.refresh(),s()}}).catch(r=>console.log(r),s())}function p(){d.classList.add("loading")}function s(){d.classList.remove("loading")}
//# sourceMappingURL=commonHelpers.js.map
