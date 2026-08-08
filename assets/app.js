
const menuBtn=document.querySelector('.menu-btn');const nav=document.querySelector('.nav-links');if(menuBtn){menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));}
const search=document.querySelector('#pub-search');const year=document.querySelector('#pub-year');const cat=document.querySelector('#pub-cat');
function filterPubs(){if(!search)return;const q=search.value.toLowerCase().trim();const y=year.value;const c=cat.value;document.querySelectorAll('.pub-item').forEach(el=>{const okQ=!q||el.dataset.text.includes(q);const okY=!y||el.dataset.year===y;const okC=!c||el.dataset.cat===c;el.classList.toggle('hidden',!(okQ&&okY&&okC));});}
[search,year,cat].filter(Boolean).forEach(x=>x.addEventListener('input',filterPubs));
