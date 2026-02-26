<script setup lang="ts">
</script>

<template>
    <div class="window-tool">
        <div class="menu-icons">
            <div class="icon-div  arrow-down">
                <img src="../../assets/windows-icons/back.png" alt="icon-back">
                atras
            </div>
            <div class="icon-div arrow-down">
                <img src="../../assets/windows-icons/forward.png" alt="icon-fwd">
            </div>
            <div class="icon-div">
                <img src="../../assets/windows-icons/up.png" alt="icon-up">
            </div>
            <div class="v-separator"></div>
            <div class="icon-div">
                <img src="../../assets/windows-icons/Search(32x32).png" alt="search-icon">
            </div>
            <div class="icon-div ">
                <img src="../../assets/windows-icons/folder(32x32).png" alt="folder-icon">
            </div>
            <div class="v-separator"></div>
            <div class="icon-div arrow-down">
                <img src="../../assets/windows-icons/doc-view(32x32).png" alt="doc-view-icon">
            </div>
        </div>
    </div>
</template>

<style>
.window-tool {
    display: flex;
    flex-direction: column;
    margin-inline: 2px;
    background: beige;
    max-height: 40px;
}

.menu-icons {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.icon-div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75%;
    width: auto;
    margin-inline: 2px;
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.836);
    user-select: none;

    & img {
        margin: 3px;
        scale: 0.9
    }

    &:hover {
        outline: 1px solid rgb(196, 196, 178);
    }
    &:active{
       animation: click-but 0.3s ease-in-out;
    }
}

.arrow-down::after {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid black;
    margin: 4px;
}

.window-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 24px;

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

.v-separator {
    width: 1px;
    height: 80%;
    background: rgb(196, 196, 178);
    margin-inline: 3px;
}
@keyframes click-but {
    0%{
        transform: scale(.9);
    }
    100%{
        transform: scale(1);
    }
}
</style>
