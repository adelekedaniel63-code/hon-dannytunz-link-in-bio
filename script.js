// Theme toggle with persistence
(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const STORAGE_KEY = 'linkbio-theme';

  function applyTheme(t){
    if(t === 'dark'){
      root.setAttribute('data-theme','dark');
      toggle.setAttribute('aria-pressed','true');
    } else {
      root.removeAttribute('data-theme');
      toggle.setAttribute('aria-pressed','false');
    }
  }

  // initial: precedence -> localStorage -> prefers-color-scheme
  const saved = localStorage.getItem(STORAGE_KEY);
  if(saved){
    applyTheme(saved);
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  toggle.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });
})();
