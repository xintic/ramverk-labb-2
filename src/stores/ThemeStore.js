import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref(localStorage.getItem('theme') || 'light')

  const isDarkMode = computed(() => theme.value === 'dark')

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    document.body.dataset.bsTheme = theme.value
    localStorage.setItem('theme', theme.value)
  }

  // Se till att temat sätts korrekt vid sidladdning
  document.body.dataset.bsTheme = theme.value

  return { theme, isDarkMode, toggleTheme }
})
