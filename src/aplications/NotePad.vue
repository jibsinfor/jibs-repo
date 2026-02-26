<script setup lang="ts">
import { ref } from 'vue'
const content = ref<string>('')
const editor = ref<HTMLDivElement | null>(null)

function onInput () {
    if (!editor.value) return
    content.value = editor.value.innerHTML
}
function saveTXTcontent() {
    const blob = new Blob([content.value], { type: 'text/plain;charset=utf-8;' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'archivo.txt'
    a.click()

    URL.revokeObjectURL(url)
}

defineExpose ({
    save: saveTXTcontent 
})

</script>

<template>
    <div class="text-area-content" :contenteditable="true" ref="editor" @input="onInput">
    </div>
</template>

<style>
.text-area-content {
    min-width: 600px;
    min-height: 400px;
    height: fit-content;
    padding-inline: .5em;
    margin-top: 4px;
    color: black;
    background: rgb(255, 255, 255);
    text-align: start;
    font-family: 'Digital', monospace;

    &:focus {
        outline: none;
    }
}
</style>