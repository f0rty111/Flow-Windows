const webview = document.getElementById('content');
const welcome = document.getElementById('welcome');
const panel = document.getElementById('browserPanel');
const pageName = document.getElementById('pageName');
const browserTitle = document.getElementById('browserTitle');
const browserUrl = document.getElementById('browserUrl');
let currentUrl = 'https://www.youtube.com/';
const pages = {
 home: ['Home','https://www.youtube.com/'],
 music: ['Music','https://music.youtube.com/'],
 shorts: ['Shorts','https://www.youtube.com/shorts/'],
 subscriptions: ['Subscriptions','https://www.youtube.com/feed/subscriptions'],
 library: ['Library','https://www.youtube.com/feed/library'],
 history: ['History','https://www.youtube.com/feed/history']
};
function navigate(key) {
 const [label,url] = pages[key] || pages.home;
 document.querySelectorAll('.nav').forEach(b => b.classList.toggle('active',b.dataset.page===key));
 pageName.textContent = label;
 browserTitle.textContent = label;
 browserUrl.textContent = new URL(url).hostname;
 welcome.classList.add('hidden'); panel.classList.remove('hidden');
 if (currentUrl !== url) { currentUrl = url; webview.loadURL(url); }
}
document.querySelectorAll('[data-page]').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.page)));
document.getElementById('searchForm').addEventListener('submit',e=>{
 e.preventDefault(); const q=document.getElementById('search').value.trim(); if(!q)return;
 currentUrl='https://www.youtube.com/results?search_query='+encodeURIComponent(q);
 pageName.textContent='Search';browserTitle.textContent='Search results';browserUrl.textContent='youtube.com';
 welcome.classList.add('hidden');panel.classList.remove('hidden');webview.loadURL(currentUrl);
});
document.getElementById('back').addEventListener('click',()=>{if(webview.canGoBack())webview.goBack()});
document.getElementById('forward').addEventListener('click',()=>{if(webview.canGoForward())webview.goForward()});
document.getElementById('reload').addEventListener('click',()=>webview.reload());
document.getElementById('openExternal').addEventListener('click',()=>window.open(currentUrl,'_blank'));
document.getElementById('theme').addEventListener('click',()=>document.body.classList.toggle('light'));
webview.addEventListener('did-navigate',e=>{currentUrl=e.url;try{browserUrl.textContent=new URL(e.url).hostname}catch{}});
webview.addEventListener('page-title-updated',e=>{if(e.title)browserTitle.textContent=e.title});
