<template>
    <q-select v-model="form.tipologia" filled :options="tipologias" label="Tipologia" behavior="menu" />
    <q-input v-model="form.dataEntregaObra" filled label="Data de Entrega da Obra" type="date" />
    <q-input v-model="form.descricao" filled label="Descrição" type="textarea" />

    <div class="text-bold">Informações sobre Construtora</div>
    <q-input v-model="form.construtora.nome" filled label="Nome" />
    <q-input v-model="form.construtora.telefone" filled label="DDD + Telefone" type="tel" mask="(##) #####-####" />
    <EnderecoComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Endereco } from '../models';
import EnderecoComponent from '../EnderecoComponent.vue';

const endereco: Endereco = {
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
};

const construtora = {
    nome: '',
    telefone: '',
    endereco,
}

const form = {
    tipologia: '',
    dataEntregaObra: '',
    descricao: '',
    construtora,
};

const tipologias = ['Porte I', 'Porte II', 'Porte III', 'Porte IV', 'Porte V'];

export default defineComponent({
    name: 'UBSComponent',
    components: {
        EnderecoComponent,
    },
    data() {
        return {
            form,
            tipologias,
        };
    },
});
</script>
