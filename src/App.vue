<template>
  <v-app>
    <v-main>
      <div class="pa-2 fill-height w-full">

        <v-card class="mx-auto d-flex flex-column justify-center fill-height" max-width="600">
            <div class="flex-grow-0 w-full elevation-5">
              <TopBar/>
            </div>
            <div class="flex-grow-1 w-full">
              <Main/>
            </div>
            <div class="flex-grow-0 w-full elevation-5">
              <BottomBar/>
            </div>
        </v-card>

      </div>

    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import Main from '@/components/Main.vue'
  import TopBar from '@/components/TopBar.vue'
  import BottomBar from '@/components/BottomBar.vue'
</script>
