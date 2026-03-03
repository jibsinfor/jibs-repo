<script setup lang="ts">
import type { fileDoc } from '../main';
import { openWindow } from '../utils/windowFrameFunc';
import { newPropertiesWindow } from '../utils/windowFrameFunc';
import { ref } from 'vue';
const winIndex = ref(1);
const props = defineProps<{
    fileIcon : fileDoc
}>()

function openPropertiesWindow() {
    newPropertiesWindow(props.fileIcon.datas, winIndex.value);
    winIndex.value= winIndex.value * 1.1;
}

</script>

<template>
    <div class="file-explorer-icon" @dblclick="openWindow(fileIcon.winId)" @click="openPropertiesWindow()">
        <img :src="fileIcon.src.url" :alt="fileIcon.src.alt">
        <p>{{ fileIcon.name }}</p>
    </div>
</template>

<style>
.file-explorer-icon {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    margin: 8px;
    cursor: pointer;
    justify-content: start;
    height: 60px;
    padding: 5px;

    & img {
        width: 45px;
        height: 45px;
        margin-right: 10px;
    }
    & p {
        color: black;
        font-size: 14px;
        margin: 0;
        padding: 0;
    }
}
</style>