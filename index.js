const $hoverboxes = document.querySelectorAll('.hoverbox');
let bounds;

function rotateToMouse($hoverbox, bounds) {
  return function (e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    }
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    $hoverbox.style.transform = `
            scale3d(1.07, 1.07, 1.07)
            rotate3d(
                ${center.y / 100},
                ${-center.x / 100},
                0,
                ${Math.log(distance) * 2}deg
            )
        `;

    $hoverbox.querySelector('.glow').style.backgroundImage = `
            radial-gradient(
                circle at
                ${center.x * 2 + bounds.width / 2}px
                ${center.y * 2 + bounds.height / 2}px,
                #6d6c6c02,
                #0000000f
            )
        `;
  };
}

$hoverboxes.forEach($hoverbox => {
  let onMouseMove;

  $hoverbox.addEventListener('mouseenter', () => {
    const bounds = $hoverbox.getBoundingClientRect();
    onMouseMove = rotateToMouse($hoverbox, bounds);
    document.addEventListener('mousemove', onMouseMove);
  });

  $hoverbox.addEventListener('mouseleave', () => {
    if (onMouseMove) {
      document.removeEventListener('mousemove', onMouseMove);
      onMouseMove = null; // Reset onMouseMove to null after removing the event listener
    }
    $hoverbox.style.transform = '';
    $hoverbox.style.background = '';
  });
});

/////////////////////////////////////////////////////////// Season 1 Carousel

const slider = document.querySelector(".slider");

function activate(e) {
  const items = document.querySelectorAll(".item");
  e.target.matches(".next") && slider.append(items[0]);
  e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
}

document.addEventListener("click", activate, false);

/////////////////////////////////////////////////////////// Season 2 Carousel


const slidertwo = document.querySelector(".slidertwo");

function activatetwo(e) {
  const itemstwo = document.querySelectorAll(".itemtwo");
  e.target.matches(".nexttwo") && slidertwo.append(itemstwo[0]);
  e.target.matches(".prevtwo") && slidertwo.prepend(itemstwo[itemstwo.length - 1]);
}

document.addEventListener("click", activatetwo, false);