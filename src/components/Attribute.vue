<template>
  <div class="d-flex" style="height:20px;" >
    <div class="mr-auto" v-if="att.icon">
      <v-icon size="small" :icon="att.icon"/>
    </div>
    <div class="ml-auto" :class="{ 'text-green-lighten-1': ( changes && isUp ), 'text-red-lighten-1': ( changes && ! isUp ) }">
      <div class="text-bold">
        <span v-if="changes">{{ value > 0 ? '+' : '' }}</span>
        {{ value }}
      </div>
    </div>

    <v-tooltip activator="parent" style="max-width: 500px;">
      <h4>
        <v-icon class="mr-2" :icon="att.icon"/>
        {{ String(att.name).toUpperCase() }}
      </h4>
      <div>{{ att.description }}</div>
    </v-tooltip>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { constants } from '@/js/store.js' // @ts-ignore

  const props = defineProps({
    attName: {
      type: String,
      required: true,
    },
    value: {
      type: [Number, String],
      required: true,
    },
    detailed: {
      type: Boolean,
      required: false,
      default: false,
    },
    changes: {
      type: Boolean,
      required: false,
      default: false,
    },
  })
  const att = computed( () => ( ( props.attName in constants.attributes )  && constants.attributes[props.attName] ) )
  const isUp = computed( () => ( ( props.value > 0  || ( att.negative && props.value < 0 ) ) ) )
</script>
