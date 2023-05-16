<template>
  <div class="w-100 fill-height" style="font-size: 90%; font-family: monospace">
    <v-container>
        <Battle></Battle>
        <!-- ENEMY SELECT -->
        <div class="mb-4">
          <div v-for="enemies in [ basic, intermediate ]" class="mb-2">
            <v-row>
              <v-col v-for="( enemy, key ) in enemies" :key="key" cols="3">
                <Enemy
                  :obj="enemy"
                  :detailed="true"
                  @click="clickEnemy(enemy)"/>
              </v-col>
            </v-row>
          </div>
        </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'

  import Battle from '@/components/Battle.vue'
  import Enemy from '@/components/Enemy.vue'

  import enemies from '@/js/enemies.js'

  import { player, battle, constants } from '@/js/store.js'

  const { basic, intermediate } = enemies

</script>

<style>
.min-h-50 {
  min-height:50px
}
.min-h-100 {
  min-height:100px
}
.min-h-200 {
  min-height:200px
}
.fade-right-enter-active {
  animation: fade-right-in 0.5s;
}
.fade-right-leave-active {
  animation: fade-right-out 0.5s;
}
@keyframes fade-right-in {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fade-right-out {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
}
</style>
