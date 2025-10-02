<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';
import { basicSetup } from 'codemirror';
import { EditorView } from 'codemirror';
import { json } from '@codemirror/lang-json';
import { indentWithTab } from '@codemirror/commands';
import { keymap } from '@codemirror/view';
import { oneDark } from '@codemirror/theme-one-dark';

const containerRef = useTemplateRef('codemirror-container');

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void
}>()

onMounted(() => {
  const fullHeightTheme = EditorView.theme({
    "&": { height: "100%", fontSize: "16px" },
    ".cm-scroller": { overflow: "auto" }
  });

  const onUpdate = EditorView.updateListener.of((update) => {
    emit("update:modelValue", update.state.doc.toString());
  });

  new EditorView({
    doc: props.modelValue,
    parent: containerRef.value!!,
    extensions: [
      basicSetup,
      json(),
      onUpdate,
      keymap.of([indentWithTab]),
      oneDark,
      fullHeightTheme,
    ]
  });
});

</script>

<template>
  <div ref="codemirror-container">
  </div>
</template>

<style scoped>
</style>