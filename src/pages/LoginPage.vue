<template>
  <q-card>
    <q-card-section class="column q-gutter-y-md">
      <q-input v-model="email" filled label="Email" />
      <SenhaInputComponent />
      <a href="#/recover">Esqueci minha senha</a>
      <q-btn unelevated color="primary" label="Entrar" @click="$router.push('home')" />
      <q-btn outline color="primary" label="Entrar como Usuário Anônimo" @click="$router.push('avaliacao')" />
      <div class="text-center">
        Não possui uma conta?
        <a href="#/signin">Cadastre-se</a>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SenhaInputComponent } from '../components';

export default defineComponent({
  name: 'LoginPage',
  components: {
    SenhaInputComponent,
  },
  data() {
    return {
      email: '',
      senha: '',
    };
  },
});
</script>
