<template>
  <div className="vue-component">
  <div>
    {{$count}}
  </div>
  <button @click="() => count.set($count + 1)">
    + 1
  </button>
  <OtherComponent />
  <div style="padding: 20px; border: 1px solid black">
    <slot />
  </div>
</div>
</template>

<script setup lang="ts">
import { count } from '../count'
import { useStore } from '@nanostores/vue'
import OtherComponent from './OtherComponent.vue'

import { ref } from 'vue';

const $count = useStore(count)
</script>

<style scoped>

</style>