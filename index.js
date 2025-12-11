import{a as l,S as u,i as f}from"./assets/vendor-CNqCr-V-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const d="https://pixabay.com/api/",p="твій_ключ_API";async function y(s){try{return(await l.get(d,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(r){throw console.error("Error fetching images:",r),r}}const a=document.querySelector(".gallery");let m=new u(".gallery a");function h(s){const r=s.map(t=>`
    <li>
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy">
        <div class="info">
          <p>Likes: ${t.likes}</p>
          <p>Views: ${t.views}</p>
          <p>Comments: ${t.comments}</p>
          <p>Downloads: ${t.downloads}</p>
        </div>
      </a>
    </li>
  `).join("");a.insertAdjacentHTML("beforeend",r),m.refresh()}function g(){a.innerHTML=""}function L(){document.querySelector(".loader").style.display="block"}function w(){document.querySelector(".loader").style.display="none"}function b(){f.info({title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}const c=document.querySelector(".form"),S=c.querySelector("input[name='search-text']");c.addEventListener("submit",async s=>{s.preventDefault();const r=S.value.trim();if(r){g(),L();try{const t=await y(r);t.length===0?b():h(t)}catch(t){console.error(t)}finally{w()}}});iziToast.success({message:"Бібліотека iziToast працює!"});
//# sourceMappingURL=index.js.map
