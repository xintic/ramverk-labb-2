import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref(localStorage.getItem('theme') || 'dark')

  const isDarkMode = computed(() => theme.value === 'light')

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    document.body.dataset.bsTheme = theme.value

    localStorage.setItem('theme', theme.value)
  }

  document.body.dataset.bsTheme = theme.value

  return { theme, isDarkMode, toggleTheme }
})
