<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

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
  <div>
    <h2>Topplistor</h2>
    <div class="leaders">
      <div v-for="(leaders, category) in leaderData" :key="category">
        <h3>{{ categoryLabels[category] }}</h3>
        <table>
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
        <BButton @click="showMore(category)" v-if="rowCounters[category] < maxRows">
          Visa fler
        </BButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
button {
  margin-bottom: 20px;
  padding: 8px 12px;
  cursor: pointer;
}
</style>
