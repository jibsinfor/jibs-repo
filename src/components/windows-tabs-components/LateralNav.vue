<script setup lang="ts">
import { ref } from 'vue';
const expandOptions = ref<Array<string>>([]);

function toggleOptions(index: string){
    const i = expandOptions.value.indexOf(index)

    if (i === -1) {
      expandOptions.value.push(index)
    } else {
      expandOptions.value.splice(i, 1)
    }
}
</script>

<template>
    <div class="lateral-nav">
        <div class="options-frame">
            <div class="option-header">
                <p>Estudios</p>
                <img @click="toggleOptions('studies')" :class="{ 'rotate-180deg': expandOptions.includes('studies')}"
                    src="../../assets/windows-icons/pullup.png" alt="pull-up-icon">
            </div>

            <div :class="{ 'options': true, 'hide': expandOptions.includes('studies') }">
                <div class="div-for-options">
                    <img src="../../assets/aux-icons/dev-icon.webp" alt="dev-icon">
                    <p>FP en Desarrollo web</p>
                </div>
                <div class="div-for-options">
                    <img src="../../assets/aux-icons/anchor-icon.webp" alt="anchor-icon">
                    <p>Grado en Náutica</p>
                </div>
            </div>
        </div>
        <div class="options-frame">
            <div class="option-header">
                <p>Experiencia</p>
                <img @click="toggleOptions('expirience')" :class="{ 'rotate-180deg': expandOptions.includes('expirience') }"
                    src="../../assets/windows-icons/pullup.png" alt="pull-up-icon">
            </div>
            <div :class="{ 'options': true, 'hide': expandOptions.includes('expirience') }">
                <div class="div-for-options">
                    <img src="../../assets/aux-icons/swyseo-las-palmas.webp" alt="seo-las-palmas-icon">
                    <p>Prácticas en SWYSEO </p>
                </div>
                <div class="div-for-options">
                    <img src="../../assets/aux-icons/fuel-icon.webp" alt="">
                    <p>J. de Turno en Terminal</p>
                </div>
            </div>
        </div>
        <div class="options-frame">
            <div class="option-header">
                <p>Desarrollo en: </p>
                <img @click="toggleOptions('dev')" :class="{ 'rotate-180deg': expandOptions.includes('dev')}"
                    src="../../assets/windows-icons/pullup.png" alt="pull-up-icon">
            </div>
            <div :class="{ 'options': true, 'hide':expandOptions.includes('dev') }">
                <div class="dev-lang">
                    <img src="../../assets/aux-icons/react(128x128).svg" alt="node-icon">
                    <img src="../../assets/aux-icons/vuejs(128x128).svg" alt="node-icon">
                    <img src="../../assets/aux-icons/nodejs(128x128).svg" alt="node-icon">
                    <img src="../../assets/aux-icons/php(128x128).svg" alt="node-icon">
                    <img src="../../assets/aux-icons/postgresql(128x128).svg" alt="node-icon">
                    <img src="../../assets/aux-icons/python(128x128).svg" alt="node-icon">
                    <img src="../../assets/aux-icons/typescript(128x128).svg" alt="node-icon">
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.lateral-nav {
    background: linear-gradient(70deg, #4259d5 20%, #7389fe 80%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding-top: 10px;
}

.option-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 20px;
    background: linear-gradient(to right, #f0f0ff, #a6b6ef);

    & p {
        font-family: 9px;
        font-weight: 700;
        color: #0c327d;
        padding-left: 15px;
    }

    & img {
        cursor: pointer;
        margin-inline: 5px;
        transition: .2s ease-in-out;
    }
}

.options-frame {
    background: linear-gradient(to left, #b1c4f8, #8daaf8);
    width: 180px;
    min-height: 20px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 20px 1fr;
    margin-bottom: 10px;
}

.div-for-options {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin-left: 15px;
    font-size: 12px;
    color: #0c327d;
    font-weight: 600;
    padding: 0;
    height: 30px;

    & img {
        height: 18px;
        width: 18px;
    }

    & p {
        margin-left: 10px;
    }
}

.dev-lang{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
    margin-left: 15px; 

    & img {
        height: 20px;
        width: 20px;
        margin: 5px;
    }
}

.rotate-180deg {
    transform: rotate(180deg);
}
</style>