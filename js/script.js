gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText)

// ANIMAÇÃO SCROLL SUAVE

// Para o ScrollSmoother funcionar, é necessário que o conteudo do site esteja dentro de uma div com a classe "smooth-content".
ScrollSmoother.create({
	wrapper: "#smooth-wrapper",
  	content: ".smooth-content",
    // smooth quanto maior o numero, mais suave será o scroll, mas também mais lento.
	smooth: 2,
	effects: true
});

// ANIMAÇÃO HERO E HEADER

// Animação fade-in do header e do hero
gsap.from(".header", {
  opacity: 0,
  duration: 2.5
})

gsap.from(".hero", {
  opacity: 0,
  duration: 2.5
})

// Animação cards

const cardSections = [
	// Secao de experiencias da Home
	{ selector: ".home-experience-cards", start: "top 80%", end: "bottom 55%", stagger: 0.3, },

	// Secao da agenda resumida da Home
	{ selector: ".home-agenda-cards", start: "top 80%", end: "bottom 55%", stagger: 0.3 },

	// Secao da agenda da pagina Programacao
	{ selector: ".program-agenda-cards", start: "top 80%", end: "bottom 75%", stagger: 0.3 },

	// Secao de convidados da pagina Programacao
	{ selector: ".program-famous-cards", start: "top 90%", end: "bottom 65%", stagger: 0.3 },

	// Secao de ingressos da pagina Ingressos
	{ selector: ".ingre-price-cards", start: "top 90%", end: "bottom 65%",},


	{ selector: ".partners-grid", start: "top 90%", end: "bottom 65%", stagger: 0.3 },
]

cardSections.forEach(({ selector, start, end, stagger }) => {
	const section = document.querySelector(selector)

	if (!section) return

	gsap.from(section.querySelectorAll(".card"), {
		opacity: 0,
		y: 100,
		filter: "blur(5px)",
		stagger,
		scrollTrigger: {
			trigger: section,
			start,
			scrub: true,
			end
		}
	})
})

// Animação de textos com SplitText

const split = SplitText.create(".textSplit",{
	type: " lines, words, chars",
	mask: "lines",
})

gsap.from(split.chars, {
  y: 40,
  opacity: 0,
  duration: 0.3,
  stagger: 0.05,
})

const splitLines = SplitText.create(".textSplit-lines",{
	type: " lines, words,",
	mask: "lines",
})

gsap.from(splitLines.lines, {
  y: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.05,
  delay: 1.8,
})

gsap.fromTo(".btn-animation", {
    autoAlpha: 0
  },
  {
    autoAlpha: 1,
    delay: 2.5 
  }
)