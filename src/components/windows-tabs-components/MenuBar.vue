<script setup lang="ts">
import { reactive } from 'vue';
import { type WindowActions } from '../../main';

const menuOptions = reactive({
    file: false,
    edit: false,
    view: false,
    help: false
})
const props = defineProps<{
    avaibleAction: Array<string> | null
}>()
const emit = defineEmits<{
    (e: 'close-win'): void,
    (e: 'action', action: keyof WindowActions): void
}>()

function handleClick(opt: string) {
    if (!isAvailable(opt)) return
    emit('action', opt as keyof WindowActions)
}

function isAvailable(opt: string) {
    return props.avaibleAction?.includes(opt)
}

function openOption(optSelected: keyof typeof menuOptions) {
    Object.keys(menuOptions).forEach((opt) => {
        menuOptions[opt as keyof typeof menuOptions] = opt === optSelected
    })
}
</script>
<template>
    <div class="menu-bar">
        <div class="menu-item">
            <h4 @click="openOption('file')">Archivo</h4>
            <div :class="menuOptions.file ? 'menu-box' : 'hide'" v-on:mouseleave="menuOptions.file = false">
                <p :class="{ 'unavaible-p': !isAvailable('open') }" @click="handleClick('open')">Abrir...</p>
                <p :class="{ 'unavaible-p': !isAvailable('save') }" @click="handleClick('save')">Guardar</p>
                <p class="unavaible-p">Guardar como...</p>
                <div class="separator-tab"></div>
                <p :class="{ 'unavaible-p': !isAvailable('print') }" @click="handleClick('print')">imprimir</p>
                <p :class="{ 'unavaible-p': !isAvailable('share') }">Enviar</p>
                <p class="unavaible-p">Exportar a...</p>
                <div class="separator-tab"></div>
                <p>Propiedades</p>
                <p @click="$emit('close-win')">Cerrar</p>
            </div>
        </div>
        <div class="menu-item">
            <h4 @click="openOption('edit')">Editar</h4>
            <div :class="menuOptions.edit ? 'menu-box' : 'hide'" v-on:mouseleave="menuOptions.edit = false">
                <p class="unavaible-p">Deshacer</p>
                <div class="separator-tab"></div>
                <p>Copiar</p>
                <p>Cortar</p>
                <p>Pegar</p>
                <div class="separator-tab"></div>
                <p>Selectionar todo</p>
                <p class="unavaible-p">Invertir selección</p>
            </div>
        </div>
        <div class="menu-item">
            <h4 @click="openOption('view')">Vista</h4>
            <div :class="menuOptions.view ? 'menu-box' : 'hide'" v-on:mouseleave="menuOptions.view = false">
                <p>&#8226; Mosaico</p>
                <p>&#8226; Lista</p>
                <p>&#8226; Detalle</p>
                <p>&#8226; Icono pequeño</p>
                <p>&#8226; Icono mediano</p>
                <p>&#8226; Icono grande</p>
                <div class="separator-tab"></div>
                <p class="unavaible-p">Mostrar oculto</p>
            </div>
        </div>
        <div class="menu-item">
            <h4 @click="openOption('help')">Ayuda</h4>
            <div :class="menuOptions.help ? 'menu-box' : 'hide'" v-on:mouseleave="menuOptions.help = false">
                <p>Contactar con soporte</p>
                <div class="separator-tab"></div>
                <p>Asistente</p>
            </div>
        </div>
        <img src="../../assets/windows-icons/windows.png" alt="windows-icon">
    </div>
</template>

<style>
.menu-bar {
    display: flex;
    flex-direction: row;
    margin-inline: 2px;
    background: beige;
    border-bottom: 1px solid #c4c4b2;

    & * {
        user-select: none;
    }

    & img {
        margin-left: auto;
        padding-right: 2px;
    }
}

.menu-item {
    & h4 {
        font-family: "Tahoma", "Segoe UI", sans-serif;
        color: black;
        font-size: 14px;
        padding-inline: 7px;
        margin: 0 2px 2px 2px;
        font-weight: 400;

        &:hover {
            background: var(--system-color);
            color: aliceblue;
            cursor: default;
        }

        &:target-current {
            background: var(--system-color);
            color: aliceblue;
            cursor: default;
        }
    }
}

.menu-box {
    position: absolute;
    padding: 2px;
    background: rgb(247, 245, 234);
    color: black;
    top: 55px;
    margin-left: 3px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 150px;
    z-index: 750;
    box-shadow: 1px 2px 1px 2px rgba(0, 0, 0, 0.519);
    font-size: 12px;

    & p {
        padding: 0 0 0 5px;
        margin: 0;
        width: 95%;
        text-align: start;

        &:hover {
            background: var(--system-color);
            color: white;
        }
    }
}

.menu-item::target-text .menu-box {
    background: var(--system-color);
    display: flex;
    font-family: "Tahoma", "Segoe UI", sans-serif;
}

.separator-tab {
    height: 1px;
    width: calc(100% - 10px);
    place-self: center;
    background: rgba(0, 0, 0, 0.192);
}

.unavaible-p {
    color: rgb(141, 141, 141);
    user-select: none;
}
</style>