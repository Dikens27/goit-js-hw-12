import{a as u,S as y,i as g}from"./assets/vendor-bad0427b.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const h=document.querySelector(".form"),c=document.querySelector(".gallery"),d=document.querySelector(".loader"),m=document.querySelector(".load-more");h.addEventListener("submit",async t=>{t.preventDefault(),q();const a=t.currentTarget.elements.search.value.trim();if(a.length===0)i("Sorry, there are no images matching your search query. Please try again!Reqest is not ok"),n();else try{const o=await f(a);b(o),m.style.display="block"}catch(o){console.error(o),i("Sorry, there are no images matching your search query. Please try again!Reqest is not ok")}finally{n()}});async function f(t=""){let a=1,o=40;const s=u.create({baseURL:"https://pixabay.com/api/",headers:{"Content-Type":"application/json"},params:{key:"41729431-93e496ed3cd794296b45db789",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:a,perPage:o}});try{return(await s.get()).data}catch{i()}const e=await response.json();return e.hits.length?e.hits:(i("Sorry, there are no images matching your search query. Please try again!Reqest is not ok"),n(),[])}const p=({largeImageURL:t,webformatURL:a,tags:o,likes:s,views:e,comments:r,downloads:l})=>`           
    <li class="gallery-item">
        <div class=gallery-card>
            <a class="gallery-link" href="${t}">
                <img class="gallery-image" src="${a}" alt="${o}" width:"360" height:"200" />
            </a>

            <ul class="gallery-card-list">
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Likes</h2>
                    <p class="gallery-card-information">${s}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Views</h2>
                    <p class="gallery-card-information">${e}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Comments</h2>
                    <p class="gallery-card-information">${r}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Downloads</h2>
                    <p class="gallery-card-information">${l}</p>
                </li>
            </ul>
        </div>
    </li>
`,L=new y(".gallery a",{captionsData:"alt",captionDelay:250});function b(t){if(c.innerHTML="",t!==void 0){const a=t.hits.map(o=>p(o)).join("");c.insertAdjacentHTML("beforeend",a),L.refresh(),n()}}function i(t){g.show({title:t,titleColor:"white",color:"white",backgroundColor:"red",position:"topRight"})}function q(){d.classList.add("loading")}function n(){d.classList.remove("loading")}
//# sourceMappingURL=commonHelpers.js.map