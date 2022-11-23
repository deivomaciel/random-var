<h1 align="center">Randomvar</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.1-blue"/>
  <img src="https://img.shields.io/badge/license-ISC-green"/>
</p>

<h2>Descrição</h2>
<p>O Randomvar é uma biblioteca desenvolvida para facilitar o processo de gerar valores aleatórios.</p>

<h2>Instalação</h2>

Execute o comando npm install em seu terminal.
```shell
npm install randomvar
```
<h2>Sintaxe</h2>

```js
generateValue(tamanho, opções)
```
<h3>Parâmetros</h3>
<ol>
    <li><b>tamanho:</b> <p>Tamanho da variável que será gerada.<p>
      <ul>
        <li>Deve ser um valor inteiro maior que 0.</li>
      </ul>
    </li>
    <br>
    <li><b>opções:</b> <p>Opções de caracteres que a variável terá.</p>
      <ul>
        <li>Deve ser um array com as strings das opções que a variável terá.</li>
        <li>Opções possíveis: "upCase", "lowerCase", "number", "symbol"</li>
      </ul>
    </li>
</ol>

<br>

> **Warning**: O tamanho da variável deve ser maior que o número de opções selecionadas.

<h3>Opções</h3>

<table border="1">
   <thead>
   <tr>
       <th>Opção</th>
       <th>Descrição</th>
   </tr>
   </thead>
   <tbody>
   <tr>
       <td>upCase</td>
       <td>Irá incluir letras maiúsculas.</td>
   </tr>
   <tr>
       <td>lowerCase</td>
       <td>Irá incluir letras minúsculas.</td>
   </tr>
   <tr>
       <td>number</td>
       <td>Irá incluir números.</td>
   </tr>
   <tr>
       <td>symbol</td>
       <td>Irá incluir caracteres especiais. São eles: _@#&!.</td>
   </tr>
   </tbody>
</table>

<h2>Exemplo de uso</h2>

```js
const { generateValue } = require('randomvar')

console.log(generateValue(5, ["upCase", "lowerCase", "number"]))
```

<br>

> **Note**: Você pode escolher quantas opções quiser dentre as possíveis.

<br>

<p>O exemplo irá retornar uma string aleatória com 5 caracteres contendo letras maiúsculas, letras minúsculas e números.</p>

```
Saída: 8SZbf
```
