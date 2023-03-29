<template>
  <v-card
    :loading="loading"
    outlined
    :color="isDead ? 'red lighten-5': ''"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="20"
        indeterminate
      ></v-progress-linear>
    </template>

    <!-- <v-img
      src="@/assets/portraits/fighter_male.png"
    ></v-img> -->

    <v-card-title class="h6">{{enemy.name}}</v-card-title>
    <div class="h6">{{enemy.name}}</div>

    <v-card-text>
      <v-progress-linear
        color="red"
        height="20"
        striped
        v-model="hpPercentage"
      >
        <strong v-if="'hp' in enemy">HP: {{ enemy.hp }}</strong>
        <strong v-if="'max_hp' in enemy">/ {{ enemy.max_hp }}</strong>
      </v-progress-linear>
      <v-progress-linear
        v-if="active"
        color="blue"
        height="10"
        striped
        v-model="enemy.atb"
      >
      </v-progress-linear>

      <div></div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
  </v-card>
</template>

<script setup lang="ts">
  import { ref, reactive, watch, computed } from 'vue'
  import { constants } from '@/js/store.js' // @ts-ignore

  const props = defineProps({
    enemy: {
      type: Object,
      required: true,
    },
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
  })

  // attName performs a translation of an attribute to names constants
  const attName = ( key:string ) => ( ( key in constants.attNames ) ? constants.attNames[key] : key )

  const isDead = computed( ( ) => !(props.enemy.hp > 0) )

  const hpPercentage = computed( ( ) => {
    if ( ! props.enemy.hp ) return 0
    return Math.ceil(( props.enemy.hp / props.enemy.max_hp ) * 100 )
  })

  const loading = ref(false) // may be used later?

</script>
