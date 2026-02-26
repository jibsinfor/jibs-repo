import { ref, computed, onMounted, onUnmounted,type Ref } from 'vue'

export function useClock() {
  const hours: Ref<number> = ref(0)
  const minutes: Ref<number> = ref(0)

  function updateClock() {
    const now = new Date()
    hours.value = now.getHours()
    minutes.value = now.getMinutes()
  }

  let intervalId: number

  onMounted(() => {
    updateClock()
    intervalId = window.setInterval(updateClock, 60000)
  })

  onUnmounted(() => {
    clearInterval(intervalId)
  })

  const formattedTime = computed(() => ({
    hours: String(hours.value).padStart(2, '0'),
    min: String(minutes.value).padStart(2, '0')
  }))

  return { formattedTime }
}
