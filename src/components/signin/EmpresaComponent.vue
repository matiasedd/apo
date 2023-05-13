<template>
    <div class="column q-gutter-y-md">
        <q-input v-model="form.cnpj" filled label="CNPJ" type="tel" mask="##.###.###/####-##" />
        <q-input v-model="form.nome" filled label="Nome" />
        <q-input v-model="form.telefone" filled label="Telefone" type="tel" mask="(##) #####-####" />
        <EnderecoComponentVue v-model="form.endereco" />
        <q-btn unelevated label="Salvar" color="primary" class="q-mt-md" />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { Empresa } from '../models';
import EnderecoComponentVue from '../EnderecoComponent.vue';

const form: Empresa = {
    cnpj: '',
    nome: '',
    telefone: '',
    endereco: {
        cep: '',
        cidade: '',
        complemento: '',
        estado: '',
        logradouro: '',
        numero: '',
        bairro: '',
    },
};

export default defineComponent({
    name: 'EmpresaComponent',
    components: {
        EnderecoComponentVue,
    },
    data() {
        return {
            form,
        };
    },
});
</script>
