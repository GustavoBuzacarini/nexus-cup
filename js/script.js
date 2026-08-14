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
  duration: 1.2
})

gsap.from(".hero", {
  opacity: 0,
  duration: 1.2
})

// Animação cards

gsap.from(".card",{
	opacity: 0,
	y: 100,
	filter: "blur(5px)",
	stagger: 0.3,
	scrollTrigger: {
		trigger: ".card-grid",
		start: "0% 70%",
		scrub: true,
		end: "100% 15%"
	}
})

gsap.from(".event-days",{
	opacity: 0,
	y: 100,
	filter: "blur(2px)",
	stagger: 0.3,
	scrollTrigger: {
		trigger: ".event-days",
		start: "0% 90%",
		scrub: true,
		end: "100% 70%",
	}
})