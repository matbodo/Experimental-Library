export function contaPalavras(texto) {
    const paragrafo = extraiParagrafos(texto)
    const contagem = paragrafo.flatMap((paragrafo) => {
        if(!paragrafo) return [];
        return verificaPalavrasDupli(paragrafo);
    })
    console.log(contagem);
}

function extraiParagrafos(texto) {
    return texto.toLowerCase().split('\n');
}

function limpaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function verificaPalavrasDupli(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};
    
    listaPalavras.forEach(palavra => {
        if(palavra.length >= 3){
            const palavraLimpa = limpaPalavras(palavra)
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
        }
    });
    return resultado;
}