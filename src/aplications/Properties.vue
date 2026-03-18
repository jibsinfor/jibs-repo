<script setup lang="ts">
import { ref } from 'vue';
import type { windowFrame } from '../main.ts';
import { closeWindow } from '../utils/windowFrameFunc.ts';

const selection = ref("description");
const props = defineProps<{
    component: windowFrame;
}>(); 
const emit = defineEmits<{
    (e: 'close-window'): void
    (e: 'click'): void
}>()

const content = ref<string>(`${props.component.datas?.description || "No description available."}`);
const tabs = [
    { label: 'description', value: 'Descripción' },
    { label: 'functionality', value: 'Funcionalidades' },
    { label: 'technologies', value: 'Tecnologías' },
    { label: 'links', value: 'Contacto' }
];

function updateContent() {
    switch (selection.value) {
        case 'description':
            content.value = props.component.datas?.description || "No description available.";
            break;
        case 'functionality':
            content.value = props.component.datas?.functionality || "No functionality information available.";
            break;
        case 'technologies':
            content.value = props.component.datas?.technologies || "No technologies information available.";
            break;
        case 'links':
            content.value = props.component.datas?.links?.url || "No contact information available.";
            break;
        default:
            content.value = "No information available.";
    }
}

function selectTab(tabName: string) {
    selection.value = tabName;
    updateContent()
}

function closePropertiesWindows (){
    closeWindow(props.component.id)
}

</script>
<template>
    <section class="container">
        <div class="button-list">
            <button v-for="tab in tabs" :key="tab.label" @click="selectTab(tab.label)" class="tab-button"
                :class="{ active: selection === tab.label }">{{ tab.value }}
            </button>

        </div>
        <div class="properties-opt">
            <div class="inner-content">
                <p>{{ content }}</p>
            </div>
            <div class="readme-div">
                <img src="/src/assets/app-icons/readme-icon(90x100).png" alt="readme-icon">
                <a :href="props.component.datas?.links?.readme" target="_blank" >ver README</a>
            </div>
            <button class="close-button" @click="closePropertiesWindows">close</button>
        </div>

    </section>
</template>

<style>
.container {
    background-color: rgb(226, 226, 218);
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

    &:focus {
        outline: none;
    }

    &:hover {
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
    background: #dfdfdf;
    position: relative;
    z-index: 1;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.inner-content {
    margin: 10px;
    padding: 5px;
    background: #ffffff;
    border: 1px solid #808080;
    border-right-color: #d4d1d1;
    border-bottom-color: #d4d1d1;
    min-height: 200px;
    width: clamp(100px, 300px, 300px);
    color: black;
    & p{
        text-align: left;
        margin-left: 5px;
    }
}
.readme-div {
    display: flex;
    align-items: center;
    gap: 10px;
    & a {
        color: black;
        text-decoration: none;
        padding: 5px 10px;
        border-radius: 2px;
        transition: all .1s ease-in-out;
        /* border: 1px solid #fff;
        border-right-color: #808080;
        border-bottom-color: #808080; */

        &:hover {
            color:blue; 
            /* border: 1px solid #fff;
            border-right-color: #808080;
            border-bottom-color: #808080;
            outline: none; */
        }

        &:active {
            /* border: 1px solid rgb(163, 163, 162); */
            outline: none;
            transform: scale(0.99);
        }

        &:focus {
            outline: none;
        }
    }
    & img {
        width: 40px;
        height: 50px;
    }
}

.close-button {
    background: #dfdfdf;
    color: black;
    border: 1px solid #fff;
    border-right-color: #808080;
    border-bottom-color: #808080;
    border-radius: 2px;
    padding: 5px 10px;
    cursor: pointer;
    transition: all .1s ease-in-out;
    position: absolute;
    bottom: 5px;
    right: 5px;
    outline: none;

    &:hover {
        border: 1px solid #fff;
        border-right-color: #808080;
        border-bottom-color: #808080;
        outline: none;
    }

    &:active {
        border: 1px solid rgb(163, 163, 162);
        outline: none;
        transform: scale(0.99);
        /* ⚠️ cambio importante */
    }

    &:focus {
        outline: none;
    }
}
</style>