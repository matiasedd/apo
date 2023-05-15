<template>
    <q-select v-model="form.tipologia" filled label="Tipologia" behavior="menu" :options="tipologia" />

    <q-select v-if="isTipologia('Casa')" v-model="form.tipoCasa" filled label="Tipo de Casa" behavior="menu"
        :options="tipoCasa" />
    <q-input v-if="isTipologia('Apartamento')" v-model="form.numeroPavimentos" filled label="Nº de Pavimentos" type="tel" />

    <q-input v-model="form.blocosExistentes" filled label="Blocos Existentes" type="tel" />
    <q-input v-model="form.unidadesPorBloco" filled label="Unidades por Bloco" type="tel" />
    <q-input v-model="form.totalUnidades" filled label="Total de Unidades" type="tel" />
    <q-input v-model="form.nomeConstrutora" filled label="Nome da Construtora" />
    <q-input v-model="form.descricao" filled label="Descrição" type="textarea" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

type Tipologia = 'Casa' | 'Apartamento';

const form = {
    tipologia: '',
    tipoCasa: '',
    numeroPavimentos: '',
    blocosExistentes: '',
    unidadesPorBloco: '',
    totalUnidades: '',
    nomeConstrutora: '',
    descricao: '',
};

export default defineComponent({
    name: 'HabitacaoComponent',
    data() {
        return {
            form,
            tipologia: ['Casa', 'Apartamento'],
            tipoCasa: ['Térrea', 'Sobrado', 'Isolado', 'Geminado'],
        };
    },
    methods: {
        isTipologia(tipologia: Tipologia) {
            return this.form.tipologia === tipologia;
        },
    },
});
</script>
