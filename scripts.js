const accordions = document.querySelectorAll(".accordion");

const openAccordion = (accordion) => {
	const answer = accordion.querySelector(".accordion__answer");
	accordion.classList.add("accordion__active");
	answer.style.maxHeight = answer.scrollHeight + "px";
};

const closeAccordion = (accordion) => {
	const answer = accordion.querySelector(".accordion__answer");
	accordion.classList.remove("accordion__active");
	answer.style.maxHeight = null;
};

accordions.forEach((accordion) => {
	const question = accordion.querySelector(".accordion__question");
	const answer = accordion.querySelector(".accordion__answer");

	question.onclick = () => {
		if (answer.style.maxHeight) {
			closeAccordion(accordion);
		} else {
			accordions.forEach((accordion) => closeAccordion(accordion));
			openAccordion(accordion);
		}
	};
});

window.addEventListener('scroll', function (e) {
	const anchorLinks = document.querySelector('.anchor-links')
	const accordions = document.querySelector('.accordions');
	const distanceToTop = accordions.getBoundingClientRect().top;

	if (distanceToTop <= 20) {
		anchorLinks.classList.add("show");
	}
	else {
		anchorLinks.classList.remove("show");
	}
});

// const urlHash = document.location.hash;

// if (urlHash) {
// 	const slicedUrlHash = urlHash.slice(1)
// 	const test = document.getElementById(slicedUrlHash);
// 	console.log(test)
// 	const parent = test.parentNode;
// 	console.log(parent)
// 	parent.classList.add('boom')
// }
