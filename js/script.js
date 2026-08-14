gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText)

// Para o ScrollSmoother funcionar, é necessário que o conteudo do site esteja dentro de uma div com a classe "smooth-content".
ScrollSmoother.create({
	wrapper: "#smooth-wrapper",
  	content: ".smooth-content",
    // smooth quanto maior o numero, mais suave será o scroll, mas também mais lento.
	smooth: 2,
	effects: true
});

