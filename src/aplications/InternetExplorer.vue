<script setup lang="ts">
import { ref } from 'vue';
import type { windowFrame } from '../main';

const props = defineProps<{
    component: windowFrame
}>()

const optSelected = ref<string>('web');
const inputValue = ref<string>("");
const googleLogo =[
        {color:'#1e59d0', value:'G'},
        {color:'#c61810', value:'o'},
        {color:'#efba29', value:'o'},
        {color:'#1e59d0', value:'g'},
        {color:'#30aa49', value:'l'},
        {color:'#c61810', value:'e'}

    ]
const searchOptions = [
    { label: 'Web', value: 'web' },
    { label: 'Imagenes', value: 'image' },
    { label: 'Blogs', value: 'blog' },
    { label: 'Directorios', value: 'direction' },
    { label: 'Noticias', value: 'news' }
];

function handlerSearchInput(event: Event){
    const value = (event.target as HTMLInputElement).value; 
    inputValue.value = value;
}
function linkToSearch (toSearch: string){
    const link ={
        web: `https://www.google.com/search?q=${toSearch}`, 
        image:`https://www.google.com/search?q=${toSearch}&tbm=isch`, 
        blog:`https://www.google.com/search?q=${toSearch}&tbm=blg`, 
        direction:`https://www.google.com/search?q=${toSearch}&tbm=shop`, 
        news:`https://www.google.com/search?q=${toSearch}&tbm=nws`
    }
    return link[optSelected.value as keyof typeof link]; 
}
function setSearchAnchor(){
    const searchinput = encodeURIComponent(inputValue.value); 
    window.open(linkToSearch(searchinput), '_blank'); 
}

function setSearchOption(opt: string) {
    optSelected.value = opt
    return opt;
}
</script>

<template>
    <section class="google-frame">
        <div class="window-nav">
            <p>Dirección:</p>
            <input type="text" :value="`${props.component.directionText}${inputValue}`">
            <button class="go-button" @click="setSearchAnchor()">
                <img src="../assets/windows-icons/go-arrow.png" alt="go-icon">
                <p>Ir</p>
            </button>
        </div>
        <div class="google-content">
            <div class="google-name">
                <span v-for="letter in googleLogo" :style="{color:letter.color}">{{ letter.value }}</span>
                <span>TM</span>
            </div>
            <div class="google-grid">
                <nav class="search-opt">
                    <li v-for="opt in searchOptions" :key="opt.value" :class="{ 'opt-selected': optSelected === opt.value }"
                        @click="setSearchOption(opt.value)">
                        {{ opt.label }}
                    </li>
                </nav>
                <div class="input-div">
                    <div>
                        <input class="search-input" type="text" @input="handlerSearchInput">
                        <div>
                            <button @click="setSearchAnchor">Buscar</button>
                            <button target="_blank" href="https://doodles.google/">Voy a tener suerte</button>
                        </div>
                    </div>
                    <nav>
                        <li><a target="_blank" href="https://www.google.es/advanced_search">Busqueda avanzada</a></li>
                        <li><a target="_blank" href="https://www.google.com.au/preferences?hl=en">Preferencias</a></li>
                        <li><a target="_blank"
                                href="https://support.google.com/accounts/answer/32047?hl=es&co=GENIE.Platform%3DDesktop"></a>idioma
                        </li>
                    </nav>
                </div>
                <div class="google-links">
                    <a target="_blank"
                        href="https://business.google.com/es/google-ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">Advertise
                        with Us</a>-
                    <a target="_blank"
                        href="https://business.google.com/es/business-profile/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1">Business
                        Solutions</a>-
                    <a target="_blank" href="https://www.google.com/search/howsearchworks/?fg=1">Services & Tools</a>-
                    <a target="_blank"
                        href="https://www.google.com/about/careers/applications/jobs/results#!t=jo&jid=127025001&"> Jobs
                        Press & Help</a>
                </div>
                <div class="message-div">&#169;2003 Google - Searching 2.003.050.015 web pages</div>

            </div>
        </div>
    </section>
</template>

<style>
.google-frame {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.google-content {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.google-name {
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: black;
    position: relative;

    & span {
        font-size: 110px;
        text-shadow: 1px 4px 7px #000000a0;

        &:last-child {
            display: inline;
            font-size: 10px;
            color: black;
            position: absolute;
            top: 55px;
        }
    }

}

.google-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
    width: 800px;
    gap: 20px;
}

.search-opt {
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: center;
    margin-top: 20px;
    border-bottom: 1px solid var(--google-font-color);

    & li {
        list-style: none;
        margin-inline: 20px;
        padding-inline: 16px;
        background: rgb(218, 218, 218);
        color: var(--google-font-color);

        &:hover,
        &::selection {
            cursor: pointer;
            background: var(--google-font-color);
            color: white;
        }

        &.opt-selected {
            background: var(--google-font-color);
            color: white;
            cursor: pointer;
        }
    }
}

.search-input {
    width: 550px;
    height: auto;
    font-size: 16px;
    background: white;
    color-scheme: light;
    appearance: none;
    -webkit-appearance: none;
    border-radius: 0;
    border: 1px solid black;
    align-self: center;
    padding: 3px;
    padding-inline: 10px;

    &:focus {
        outline: none;
    }
}

.input-div {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-around;

    & div {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 75%;

        & div {
            display: flex;
            width: 100%;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            & button {
                padding-inline: 10px;
                margin: 1px;
                border-radius: 0px;
                height: auto;
                font-size: 12px;
                font-weight: 400;
                background: rgb(218, 218, 218);
                border: 1px solid gray;
                color: black;
            }
        }
    }

    & nav {
        width: 20%;
        font-size: 12px;
        color: #3366cc;
        text-align: start;
        text-decoration: underline;

        & li:hover {
            color: var(--google-font-hover);
            font-weight: 600;
        }
    }
}

.google-links {
    color: var(--google-font-color);
    margin-top: 50px;

    & a {
        margin: 5px;
        color: var(--google-font-color);
        text-decoration: underline;
        font-size: 14px;

        &:hover {
            color: var(--google-font-hover);
            font-weight: 600;
        }
    }
}

.message-div {
    color: black;
    font-size: 10px;
}

.window-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 24px;
    min-height: 24px;
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
    &:focus{
        outline: none;
    }
    &:hover{
        outline: none;
        border: 1px solid rgb(196, 196, 178);
    }
    &:active{
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