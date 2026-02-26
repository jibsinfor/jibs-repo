<script setup lang="ts">
import { ref } from 'vue';
const displayValue = ref('0');

const buttons: Array<{ label: string, type: string }> = [
    { label: 'DEL', type: 'btn-del' },
    { label: 'CL', type: 'btn-ac' },
    { label: '+', type: 'btn-add' },
    { label: '-', type: 'btn-sub' },
    { label: '7', type: 'btn-number' },
    { label: '8', type: 'btn-number' },
    { label: '9', type: 'btn-number' },
    { label: '/', type: 'btn-div' },
    { label: '4', type: 'btn-number' },
    { label: '5', type: 'btn-number' },
    { label: '6', type: 'btn-number' },
    { label: '*', type: 'btn-mul' },
    { label: '1', type: 'btn-number' },
    { label: '2', type: 'btn-number' },
    { label: '3', type: 'btn-number' },
    { label: '%', type: 'btn-porcent' },
    { label: '0', type: 'btn-zero' },
    { label: '.', type: 'btn-number' },
    { label: '=', type: 'btn-equal' }
];

function calculatorFunction(label: string) {
    if (displayValue.value.length >= 12) return;

    if (label === 'CL') {
        displayValue.value = '0';
        return;
    }

    if (label === 'DEL') {
        displayValue.value = displayValue.value.slice(0, -1) || '0';
        return;
    }

    if (label === '=') {
        try {
            let sanitizedExpression = displayValue.value.replace(/%/g, '/100');
            let result = eval(sanitizedExpression).toString();
            displayValue.value = result.length > 12 ? parseFloat(result).toExponential(6) : result;
        } catch {
            displayValue.value = 'Error';
        }
        return;
    }

    if (displayValue.value === '0' && label !== '.') {
        displayValue.value = label;
    } else {
        displayValue.value += label;
    }
}
</script>

<template>
    <section class="calculator-frame">
        <div class="calculator-content">
            <div class="calc-display">{{ displayValue }}</div>
            <button v-for="btn in buttons" :key="btn.label" class="btn" :class="btn.type"
                @click="calculatorFunction(btn.label)">
                {{ btn.label }}
            </button>
        </div>
    </section>
</template>

<style>
.calculator-frame {
    display: grid;
    position: relative;
    grid-template-rows: auto;
    grid-template-columns: 1fr;  
    background: #fff;
    border-radius: 5px;
    max-width: 280px;
}

.calculator-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto repeat(5, 1fr);
    gap: 6px;
    padding: 6px;
    background: #fff; 
    border-radius: 5px;
    height: max-content
}

.calc-display {
    grid-column: 1 / -1;
    background: #ffffff;
    color: rgb(0, 0, 0);
    font-size: 32px;
    text-align: right;
    padding-inline: 8px;
    border-radius: 4px;
    font-family: 'Digital', monospace;
}

.btn {
    font-size: 1.1rem;
    border: none;
    border-radius: 4px;
    background: #eee;
    cursor: pointer;
    color: #333;
    &:focus {
        outline: none;
    }

    &:active {
        transform: scale(0.95);
        background: #e2e2e2;
    }
}

.btn-add,
.btn-sub,
.btn-mul,
.btn-div,
.btn-porcent,
.btn-equal,
.btn-del,
.btn-ac {
    background: #f0ac00;
    &:active {
        background: #e49100;
    }
}

.btn-zero {
    grid-column: span 2;
}
</style>