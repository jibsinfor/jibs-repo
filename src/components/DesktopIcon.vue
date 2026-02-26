<script setup lang="ts">
import type { desktopIcon } from '../main.ts';
import { useDrag } from '../utils/drag&drop.ts';
const { dragStyle, dragging, startDrag } = useDrag()

const emit = defineEmits<{
    (e:'dbclick'):void
}>()

const props = defineProps<{
    iconInfo: desktopIcon
}>()


</script>

<template>
    <div v-on:mousedown="startDrag" 
        :class="{ dragging: dragging, 'icon-frame': true }"
        :style="[dragStyle, { top: `${props.iconInfo.y}px`, left: `${props.iconInfo.x}px` }]"
        @dblclick="$emit('dbclick')">
        <img :src="props.iconInfo.img.url" :alt="props.iconInfo.img.alt">
        <p>{{ props.iconInfo.docName }}</p>
    </div>
</template>

<style>
.icon-frame {
    position: absolute;
    width: 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
    z-index: 300;
    
    &:hover{
        outline: 1px dashed gray;
    }

    & img {
        height: 35px;
        width: 35px;
        margin: none;
        pointer-events: none;
        -webkit-user-drag: none;
    }

    & p {
        font-size: 12px;
        text-wrap: auto;
        text-align: center;
        text-shadow: 1px 1px 1px black;
        white-space: normal;
        overflow-wrap: normal;
        word-break: normal;
        margin: 0;
    }
}
.icon-frame.dragging {
    cursor: none;
    z-index: 300;
    /* & img{
        padding: 2px;
        background: #245edbb3;
    }
    & p{
        background: #245edbb3;
    } */
}
</style>