const eyesRoot = document.querySelector('.eyes-root');


const setEyes = type => {
  eyesRoot.className = `head eyes-root eyes--${type}`;
};


document.getElementById('ui_eyes')
  .addEventListener('change', e => setEyes(e.target.value));
