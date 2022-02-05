const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const canvasWidth = canvas.clientWidth;
const canvasHeight = canvas.clientHeight;


const pintaBackground = () => {
    ctx.fillStyle = '#F3F5FC';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}
pintaBackground();


const corBoneco = 'black';
const canvasFont = '20px Arial';
const raioCabeca = 35;
const maxLetras = 7;
let numLetras;


function desenhaBase(){
    ctx.fillStyle = corBoneco;
    ctx.fillRect(canvasWidth / 16, canvasHeight * 0.9, canvasWidth / 6, 5); // Base
    ctx.fillRect(canvasWidth / 16 + canvasWidth / 12, canvasHeight * 0.2, 5, canvasHeight * 0.7); // Coluna
    ctx.fillRect(canvasHeight * 0.22, canvasHeight * 0.2, canvasWidth / 6, 5) // Extensão
    ctx.fillRect(canvasHeight * 0.22 + canvasWidth / 6, canvasHeight * 0.2, 5, canvasWidth / 16); // Suspensão da cabeça
}

function desenhaCabeca(){
    ctx.fillStyle = corBoneco;
    ctx.beginPath();
    ctx.arc(canvasHeight * 0.22 + canvasWidth / 6, canvasHeight * 0.2 + canvasWidth / 12 + raioCabeca / 2.2, raioCabeca, 0, Math.PI * 2);
    ctx.stroke();
}

function desenhaCorpo(){
    ctx.fillStyle = corBoneco;
    ctx.beginPath();
    ctx.moveTo(canvasHeight * 0.22 + canvasWidth / 6, canvasHeight * 0.2 + canvasWidth / 12 + raioCabeca * 1.5);
    ctx.lineTo(canvasHeight * 0.22 + canvasWidth / 6, canvasHeight * 0.2 + canvasWidth / 12 + raioCabeca + canvasHeight / 3);
    ctx.stroke();
}

function desenhaPernaEsquerda(){
    ctx.fillStyle = corBoneco;
    ctx.beginPath();
    ctx.moveTo(canvasHeight * 0.22 + canvasWidth / 6, canvasHeight * 0.2 + canvasWidth / 12 + raioCabeca + canvasHeight / 3);
    ctx.lineTo(canvasWidth * 0.25, canvasHeight * 0.8);
    ctx.stroke();
}

function desenhaPernaDireita(){
    ctx.fillStyle = corBoneco;
    ctx.beginPath();
    ctx.moveTo(canvasHeight * 0.22 + canvasWidth / 6, canvasHeight * 0.2 + canvasWidth / 12 + raioCabeca + canvasHeight / 3);
    ctx.lineTo(canvasWidth * 0.375, canvasHeight * 0.8);
    ctx.stroke();
}

function desenhaBracoEsquerdo(){
    ctx.fillStyle = corBoneco;
    ctx.beginPath();
    ctx.moveTo(canvasHeight * 0.22 + canvasWidth / 6, canvasHeight * 0.5);
    ctx.lineTo(canvasWidth * 0.25, canvasHeight * 0.55);
    ctx.stroke();
}

function desenhaBracoDireito(){
    ctx.fillStyle = corBoneco;
    ctx.beginPath();
    ctx.moveTo(canvasHeight * 0.22 + canvasWidth / 6, canvasHeight * 0.5);
    ctx.lineTo(canvasWidth * 0.375, canvasHeight * 0.55);
    ctx.stroke();
}

function desenhaCampo(x){
    ctx.fillStyle = corBoneco;
    ctx.beginPath();
    ctx.moveTo(x, canvasHeight * 0.9);
    ctx.lineTo(x + canvasWidth / 20, canvasHeight * 0.9);
    ctx.stroke();
}

function desenhaCampos(quantidade){
    quantidade = quantidade > maxLetras ? maxLetras : quantidade;
    numLetras = quantidade;
    let x = canvasWidth * 0.42;
    for (let i = 0; i < quantidade; i++){
        desenhaCampo(x);
        x += canvasWidth / 13;
    }
}

function escreveLetra(letra, numCampo){
    let x = canvasWidth * 0.44 + canvasWidth / 13 * numCampo;
    ctx.fillStyle = corBoneco;
    ctx.font = canvasFont;
    if (numCampo < maxLetras) ctx.fillText(letra.toUpperCase(), x, canvasHeight * 0.885);
}

function escrevePalavra(palavra){
    let tamanhoPalavra = palavra.length > numLetras ? numLetras : palavra.length;
    for (let i = 0; i < tamanhoPalavra; i++) escreveLetra(palavra[i], i);
}

