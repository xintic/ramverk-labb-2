<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { BButton } from 'bootstrap-vue-next'

const rounds = ref([])
const currentRoundIndex = ref(0)

const fetchMatches = async () => {
  try {
    const response = await axios.get('/mock-data/shlSummaries.json')
    const roundsArray = []

    response.data.summaries.forEach((event) => {
      const roundNumber = event.sport_event.sport_event_context.round.number
      let round = roundsArray.find((r) => r.round === roundNumber)
      if (!round) {
        round = { round: roundNumber, matches: [] }
        roundsArray.push(round)
      }
      round.matches.push(event)
    })

    rounds.value = roundsArray.sort((a, b) => a.round - b.round)
  } catch (error) {
    console.error('Error fetching match rounds:', error)
  }
}

const prevRound = () => {
  if (currentRoundIndex.value > 0) {
    currentRoundIndex.value--
  }
}

const nextRound = () => {
  if (currentRoundIndex.value < rounds.value.length - 1) {
    currentRoundIndex.value++
  }
}

const getScore = (score, dateString) => {
  if (score !== null) return score
  const date = new Date(dateString)
  return date.toLocaleDateString('sv-SE', { year: 'numeric', month: '2-digit', day: '2-digit' })
}

onMounted(fetchMatches)
</script>

<template>
  <div>
    <div class="header-container">
      <BButton @click="prevRound" :disabled="currentRoundIndex === 0" variant="secondary">
        <i class="bi bi-arrow-left"></i>
      </BButton>
      <h2>Omgång {{ rounds[currentRoundIndex]?.round }}</h2>
      <BButton
        @click="nextRound"
        :disabled="currentRoundIndex === rounds.length - 1"
        variant="secondary"
      >
        <i class="bi bi-arrow-right"></i>
      </BButton>
    </div>

    <div id="games">
      <div
        v-for="match in rounds[currentRoundIndex]?.matches"
        :key="match.sport_event.id"
        class="match"
      >
        <div class="team-home">
          <img
            :src="`src/images/shl/${match.sport_event.competitors[0].abbreviation}.svg`"
            class="competitor-logo"
          />
          <div class="competitor-name">{{ match.sport_event.competitors[0].name }}</div>
          <div class="competitor-score">
            {{ getScore(match.sport_event_status.home_score, match.sport_event.start_time) }}
          </div>
        </div>
        <div class="team-away">
          <img
            :src="`src/images/shl/${match.sport_event.competitors[1].abbreviation}.svg`"
            class="competitor-logo"
          />
          <div class="competitor-name">{{ match.sport_event.competitors[1].name }}</div>
          <div class="competitor-score">
            {{ getScore(match.sport_event_status.away_score, match.sport_event.start_time) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  display: flex;
}
.team-home,
.team-away {
  display: flex;
}
.competitor-logo {
  height: 1.5em;
}
</style>
