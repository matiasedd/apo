<template>
    <q-card>
        <div class="text-h6 q-pa-md">Unidade X</div>
        <q-separator />

        <q-card-section>

            <div class="text-bold q-mb-md">Avaliações</div>
            <q-list bordered separator>
                <q-item v-for="avaliacao in avaliacoes" :key="avaliacao.id" class="q-pa-md">
                    <q-item-section>
                        <q-item-label>{{ avaliacao.titulo }}</q-item-label>
                        <q-item-label caption>{{ new Date(avaliacao.data).toLocaleString() }}</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-btn flat round dense icon="more_vert" color="primary">
                            <q-menu>
                                <q-list>
                                    <q-item clickable v-close-popup>
                                        <q-item-section>Editar</q-item-section>
                                    </q-item>
                                    <q-item clickable v-close-popup>
                                        <q-item-section>Visualizar</q-item-section>
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

        <q-card-section>
            <div class="text-bold q-mb-md">Ambientes</div>
            <q-btn unelevated label="Adicionar" icon="add" color="primary" class="q-mb-md" />

            <q-list bordered separator>
                <q-item v-for="ambiente in ambientes" :key="ambiente.id" class="q-pa-md">
                    <q-item-section class="q-gutter-y-md">
                        <q-item-label>{{ ambiente.nome }}</q-item-label>
                        <div>
                            <q-btn outline label="Avaliar Ambiente" color="primary" />
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
            <q-btn flat label="Avaliar Gestão e Projeto" color="primary" />
        </q-card-actions>
    </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AvaliacoesPage',
    data() {
        return {
            avaliacoes: [
                {
                    id: 1,
                    titulo: 'Avaliação 1',
                    data: '2021-01-01T00:00:00'
                },
                {
                    id: 2,
                    titulo: 'Avaliação 2',
                    data: '2021-01-01T00:00:00'
                },
                {
                    id: 3,
                    titulo: 'Avaliação 3',
                    data: '2021-01-01T00:00:00'
                }
            ],
            ambientes: [
                {
                    id: 1,
                    nome: 'Ambiente 1',
                },
                {
                    id: 2,
                    nome: 'Ambiente 2',
                },
                {
                    id: 3,
                    nome: 'Ambiente 3',
                }
            ]
        };
    },
});
</script>
