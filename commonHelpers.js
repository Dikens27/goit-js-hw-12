import{a as u,S as y,i as g}from"./assets/vendor-bad0427b.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const h=document.querySelector(".form"),c=document.querySelector(".gallery"),d=document.querySelector(".loader");h.addEventListener("submit",async t=>{t.preventDefault(),w();const a=t.currentTarget.elements.search.value.trim();if(a.length===0)n("Sorry, there are no images matching your search query. Please try again!Reqest is not ok"),i();else try{const o=await m(a);L(o)}catch(o){console.error(o),n("Sorry, there are no images matching your search query. Please try again!Reqest is not ok")}finally{i()}});async function m(t=""){const a=u.create({baseURL:"https://pixabay.com/api/",headers:{"Content-Type":"application/json"},params:{key:"41729431-93e496ed3cd794296b45db789",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"}});try{return(await a.get()).data}catch{console.error("Опять шось не то")}const o=await response.json();return o.hits.length?o.hits:(n("Sorry, there are no images matching your search query. Please try again!Reqest is not ok"),i(),[])}const f=({largeImageURL:t,webformatURL:a,tags:o,likes:s,views:e,comments:r,downloads:l})=>`           
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
`,p=new y(".gallery a",{captionsData:"alt",captionDelay:250});function L(t){if(c.innerHTML="",t!==void 0){const a=t.map(o=>f(o)).join("");c.insertAdjacentHTML("beforeend",a),p.refresh(),i()}}function n(t){g.show({title:t,titleColor:"white",color:"white",backgroundColor:"red",position:"topRight"})}function w(){d.classList.add("loading")}function i(){d.classList.remove("loading")}
//# sourceMappingURL=commonHelpers.js.map
