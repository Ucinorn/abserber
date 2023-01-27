<template>
  <div class="w-100">
    <v-container class="fill-height">
      <div class="d-flex ">
        <v-btn-toggle class="ml-auto">
          <v-btn dense @click="save()">Save</v-btn>
          <v-btn dense @click="load()">Load</v-btn>
        </v-btn-toggle>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
  import { save, load, stop, start } from '@/js/loop.js' // @ts-ignore
</script>
