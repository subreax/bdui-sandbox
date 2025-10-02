<script setup lang="ts">
import { availableComponents, type ComponentKind } from './core/ComponentBinding';

interface Props {
  screen: any
}

const props = defineProps<Props>();
</script>

<template>
  <div class="screen">
    <component :is="availableComponents[props.screen.root.kind as ComponentKind]" v-bind="props.screen.root" />
  </div>
</template>

<style scoped>
.screen {
  /* margin: 32px;
  border: 2px solid #c2c2c2;
  border-radius: 16px; */
}
</style>