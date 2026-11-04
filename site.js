/* xello · Bewegung nach Magazin-Charakter: Kopfzeile wie Safari, Bilder tauchen auf, Druckgefühl, Titelbild gleitet */
(function(){
  var rm=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
  var bar=document.getElementById("bar"),menu=document.getElementById("menu");
  if(bar&&!rm){var last=scrollY;addEventListener("scroll",function(){var y=scrollY;if(menu&&menu.classList.contains("open"))return;if(y>last+6&&y>140)bar.classList.add("weg");else if(y<last-6||y<140)bar.classList.remove("weg");last=y},{passive:true})}
  document.querySelectorAll(".karte,.g-img,.full,.door,.mz-next .img,.mz-track .f,.fp-btn,.world,.item,.more,.go").forEach(function(e){e.classList.add("druck")});
  if(rm||!("IntersectionObserver" in window))return;
  var bilder=".karte,.g-piece,.piece,.st-inline,.vfilm,.mz-next .img,.voice2 .round,.item",texte=".st-quote,.mz-zahl,.st-big,.voice2 blockquote,.mz-blick,.where";
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("da");io.unobserve(e.target)}})},{rootMargin:"0px 0px -8% 0px",threshold:.08});
  document.querySelectorAll(bilder).forEach(function(e){if(e.closest(".cover"))return;e.classList.add("leise");io.observe(e)});
  document.querySelectorAll(texte).forEach(function(e){e.classList.add("leise-t");io.observe(e)});
  var h=document.querySelector(".mz-hero img");
  if(h){var hh=h.parentNode;addEventListener("scroll",function(){var y=scrollY,H=hh.offsetHeight;if(y>H)return;h.style.transform="translateY("+(y*.25)+"px) scale("+(1+y/H*.04)+")";h.style.opacity=String(1-y/H*.3)},{passive:true})}
})();
