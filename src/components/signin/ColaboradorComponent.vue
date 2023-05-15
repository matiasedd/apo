<template>
    <div class="column q-gutter-y-md">
        <q-select v-model="form.cargo" filled label="Cargo" behavior="menu" :options="cargos" />
        <q-select v-model="form.empresa" filled label="Empresa" behavior="menu" :options="empresas" />
        <q-select v-model="form.edificacao" filled label="Edificação" behavior="menu" :options="edificacoes" />
        <q-input v-model="form.nomeCompleto" filled label="Nome Completo" />
        <q-input v-model="form.telefone" filled label="Telefone" type="tel" mask="(##) #####-####"/>
        <q-input v-model="form.email" filled label="E-mail" />
        <SenhaInputComponent />
        <SenhaInputComponent label="Confirmar Senha" />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import SenhaInputComponent from '../SenhaInputComponent.vue';

const form: any = {
    cargo: '',
    empresa: '',
    edificacao: '',
    nomeCompleto: '',
    telefone: '',
    email: '',
    senha: '',
};

const cargos: string[] = [
    'Ambiente ou Coordenador',
    'Técnico',
    'Engenheiro ou Arquiteto',
    'Gestor do Departamento',
    'Diretor da Secretaria',
    'Administrador'
];

const empresas: any[] = [];
const edificacoes: string[] = ['Escola', 'Habitação', 'UBS'];

export default defineComponent({
    name: 'ColaboradorComponent',
    components: {
        SenhaInputComponent,
    },
    data() {
        return {
            form,
            cargos,
            empresas,
            edificacoes,
        };
    },
});
</script>
