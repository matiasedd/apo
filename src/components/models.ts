export interface Endereco {
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
}

export interface Empresa {
  cnpj: string;
  nome: string;
  telefone: string;
  endereco: Endereco;
}
