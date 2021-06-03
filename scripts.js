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
