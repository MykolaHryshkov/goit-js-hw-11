import{a as l,S as u,i as f}from"./assets/vendor-CNqCr-V-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const d="53675340-c8f1c39aaab6a47e6dfd34957",p="https://pixabay.com/api/";async function y(s){try{return(await l.get(p,{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Pixabay API Error:",t),new Error("Помилка при отриманні зображень. Спробуйте пізніше.")}}const i=document.querySelector(".gallery");let m=new u(".gallery a");function h(s){const t=s.map(r=>`
    <li>
      <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy">
        <div class="info">
          <p>Likes: ${r.likes}</p>
          <p>Views: ${r.views}</p>
          <p>Comments: ${r.comments}</p>
          <p>Downloads: ${r.downloads}</p>
        </div>
      </a>
    </li>
  `).join("");i.insertAdjacentHTML("beforeend",t),m.refresh()}function g(){i.innerHTML=""}function L(){document.querySelector(".loader").style.display="block"}function w(){document.querySelector(".loader").style.display="none"}function b(){f.info({title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}const c=document.querySelector(".form"),S=c.querySelector("input[name='search-text']");c.addEventListener("submit",async s=>{s.preventDefault();const t=S.value.trim();if(t){g(),L();try{const r=await y(t);r.length===0?b():h(r)}catch(r){console.error(r)}finally{w()}}});iziToast.success({message:"Бібліотека iziToast працює!"});
//# sourceMappingURL=index.js.map
