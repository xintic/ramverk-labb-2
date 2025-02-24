<script setup>
import { ref, onMounted, computed } from 'vue'
import { useThemeStore } from '@/stores/ThemeStore'
import axios from 'axios'

const themeStore = useThemeStore()
const buttonVariant = computed(() => (themeStore.isDarkMode ? 'secondary' : 'dark'))
const leaderData = ref({})
const categoryLabels = {
  points: 'Poäng',
  goals: 'Mål',
  assists: 'Assist',
}

const rowCounters = ref({
  points: 10,
  goals: 10,
  assists: 10,
})
const maxRows = 30

const fetchLeaders = async () => {
  try {
    const response = await axios.get('/mock-data/shlLeaders.json')
    const data = response.data.lists

    leaderData.value = data.reduce((acc, list) => {
      acc[list.type] = list.leaders.flatMap((leader) =>
        leader.players.map((player) => ({
          rank: leader.rank,
          name: player.name,
          team: player.competitors?.[0]?.abbreviation || 'Okänt',
          value:
            player.competitors?.[0]?.datapoints?.find((dp) => dp.type === list.type)?.value || 0,
        })),
      )
      return acc
    }, {})
  } catch (error) {
    console.error('Error fetching leaders:', error)
  }
}

const showMore = (category) => {
  if (rowCounters.value[category] < maxRows) {
    rowCounters.value[category] += 10
  }
}

onMounted(fetchLeaders)
</script>

<template>
  <BContainer class="bv-example-row">
    <BRow>
      <BCol v-for="(leaders, category) in leaderData" :key="category" cols="12" lg="4">
        <div class="table-leaders">
          <h3>{{ categoryLabels[category] }}</h3>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Spelare</th>
                <th>Lag</th>
                <th>{{ categoryLabels[category] }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(leader, index) in leaders.slice(0, rowCounters[category])" :key="index">
                <td>{{ leader.rank }}</td>
                <td>{{ leader.name }}</td>
                <td>{{ leader.team }}</td>
                <td>{{ leader.value }}</td>
              </tr>
            </tbody>
          </table>
          <div class="d-grid gap-2">
            <BButton
              squared
              :variant="buttonVariant"
              @click="showMore(category)"
              v-if="rowCounters[category] < maxRows"
            >
              Visa fler
              <i class="bi bi-chevron-down"></i>
            </BButton>
          </div>
        </div>
      </BCol>
    </BRow>
  </BContainer>
</template>

<style scoped>
.leaders {
  display: flex;
  justify-content: space-evenly;
}
</style>
