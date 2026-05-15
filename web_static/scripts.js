async function fetchSite(){
  try{
    const res = await fetch('/api/site.php');
    if(!res.ok) throw new Error('Failed to load');
    return await res.json();
  }catch(e){
    console.error(e);
    return null;
  }
}

function buildHeader(data){
  const header = document.querySelector('.site-header');
  if(!data) return;
  const { SITE, TOP_LINKS, NAV_ITEMS } = data;

  // Brand
  const brand = header.querySelector('.brand');
  brand.textContent = window.innerWidth < 768 ? (SITE.shortName || SITE.name) : SITE.name;

  // Top links
  const topLinksEl = header.querySelector('.top-links');
  topLinksEl.innerHTML = TOP_LINKS.map(l => `<a href="${l.href}">${l.label}</a>`).join('');

  // Nav items
  const navEl = header.querySelector('.nav');
  navEl.innerHTML = NAV_ITEMS.map(i => `<a href="${i.href}">${i.label}</a>`).join('');
}

function setupMobile(){
  const btn = document.querySelector('.mobile-toggle');
  const menuContainer = document.querySelector('.mobile-menu');
  btn.addEventListener('click', ()=>{
    const open = menuContainer.style.display === 'block';
    menuContainer.style.display = open ? 'none' : 'block';
    btn.textContent = open ? '☰' : '✕';
  });
}

window.addEventListener('resize', async ()=>{
  const data = await fetchSite();
  if(data){
    const brand = document.querySelector('.brand');
    brand.textContent = window.innerWidth < 768 ? (data.SITE.shortName || data.SITE.name) : data.SITE.name;
  }
});

document.addEventListener('DOMContentLoaded', async ()=>{
  const data = await fetchSite();
  buildHeader(data);
  setupMobile();
});
