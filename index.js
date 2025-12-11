import{a as u,S as f,i}from"./assets/vendor-DvfmeZXB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const d="53675340-c8f1c39aaab6a47e6dfd34957",p="https://pixabay.com/api/";async function y(n){try{return(await u.get(p,{params:{key:d,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(r){throw console.error("Pixabay API Error:",r),new Error("Помилка при отриманні зображень. Спробуйте пізніше.")}}const c=document.querySelector(".gallery");let m=new f(".gallery a");function h(n){const r=n.map(t=>`
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
  `).join("");c.insertAdjacentHTML("beforeend",r),m.refresh()}function g(){c.innerHTML=""}function L(){document.querySelector(".loader").style.display="block"}function w(){document.querySelector(".loader").style.display="none"}const l=document.querySelector(".form"),b=l.querySelector("input[name='search-text']");l.addEventListener("submit",S);async function S(n){n.preventDefault();const r=b.value.trim();if(!r){i.warning({title:"Warning",message:"Будь ласка, введіть ключове слово для пошуку!",position:"topRight"});return}g(),L();try{const t=await y(r);if(t.length===0){i.info({title:"Info",message:"На жаль, за вашим запитом нічого не знайдено. Спробуйте інший пошук!",position:"topRight"});return}h(t)}catch(t){i.error({title:"Error",message:t.message,position:"topRight"})}finally{w()}}
//# sourceMappingURL=index.js.map
