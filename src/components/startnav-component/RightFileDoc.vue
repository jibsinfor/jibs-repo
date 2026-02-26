<script setup lang="ts">
import {type fileDoc } from '../../main';

const emit = defineEmits<{
    (e: 'dbclick'): void
}>()

const props = defineProps<{
    fileDocData: fileDoc
}>()


</script>

<template>
    <div class="right-file-doc" @dblclick="$emit('dbclick')">
        <img :src="fileDocData.src.url" :alt="fileDocData.src.alt">
        <p>{{ fileDocData.name }}</p>
    </div>
</template>

<style>
    .right-file-doc{
        display: flex; 
        flex-direction: row;
        align-items: center;
        height: 40px;
        user-select: none;
        &:hover {
        background: var(--system-color);
    }

        &:hover * {
            color: white;
            cursor: pointer;
        }
        
        & img{
            height: 28px;
            width: 28px;
            margin-right: 8px;
            margin-left: 1px;
        }
        & p{
            font-weight: 500;
            font-size: 12px;
            color: black;
        }
    }
</style>