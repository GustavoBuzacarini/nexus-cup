# Proposta visual — imagens dos jogos

Status: conceito aprovado e implementado no site em 29/10/2026. Os mockups continuam como referência visual, não como reprodução exata das páginas.

## Diagnóstico do site atual

- A Home apresenta Valorant, CS2 e EA FC apenas no texto de “Sobre o festival”. A imagem principal mostra a arena, mas não os jogos.
- A Programação relaciona os três jogos por horário. A grade é fácil de consultar, mas não oferece uma referência visual de cada jogo.
- A identidade atual combina fundo quase preto, verde `#48e07c`, títulos de impacto, cartões escuros e fotografia da arena. A proposta mantém essa linguagem.

## Direção escolhida

Combinar uma seção de destaque na Home com uma faixa compacta na Programação. A primeira cria impacto visual; a segunda ajuda a reconhecer os jogos perto da agenda. Os ingressos permanecem focados na escolha dos passes.

### Home — carrossel “Jogos em destaque”

- Posição: após “Sobre o festival” e antes de “Experiência em outro nível”.
- Cabeçalho: etiqueta “Jogos em destaque”; título sugerido “Três jogos. Uma só arena.”; apoio curto, sem repetir o texto institucional.
- Três slides: Valorant, CS2 e EA FC. O slide central apresenta imagem ampla, nome do jogo e uma descrição de uma linha. As laterais aparecem parcialmente no desktop para indicar que há mais conteúdo.
- Tratamento: proporção panorâmica no desktop; camada escura na base para leitura do texto; borda verde fina apenas no slide ativo; cantos discretos, como os cartões atuais.
- Largura: a seção usa até 1280 px no desktop, com prévias laterais de 20% cada, para dar mais espaço às imagens.
- Movimento: avanço automático a cada 6 segundos no desktop e no celular. A barra cinza do jogo ativo preenche de verde durante os 6 segundos e reinicia cinza ao mudar de jogo. A troca de slide tem uma entrada suave. O tempo e a barra pausam juntos quando o ponteiro está sobre o carrossel ou um controle recebe foco; há botões anterior/próximo e indicadores. Se a pessoa preferir movimento reduzido, não há avanço automático nem transição.
- Celular: um slide por vez, imagem mais alta, título legível e controles abaixo. O gesto de deslizar é complementar aos botões. Das funções do GSAP, apenas o ScrollSmoother fica ativo, com suavização curta para o toque; as animações de entrada e dos cards continuam desligadas.

### Programação — faixa “Os jogos da Nexus”

- Posição: após o cabeçalho da página e antes da agenda dos três dias.
- Três cartões menores com uma imagem e o nome de cada jogo, na mesma ordem da Home. Sem reprodução automática.
- Desktop: três cartões lado a lado; celular: faixa horizontal navegável. A agenda atual continua com os mesmos dias, textos e horários.
- A faixa serve como reconhecimento visual; não precisa repetir a descrição longa nem competir com a agenda.

## Imagens fornecidas e caminhos

A pasta original `images/` foi movida para `assets/images/`. Os caminhos de logo, favicon, foto da arena e convidados foram atualizados nas três páginas e no CSS. As imagens novas são usadas com `<picture>`: a versão mobile até 679 px e a versão para PC nas demais larguras.

| Jogo exibido | PC | Mobile |
| --- | --- | --- |
| Valorant | `assets/images/img-valorant-pc.jpg` | `assets/images/img-valorant-mobile.jpg` |
| CS GO 2 | `assets/images/img-csgo-pc.jpg` | `assets/images/img-csgo-mobile.jpg` |
| EA FC | `assets/images/img-fifa-pc.jpg` | `assets/images/img-fifa-mobile.jpg` |

Observação: os arquivos recebidos de CS GO e FIFA/FC trazem marcas e edições gráficas próprias das imagens. Os nomes mostrados no site seguem a programação existente; conferir a correspondência exata entre jogo, edição e arte antes de publicar.

## Uso e tratamento das imagens

- Os mockups usam arte conceitual ilustrativa para mostrar composição e contraste. Não representam capturas oficiais dos jogos.
- As seis imagens fornecidas foram usadas no site. Antes de publicação, confirmar que seu uso é permitido.
- Priorizar cenas que identifiquem rapidamente cada modalidade: confronto tático de Valorant, ação competitiva de CS2 e partida de futebol de EA FC. Não colocar texto importante dentro da imagem; o nome deve permanecer como texto da interface.
- Descrever cada imagem de forma objetiva para leitores de tela e manter contraste suficiente sob o texto.

## Leitura dos mockups

- `mockup-home-jogos.png`: proposta da seção principal e sua adaptação para celular.
- `mockup-programacao-jogos.png`: proposta da faixa de jogos próxima à agenda.
- Os mockups são estudos de composição. Alguns textos, controles de navegação e horários desenhados pela geração de imagem não correspondem literalmente ao código atual; o site preservou o conteúdo, a navegação e os horários existentes.

## Critério para aprovar o design

A pessoa identifica os três jogos sem depender de ler o parágrafo institucional, consegue controlar o carrossel, encontra a agenda sem esforço e reconhece a identidade atual do Nexus Cup no desktop e no celular.

## Verificação desta implementação

- `node --check js/script.js` e `git diff --check` passaram.
- Todas as referências locais das três páginas foram conferidas; nenhuma aponta para arquivo ausente ou para a pasta antiga.
- As seis imagens foram verificadas quanto à existência e dimensões. Os caminhos mobile usam o limite de 679 px; no GSAP, o ScrollSmoother atua também abaixo de 860 px, enquanto as demais animações só iniciam a partir de 860 px. A preferência por movimento reduzido desativa ambos.
- A inspeção visual do site em execução no navegador, nos dois tamanhos, permanece pendente: o ambiente bloqueou a abertura da página local no navegador. Os mockups não substituem essa inspeção.
- O temporizador foi verificado com um relógio simulado: troca aos 6 segundos, barra na metade aos 3 segundos, reinício da barra ao trocar e pausa ao passar o ponteiro ou focar um controle, sem perder a sincronia.
