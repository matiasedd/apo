<template>
    <q-card>
        <q-card-section>
            <div class="text-h6">Recuperar Senha</div>
            <div>Enviaremos um e-mail com um link para você redefinir sua senha.</div>
            
            <q-input class="q-mt-lg" filled v-model="email" label="E-mail" />
        </q-card-section>

        <q-card-actions align="right">
            <q-btn flat label="Voltar" color="primary" @click="$router.push('/login')" />
            <q-btn unelevated type="submit" label="Enviar" color="primary" />
        </q-card-actions>
    </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'RecoverPage',

    data() {
        return {
            email: '',
        };
    },
});
</script>
