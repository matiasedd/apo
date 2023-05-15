<template>
    <div class="column q-gutter-y-md">
        <q-select v-model="form.edificacao" filled readonly label="Edificação" behavior="menu" />
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
    edificacao: 'Habitação',
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

export default defineComponent({
    name: 'MoradorComponent',
    components: {
        SenhaInputComponent,
    },
    data() {
        return {
            form,
            cargos,
            empresas,
        };
    },
});
</script>
