<template>
  <div className="vue-component">
  <div>
    {{$count}}
  </div>
  <button @click="() => count.set($count + 1)">
    + 1
  </button>
  <OtherComponent />
  <div v-if="showTheSlot">
    <div className="slot">
      <slot />
    </div>
  </div>
  <button v-else @click="(showTheSlot = true)">
    Show the Slot
  </button>
</div>
</template>

<script setup lang="ts">
import { count } from '../count'
import { useStore } from '@nanostores/vue'
import OtherComponent from './OtherComponent.vue'

import { ref } from 'vue';
const showTheSlot = ref(false)
const $count = useStore(count)
</script>

<style scoped>
.slot {
  padding: 20px;
  border: 1px solid black;
}
</style>