// Glyph tiles: print in when the row scrolls into view; tilt toward the pointer on hover.
(function(){
  var rows=document.querySelectorAll('.glyphs'); if(!rows.length) return;
  if(!('IntersectionObserver' in window)){ rows.forEach(function(r){r.classList.add('in-view');}); }
  else { var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in-view'); io.unobserve(e.target);} }); },{threshold:.25});
    rows.forEach(function(r){ io.observe(r); }); }
  if(matchMedia('(prefers-reduced-motion:reduce)').matches || !matchMedia('(hover:hover)').matches) return;
  document.querySelectorAll('.glyph .art').forEach(function(art){
    var raf=0;
    art.addEventListener('pointermove',function(e){ var r=art.getBoundingClientRect(),
      x=((e.clientX-r.left)/r.width)*2-1, y=((e.clientY-r.top)/r.height)*2-1;
      cancelAnimationFrame(raf); raf=requestAnimationFrame(function(){ art.style.setProperty('--mx',x.toFixed(3)); art.style.setProperty('--my',y.toFixed(3)); }); });
    art.addEventListener('pointerleave',function(){ cancelAnimationFrame(raf); art.style.setProperty('--mx',0); art.style.setProperty('--my',0); });
  });
})();
