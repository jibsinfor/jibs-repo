<script setup lang="ts">
import type { headerData } from '../../main';

defineProps<{ 
    headerInfo: headerData
}>()

const emit = defineEmits<{
    (e: 'close-window'): void
    (e: 'min-window'): void
    (e: 'max-window'): void
}>()

function closeWin (){
    emit('close-window');
}
function minWindow (){
    emit('min-window')
    
}
function maxWindow (){
    emit('max-window');
}
</script>


<template>
    <div class="window-header">
        <div class="header-info">
            <img :src="headerInfo.headerIcon.url" :alt="headerInfo.headerIcon.alt">
            <p>{{headerInfo.headerName}}</p>
        </div>
        <div class="option-but">
            <button @click="minWindow" @mousedown.stop class="header-but-minimize"></button>
            <button v-show="headerInfo.allowMaximize"  @click="maxWindow" @mousedown.stop :class="!headerInfo.isMaximized? 'header-but-maximize' : 'header-but-maximized'"></button>
            <button @click="closeWin" @mousedown.stop class="header-but-close"></button>
        </div>
    </div>
</template>

<style>
.window-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: var(--header-background);
    border-radius: 7px 7px 0 0;
    cursor: grab;
    max-height: 30px;

}
.header-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & img {
        height: 16px;
        width: 16px;
        margin-inline: 5px;
    }

    & p {
        font-size: 16px;
        font-weight: 500;
        margin-left: 5px;
    }
}
.option-but {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-inline: 2px;
    & button {
        outline: 1px solid #ffffffaf;
        height: 22px;
        width: 22px;
        padding: 0;
        border-radius: 2px;
        margin: 2px;
        position: relative;
    }
}
.header-but-minimize {
    box-shadow: inset 0 -1px 2px 1px #4646ff;
    background-image: radial-gradient(circle at 90% 90%,
            #0054e9 0%,
            #2263d5 55%,
            #4479e4 70%,
            #a3bbec 90%,
            white 100%);

    &::before {
        content: '';
        position: absolute;
        left: 3px;
        bottom: 2px;
        height: 3px;
        width: 8px;
        background-color: #ffffffe1;
    }
}
.header-but-maximize {
    box-shadow: inset 0 -1px 2px 1px #4646ff;
    background-image: radial-gradient(circle at 90% 90%,
            #0054e9 0%,
            #2263d5 55%,
            #4479e4 70%,
            #a3bbec 90%,
            white 100%);

    &:before {
        content: '';
        position: absolute;
        display: block;
        left: 3px;
        top: 3px;
        box-shadow: inset 0 3px #ffffffe1, inset 0 0 0 1px #ffffffe1;
        height: 14px;
        width: 14px;
    }
}
.header-but-close {
    box-shadow: inset 0 -1px 2px 1px #da4600;
    background-image: radial-gradient(circle at 90% 90%,
            #cc2200 0%,
            #dc5127 55%,
            #cd5a46 70%,
            #ffccb2 90%,
            white 100%);

    &:before {
        content: '';
        position: absolute;
        left: 9px;
        top: 2px;
        transform: rotate(45deg);
        height: 16px;
        width: 2px;
        background-color: #ffffffe1;
    }

    &:after {
        content: '';
        position: absolute;
        left: 9px;
        top: 2px;
        transform: rotate(-45deg);
        height: 16px;
        width: 2px;
        background-color: white;
    }
}
.header-but-maximized {
    box-shadow: inset 0 -1px 2px 1px #4646ff;
    background-image: radial-gradient(circle at 90% 90%,
            #0054e9 0%,
            #2263d5 55%,
            #4479e4 70%,
            #a3bbec 90%,
            white 100%);

    &:before {
        content: '';
        position: absolute;
        display: block;
        left: 6px;
        top: 2px;
        box-shadow: inset 0 2px #ffffffe1, inset 0 0 0 1px #ffffffe1;
        height: 12px;
        width: 12px;
    }

    &:after {
        content: '';
        position: absolute;
        display: block;
        left: 3px;
        top: 5px;
        box-shadow: inset 0 2px white, inset 0 0 0 1px white, 1px -1px #136dff;
        height: 12px;
        width: 12px;
        background-color: #136dff;
    }
}
</style>