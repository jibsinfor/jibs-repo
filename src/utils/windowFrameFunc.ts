import { ref, markRaw, computed, onMounted, onUnmounted, type Ref, type CSSProperties } from 'vue'
import { windowContents } from "../data/windowContent";
import Properties from '../aplications/Properties.vue';
import type { proyectDatas } from '../main';

export function useSelectFrame() {
    const startX: Ref = ref(0)
    const startY: Ref = ref(0)
    const currentX: Ref = ref(0)
    const currentY: Ref = ref(0)

    const selectedFrame = ref(false)

    function startSelection(e: MouseEvent) {
        selectedFrame.value = true
        startX.value = e.clientX
        startY.value = e.clientY
        currentX.value = e.clientX
        currentY.value = e.clientY
    }

    function onMove(e: MouseEvent) {
        if (!selectedFrame.value) return
        currentX.value = e.clientX
        currentY.value = e.clientY
    }

    function stopSelection() {
        selectedFrame.value = false
    }

    const left = computed<number>(() => Math.min(startX.value, currentX.value))
    const top = computed<number>(() => Math.min(startY.value, currentY.value))
    const width = computed<number>(() => Math.abs(currentX.value - startX.value))
    const height = computed<number>(() => Math.abs(currentY.value - startY.value))

    onMounted(() => {
        window.addEventListener('mousemove', onMove)
        window.addEventListener('mouseup', stopSelection)
    })

    onUnmounted(() => {
        window.removeEventListener('mousemove', onMove)
        window.removeEventListener('mouseup', stopSelection)
    })

    const selectStyle = computed<CSSProperties>(() => ({
        left: `${left.value}px`,
        top: `${top.value}px`,
        width: `${width.value}px`,
        height: `${height.value}px`,
        position: 'absolute',
    }))

    return { selectedFrame, startSelection, selectStyle }
}
export function useWindowHeaderButtons() {
    const close = ref(false)
    const minimize = ref(false)
    const maximize = ref(false)
    const restore = ref(false)

    return {
        close,
        minimize,
        maximize,
        restore
    }
}
export async function openWindow(winId: string) {
    if (winId.includes("http")) {
        window.location.href = winId
        return;
    } else {
        windowContents.value.forEach(w => {
            (w.id === winId) ? w.selected = true : w.selected = false;
        });
        windowContents.value.filter(w => {
            if (w.id === winId) {
                w.isOpen = true;
            }
        })
    }
}
export function closeWindow(winId: string) {
    windowContents.value.filter(w => {
        if (w.id === winId) {
            w.isOpen = false;
            w.selected = false;
        }
    })
}
export function selectWindowFrame(id: string) {
    windowContents.value.forEach(element => {
        (element.id === id) ? element.selected = true : element.selected = false;
    });
}
export function toggleMinimizeWindow(id: string) {
    const win = windowContents.value.find(w => w.id === id);
    if (win?.windowState === 'minimized') {
        win.windowState = 'default';
    } else if (win) win.windowState = 'minimized';
}
export function newPropertiesWindow(fileData: proyectDatas | undefined, index: number) {
    if (!fileData) return;
    const newWinId = `properties-${Date.now()}`;
    windowContents.value.push({
        id: newWinId,
        x: 800 * index,
        y: 200 * index,
        isOpen: true,
        windowState: 'default',
        selected: false,
        showWinTools: false,
        directionText: null,
        showMenubar: false,
        menuBarOptions: null,
        componentToShow: markRaw(Properties),
        headerData: {
            headerName: "Propiedades",
            headerIcon: { url: "./src/assets/app-icons/properties-icon(16x16).png", alt: "properties-icon" },
            allowMaximize: false,
            isMaximized: false,
        },
        datas: fileData
    },)
}