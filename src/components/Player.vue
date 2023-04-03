<template>
  <v-card
    :loading="loading"
    variant="outlined"
    :color="isDead ? 'red lighten-5': ''"
    class="h-100"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <!-- <v-img
      src="@/assets/portraits/fighter_male.png"
    ></v-img> -->

    <v-card-title>{{player.name}}</v-card-title>

    <v-card-text>
      <v-progress-linear
        color="red"
        height="20"
        striped
        v-model="hpPercentage"
      >
        <strong>HP: {{ player.hp }} / {{ player.max_hp }}</strong>
      </v-progress-linear>
      <v-progress-linear
        color="blue"
        height="10"
        striped
        v-model="player.atb"

      >
      </v-progress-linear>
      <div class="my-4">
        <div v-for="(value, key) in player.atts" :key="key" class="d-flex mb-1">
            <div class="mr-2">{{ attName(key) }}:</div>
            <div class="text-bold ml-auto">{{ value }} </div>
        </div>
      </div>

      <div></div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
  </v-card>
</template>

<script setup lang="ts">
  import { ref, reactive, watch, computed } from 'vue'
  import { player, constants } from '@/js/store.js' // @ts-ignore

  // attName performs a translation of an attribute to names constants
  const attName = ( key:string ) => ( ( key in constants.attNames ) ? constants.attNames[key] : key )

  const isDead = computed( ( ) => !(player.hp > 0) )

  const hpPercentage = computed( ( ) => {
    if ( ! player.hp ) return 0
    return Math.ceil(( player.hp / player.max_hp ) * 100 )
  })

  const loading = ref(false) // may be used later?

</script>
