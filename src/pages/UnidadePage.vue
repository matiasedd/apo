<template>
    <q-card>
        <q-card-section class="q-gutter-y-md">
            <div class="text-bold">Informações Básicas</div>
            <q-input v-model="form.nome" filled label="Nome" />
            <q-input v-model="form.nome" filled label="Responsável" />
            <q-input v-model="form.nome" filled label="DDD + Telefone" type="tel" mask="(##) #####-####" />

            <div class="text-bold">Horário de Funcionamento</div>
            <div class="row q-gutter-x-md">
                <q-input v-model="form.nome" filled label="Inicial" class="col" type="time" />
                <q-input v-model="form.nome" filled label="Final" class="col" type="time" />
            </div>

            <div class="text-bold">Endereço</div>
            <EnderecoComponent />

            <div class="text-bold">Informações Adicionais</div>
            <EscolaComponent v-if="edificacao === 'escolas'" />
            <HabitacaoComponent v-else-if="edificacao === 'residencias'" />
            <UBSComponent v-else />
        </q-card-section>

        <q-card-actions align="right">
            <q-btn flat label="Salvar" color="primary" @click="$router.push('home')" />
        </q-card-actions>
    </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { EnderecoComponent } from '../components';
import { UBSComponent, EscolaComponent, HabitacaoComponent } from '../components/unidade';

const form = {
    nome: '',
};

export default defineComponent({
    name: 'UnidadePage',
    components: {
        EnderecoComponent,
        UBSComponent,
		EscolaComponent,
        HabitacaoComponent,
    },
    data() {
        return {
            form,
            edificacao: 'residencias',
        };
    },
});
</script>
