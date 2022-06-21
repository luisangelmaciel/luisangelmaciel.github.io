/* 
A ton of eases are available in the core GSAP library - but we have some fun bonus eases too, including "SlowMo" ease, "RoughEase", "ExpoScaleEase", and custom eases ("CustomEase", "CustomBounce", and "CustomWiggle")

We've loaded all the eases and GSAP plugins into this pen - so go wild!

Check out all the eases available here -> https://greensock.com/docs/v3/Eases 

https://greensock.com/customwiggle/
*/

const tl1 = gsap.timeline({
  paused: true
});
const tl2 = gsap.timeline({
  paused: true
});
const btn = document.getElementById("switch");
const rodL = document.getElementsByClassName("rodL")[0];
const rodR = document.getElementsByClassName("rodR")[0];
let state = true;
let height = document.getElementsByClassName("glass")[0].clientHeight - 45;

btn.classList.add("orange");
rodL.classList.add("orange");
rodR.classList.add("orange");

gsap.registerPlugin(CustomEase, CustomBounce); // register

//Create a custom bounce ease:
CustomBounce.create("myBounce", {
  strength: 0.75,
  squash: 3,
  squashID: "myBounce-squash"
});

tl1
  .to(".ball", { duration: 2, y: -height, ease: "myBounce" }, 0)
  .to(
    ".ball",
    {
      duration: 2,
      scaleX: 1.4,
      scaleY: 0.6,
      ease: "myBounce-squash",
      transformOrigin: "center top",
      onStart: function () {
        btn.classList.add("disable", "blue");
        btn.classList.remove("orange");
        rodL.classList.add("disable", "blue");
        rodR.classList.add("disable", "blue");
        rodL.classList.remove("orange");
        rodR.classList.remove("orange");
      },
      onComplete: function () {
        btn.classList.remove("disable");
        rodL.classList.remove("disable");
        rodR.classList.remove("disable");
      }
    },
    0
  )
  .to(
    "#switch",
    {
      duration: 2,
      rotation: 180,
      ease: "elastic.out(1, 0.3)"
    },
    0
  );

tl2
  .to(".ball", { duration: 2, y: 0, ease: "myBounce" }, 0)
  .to(
    ".ball",
    {
      duration: 2,
      scaleX: 1.4,
      scaleY: 0.6,
      ease: "myBounce-squash",
      transformOrigin: "center bottom",
      onStart: function () {
        btn.classList.add("disable", "orange");
        btn.classList.remove("blue");
        rodL.classList.add("disable", "orange");
        rodR.classList.add("disable", "orange");
        rodL.classList.remove("blue");
        rodR.classList.remove("blue");
      },
      onComplete: function () {
        btn.classList.remove("disable");
        rodL.classList.remove("disable");
        rodR.classList.remove("disable");
      }
    },
    0
  )
  .to(
    "#switch",
    {
      duration: 2,
      rotation: 360,
      ease: "elastic.out(1, 0.3)"
    },
    0
  );

function changeGravity(checkbox) {
  if (state) tl1.restart();
  else tl2.restart();
  state = !state;
}