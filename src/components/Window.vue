<script setup lang="ts">
import WinHeader from './windows-tabs-components/WinHeader.vue';
import MenuBar from './windows-tabs-components/MenuBar.vue';
import WinTool from './windows-tabs-components/WinTool.vue';
import { useDrag } from '../utils/drag&drop.ts';
import type { windowFrame, WindowActions } from '../main.ts';
import { ref } from 'vue';
const { dragStyle, dragging, startDrag } = useDrag()
const firstInteraction = ref<boolean>(false)
const lastPosition = ref<{ x: number, y: number }>({ x: 200, y: 200 })
const componentRef = ref<any>(null)
const props = defineProps<{
    windowFrame: windowFrame
}>()

const emit = defineEmits<{
    (e: 'close-window'): void
    (e: 'click'): void
}>()

function closeWindow() {
    emit('close-window');
}

function toggleMaximize() {

    if (props.windowFrame.windowState === 'default') {
        lastPosition.value.x = props.windowFrame.x;
        lastPosition.value.y = props.windowFrame.y;
        props.windowFrame.x = 0;
        props.windowFrame.y = 0;
        props.windowFrame.windowState = 'maximized'
    } else {
        props.windowFrame.x = lastPosition.value.y;
        props.windowFrame.y = lastPosition.value.y;
        props.windowFrame.windowState = 'default'
    }
}

function minimizeWindow() {
    props.windowFrame.windowState = 'minimized';
    firstInteraction.value = true;
}

function executeAction(action: keyof WindowActions) {
    console.log("ejecutando action: ", action);
    componentRef.value?.[action]?.()
}

</script>

<template>
    <section
        :style="[windowFrame.windowState === 'default' ? dragStyle : {}, { top: `${props.windowFrame.y}px`, left: `${props.windowFrame.x}px` }]"
        :class="[`window-${windowFrame.windowState}`, { dragging, 'selected-window': windowFrame.selected }]"
        @click="emit('click')">
        <WinHeader @mousedown="startDrag" @min-window="minimizeWindow" @close-window="closeWindow"
            @max-window="toggleMaximize" :header-info="props.windowFrame.headerData" />

        <MenuBar v-if="props.windowFrame.showMenubar" @close-win="closeWindow"
            :avaible-action="props.windowFrame.menuBarOptions" @action="executeAction" />
        <WinTool v-if="props.windowFrame.showWinTools" :direction-text="props.windowFrame.directionText"/>

        <div class="window-content">
            <component v-if="props.windowFrame.componentToShow" :is="props.windowFrame.componentToShow"
                ref="componentRef" :component="props.windowFrame" />
        </div>
    </section>
</template>

<style>
.window-default {
    display: grid;
    grid-template-rows: 30px auto  auto 1fr;
    grid-template-columns: 1fr;
    border-radius: 7px;
    padding: 0;
    background: var(--system-color);
    position: absolute;
    z-index: 500;
}

.window-minimized {
    transform: translate(-50%, 120%) scale(0.2);
    opacity: 0;
    pointer-events: none;
}

.window-maximized {
    display: flex;
    flex-direction: column;
    border-radius: 7px;
    padding: 0;
    background: var(--system-color);
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border-radius: 0;
    z-index: 700;
}

.window-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    flex-direction: column;
    background: #fff;
    margin: 0px 2px 2px 2px;
    border-radius: 0 0 4px 4px;
    overflow: hidden;
    & * {
        user-select: none;
    }
}

.selected-window {
    z-index: 800;
}

.dragging {
    z-index: 800;
}
</style>
