<template>
  <div>
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


      <div class="h6 text-center uppercase px-1 mt-2 h-4" style="line-height: 1.1">{{player.name}}</div>
      <div class="text-center h-4">
        <v-icon class="ma-1 pa-1" :icon="player.icon || 'mdi-skull'"></v-icon>
      </div>

        <v-progress-linear
          v-if="active"
          color="blue"
          height="10"
          striped
          v-model="player.atb"
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
          <strong v-if="'hp' in player.atts">HP: {{ player.atts.hp }}</strong>
          <strong v-if="'max_hp' in player.atts">/ {{ player.atts.max_hp }}</strong>
        </v-progress-linear>

        <v-card-text class="pa-1" v-if="detailed">
          <div v-for="(value, key) in player.atts" :key="key">
             <Attribute :attName="key" :value="value"></Attribute>
          </div>
      </v-card-text>
    </v-card>
    <div v-if="player.atts.hp <= 0 " class="my-1">
      <v-btn @click="player.atts.hp = player.atts.max_hp">
        REVIVE
      </v-btn>
        </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive, watch, computed } from 'vue'
  import { constants } from '@/js/store.js' // @ts-ignore

  import Attribute from '@/components/Attribute.vue'

  import { player } from '@/js/store.js'

  const props = defineProps({
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
    selected: {
      type: Boolean,
      required: false,
      default: false,
    },
  })

  // attName performs a translation of an attribute to names constants
  const attName = ( key:string ) => ( ( key in constants.attNames ) ? constants.attNames[key] : key )
  const iconify = ( key:string ) => ( ( key in constants.attributes && constants.attributes[key].icon ) || false )

  const isDead = computed( ( ) => !(player.atts.hp > 0) && props.active )

  const hpPercentage = computed( ( ) => {
    if ( ! player.atts.hp ) return 0
    return Math.ceil(( player.atts.hp / player.atts.max_hp ) * 100 )
  })

  const loading = ref(false) // may be used later?

</script>
