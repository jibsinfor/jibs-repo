<script setup lang="ts">
import FileExplorerIcon from '../components/FileExplorerIcon.vue';
import { myProyectFiles } from '../data/FileExplorerContent';
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
                <p class="content-title">Mis Proyectos</p>
                <div class="folders-space">
                    <FileExplorerIcon v-for="fileIcon in myProyectFiles" :key="fileIcon.winId" :file-icon="fileIcon"/>
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

</style>