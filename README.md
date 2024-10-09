# 📏 Calculadora de IMC

Este é um projeto simples de calculadora de Índice de Massa Corporal (IMC), desenvolvido com React. O usuário pode inserir sua altura e peso, e a aplicação calculará o IMC e fornecerá uma interpretação do resultado.

## Funcionalidades 🌟

- Permite que o usuário insira a altura em centímetros e o peso em quilogramas.
- Calcula o IMC com base nas informações fornecidas.
- Exibe uma mensagem informativa sobre o estado do peso do usuário com base no valor do IMC.

## Tecnologias Utilizadas ⚙️

- **React** - Biblioteca JavaScript para criação de interfaces de usuário.
- **CSS** - Para estilização do layout da aplicação.

## Instalação 📦

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/calculadora-imc.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd calculadora-imc
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Execute o projeto:
    ```bash
    npm start
    ```

O projeto será executado em `http://localhost:3000`.

## Como Usar 🛠️

1. Insira sua altura em centímetros no campo "Altura(Cm)".
2. Insira seu peso em quilogramas no campo "Peso(Kg)".
3. Clique no botão "Confirmar" para calcular o IMC.
4. O resultado do IMC e uma mensagem sobre seu estado de peso serão exibidos.
5. Clique no botão "Limpar" para reiniciar a calculadora.

## Estrutura de Código 📁

### Componente Principal - `App.js`

O arquivo `App.js` contém o componente principal da aplicação, que renderiza o componente `Container` responsável pelos cálculos.

```jsx
import './App.css';
import Container from './components/containe';

function App() {
    return (
        <div>
            <Container />
        </div>
    );
}

export default App;
