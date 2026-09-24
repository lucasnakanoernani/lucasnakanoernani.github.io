# Portfólio — Lucas Nakano Ernani

Site pessoal em HTML, CSS e JavaScript, com fotografia, projetos de automação, experiência profissional, contato e currículo em PDF. Não exige Node, npm ou instalação de dependências.

## Abrir no computador

Extraia o ZIP e abra `index.html`. Mantenha `styles.css`, `script.js` e a pasta `assets` ao lado do HTML.

## Abrir no Android

Use o arquivo separado `portfolio-lucas-android.html`. Ele reúne a página, os estilos, o JavaScript, a fotografia e o currículo em um único arquivo. Abra-o com um navegador que permita visualizar arquivos HTML locais. Visualizadores de documentos podem limitar a execução de JavaScript e o download do PDF. Os links externos precisam de internet.

## Publicar no GitHub Pages

1. Crie um repositório público chamado `lucasnakanoernani.github.io`. Se ele já existir, confira o conteúdo antes de atualizá-lo.
2. Envie `index.html`, `styles.css`, `script.js` e a pasta `assets` para a raiz do repositório. Envie os arquivos extraídos, não o ZIP.
3. Faça o commit com a mensagem `feat: reformula portfolio com novo layout`.
4. Em **Settings → Pages**, escolha **Deploy from a branch**, branch **main** e pasta **/ (root)**. Salve.
5. Após a publicação, o endereço esperado é https://lucasnakanoernani.github.io/ .

Este pacote ainda não foi publicado. Documentação: https://docs.github.com/en/pages/quickstart

## Conteúdo e edição

- `index.html`: textos, seções, links e estudos de caso.
- `styles.css`: paleta, tipografia, fotografia, layout responsivo e animações.
- `script.js`: destaque da seção atual na navegação e animação de entrada dos projetos.
- `assets/lucas-nakano.jpg`: fotografia original fornecida por Lucas.
- `assets/Lucas-Nakano-Ernani-CV.pdf`: currículo original preservado.
- `assets/favicon.svg`: ícone do site.

A foto e o currículo foram preservados sem alteração dos bytes. O preto e branco e o enquadramento da foto são aplicados por CSS. Para atualizar a versão Android após uma edição, incorpore novamente os estilos, o script e os arquivos em seu HTML; ela não recebe alterações automaticamente.

## Referência visual

Reformulação inspirada no portfólio de **Hamish Williams**, conforme a referência escolhida por Lucas:

- Repositório: https://github.com/HamishMW/portfolio
- Site: https://hamishw.com/

A composição mantém a navegação lateral e a apresentação pessoal com fotografia. Nesta revisão, o nome ganhou destaque na abertura e os projetos voltaram a ser apresentados em cards pretos. A implementação estática foi escrita para este portfólio. Não incorpora o projeto React, o elemento 3D, a fotografia nem os trabalhos profissionais do autor. A referência de pesquisa está documentada apenas neste README.

## Identidade e experiência de uso

- Grafite e branco, com vermelho nos destaques.
- Nome **Lucas** em branco e sobrenome completo **Nakano Ernani** em vermelho.
- Navegação lateral no computador e horizontal em telas menores.
- Três projetos em cards pretos, com resumo, tecnologias e detalhes expansíveis sobre as verificações.
- Sem trechos de código na página; botões levam aos testes no GitHub.
- Logos das ferramentas e do LinkedIn e GitHub armazenados no próprio projeto.
- Nome e identificação do portfólio maiores; “QA + Automação” menor.
- Fotografia e apresentação pessoal na seção Sobre.
- Detalhes técnicos expansíveis com `details/summary`, utilizáveis sem JavaScript.
- Links diretos para currículo, e-mail, LinkedIn e GitHub.
- Foco de teclado visível e respeito à preferência por movimento reduzido.

## Precisão do conteúdo e português

Posicionamento mantido como **QA Pleno**, conforme o currículo. Os exemplos representam três cenários de estudo, não projetos comerciais. A API externa fornece os dados dos formulários; esses cenários não constituem uma suíte independente de testes de API. A configuração de integração contínua é descrita sem afirmar que as execuções atuais passaram.

Ortografia, concordância e consistência dos textos em português foram revisadas. Nomes de ferramentas e mensagens exatas dos sistemas de demonstração permanecem no idioma original. Os detalhes de cada projeto explicam o alcance das verificações existentes.

## Verificação

Conferidos estrutura HTML, âncoras, referências locais, sintaxe do JavaScript, integridade da foto e do currículo, arquivo Android sem dependências locais e integridade do ZIP. Não foi possível validar a renderização do site em um navegador neste ambiente.

Antes de publicar, abra a página no computador e no celular. Confira a navegação, os detalhes expansíveis, o download do currículo, os links e o layout com zoom de 200%.

## Logos das ferramentas e redes sociais

Arquivos locais em `assets/logos`, com suas fontes registradas em `logo-sources.txt`.

- Devicon: https://github.com/devicons/devicon — logos de Playwright, TypeScript, Cypress, JavaScript, Selenium, Python, Android Studio, Postman, Swagger, Supabase, LinkedIn e GitHub. Licença MIT incluída.
- Simple Icons: https://github.com/simple-icons/simple-icons — logos de Appium, WebdriverIO e Apache JMeter. Licença CC0 incluída.
- Microsoft Azure Data Studio: https://github.com/microsoft/azuredatastudio — ícone original e licença do repositório incluídos.

As marcas identificam as ferramentas e os perfis. SQL, testes exploratórios, análise de logs e validação de IA permanecem como competências textuais. A versão Android incorpora também os logos para não depender de arquivos separados ou de uma CDN.

## Ajuste de contraste

Cards de projetos, botões do GitHub e controles sociais usam superfícies pretas, contornos discretos e destaques vermelhos. Textos e marcas sociais ficam claros para preservar a leitura. A variante monocromática do LinkedIn mantém as letras brancas sobre fundo preto; o logo do GitHub recebe a versão clara por CSS.

## Navegação e contato

O menu destaca a seção clicada durante a rolagem suave e acompanha a posição da página. Ao chegar ao fim, Contato permanece ativo mesmo quando a seção não alcança o topo da tela. O título “Vamos conversar?” usa uma escala menor no computador e no celular.
