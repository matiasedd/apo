<template>
    <q-input v-model="senha" filled :label="label" :type="alterarTipo" @keyup="obterSenha">
        <template v-slot:append>
            <q-btn dense rounded flat @click="mostrarSenha" :icon="alterarIcone" color="grey-6" />
        </template>
    </q-input>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        label: {
            type: String,
            default: 'Senha',
        },
    },
    data() {
        return {
            senha: '',
            icone: 'visibility',
            isVisible: false,
        };
    },
    methods: {
        mostrarSenha() {
            this.isVisible = !this.isVisible;
        },
        obterSenha() {
            this.$emit('senha', this.senha);
        },
    },
    computed: {
        alterarTipo() {
            return this.isVisible ? 'text' : 'password';
        },
        alterarIcone() {
            return this.isVisible ? 'visibility_off' : 'visibility';
        },
    },
});
</script>