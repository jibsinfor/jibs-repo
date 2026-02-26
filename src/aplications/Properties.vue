<script setup lang="ts">
import { ref } from 'vue';
const selection = ref("Descripción");
const tabs = ["Descripción", "funciones", "tecnologías", "contacto"];
function selectTab(tabName: string) {
    selection.value = tabName;
}

</script>
<template>
    <section class="container">
        <div class="button-list">
            <button v-for="tab in tabs" :key="tab" @click="selectTab(tab)" 
            class="tab-button" :class="{ active: selection === tab }">{{ tab }}
        </button>

        </div>
        <div class="properties-opt">
            <div class="inner-content">
                <p>container-opt</p>
            </div>
            <p>pruebas</p>
            <button>close</button>
        </div>
    </section>
</template>
<style>
.container {
    background-color:rgb(226, 226, 218);
    padding: 10px;
    font-family: "Tahoma", "Segoe UI", sans-serif;
    font-size: 12px;
}

.button-list {
    display: flex;
    gap: 2px;
    position: relative;
    z-index: 2; 
}

.tab-button {
    background: #dfdfdf;
    color: black;
    border: 1px solid #fff; 
    border-right-color: #808080;
    border-bottom: none;
    border-radius: 4px 4px 0 0;
    padding: 6px 12px;
    cursor: pointer;
    outline: none;
    &:focus{
        outline: none;
    }
    &:hover{
        outline: none;
        border: 1px solid rgb(196, 196, 178);
        border-bottom: none;
    }
}

.tab-button.active {
    padding-bottom: 8px;
    margin-bottom: -2px; 
    z-index: 3;
}

.tab-button::first-letter {
    text-decoration: underline;
}

.tab-button:not(.active) {
    margin-top: 2px;
}

.properties-opt {
    border: 1px solid #fff;
    border-right-color: #808080;
    border-bottom-color: #808080;
    background: #dfdfdf;;
    position: relative;
    z-index: 1;
    min-height: 300px;
}

.inner-content {
    margin: 10px;
    padding: 15px;
    background: #ffffff;
    border: 1px solid #808080;
    border-right-color: #fff;
    border-bottom-color: #fff;
    min-height: 150px;
    color: black;
}

</style>