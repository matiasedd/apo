<template>
    <q-card>
        <q-card-section>
            <div class="text-h6 q-mb-md">Avaliações</div>

            <q-list bordered separator>
                <q-item v-for="avaliacao in avaliacoes" :key="avaliacao">
                    <q-item-section>
                        <q-item-label>{{ avaliacao }}</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-btn flat round dense icon="more_vert" color="primary" />
                    </q-item-section>
                </q-item>
            </q-list>
        </q-card-section>

        <q-card-actions align="right">
            <q-btn flat label="Nova Avaliação" color="primary" />
        </q-card-actions>
    </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PerfilPage',
    data() {
        return {
            avaliacoes: ['Avaliação 1', 'Avaliação 2', 'Avaliação 3'],
        };
    },
});
</script>