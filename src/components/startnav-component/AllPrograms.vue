<script setup lang="ts"></script>

<template>
    <div class="all-program">
        <h4>Todos los Programas</h4>
        <img src="../../assets/windows-icons/all-programs.ico" alt="all-icon">
    </div>
</template>

<style>
    .all-program{
        height: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        user-select: none;
        &:hover {
            background: var(--system-color);
        }
        &:hover * {
            color: white;
        }
        & img {
            margin-inline: 3px;
        }
        & h4{
            font-size: 12px;
            color: black;
        }
    }
</style>