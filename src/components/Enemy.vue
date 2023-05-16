<template>
  <v-card
    :loading="loading"
    variant="outlined"
    :color="isDead ? 'red lighten-5': ''"
    class="min-h-200 h-100 d-flex flex-column "
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


    <div class="h6 text-center uppercase px-1 mt-2 h-4" style="line-height: 1.1">{{obj.name}}</div>
    <div class="text-center h-4">
      <v-icon class="ma-1 pa-1" :icon="obj.icon || 'mdi-skull'"></v-icon>
    </div>

      <v-progress-linear
        v-if="active"
        color="blue"
        height="10"
        striped
        v-model="obj.atb"
      >
      </v-progress-linear>
      <v-progress-linear
        v-if="active"
        color="red"
        height="20"
        striped
        v-model="hpPercentage"
        class="mb-1"
      >
        <strong v-if="'hp' in obj">HP: {{ obj.hp }}</strong>
        <strong v-if="'max_hp' in obj">/ {{ obj.max_hp }}</strong>
      </v-progress-linear>

      <v-card-text class="pa-1" v-if="detailed">
        <div v-for="(value, key) of obj.atts" :key="key">
           <Attribute :attName="key" :value="value"></Attribute>
        </div>

        <v-divider class="mx-2"></v-divider>

        <div v-for="(value, key) of obj.gives" :key="key">
           <Attribute :attName="key" :value="value" :changed="true"></Attribute>
        </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">

  import { ref, reactive, watch, computed } from 'vue'
  import { constants, battle } from '@/js/store.js' // @ts-ignore

  import Attribute from '@/components/Attribute.vue'

  const props = defineProps({
    obj: {
      type: Object,
      required: true,
    },
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
    expanded: {
      type: Boolean,
      required: false,
      default: true,
    },
    detailed: {
      type: Boolean,
      required: false,
      default: false,
    },
  })

  // attName performs a translation of an attribute to names constants
  const attName = ( key:string ) => ( ( key in constants.attNames ) ? constants.attNames[key] : key )
  const iconify = ( key:string ) => ( ( key in constants.attributes && constants.attributes[key].icon ) || false )

  const isDead = computed( ( ) => !(props.obj.atts.hp > 0) && props.active )

  const hpPercentage = computed( ( ) => {
    if ( ! props.obj.atts.hp ) return 0
    return Math.ceil(( props.obj.atts.hp / props.obj.atts.max_hp ) * 100 )
  })

  const loading = ref(false) // may be used later?

  const canAddEnemy = computed( ( ) => battle.length >= constants.maxEnemies )

  const addToBattle = () => {
    if ( ! canAddEnemy ) return
    // clone a new enemy object to prevent pass by reference=
    let enemy = props.obj
    enemy = { ...enemy }
    // set the ebemy max_hp based on default hp
    enemy.max_hp = enemy.max_hp || enemy.hp
    console.log('Adding Enemy', enemy)
    battle.push( enemy )
  }

</script>
