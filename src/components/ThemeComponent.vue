<template>
  <div class="form-check form-switch">
    <input
      class="form-check-input p-2 me-3"
      type="checkbox"
      role="switch"
      v-model="isDarkMode"
      @change="toggleTheme"
    />
    <i :class="themeIcon"></i>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useThemeStore } from '@/stores/ThemeStore'

const themeStore = useThemeStore()

const isDarkMode = computed({
  get: () => themeStore.isDarkMode,
  set: () => themeStore.toggleTheme(),
})

const themeIcon = computed(() =>
  themeStore.theme === 'dark' ? 'bi bi-moon-stars-fill' : 'bi bi-sun-fill',
)

onMounted(() => {
  document.body.dataset.bsTheme = themeStore.theme
})
</script>

<style scoped>
.bi {
  color: white;
}
</style>
