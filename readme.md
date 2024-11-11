# Piramide de Testes
## Unitários:
- São testes curtos e isolados
- ⚠️ Não garante uma integração de módulos
## Integração
- São testes de rotas e requisições; Comunicação dos módulos
- ⚠️ Não analisa todo fluxo da aplicação
## E2E
- Teste de ponta a ponta, alto nível
- Testes longos e completos;
- Análise de todos os módulos e stacks. Ex: frontend, base de dados, micros serviços.
- ⚠️ Tempo longo e custo alto
- ⚠️ Complexa estrutura de testes

# Cultura de Testes
É criar um ambiente onde a time de dev tenha a capacidade de implementar e gerir os testes, entendendo como que os testes
afetam a qualidade do código e permitir que problemas que eventualmente passem no ambiente de testes, sejam resolvidos.

## 3 Fatores Fundamentais na Cultura de testes
### Qualidade
- É ter uma métrica para saber se algo é bom ou ruim. As métricas serão regras que vamos determinar, e nós criaremos objetivos para nossa base de códigos e observaremos conforme estamos chegando perto desses objetivos ou se estamos nos afastando deles.
### Confiança
- Se todos estiverem considerando a qualidade de testes, a confiança será por consequência maior nos testes.
### Tempo
- Quanto menor o tempo dos testes, melhor.

# Fases do teste
A fase de teste se dividem em 5 etapas. Elas são:
## 1 - Análise de Requisitos
- Identificar quais funcionalidades estarão presentes no projeto e selecionar quais testes e quais tipos de teste vamos implementar para poder atingir esses objetivos.
## 2 - Plano de Teste
O time de QA, elaboram o plano de teste, contendo as ferramentas que serão utilizadas, dividindo as responsabilidades de quem vai criar os testes e estimando no geral qual será o tempo, a complexidade e os gastos de recursos que terá naquele projeto.
## 3 - Caso de Teste
São detalhados (mapeados) os testes em si:
- quais são as condições;
- os dados de entrada;
- os comportamentos esperados;
- dados de saída;
- quantidade de testes.
## 4 - Ambiente de Teste
São escolhidos onde e como esses testes serão executados:
- É feito o pipeline;
- fluxo de como é produzido pelo time de dev e como aquilo vai sendo testado;
- ferramentas de versionamento e tudo que será utilizado, onde as alterações e implementações que são feitas pelo time de dev vão sendo testadas e validadas para poder seguir no projeto;
- Podem ser testes que rodam automaticamente;
- Podem ser pessoas que serão responsáveis por verificar criação de tickets, dependendo de cada instituição e das plataformas e ferramentas que elas conhecem.
## 5 - Implementação
A impelmentação é:
- Onde é feita a documentação daqueles resultados que foram obtidos com os testes;
- Problemas que aconteceram dentro dos processos;
- estabelecer como podem ter melhorias para os próximos ciclos e toda essa parte que vai lidar diretamente com a implementação, tanto do código em si do projeto quanto da implementação dos testes e tudo que aconteceu em torno disso.

# Testes Estáticos

# Iniciando no Jest
## Configurações Básicas
- Instalação com npm install --save-dev
- no package.json, em scripts - test, remover o conteúdo echo \"Error: no test specified... e subistituir por jest

- ao rodar o comando npm run test aparecerá um relatório mais ou menos como:

    No tests found, exiting with code 1
    Run with `--passWithNoTests` to exit with code 0
    > jest

    No tests found, exiting with code 1
    Run with `--passWithNoTests` to exit with code 0
    In C:\Users\clebson.araujo\OneDrive - L5 Networks\Documentos\projetos pessoais\jest

    No tests found, exiting with code 1
    Run with `--passWithNoTests` to exit with code 0
    In C:\Users\clebson.araujo\OneDrive - L5 Networks\Documentos\projetos pessoais\jest
    6 files checked.
    Run with `--passWithNoTests` to exit with code 0
    In C:\Users\clebson.araujo\OneDrive - L5 Networks\Documentos\projetos pessoais\jest
    6 files checked.
    In C:\Users\clebson.araujo\OneDrive - L5 Networks\Documentos\projetos pessoais\jest
    6 files checked.
    testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches
    testPathIgnorePatterns: \\node_modules\\ - 6 matches
    testRegex:  - 0 matches
    Pattern:  - 0 matches

## Observações
- Ao rodar o comando npm run test, o jest irá verificar todos os arquivo com:
    - .test no nome (ex: clientController.test.js)
    - ou dentro da pasta test
    - ou outros padrões encontrados na documentação do jest

## Exempo de Uso
- dentro do arquivo de teste importe as funções no qual irá testar
- no mesmo arquivo você irá chamar a função 'test', onde receberá 2 parametros:
    - uma string indicando um título para o teste atual, como o que a função deve retornar
    - uma arrow function onde podemos criar variáveis para o teste e chamar as funções que importamos e as funções nativas do jest como por exemplo:
        - expect: onde recebe o resultado da função;
        - toBe: onde recebe o valor esperado do resultado da função passada pelo expect.


