// ***
console.log();
// ***

// image animation
// Reusable function
// Scrolling animation effect function
// imageElementClass: add you image class
// direction: should be "+" or "-" default if "+"
// speed: default is 15
// transition: dafault is 0s
// Usage example: scrollEffect("contactBg", "+", 15, "0.5s", 1);

function scrollEffect(imageElementClass, direction = "+", speed = 1.5, transition = "0s", start = 0, scale = 1, position = "0%") {

	// get image element
	let image = document.querySelector(`.${imageElementClass}`);

	if (!(image == null)) {

		// get rectgetClientRects
		let rect = image.getBoundingClientRect();
		let rectHeight = rect.height / 2;

		// set transition and scale
		image.style.transition = transition;
		image.style.transform = `scale(${scale})`;

		if (image.classList.contains("scrollEffectImgHor") && image.classList.contains("scrollEffectImgVer")) {
		
			alert("You can't use both of class effect in same time!");

		} else if (image.classList.contains("scrollEffectImgVer")) {

			window.addEventListener('scroll', _ => {

  			if (window.pageYOffset > start) {

  				let scrollCalc = (window.pageYOffset - start) / speed;
  				let finalScrollCalc = scrollCalc + rectHeight;

  				image.style.backgroundPositionY = `calc(${position} + ${direction}${finalScrollCalc}px)`;

				};

			});

		} else if (image.classList.contains("scrollEffectImgHor")) {

			image.style.backgroundPositionX = `${position}`;
			window.addEventListener('scroll', _ => {

				if (window.pageYOffset > start) {

					let scrollCalc = (window.pageYOffset - start) / speed;
					let finalScrollCalc = scrollCalc;

					image.style.backgroundPositionX = `calc(${position} + ${direction}${finalScrollCalc}px)`;

				};
  		
			});

		} else if (!(image.classList.contains("scrollEffectImgHor") && image.classList.contains("scrollEffectImgVer"))) {

			alert("Effect class not found, make sure you add him first then use the function!");

		};

	};

};

function clearText(element) {

	element.innerHTML = element.textContent;

}

function selectBoxScript() {

  const select = document.querySelector("div.select");
  let isClicked = true;

  if (select) {

  	const title = document.querySelector("div.select .bar .title");
  	const arrow = document.querySelector("div.select .bar .arrow");
  	const container = document.querySelector("div.select .container");
  	const opts = document.querySelectorAll("div.select .container span");
  	let value = document.querySelector("div.select .container span.selected").getAttribute("opt-value");
  	const containerRect = container.getBoundingClientRect();
  	const containerHeight = containerRect.height;

    container.style.height = 0;

    title.textContent = value;

    select.addEventListener("click", _ => {

      select.classList.toggle("clicked", isClicked);
      if (isClicked) {

        container.style.height = `${containerHeight}px`;

      } else {

        container.style.height = 0;

      };

      isClicked = !isClicked;

    });

    opts.forEach(opt => {

      opt.addEventListener("click", _ => {

        opts.forEach(opt => {opt.classList.remove("selected")});

        opt.classList.add("selected");
        value = opt.getAttribute("opt-value");
        title.textContent = value;

      });

    });

  };

};

selectBoxScript()
// ^Reusable function^

// FAQs section
class FAQ {

	static this = [];
	static node = [];
	static idCount = 0;

	constructor(tags, title, blog) {

		this.id = FAQ.idCount++;
		this.tags = tags;
		this.title = title;
		this.blog = blog;

		FAQ.this.push(this);

		// this.appendQ;

	};

	get appendQ() {
		let qBox = document.querySelector(".questionsBox");
		let q = document.createElement("button");

		q.classList.add("q");
		q.innerHTML =`
		<div class="qTitle">
			<h3>${this.title}</h3>
			<span class="triggerIcon">^</span>
		</div>
		<div class="blog">
			<p class="answer">${this.blog}</p>
			<div class="links">
				<a href="#" class="link"><i class="fa-brands fa-facebook"></i></a>
				<a href="#" class="link"><i class="fa-brands fa-twitter"></i></a>
				<a href="#" class="link"><i class="fa-brands fa-linkedin"></i></a>
				<a href="#" class="link"><i class="fa-solid fa-link"></i></a>
			</div>
		</div>`;

		if (!(qBox == null)) {

			qBox.appendChild(q);
			FAQ.node.push(q);

		};

	};

};
// ^FAQs section^

// Create question
let q1 = new FAQ(["general"], `What is an FAQ section?`, `An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?".`);
let q2 = new FAQ(["general"], `Why do FAQs matter?`, `FAQs are a great way to help site visitors find quick answers to common questions about your business and create a better navigation experience.`);
let q4 = new FAQ(["general"], `Where can I add my FAQs?`, `FAQs can be added to any page on your site or to your Wix mobile app, giving access to members on the go.`);
let q5 = new FAQ(["setting_up_FAQs"], `How do I add a new question & answer?`, `To add a new FAQ follow these steps:<br>1. Manage FAQs from your site dashboard or in the Editor<br>2. Add a new question & answer<br>3. Assign your FAQ to a category<br>4. Save and publish.<br><br>You can always come back and edit your FAQs.`);
let q6 = new FAQ(["setting_up_FAQs"], `Can I insert an image, video, or GIF in my FAQ?`, `Yes. To add media follow these steps:<br>1. Manage FAQs from your site dashboard or in the Editor<br>2. Create a new FAQ or edit an existing one<br>3. From the answer text box click on the video, image or GIF icon<br>4. Add media from your library and save.`);
let q7 = new FAQ(["setting_up_FAQs"], `How do I edit or remove the 'Frequently Asked Questions' title?`, `You can edit the title from the FAQ 'Settings' tab in the Editor.<br>To remove the title from your mobile app go to the 'Site & App' tab in your Owner's app and customize.`);
// ^Create question^

// FAQs filter and appenChild

let settings = document.querySelector(".settings");
let settingsBtn = document.querySelectorAll(".opt");

// default option
FAQ.this.forEach(q => {

	if (q.tags.includes("setting_up_FAQs")) {

		q.appendQ;

	};

});

settingsBtn.forEach(settingsBtn => {

	settingsBtn.addEventListener("click", _ => {

		let qBox = document.querySelectorAll(".questionsBox .q");
		let filterValue = settingsBtn.getAttribute("filter-value");

		qBox.forEach(q => {q.remove();});

		FAQ.this.forEach(q => {

			if (q.tags.includes(filterValue)) {

				q.appendQ;

			} else if (filterValue == "all") {

				q.appendQ;

			};

		});

		qAnim();

	});

});

// ^FAQs filter and appenChild^

// question animation
function qAnim() {
	FAQ.node.forEach(q => {
	
		let blog = q.children[1];
		let links = q.children[1].children[1];
		let arrow = q.children[0].children[1];
		let blogHeight = blog.offsetHeight;
	
		blog.style.height = "0";
	
		q.addEventListener("click", _ => {
	
			if (blog.style.height == "0px") {
	
				FAQ.node.forEach(q => {
	
					let blog = q.children[1];
					let arrow = q.children[0].children[1];
					blog.style.height = "0";
					arrow.style.transform = "rotate(180deg) scaleX(1.5)";
					blog.style.paddingTop = "0px";
					links.style.paddingTop = "0px";
	
				});
	
				blog.style.height = `${blogHeight + 50}px`;
				arrow.style.transform = "rotate(0deg) scaleX(1.5)";
				blog.style.paddingTop = "30px";
				links.style.paddingTop = "20px";
	
			} else {
	
				blog.style.height = "0";
				arrow.style.transform = "rotate(180deg) scaleX(1.5)";
				blog.style.paddingTop = "0px";
				links.style.paddingTop = "0px";
	
			};
	
		});
	
	});
	
	settingsBtn.forEach(btn => {
	
		btn.addEventListener("click", _ => {
	
			settingsBtn.forEach(btn => {btn.classList.remove("selected");});
	
			btn.classList.add("selected");
	
		});
	
	});

};

qAnim();
// ^question animation^

// search box animation
let searchIcon = document.querySelector(".faqs .container form i");
let toggle = true;




if (searchIcon !== null) {

	let searchForm = document.querySelector(".faqs .container form");
	let searchInput = document.querySelector(".faqs .container form input");

	searchIcon.addEventListener("click", _ => {

		if (toggle) {

			searchForm.classList.add("selected");
			searchInput.style.display = "unset";
			searchIcon.style.transform = "translateX(0px)";
			searchInput.focus();
			toggle = !toggle;

		} else {

			searchForm.classList.remove("selected");
			searchInput.style.display = "none";
			searchIcon.style.transform = "translateX(20px)";
			toggle = !toggle;

		};

	});

	searchInput.addEventListener("blur", _ => {

		if (toggle) {

			searchForm.classList.add("selected");
			searchInput.style.display = "unset";
			searchIcon.style.transform = "translateX(0px)";
			searchInput.focus();
			toggle = !toggle;

		} else {

			searchForm.classList.remove("selected");
			searchInput.style.display = "none";
			searchIcon.style.transform = "translateX(20px)";
			toggle = !toggle;

		};

	});
};
// ^search box animation^

// lazyLoadText
let boxs = document.querySelectorAll(".lazyLoadText");

let observer = new IntersectionObserver(entries => {

	entries.forEach(box => {

		// box.target.classList.toggle("slide", box.isIntersecting);
		if (box.isIntersecting) {

			box.target.classList.add("slide");
			
		};

	});

}, {rootMargin: "-100px"});

boxs.forEach(box => {

	observer.observe(box);

});
// ^lazyLoadText^

// page on load anim
window.addEventListener("load", _ => {

	document.body.classList.add("loaded");

});
// ^page on load anim^

// valid inputs
let inputs = document.querySelectorAll("input");


inputs.forEach(input => {

	input.addEventListener("keyup", _ => {

		if (!input.checkValidity()) {

			input.style.borderColor = "#8e2627";

		} else {

			input.style.borderColor = "unset";

		};

	});

});
// ^valid inputs^

// menu
const mobileNav = document.querySelector(".mobileNav");
const menu = document.querySelector(".menu");
let menuIsHidden = true;

menu.addEventListener("click", _ => {

	mobileNav.classList.toggle("slide", menuIsHidden);

	if (menuIsHidden) {

		menu.style.position = "fixed";

	} else {

		menu.style.position = "absolute"

	};

	menuIsHidden = !menuIsHidden;

});
// ^menu^

// Set page width attr
const detectWidth = new ResizeObserver((entries) => {

	let rect = entries[0].contentRect;
	let width = rect.width;

	if (width < 768) {

		let btn = document.querySelector("footer .purpleReversBigBtn");
		let introFooter = document.querySelector(".introFooter");
		let aboutDavoneDis = document.querySelector(".aboutDavon .top .sectionDis");
		let resourceDis = document.querySelector(".resources .topSection .text .sectionDis");
		let word = document.querySelector(".word .sectionWord");
		let pageDis = document.querySelector(".pageTitle p.discription");

		if (btn) {

			btn.classList.remove("purpleReversBigBtn");
			btn.classList.add("purpleReversSmallBtn");

		};

		if (introFooter) {

			introFooter.classList.remove("verticalLine");

		};

		if (aboutDavoneDis) {

			clearText(aboutDavoneDis);
			
		};

		if (resourceDis) {

			clearText(resourceDis);

		};

		if (word) {

			clearText(word);

		};

		if (pageDis) {

			clearText(pageDis);

		};

		// scrollEffect("image class","moving direction +Or-", speed 10, "transition 0.5s", start position 1200, scale 1, "backgroundPosition 50%");
		// Usage example: scrollEffect("contactBg", "+", 10, "0s", 1200, 1, "50%");
		
		// Mobile View
		scrollEffect("introdactionBg", "+", 10, "0s", 0, 1, "50%");
		scrollEffect("aboutDavonBg", "+", 1.5, "0s", 1400);
		scrollEffect("ourAcademicsBg", "+", 10, "0s", 2580, 1, "50%");
		scrollEffect("wordBg", "+", 10, "0s", 4300, 1, "140%");
		scrollEffect("rightSideBg", "+", 10, "0s", 0, 1, "50%");
		scrollEffect("ourMissionBg", "+", 2, "0s");
		scrollEffect("contactBg", "+", 15, "0s", 0, 1, "50%");

	} else {

		// Larg Monitor View
		scrollEffect("introdactionBg", "+", 10, "0s", 0, 1.2, "0%");
		scrollEffect("aboutDavonBg", "+", 1.5, "0s", 1400);
		scrollEffect("ourAcademicsBg", "+", 10, "0s", 2580, 1.2);
		scrollEffect("wordBg", "+", 10, "0s", 4300, 1, "100%");
		scrollEffect("rightSideBg", "+", 10, "0s", 0, 1, "25%");
		scrollEffect("ourMissionBg", "+", 2, "0s");
		scrollEffect("contactBg", "+", 15, "0s", 0, 1, "50%");
	};

});

detectWidth.observe(document.body);
// ^Set page width attr^

// resource seach bar
const resourceSearchIcont = document.querySelector(".resources .topbar form div i");


if (resourceSearchIcont) {

	const resourceForm = document.querySelector(".resources .topbar form");
	const resourceInput = document.querySelector(".resources .topbar form input");
	const rect = resourceForm.getBoundingClientRect();
	const formWidth = rect.width - 20;
	let resourceIsClicked = true;

	resourceSearchIcont.addEventListener("click", _ => {

		resourceForm.classList.toggle("clicked", resourceIsClicked);

		if (resourceIsClicked) {

			resourceInput.style.width = `${formWidth}px`;

		};

		resourceIsClicked = !resourceIsClicked;

	});

};

// ^resource seach bar^