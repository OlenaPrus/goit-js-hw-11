import{S as u,i as d}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const m=document.querySelector(".form"),i=document.querySelector(".gallery");document.querySelector(".gallery-box");const l=document.querySelector(".loader");document.querySelector("input");l.style.display="none";const c={key:"42449001-9f730a509ed4c563c5fe29690",q:"searchPicture",image_type:"photo",orientation:"horizontal",safesearch:!0},p=new u(".gallery a",{nav:!0,captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0});function f(s){return fetch(`https://pixabay.com/api/?${s}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(({hits:t})=>{if(t.length>0){const a=t.reduce((o,e)=>o+`<li class="gallery-item">
        <a href=${e.largeImageURL}> 
          <img class="gallery-img" src =${e.webformatURL} alt=${e.tags}/>
        </a>
        <div class="gallery-text-box">
          <p>Likes: <span class="text-value">${e.likes}</span></p>
          <p>views: <span class="text-value">${e.views}</span></p>
          <p>comments: <span class="text-value">${e.comments}</span></p>
          <p>downloads: <span class="text-value">${e.downloads}</span></p>
      </div>
      </li>`,"");i.innerHTML=a,p.refresh()}else d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(t=>{console.log(t.message)}).finally(()=>{l.style.display="none"})}m.addEventListener("submit",s=>{s.preventDefault(),i.innerHTML="",l.style.display="block",c.q=s.target.elements.search.value.trim();const t=new URLSearchParams(c);f(t),s.currentTarget.reset()});
//# sourceMappingURL=commonHelpers.js.map
