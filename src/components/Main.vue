<template>
  <div class="w-100 fill-height">
    <v-container>
      <!-- BATTLE AREA, PLAYER AND ENEMIES -->
      <div class="d-flex" id="battle">
        <div class="mr-auto">
          <Player />
        </div>
        <div class="ml-2" v-for="(enemy, index) in battle" :key="`enemy_${index}`" >
          <div style="max-width: 4rem">
            <Enemy :enemy="enemy" :active="true"/>
          </div>
        </div>
      </div>
      <!-- ENEMY SELECT -->
      <div class="my-4">
        <div v-for="enemies in [ basic, intermediate ]" class=" pa-2 mb-2">
          <v-row>
            <v-col v-for="( enemy, key ) in enemies" :key="key" cols="3">
              <Enemy :enemy="enemy" @add="addEnemy(enemy)"/>
            </v-col>
          </v-row>
        </div>

      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  import Player from '@/components/Player.vue'
  import Enemy from '@/components/Enemy.vue'

  import enemies from '@/js/enemies.js'

  import { player, constants } from '@/js/store.js'

  const { basic, intermediate } = enemies
  const battle = []
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
