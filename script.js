// Reusable function
// Scrolling animation effect function
// imageElementClass: add you image class
// direction: should be "+" or "-" default if "+"
// speed: default is 15
// transition: dafault is 0s
// Usage example: scrollEffect("contactBg", "-", 15, "0.5s");
function scrollEffect(imageElementClass, direction = "+", speed = 15, transition = "0s") {

	// get image element
	// let image = document.querySelector(`.${imageElementClass}`);
	let image = imageElementClass;

	// set transition and scale
	image.style.transition = transition;
	image.style.transform = "scale(1.1)";

	if (image.classList.contains("scrollEffectImgHor") && image.classList.contains("scrollEffectImgVer")) {
		
		alert("You can't use both of class effect in same time!");

	} else if (image.classList.contains("scrollEffectImgVer")) {

		window.addEventListener('scroll', _ => {

  		let y = window.pageYOffset / speed;
  		image.style.backgroundPositionY = `${y}px`;

		});

	} else if (image.classList.contains("scrollEffectImgHor")) {

		window.addEventListener('scroll', _ => {

  		let y = window.pageYOffset / speed;
  		image.style.backgroundPositionX = `calc(50% ${direction} ${y}px)`;

		});

	} else if (!(image.classList.contains("scrollEffectImgHor") && image.classList.contains("scrollEffectImgVer"))) {

		alert("Effect class not found, make sure you add him first then use the function!");

	};

};

// ^Reusable function^

let introdactionBg = document.querySelector(".introdactionBg");
if (!(introdactionBg == null)) {
	// scrollEffect(introdactionBg);
}

let aboutDavonBg = document.querySelector(".aboutDavonBg");
if (!(aboutDavonBg == null)) {
	scrollEffect(aboutDavonBg, "+", 2, "0s");
}

let ourAcademicsBg = document.querySelector(".ourAcademicsBg");
if (!(ourAcademicsBg == null)) {
	scrollEffect(ourAcademicsBg, "+", 10, "0s");
}

let wordBg = document.querySelector(".wordBg");
if (!(wordBg == null)) {
	scrollEffect(wordBg, "+", 10, "0s");
}

let rightSideBg = document.querySelector(".rightSideBg");
if (!(rightSideBg == null)) {
	scrollEffect(rightSideBg, "+", 10, "0s");
}

let ourMissionBg = document.querySelector(".ourMissionBg");
if (!(ourMissionBg == null)) {
	scrollEffect(ourMissionBg, "+", 2, "0s");
}

let contactBg = document.querySelector(".contactBg");
if (!(contactBg == null)) {
	scrollEffect(contactBg, "+", 15, "0s");
}