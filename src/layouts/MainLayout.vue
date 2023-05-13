<template>
  <div class="wrapper">
    <q-layout view="lHh Lpr lFf">
      <q-header elevated>
        <q-toolbar>
          <q-btn v-if="!isPath('/') && !isPath('/perfil')" flat round dense icon="arrow_back" @click="$router.back()" />
          <q-toolbar-title>
            {{ $route.name }}
          </q-toolbar-title>
          <q-btn v-if="isPath('/')" flat label="Entrar" @click="$router.push('/login')" />
          <q-btn v-if="isUserPage()" flat label="Sair" @click="$router.push('/')" />
        </q-toolbar>
      </q-header>

      <q-page-container>
        <router-view class="q-ma-lg" />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  methods: {
    isPath(path: string) {
      return this.$route.path === path;
    },
    isUserPage() {
      const pages = ['/', '/login', '/signin', '/recover'];
      
      return !pages.includes(this.$route.path);
    },
  },
});
</script>

<style>
.wrapper {
  display: grid;
  place-items: center;
}

.q-layout {
  max-width: 512px;
}
</style>
