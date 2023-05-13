<template>
    <q-card>
        <q-card-section>
            <div class="text-h6 q-mb-md">Unidades</div>

            <q-list bordered separator>
                <q-item v-for="unidade in unidades" :key="unidade.id" class="q-pa-md">
                    <q-item-section class="q-gutter-y-md">
                        <q-item-label>{{ unidade.nome }}</q-item-label>
                        <q-item-label caption>{{ unidade.telefone }}</q-item-label>
                        <div>
                            <q-btn outline label="Avaliar Unidade" color="primary" @click="$router.push('/avaliacao')"/>
                        </div>
                    </q-item-section>
                    <q-item-section side>
                        <q-btn flat round dense icon="more_vert" color="primary">
                            <q-menu>
                                <q-list>
                                    <q-item clickable v-close-popup>
                                        <q-item-section>Editar</q-item-section>
                                    </q-item>
                                    <q-item clickable v-close-popup>
                                        <q-item-section>Remover</q-item-section>
                                    </q-item>
                                </q-list>
                            </q-menu>
                        </q-btn>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-card-section>

        <q-card-actions align="right">
            <q-btn flat label="Adicionar Unidade" color="primary" />
        </q-card-actions>
    </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PerfilPage',
    data() {
        return {
            unidades: [
                {
                    id: 1,
                    nome: 'Unidade 1',
                    telefone: '(11) 99999-9999',
                },
                {
                    id: 2,
                    nome: 'Unidade 2',
                    telefone: '(11) 99999-9999',
                },
                {
                    id: 3,
                    nome: 'Unidade 3',
                    telefone: '(11) 99999-9999',
                },
            ],
        };
    },
});
</script>