<template>
  <div class="column q-gutter-y-md">
    <q-input v-model="cep" filled label="CEP" type="tel" mask="##.###-###" @update:model-value="handleCep()" />
    <q-input v-model="logradouro" filled label="Logradouro" />
    <q-input v-model="numero" filled label="Número" />
    <q-input v-model="complemento" filled label="Complemento" />
    <q-select v-model="estado" filled label="Estado" behavior="menu" :options="estados" />
    <q-select v-model="cidade" filled label="Cidade" behavior="menu" :options="cidades" />
    <q-input v-model="bairro" filled label="Bairro" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Estado, EnderecoViaCep, Cidade } from '../types/endereco.type';
import estadosJSON from '../assets/estados.json';

const UFestados: { [key: string]: string } = estadosJSON;
const estados: Estado[] = [];
const cidades: Cidade[] = [];

export default defineComponent({
  name: 'EnderecoComponent',
  data() {
    return {
      cep: '',
      cidade: '',
      complemento: '',
      estado: '',
      logradouro: '',
      numero: '',
      bairro: '',
      estados,
      cidades,
    };
  },
  mounted() {
    this.getEstados();
    this.getCidades('PR');
  },
  methods: {
    getEstados() {
      const ESTADOS_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome';

      fetch(ESTADOS_URL)
        .then((response) => response.json())
        .then((data) => {
          this.estados = data.map((estado: Estado) => estado.nome);
        });
    },
    getCidades(uf: string) {
      const CIDADES_URL = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`;

      fetch(CIDADES_URL)
        .then((response) => response.json())
        .then((data) => {
          this.cidades = data.map((cidade: Cidade) => cidade.nome);
        });
    },
    handleCep() {
      if (this.cep.length === 10)
        this.setEnderecoByCep(this.cep);
    },
    setEnderecoByCep(cep: string) {
      const sanitizedCep = cep.replace('.', '').replace('-', '');
      const CEP_URL = `https://viacep.com.br/ws/${sanitizedCep}/json/`;

      fetch(CEP_URL)
        .then((response) => response.json())
        .then((data: EnderecoViaCep) => {
          const { cep, logradouro, complemento, bairro, uf, localidade } = data;

          this.cep = cep;
          this.logradouro = logradouro;
          this.complemento = complemento;
          this.bairro = bairro;
          this.estado = UFestados[uf];
          this.cidade = localidade;
        });
    }
  }
});
</script>
