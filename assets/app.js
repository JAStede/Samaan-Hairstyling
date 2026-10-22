const menu=document.querySelector('#menu');menu?.addEventListener('click',()=>{let n=document.querySelector('.links');n.classList.toggle('show');menu.setAttribute('aria-expanded',n.classList.contains('show'))});const modal=document.querySelector('#preview');document.querySelectorAll('[data-preview]').forEach(b=>b.addEventListener('click',()=>{modal.classList.add('open');document.body.style.overflow='hidden'}));document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>{modal.classList.remove('open');document.body.style.overflow=''}));modal?.addEventListener('click',e=>{if(e.target===modal){modal.classList.remove('open');document.body.style.overflow=''}});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal){modal.classList.remove('open');document.body.style.overflow=''}});const cookie=document.querySelector('#cookie');try{if(cookie&&localStorage.getItem('samaan-consent'))cookie.remove();}catch{}document.querySelectorAll('[data-consent]').forEach(b=>b.addEventListener('click',()=>{try{localStorage.setItem('samaan-consent',b.dataset.consent);}catch{}cookie?.remove()}));
// Fill only verified salon profile URLs; empty values stay hidden.
const socialProfiles = {
  instagram: '', // TODO: confirm https://www.instagram.com/samaanhairstyling/
  tiktok: '' // TODO: exact salon profile URL needed
};
document.querySelectorAll('[data-social]').forEach(link => {
  const platform=link.dataset.social;
  const raw=socialProfiles[platform];
  if(!raw)return;
  try{
    const url=new URL(raw);
    const host=url.hostname.replace(/^www\./,'');
    const validPath=platform==='tiktok'?/^\/@[^/]+\/?$/.test(url.pathname):/^\/[^/]+\/?$/.test(url.pathname);
    if(url.protocol!=='https:'||host!==platform+'.com'||!validPath)return;
    link.href=url.href;
    link.target='_blank';
    link.rel='noopener';
    link.setAttribute('aria-label',platform==='instagram'?'Instagram Samaan Hairstyling':'TikTok Samaan Hairstyling');
    link.hidden=false;
  }catch{}
});
