<template>
    <q-select v-model="form.tipoEscola" filled label="Tipo de Escola" behavior="menu" :options="tipoEscola" />
    <q-select v-model="form.modalidadeEnsino" filled label="Modalidade de Ensino" behavior="menu" :options="modalidadeEnsino" />
    <q-input v-model="form.quantidadeAlunos" filled label="Quantidade de Alunos" type="tel" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const form = {
    tipoEscola: '',
    modalidadeEnsino: '',
    quantidadeAlunos: '',
};

export default defineComponent({
    name: 'EscolaComponent',
    data() {
        return {
            form,
            tipoEscola: ['Municipal', 'Estadual', 'Federal', 'Particular'],
            modalidadeEnsino: ['Infantil', 'Fundamental', 'Médio', 'Jovens e Adultos','Fundamental e Médio']
        };
    },
});
</script>