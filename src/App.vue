<script setup lang="ts">
import 'modern-normalize/modern-normalize.css';
import './core/styles';
import './style.css'

import MobileScreen from './MobileScreen.vue';
import CodeEditor from './CodeEditor.vue';
import { ref } from 'vue';
import { processScreen } from './core/ComponentBinding';

const code = ref(`{
  "root": {
    "kind": "text",
    "properties": {
      "value": "hello world!"
    }
  },
  "rnd": 0
}`
);

let oldCode = code.value;

const screen = ref(processScreen(JSON.parse(code.value)))

function onJsonUpdated(jsonStr: string) {
  if (jsonStr === oldCode) {
    return;
  }

  try {
    const layout = JSON.parse(jsonStr);
    updateScreen(layout);
  }
  catch (ex: any) {
  }

  oldCode = jsonStr;
}

function updateScreen(layout: any) {
  screen.value = processScreen(layout);
}

</script>

<template>
  <div class="root-container">
    <MobileScreen class="screen" v-if="screen" :screen="screen" :key="screen.rnd" />
    <CodeEditor class="editor" v-model="code" @update:model-value="onJsonUpdated"/>
  </div>
</template>

<style scoped>
.root-container {
  display: flex;
  height: 100dvh;
}

.screen { 
  flex: 1;
}

.editor { 
  flex: 2;
  overflow: hidden;
}
</style>
