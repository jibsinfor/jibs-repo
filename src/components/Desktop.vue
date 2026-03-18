<script setup lang="ts">
import { useSelectFrame, selectWindowFrame, openWindow } from '../utils/windowFrameFunc.ts';
import DesktopIcon from './DesktopIcon.vue';
import Window from './Window.vue';
import { windowContents, desktopIcons} from '../data/windowContent';
const { selectedFrame, startSelection, selectStyle } = useSelectFrame();

</script>

<template>
    <main class="desktop-window" @mousedown="startSelection"aria-live="polite" aria-label="Escritorio">
        <div v-for="windowFrame in windowContents" :key="windowFrame.id">
            <Window 
                v-if="windowFrame.isOpen"
                :window-frame="windowFrame"
                @close-window="windowFrame.isOpen = false"
                @click="selectWindowFrame(windowFrame.id)"
            />
        </div>
        <div v-for="icon in desktopIcons" :key="icon.docName">
            <DesktopIcon :iconInfo="icon" @dblclick="openWindow(icon.winId)"/>
        </div>
        <div :class="{ selectedFrame, 'desktopFrame': true }" :style="selectStyle"></div>
    </main>
</template>

<style>
.desktop-window {
    display: flex;
    background: url("..\assets\windows-desktop.webp");
    background-size: cover;
    width: 100%;
    height: calc(100% - var(--toolbar-height));
    align-items: center;
    justify-content: center;
    position:relative;
}
.desktopFrame {
    display: none;
}
.desktopFrame.selectedFrame {
    position: absolute;
    z-index: 500;
    display: block;
    border: 1px dashed rgba(0, 0, 0, 0.321);
    background: rgba(0, 118, 215, 0.1);
}

</style>