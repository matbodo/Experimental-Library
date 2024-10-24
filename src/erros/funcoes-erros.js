export default function trataErros(erro) {
    if (erro.code === 'ENOENT') {
        throw new Error ('Arquivo nao encontrado');
    } else{
        return 'erro na aplicação'
    }
}

