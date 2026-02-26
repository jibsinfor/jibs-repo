<script setup lang="ts">
import FileExplorerIcon from '../components/FileExplorerIcon.vue';
import { myDocsFiles } from '../data/FileExplorerContent';
import type { windowFrame } from '../main.ts';

const props = defineProps<{
    component: windowFrame
}>()

</script>

<template>
    <div class="window-nav">
        <p>Dirección:</p>
        <input type="text" :value="`${props.component.directionText}`">
        <button class="go-button">
            <img src="../assets/windows-icons/go-arrow.png" alt="go-icon">
            <p>Ir</p>
        </button>
    </div>
    <div class="grid-template-mydocs">
        <div class="main-content">
            <div class="content-section">
                <p class="content-title">Mis Documentos</p>
                <div class="folders-space">
                    <FileExplorerIcon v-for="fileIcon in myDocsFiles" :key="fileIcon.winId" :file-icon="fileIcon" />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.grid-template-mydocs {
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: minmax(500px, 1fr);
    grid-template-rows: minmax(350px, 1fr);
}

.main-content {
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 3px;
    min-width: 400px;
    border-radius: 0px 0px 5px 5px;
}

.content-section {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 20px 1fr;
    width: 100%;
}

.content-title {
    display: flex;
    width: 100%;
    text-align: start;
    border-bottom: 1px solid #245edb47;
    color: black;
    padding: 0;
    margin: 0;
    place-self: start;
    font-size: 16px;
    font-weight: 500;
}

.folders-space {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
    position: relative;
}

.window-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 24px;
    width: 100%;
    background: beige;

    & p {
        font-size: 14px;
        padding: 0;
        padding-left: 3px;
        padding-right: 8px;
        margin: 0;
        height: 20px;
        color: rgb(70, 70, 70);
        width: fit-content;
        border: 1px solid rgb(196, 196, 178);

    }

    & input {
        flex-grow: 1;
        font-size: 14px;
        padding: 0;
        margin: 0;
        background: white;
        border: 1px solid rgb(196, 196, 178);
        color: black;
        height: 20px;
        padding-inline: 10px;

        &:focus {
            outline: none;
        }
    }
}

.go-button {
    height: 21px;
    display: flex;
    margin-left: auto;
    align-items: center;
    justify-content: start;
    margin-inline: 1px;
    background: beige;
    border-radius: 0;
    padding: 0;
    border: 1px solid rgb(196, 196, 178);

    &:focus {
        outline: none;
    }

    &:hover {
        outline: none;
        border: 1px solid rgb(196, 196, 178);
    }

    &:active {
        animation: click-but 0.3s ease-in-out;
    }

    & p {
        padding: 0;
        margin: 2px;
        outline: none;
        border: none;
        padding-right: 8px;
    }
}
</style>