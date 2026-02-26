<script setup lang="ts">
import type { fileDoc } from '../../main'

const props = defineProps<{
    fileDocData: fileDoc
}>()
const emit = defineEmits<{
    (e: 'dbclick'): void
}>()

</script>

<template>
    <div class="left-file-doc" @dblclick="$emit('dbclick')">
        <img :src="fileDocData.src.url" :alt="fileDocData.src.alt">
        <div>
            <h4>{{fileDocData.name}}</h4>
            <p>{{fileDocData.fullName}}</p>
        </div>
    </div>
</template>

<style>
.left-file-doc {
    height: 50px;
    display: flex;
    align-items: center;
    flex-direction: row;
    user-select: none;
    &:hover {
        background: var(--system-color);
    }

    &:hover * {
        color: white;
        cursor: pointer;
    }

    & img {
        height: 32px;
        width: 32px;
        margin-right: 8px;
        margin-left: 1px;
    }

    & div {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-around;
        text-align: start;

        & h4,
        & p {
            margin: 0;
            padding: 0;
            color: black;
            font-size: 12px;
            inline-size: none;
        }

        & p {
            color: gray;
        }
    }
}
</style>