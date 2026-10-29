# Nexus Cup

Site de divulgação de um festival **fictício de e-sports**, desenvolvido como projeto acadêmico. A experiência reúne apresentação do evento, jogos em destaque, programação de três dias e opções de ingressos em uma interface responsiva.

O projeto foi construído com HTML, CSS e JavaScript. Sua identidade usa fundo escuro, verde como cor de destaque, tipografia de impacto e imagens dos jogos para aproximar o conteúdo do universo competitivo.

## Páginas e recursos

| Página | Conteúdo |
| --- | --- |
| [Início](index.html) | Apresentação do festival, carrossel de jogos, experiências, resumo dos três dias e acesso aos ingressos. |
| [Programação](programacao.html) | Imagens dos jogos, agenda por dia e horários, convidados e chamada para os ingressos. |
| [Ingressos](ingressos.html) | Comparação dos passes Player, Pro e Legend, patrocinadores, contato, localização e perguntas frequentes. |

O carrossel da página inicial mostra **Valorant, CS GO 2 e EA FC**. Ele avança automaticamente a cada **6 segundos**. A barra **central** preenche de cinza para verde durante esse intervalo e recomeça a cada troca, inclusive quando a pessoa muda de jogo manualmente. Há setas, indicadores e gesto de deslizar em telas sensíveis ao toque. Ao passar o ponteiro sobre o carrossel, focar seus controles ou deixar a aba em segundo plano, a reprodução automática é interrompida. A preferência do sistema por movimento reduzido desativa o avanço automático.

As imagens têm versões próprias para computador e celular, selecionadas pelo elemento HTML `<picture>`. Na Programação, os três jogos também aparecem em uma faixa visual antes da agenda. A navegação, os cartões e os controles se adaptam a telas menores.

## Como o projeto evoluiu

1. **Estrutura e conteúdo:** o site foi organizado em três páginas para apresentar o festival, detalhar a agenda e comparar os passes. A imagem da arena entrou como detalhe discreto no início da Home, preservando a leitura do texto.
2. **Identidade e movimento:** a interface recebeu estilos responsivos e animações com GSAP. A navegação mobile foi ajustada, e as classes CSS foram padronizadas com BEM.
3. **Imagens dos jogos:** a partir do feedback de que faltava contexto visual, foi elaborado um [plano de design](design/proposta-imagens-jogos.md) para um carrossel na Home e uma faixa de jogos na Programação. Os [estudos visuais da Home](design/mockup-home-jogos.png) e da [Programação](design/mockup-programacao-jogos.png) orientaram a composição; são referências, não capturas do site final.
4. **Implementação e refinamento:** foram integradas seis imagens fornecidas para desktop e celular em `assets/images/`. O carrossel ganhou transição suave, cartões mais largos, avanço de 6 segundos e progresso sempre na barra central. No celular, as animações de entrada do GSAP foram removidas, mantendo apenas o ScrollSmoother; a preferência por movimento reduzido também é respeitada.

## Tecnologias e organização

- **HTML5:** estrutura semântica, imagens responsivas com `<picture>` e FAQ com `<details>` e `<summary>`.
- **CSS3:** layout com Flexbox e Grid, variáveis de estilo e media queries.
- **JavaScript:** controle do carrossel, navegação manual, temporizador e sincronização da barra de progresso.
- **GSAP:** ScrollSmoother para a rolagem; no desktop, ScrollTrigger e SplitText complementam as animações. No celular, somente o ScrollSmoother é iniciado. Com movimento reduzido, esses efeitos não são iniciados.
- **Google Fonts:** Rajdhani e Inter.

```text
nexus-cup/
├── index.html
├── programacao.html
├── ingressos.html
├── css/
│   ├── reset.css
│   └── style.css
├── js/
│   └── script.js
├── assets/
    └── images/
```

As classes CSS seguem a convenção **BEM**: bloco (`.card`), elemento (`.card__title`) e modificador (`.btn--primary`). Classes compartilhadas, como `.container`, funcionam como blocos independentes.

## Executar localmente

Não há etapa de instalação ou compilação. Clone o repositório e abra `index.html` no navegador:

```bash
git clone https://github.com/GustavoBuzacarini/nexus-cup.git
cd nexus-cup
```

As outras páginas podem ser acessadas pelo menu do site. Uma extensão de servidor local, como Live Server, também pode ser usada durante o desenvolvimento. É necessária conexão com a internet para carregar as fontes e a biblioteca GSAP, referenciadas externamente.

## Escopo e observações

Este é um projeto demonstrativo: os botões dos passes levam à seção de contato e **não processam pagamentos**. Alguns links sociais e espaços de patrocínio são ilustrativos. Antes de usar o site como divulgação de um evento real, é preciso revisar esses dados e confirmar a permissão de uso das imagens e a correspondência entre as artes fornecidas e as edições dos jogos apresentadas.

## Autor

Desenvolvido por [Gustavo Buzacarini](https://www.linkedin.com/in/gustavo-buzacarini-b1b97b338/).
