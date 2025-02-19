<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios'

const standings = ref([])
const sortDirection = ref({})
const isMobile = ref(window.innerWidth < 576)

const fetchStandings = async () => {
  try {
    const response = await axios.get('/mock-data/shlStandings.json')
    standings.value = response.data.standings[0].groups[0].standings
  } catch (error) {
    console.error('Error fetching standings:', error)
  }
}

const sortTable = (key) => {
  sortDirection.value[key] = !sortDirection.value[key]
  const ascending = sortDirection.value[key]

  standings.value.sort((a, b) => {
    const valA = a[key]
    const valB = b[key]

    return ascending ? valA - valB : valB - valA
  })
}

const handleResize = () => {
  isMobile.value = window.innerWidth < 576
}

onMounted(() => {
  fetchStandings()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <table id="table-standings" class="table table-striped table-sm">
    <thead>
      <tr>
        <th @click="sortTable('rank')">#</th>
        <th>Lag</th>
        <th @click="sortTable('played')">GP</th>
        <th @click="sortTable('win')">W</th>
        <th @click="sortTable('loss')">L</th>
        <th @click="sortTable('goals_for')">GF</th>
        <th @click="sortTable('goals_against')">GA</th>
        <th @click="sortTable('goals_diff')">GD</th>
        <th @click="sortTable('points')">Pts</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="team in standings" :key="team.rank">
        <td>
          <strong>{{ team.rank }}</strong>
        </td>
        <td>
          <img
            :src="`src/images/shl/${team.competitor.abbreviation}.svg`"
            :alt="team.competitor.name"
            class="team-logo"
          />
          <span v-if="!isMobile" class="team-name">{{ team.competitor.name }}</span>
          <span v-else class="team-abbreviation">{{ team.competitor.abbreviation }}</span>
        </td>
        <td class="center">{{ team.played }}</td>
        <td class="center">{{ team.win }}</td>
        <td class="center">{{ team.loss }}</td>
        <td class="center">{{ team.goals_for }}</td>
        <td class="center">{{ team.goals_against }}</td>
        <td class="center">{{ team.goals_diff }}</td>
        <td class="center">{{ team.points }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
#table-standings th:hover {
  cursor: pointer;
}
.team-logo {
  height: 2rem;
  width: 2rem;
  margin-right: 0.5rem;
}
@media (max-width: 576px) {
  .team-logo {
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 0.5rem;
  }
}
</style>
