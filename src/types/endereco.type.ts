type Estado = {
    id: number;
    sigla: string;
    nome: string;
}

type Cidade = {
    id: number;
    nome: string;
    microrregiao: Object;
}

type EnderecoViaCep = {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}

export { Estado, Cidade, EnderecoViaCep };
