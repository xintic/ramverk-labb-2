<script setup>
import { ref, onMounted, computed } from 'vue'
import { useThemeStore } from '@/stores/ThemeStore'
import axios from 'axios'

const themeStore = useThemeStore()
const buttonVariant = computed(() => (themeStore.isDarkMode ? 'secondary' : 'dark'))
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

const getScore = (score, dateString, type) => {
  if (score !== null && score !== undefined) return score

  if (!dateString) return 'Ej tillgängligt'

  const date = new Date(dateString)

  return type === 'date'
    ? date.toLocaleDateString('sv-SE', { year: 'numeric', month: '2-digit', day: '2-digit' })
    : date.toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' })
}

onMounted(fetchMatches)
</script>

<template>
  <div id="games">
    <div class="header-container">
      <BButton
        squared
        @click="prevRound"
        :disabled="currentRoundIndex === 0"
        :variant="buttonVariant"
      >
        <i class="bi bi-arrow-left"></i>
      </BButton>
      <h2>Omgång {{ rounds[currentRoundIndex]?.round }}</h2>
      <BButton
        squared
        @click="nextRound"
        :disabled="currentRoundIndex === rounds.length - 1"
        :variant="buttonVariant"
      >
        <i class="bi bi-arrow-right"></i>
      </BButton>
    </div>

    <div>
      <div
        v-for="match in rounds[currentRoundIndex]?.matches"
        :key="match.sport_event.id"
        class="match"
      >
        <div class="team">
          <div class="team-wrapper">
            <img
              :src="`src/assets/images/shl/${match.sport_event.competitors[0].abbreviation}.svg`"
              class="competitor-logo"
            />
            <div class="competitor-name">{{ match.sport_event.competitors[0].name }}</div>
          </div>
          <div class="competitor-score">
            {{
              getScore(match.sport_event_status?.home_score, match.sport_event.start_time, 'date')
            }}
          </div>
        </div>
        <div class="team">
          <div class="team-wrapper">
            <img
              :src="`src/assets/images/shl/${match.sport_event.competitors[1].abbreviation}.svg`"
              class="competitor-logo"
            />
            <div class="competitor-name">{{ match.sport_event.competitors[1].name }}</div>
          </div>
          <div class="competitor-score">
            {{
              getScore(match.sport_event_status?.away_score, match.sport_event.start_time, 'time')
            }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-container h2 {
  font-size: 1.5rem;
  font-weight: 700;
}
.match {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}
.team {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.team-wrapper {
  display: flex;
  align-items: center;
}
.competitor-logo {
  height: 2rem;
  width: 2rem;
  margin-right: 5px;
}
.competitor-socre {
  display: flex;
}
</style>
