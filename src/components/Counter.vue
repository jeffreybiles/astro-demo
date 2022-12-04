<template>
  <div>
    {{$count}}
  </div>
  <button @click="() => count.set($count + 1)">
    + 1
  </button>
</template>

<script setup lang="ts">
import { count } from '../count'
import { useStore } from '@nanostores/vue'

import { ref } from 'vue';

const $count = useStore(count)
</script>

<style scoped>

</style>