<template>
  <div class="w-100">
    <v-container class="fill-height">
      <v-button dense @click="save()">Save</v-button>
      <v-button dense @click="load()">Load</v-button>
    </v-container>
  </div>
</template>

<script setup lang="ts">
  import { save, load } from '../js/loop.js' // @ts-ignore
</script>
