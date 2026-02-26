import { ref, onMounted, onUnmounted, computed, type Ref, type CSSProperties } from "vue";

export function useDrag() {
  const x: Ref = ref(0)
  const y: Ref = ref(0)
  const dragging: Ref = ref(false)

  let offsetX: number = 0
  let offsetY: number = 0

  function startDrag(e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault(); 
    dragging.value = true
    offsetX = e.clientX - x.value
    offsetY = e.clientY - y.value
  }

  function onMove(e: MouseEvent) {
    e.stopPropagation();
    if (!dragging.value) return
    x.value = e.clientX - offsetX
    y.value = e.clientY - offsetY
  }

  function stopDrag() {
    dragging.value = false
  }


  onMounted(() => {
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', stopDrag)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', onMove)
    window.removeEventListener('mouseup', stopDrag)
  })

  const dragStyle = computed<CSSProperties>(() => ({
    transform: `translate(${x.value}px, ${y.value}px)`
  }))
  return { dragStyle, dragging, startDrag }
}

