<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const standings = ref([])
const sortDirection = ref({})

const fetchStandings = async () => {
  try {
    const response = await axios.get('/mock-data/haStandings.json')
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

onMounted(fetchStandings)
</script>

<template>
  <table id="table-standings">
    <thead>
      <tr>
        <th @click="sortTable('rank')">Rank</th>
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
            :src="`src/images/hockeyallsvenskan/${team.competitor.abbreviation}.svg`"
            :alt="team.competitor.name"
            class="team-logo"
          />
          <span class="team-name">{{ team.competitor.name }}</span>
          <span class="team-abbreviation">{{ team.competitor.abbreviation }}</span>
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
