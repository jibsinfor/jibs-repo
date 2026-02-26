<script setup lang="ts">
import { folderList, InternetAppList, windowAppList, systemAppList } from '../data/startNavDatas';
import AllPrograms from './startnav-component/AllPrograms.vue';
import LeftFileDoc from './startnav-component/LeftFileDoc.vue';
import RightFileDoc from './startnav-component/RightFileDoc.vue';
import { openWindow } from '../utils/windowFrameFunc';

const props = defineProps<{
    open: boolean, 
    toggleFunct: Function
}>()

function openWindowFromNav(id: string){
    openWindow(id); 
    props.toggleFunct(); 
}


</script>

<template>
    <div :class="open ? 'show-nav' : 'hide'" v-on:mouseleave="props.toggleFunct()">
        <div class="header-nav">
            <img src="../assets/app-icons/user.png" alt="user-pic">
            <h2>JibsInfor</h2>
        </div>
        <div class="left-nav">
            <div v-for="item in InternetAppList">
                <LeftFileDoc :file-doc-data="item" @dbclick=" openWindowFromNav(item.winId)"/>
            </div>
            <div class="separator"></div>
            <div v-for="item in windowAppList">
                <LeftFileDoc :file-doc-data="item" @dbclick=" openWindowFromNav(item.winId)"/>
            </div>
            <AllPrograms/>
        </div>
        <div class="right-nav">
            <div v-for="item in folderList">
                <RightFileDoc :file-doc-data="item" @dbclick="openWindowFromNav(item.winId)"/>
            </div>
            <div class="separator"></div>
            <div v-for="item in systemAppList">
                <RightFileDoc :file-doc-data="item" @dbclick="openWindowFromNav(item.winId)"/>
            </div>
        </div>
        <div class="footer-nav">
            <button>
                <img src="../assets/windows-icons/log-out.png" alt="log-button">
                <p>Salir</p>
            </button>
            <button>
                <img src="../assets/windows-icons/turn-off(32x32).png" alt="turn-off-button">
                <p>Apagar equipo</p>
            </button>
        </div>
    </div>
</template>


<style>
.show-nav {
    position: absolute;
    height: 550px;
    width: 450px;
    bottom: var(--toolbar-height);
    background: var(--system-color);
    border-radius: 5px;
    box-shadow: 2px -1px 9px 0px #00000055;
    z-index: 1000;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 70px 1fr 1fr 1fr 40px;
    grid-template-areas:
        "header header"
        "left   right"
        "left   right"
        "left   right"
        "footer footer";
    gap: 1px;
    transition:height .2s; 
}

.header-nav {
    grid-area: header;
    background: var(--startnav-gradient);
    display: flex;
    flex-direction: row;
    align-items: center;


    & img {
        height: 50px;
        width: 50px;
        margin-inline: 5px;
        border: 2px solid rgba(255, 255, 255, 0.653);
        border-radius: 4px;
    }

    & h2 {
        font-weight: 400;
        margin: 0 0 0 5px;
    }
}

.left-nav {
    grid-area: left;
    background: rgb(240, 242, 246);
    padding: 5px;
    display: flex;
    flex-direction: column;

    &> :last-child {
        margin-top: auto;
    }
}

.right-nav {
    grid-area: right;
    background: rgb(194, 219, 244);
    padding: 5px;
    width: 94%;
}

.footer-nav {
    grid-area: footer;
    background: var(--startnav-gradient);
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    & button{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-right: 2px;
        height: 90%;
        padding: 0;
        padding-inline: 5px;
        background: transparent;
        border-radius: 2px;
        & img{
            scale: .8;

        }
        & p{
            margin: 0;
            padding: 0;
            font-size: 12px;
        }

    }
    & button:hover{
        background: #1468d5;
    }
    & button:focus{
        outline: none;
    }
}

.separator {
    height: 2px;
    margin: 2px;
    background: radial-gradient(circle, rgba(128, 128, 128, 0.345) 20%, transparent 80%);
}
</style>