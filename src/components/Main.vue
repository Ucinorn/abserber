<template>
  <div class="w-100 fill-height" style="font-size: 90%; font-family: monospace">
    <v-container>
              <!-- BATTLE AREA AND ENEMIES -->
        <div class="d-flex min-h-200 mb-4">
          <div class="mr-2" v-for="(enemy, index) in battle" :key="`enemy_${index}`" >
            <div style="max-width: 4rem">
              <Enemy :enemy="enemy" :active="true"/>
            </div>
          </div>
          <div class="ml-auto w-25">
            <transition name="fade-right">
              <div v-show="enemySelected">
                <Enemy v-if="enemySelected" :enemy="selectedEnemy" :detailed="true"/>
              </div>
            </transition>
          </div>
        </div>
      <div class="d-flex">
        <div class="w-25 pr-2">
          <!-- PLAYER SIDEBAR -->
          <Player />
        </div>
        <!-- ENEMY SELECT -->
        <div class="mb-4 px-2">
          <div v-for="enemies in [ basic, intermediate ]" class="mb-2">
            <v-row>
              <v-col v-for="( enemy, key ) in enemies" :key="key" cols="3">
                <Enemy
                  :enemy="enemy"
                  :selected="( selectedEnemy && selectedEnemy.id == enemy.id )"
                  @click="selectedEnemy = enemy"
                  @dblclick="addEnemy(enemy)"/>
              </v-col>
            </v-row>
          </div>
        </div>

      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'

  import Player from '@/components/Player.vue'
  import Enemy from '@/components/Enemy.vue'

  import enemies from '@/js/enemies.js'

  import { player, constants } from '@/js/store.js'

  const { basic, intermediate } = enemies

  const battle = []
  const selectedEnemy = ref({})

  const enemySelected = computed( () => !!('name' in selectedEnemy.value) )
  const canAddEnemy = computed( ( ) => battle.length >= constants.maxEnemies )
  const addEnemy = ( e ) => {
    if ( ! canAddEnemy ) return
    // clone a new enemy to prevent pass by reference
    const enemy = {...e}
    // set the ebemy max_hp based on default hp
    enemy.max_hp = enemy.max_hp || enemy.hp
    battle.push( { ...e })
  }
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
