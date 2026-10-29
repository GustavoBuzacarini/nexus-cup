gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

// No celular, só o ScrollSmoother fica ativo; as demais animações continuam no desktop.
const responsiveAnimations = gsap.matchMedia()
responsiveAnimations.add("(max-width: 859px) and (prefers-reduced-motion: no-preference)", () => {
  const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: ".smooth-content",
    smooth: 2,
    smoothTouch: 0.1,
    effects: false
  })

  return () => smoother.kill()
})

responsiveAnimations.add("(min-width: 860px) and (prefers-reduced-motion: no-preference)", () => {

// ANIMAÇÃO SCROLL SUAVE

// Para o ScrollSmoother funcionar, é necessário que o conteudo do site esteja dentro de uma div com a classe "smooth-content".
const smoother = ScrollSmoother.create({
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

if (document.querySelector(".hero")) {
  gsap.from(".hero", {
    opacity: 0,
    duration: 2.5
  })
}

// Animação cards

const cardSections = [
	// Secao de experiencias da Home
	{ selector: ".card-grid--home-experience", start: "top 80%", end: "bottom 55%", stagger: 0.3, },

	// Secao da agenda resumida da Home
	{ selector: ".event-days--home-agenda", start: "top 80%", end: "bottom 55%", stagger: 0.3 },

	// Secao da agenda da pagina Programacao
	{ selector: ".event-days--program-agenda", start: "top 80%", end: "bottom 75%", stagger: 0.3 },

	// Secao de convidados da pagina Programacao
	{ selector: ".famous-grid--program", start: "top 90%", end: "bottom 65%", stagger: 0.3 },

	// Secao de ingressos da pagina Ingressos
	{ selector: ".price-grid--tickets", start: "top 90%", end: "bottom 65%",},


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

if (document.querySelector(".hero__split-text")) {
const split = SplitText.create(".hero__split-text",{
	type: " lines, words, chars",
	mask: "lines",
})

gsap.from(split.chars, {
  y: 40,
  opacity: 0,
  duration: 0.3,
  stagger: 0.05,
})

const splitLines = SplitText.create(".hero__split-lines",{
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

gsap.fromTo(".hero__animated-button", {
    autoAlpha: 0
  },
  {
    autoAlpha: 1,
    delay: 2.5 
  }
)
}

return () => smoother.kill()
})

// Carrossel dos jogos: a barra acompanha os seis segundos de cada slide.
const carousel = document.querySelector("[data-carousel]")
if (carousel) {
  const slideDuration = 6000
  const slides = [...carousel.querySelectorAll("[data-slide]")]
  const indicators = [...carousel.querySelectorAll("[data-carousel-to]")]
  const progressBar = indicators[1]
  const status = carousel.querySelector("[data-carousel-status]")
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
  let current = 0
  let frame
  let elapsed = 0
  let lastFrameTime = null

  function updateProgress() {
    progressBar.style.setProperty("--progress", Math.min(elapsed / slideDuration, 1))
  }

  function showSlide(index, announce = false) {
    current = (index + slides.length) % slides.length
    elapsed = 0
    progressBar.style.setProperty("--progress", 0)
    slides.forEach((slide, position) => {
      const active = position === current
      slide.classList.toggle("is-active", active)
      slide.classList.toggle("is-prev", position === (current - 1 + slides.length) % slides.length)
      slide.classList.toggle("is-next", position === (current + 1) % slides.length)
      slide.setAttribute("aria-hidden", String(!active))
    })
    indicators.forEach((button, position) => {
      button.classList.toggle("is-active", position === current)
      button.setAttribute("aria-current", String(position === current))
    })
    if (announce) status.textContent = `Jogo ${current + 1} de ${slides.length}: ${slides[current].querySelector("h3").textContent}`
    updateProgress()
  }

  function stopAuto() {
    window.cancelAnimationFrame(frame)
    frame = undefined
    lastFrameTime = null
  }

  function tick(now) {
    if (lastFrameTime !== null) elapsed += now - lastFrameTime
    lastFrameTime = now
    if (elapsed >= slideDuration) showSlide(current + 1)
    updateProgress()
    frame = window.requestAnimationFrame(tick)
  }

  function startAuto(force = false) {
    stopAuto()
    if (reducedMotion.matches || document.hidden || (!force && (carousel.matches(":hover") || carousel.contains(document.activeElement)))) return
    frame = window.requestAnimationFrame(tick)
  }

  carousel.querySelector("[data-carousel-prev]").addEventListener("click", () => {
    showSlide(current - 1, true)
    startAuto(true)
  })
  carousel.querySelector("[data-carousel-next]").addEventListener("click", () => {
    showSlide(current + 1, true)
    startAuto(true)
  })
  indicators.forEach((button, index) => button.addEventListener("click", () => {
    showSlide(index, true)
    startAuto(true)
  }))
  carousel.addEventListener("mouseenter", stopAuto)
  carousel.addEventListener("mouseleave", () => startAuto())
  carousel.addEventListener("focusin", stopAuto)
  carousel.addEventListener("focusout", () => window.setTimeout(startAuto, 0))
  reducedMotion.addEventListener("change", () => startAuto())
  document.addEventListener("visibilitychange", () => startAuto())

  let touchStart = 0
  carousel.querySelector(".games-carousel__slides").addEventListener("touchstart", (event) => {
    touchStart = event.changedTouches[0].screenX
  }, { passive: true })
  carousel.querySelector(".games-carousel__slides").addEventListener("touchend", (event) => {
    const distance = event.changedTouches[0].screenX - touchStart
    if (Math.abs(distance) < 50) return
    showSlide(current + (distance < 0 ? 1 : -1), true)
    startAuto(true)
  }, { passive: true })

  carousel.classList.add("is-ready")
  showSlide(0)
  startAuto()
}
