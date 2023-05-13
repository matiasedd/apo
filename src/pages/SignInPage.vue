<template>
  <q-card>
    <q-tabs v-model="tab" class="text-grey" active-color="primary" narrow-indicator>
      <q-tab name="empresa" label="Empresa" />
      <q-tab name="colaborador" label="Colaborador" />
      <q-tab name="morador" label="Morador" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="empresa">
        <EmpresaComponent />
      </q-tab-panel>
      <q-tab-panel name="colaborador">
        <ColaboradorComponent />
      </q-tab-panel>
      <q-tab-panel name="morador">
        <MoradorComponent />
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ColaboradorComponent, EmpresaComponent, MoradorComponent } from '../components/signin';

export default defineComponent({
  name: 'SignInPage',
  components: {
    ColaboradorComponent,
    EmpresaComponent,
    MoradorComponent,
  },
  data() {
    return {
      tab: 'colaborador',
    };
  },
});
</script>
