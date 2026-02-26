<script setup lang="ts">
import { windowContents} from '../data/windowContent';
import {selectWindowFrame, toggleMinimizeWindow } from '../utils/windowFrameFunc.ts'
import { useClock } from '../utils/clock'
const { formattedTime } = useClock();

const emit = defineEmits<{
    (e: 'toggle-nav'): void
}>()

</script>

<template>
    <footer class="toolbar-nav">
        <img @click="$emit('toggle-nav')"  class="start-but" src="../assets/windows-icons/inicio-pc.webp" alt="start-buttom">

        <div class="open-file-box">
            <div v-for="openFile in windowContents.filter(w => w.isOpen)"  
            :key="openFile.id" 
            :class="{'file-opened': true, 'selected-window': openFile.selected }"
            @click="selectWindowFrame(openFile.id)" @dblclick="toggleMinimizeWindow(openFile.id)">
                <img :src="openFile.headerData.headerIcon.url" :alt="openFile.headerData.headerIcon.alt">
                <p>{{ openFile.headerData.headerName }}</p>
            </div>
        </div>

        <div class="toolbar-tools">
            <img class="tool-icon" src="../assets/windows-icons/antivirus(16x16).png" alt="antivirus-icon">
            <img class="tool-icon" src="../assets/windows-icons/help(16x16).png" alt="help-icon">
            <img class="tool-icon" src="../assets/windows-icons/volume(16x16).png" alt="volume-icon">
            <span>{{ formattedTime.hours }}:{{ formattedTime.min }} </span>
        </div>
    </footer>
</template>

<style>
.toolbar-nav {
    height: var(--toolbar-height);
    background: linear-gradient(to bottom,
            #1f2f86 0,
            #3165c4 3%,
            #3682e5 6%,
            #4490e6cc 10%,
            #3883e5 12%,
            #2b71e0 15%,
            #2663da 18%,
            #235bd6 20%,
            #2258d5 23%,
            #2157d6 38%,
            #245ddb 54%,
            #2562df 86%,
            #245fdc 89%,
            #2158d4 92%,
            #1d4ec0 95%,
            #1941a5 98%);
    box-shadow: inset 1px 3px 10px rgba(255, 255, 255, 0.444);
    display: grid;
    grid-template-columns: 100px 1fr 150px;
    grid-template-rows: 1fr;
    gap: 10px;
    z-index: 1000;
    position: absolute;
    width: 100%; 
}
.start-but {
    width: 100px;
    height: 100%;
    user-select: none;
    &:hover {
        filter: brightness(1.1);
        cursor: pointer;
    }
}
.open-file-box {
    display: flex;
    align-items: center;
    justify-content: start;
    img {
        height: 16px;
        width: 16px;
        margin-right: 2px;
    }

    & p {
        margin: 0;
    }
}
.file-opened {
        display: flex;
        align-items: center;
        justify-content: start;
        padding-inline: 10px;
        min-width: 180px;
        max-width: 380px;
        background: #4276ef77;
        height: 80%;
        border-radius: 3px;
        box-shadow: inset 1px 1px 3px rgba(255, 255, 255, 0.444);
        margin-inline-end: 1px;

        &:hover {
            filter: brightness(1.2);
            cursor: pointer;
        }
    }
.file-opened.selected-window{
    background: #10307b77;
    box-shadow: inset 1px 1px 3px rgba(16, 0, 0, 0.444);
}
.toolbar-tools {
    background: #1299e8;
    height: 100%;
    box-shadow: inset 1px 3px 10px rgba(255, 255, 255, 0.297);
    display: flex;
    justify-content: space-around;
    align-items: center;
    user-select: none;
}
</style>