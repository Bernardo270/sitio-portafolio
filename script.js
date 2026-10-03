document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('track');
  const panels = Array.from(document.querySelectorAll('.panel'));
  const dots = Array.from(document.querySelectorAll('.dot'));
  const progressFill = document.getElementById('progressFill');
  const total = panels.length;

  function goTo(index){
    index = Math.max(0, Math.min(total - 1, index));
    panels[index].scrollIntoView({ behavior:'smooth', inline:'start', block:'nearest' });
  }

  function currentIndex(){
    const scrollLeft = track.scrollLeft;
    const width = track.clientWidth;
    return Math.round(scrollLeft / width);
  }

  function updateUI(){
    const idx = currentIndex();
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    const pct = total > 1 ? ((idx + 1) / total) * 100 : 100;
    progressFill.style.width = pct + '%';
  }

  // Translate vertical wheel input into horizontal scroll on desktop.
  track.addEventListener('wheel', (e) => {
    if (window.innerWidth <= 720) return; // let mobile scroll normally (vertical layout)
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      track.scrollLeft += e.deltaY;
    }
  }, { passive:false });

  track.addEventListener('scroll', () => {
    window.requestAnimationFrame(updateUI);
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => goTo(parseInt(dot.dataset.index, 10)));
  });

  document.querySelectorAll('[data-goto]').forEach(btn => {
    btn.addEventListener('click', () => goTo(parseInt(btn.dataset.goto, 10)));
  });

  document.addEventListener('keydown', (e) => {
    if (window.innerWidth <= 720) return;
    if (e.key === 'ArrowRight') goTo(currentIndex() + 1);
    if (e.key === 'ArrowLeft') goTo(currentIndex() - 1);
  });

  // Basic drag-to-scroll for desktop mouse users.
  let isDown = false, startX = 0, startScroll = 0;
  track.addEventListener('mousedown', (e) => {
    if (window.innerWidth <= 720) return;
    isDown = true; startX = e.pageX; startScroll = track.scrollLeft;
    track.style.cursor = 'grabbing';
  });
  window.addEventListener('mouseup', () => { isDown = false; track.style.cursor = ''; });
  window.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    track.scrollLeft = startScroll - (e.pageX - startX);
  });

  updateUI();
});
