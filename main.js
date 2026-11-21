(function(){
  var root=document.documentElement;
  root.classList.remove('no-js');
  var btn=document.getElementById('hamburger');
  var drawer=document.getElementById('mob-drawer');
  var overlay=document.getElementById('mob-overlay');
  var closeBtn=document.getElementById('drawer-close');
  function openMenu(){
    drawer.hidden=false;
    requestAnimationFrame(function(){overlay.classList.add('visible');});
    btn.setAttribute('aria-expanded','true');
    root.style.overflow='hidden';
    if(closeBtn){closeBtn.focus();}
  }
  function closeMenu(){
    drawer.hidden=true;
    overlay.classList.remove('visible');
    btn.setAttribute('aria-expanded','false');
    root.style.overflow='';
    btn.focus();
  }
  if(btn&&drawer&&overlay){
    btn.addEventListener('click',function(){
      if(btn.getAttribute('aria-expanded')==='true'){closeMenu();}else{openMenu();}
    });
    overlay.addEventListener('click',closeMenu);
    if(closeBtn){closeBtn.addEventListener('click',closeMenu);}
    document.addEventListener('keydown',function(e){
      if(e.key==='Escape'&&btn.getAttribute('aria-expanded')==='true'){closeMenu();}
    });
    window.addEventListener('resize',function(){
      if(window.innerWidth>768&&btn.getAttribute('aria-expanded')==='true'){closeMenu();}
    });
  }
  var heads=document.querySelectorAll('.acc-head');
  for(var i=0;i<heads.length;i++){
    heads[i].addEventListener('click',function(){
      var item=this.closest('.acc-item');
      var open=item.classList.toggle('open');
      this.setAttribute('aria-expanded',open?'true':'false');
    });
  }
})();
