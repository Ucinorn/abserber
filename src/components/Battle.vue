<template>
      <!-- BATTLE AREA AND ENEMIES -->
      <div class="d-flex min-h-200 mb-4">
        <div class="w-25 mr-auto pr-4">
          <Player :active="true" :detailed="false"/>
        </div>
        <div class="ml-1" v-for="(enemy, index) in battle" :key="`enemy_${index}`" >
          <div style="max-width: 4rem">
            <Enemy :obj="enemy" :active="true" :detailed="false"/>
          </div>
        </div>
      </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'

  import Player from '@/components/Player.vue'
  import Enemy from '@/components/Enemy.vue'

  import enemies from '@/js/enemies.js'

  import { player, battle, constants } from '@/js/store.js'

  const { basic, intermediate } = enemies

  const selectedEnemy = ref({})
  const enemySelected = computed( () => !!('name' in selectedEnemy.value) )
  const canAddEnemy = computed( ( ) => battle.length >= constants.maxEnemies )


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
