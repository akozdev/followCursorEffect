let followingEl = null;
const followingElStyle = {
  width: '7px',
  height: '7px',
  backgroundColor: 'greenyellow',
  borderRadius: '50%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'none'
};

init();
window.addEventListener('mousemove', handleMouseMove);

function init() {
  followingEl = document.createElement('div');
  Object.assign(followingEl.style, followingElStyle);
  document.body.appendChild(followingEl);
}

function handleMouseMove(e) {
  const [cursorX, cursorY] = [e.pageX, e.pageY];
  const [followingElX, followingElY] = [cursorX - 5, cursorY - 5];

  followingEl.style.transform = `translate(${followingElX}px, ${followingElY}px)`;
  followingEl.style.display = 'block';

  followingEl.animate(
    [{ transform: `translate(${followingElX}px, ${followingElY}px)` }],
    { duration: 1000 }
  );
}
