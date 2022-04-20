<script setup lang="ts">
import Menu from "./Menu.vue"
import Container from "./Container.vue"
import Footer from "./Footer.vue"
import { ref } from 'vue';

const collapsed = ref(false)

</script>

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <Menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-content style="margin: 16px">
        <Container />
      </a-layout-content>
      <Footer />
    </a-layout>
  </a-layout>
</template>

<style>


</style>