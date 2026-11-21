// Magnetic scroll: eased anchor jumps, and a gentle pull to the nearest section edge when
// scrolling stops close to one. Stronger in the direction of travel. Any user input cancels it.
(function(){
  if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  var OFF=72, anim=null, lastY=scrollY, dir=0, idle=null, quietUntil=0;
  function targets(){ return [].slice.call(document.querySelectorAll('.hero,.part,.sec,.foot-band')); }
  function topOf(el){ return el.getBoundingClientRect().top + scrollY - (el.classList.contains('hero')?56:el.classList.contains('part')?56:OFF); }
  function ease(t){ return t<.5 ? 4*t*t*t : 1-Math.pow(-2*t+2,3)/2; }
  function stop(){ if(anim){ cancelAnimationFrame(anim); anim=null; } }
  function glide(y, ms){
    stop(); var y0=scrollY, d=Math.max(0,Math.min(y, document.documentElement.scrollHeight-innerHeight))-y0;
    if (Math.abs(d)<2) return;
    ms = ms || Math.min(1100, 320 + 140*Math.sqrt(Math.abs(d)/400));
    var t0=performance.now();
    (function step(t){ var k=Math.min(1,(t-t0)/ms); scrollTo(0, y0+d*ease(k)); quietUntil=performance.now()+120;
      anim = k<1 ? requestAnimationFrame(step) : null; })(t0);
  }
  ['wheel','touchstart','keydown','pointerdown'].forEach(function(e){ addEventListener(e, stop, {passive:true}); });

  // Anchor links: eased, distance-aware, keeps the hash.
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a[href^="#"]'); if (!a || e.metaKey || e.ctrlKey) return;
    var id = a.getAttribute('href').slice(1), el = id ? document.getElementById(id) : document.body;
    if (!el) return; e.preventDefault();
    glide(id==='top'||!id ? 0 : topOf(el)); history.pushState(null,'','#'+id);
  });

  // Magnet: when scrolling settles, snap to an edge only if it's close; reading mid-section is left alone.
  function settle(){
    if (anim || performance.now()<quietUntil) return;
    if (getSelection && String(getSelection()).length) return;
    var y=scrollY, vh=innerHeight, best=null, bestD=Infinity;
    if (y + vh >= document.documentElement.scrollHeight - 4) return;   // at the bottom
    targets().forEach(function(el){
      var d = topOf(el) - y, reach = (d*dir > 0 ? .26 : .1) * vh;      // ahead of travel pulls harder
      if (Math.abs(d) < Math.min(reach, 220) && Math.abs(d) < bestD){ best=el; bestD=Math.abs(d); }
    });
    if (best && bestD > 3) glide(topOf(best), 260 + bestD*1.2);
  }
  addEventListener('scroll', function(){
    if (scrollY !== lastY) dir = scrollY > lastY ? 1 : -1; lastY = scrollY;
    if (anim) return; clearTimeout(idle); idle = setTimeout(settle, 140);
  }, {passive:true});
})();
