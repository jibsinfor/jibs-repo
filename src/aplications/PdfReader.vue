<script setup lang="ts">
import { ref } from 'vue';
import type { windowFrame } from '../main.ts';
const props = defineProps<{
    component: windowFrame
}>()

const pdfRef = ref<string>('/Docs/myCV.pdf');
const fileInput = ref<HTMLInputElement | null>(null)
const pdfFrame = ref<HTMLIFrameElement | null>(null)
let currentUrl: string | null = null

function savePDF() {
  const a = document.createElement('a')
  a.href = pdfRef.value
  a.download = 'PDFfromJB-portafolio.pdf'
  a.click()
}
function openPDF() {
  if (fileInput.value) fileInput.value.click()
}
function printPDF() {
  const iframe = pdfFrame.value
  if (!iframe) return
  iframe.onload = () => {
    try {
      iframe.contentWindow?.focus()
      iframe.contentWindow?.print()
    } catch (e) {
      const win = window.open(pdfRef.value)
      win?.print()
    }
  }
  iframe.src = pdfRef.value
}

function handleFile(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (!file) return
  if (currentUrl) URL.revokeObjectURL(currentUrl);
  currentUrl = URL.createObjectURL(file)
  pdfRef.value = currentUrl
}

defineExpose({
  save: savePDF,
  open: openPDF,
  print: printPDF
})

</script>
<template>
  <iframe class="pdf-style" :src="pdfRef" frameborder="0" ref="pdfFrame"></iframe>
  <input type="file" hidden ref="fileInput" accept="application/pdf" @change="handleFile">
</template>

<style>
.pdf-style {
  min-width: 700px;
  min-height: 500px;
  flex: 1;
  border: none;
}
.pdf-style::-webkit-scrollbar {
  display: none;
}

</style>