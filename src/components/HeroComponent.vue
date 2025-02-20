<script setup>
defineProps({
  title: {
    type: String,
    default: 'TEST',
  },
  number_1: {
    type: Number,
    default: 0,
  },
  number_2: {
    type: Number,
    default: 0,
  },
  number_3: {
    type: Number,
    default: 0,
  },
  number_4: {
    type: Number,
    default: 0,
  },
  subtitle_1: {
    type: String,
    default: 'TEST',
  },
  subtitle_2: {
    type: String,
    default: 'TEST',
  },
  subtitle_3: {
    type: String,
    default: 'TEST',
  },
  subtitle_4: {
    type: String,
    default: 'TEST',
  },
})
</script>

<template>
  <BContainer class="bv-example-row">
    <BRow>
      <div class="title">
        <h1>
          {{ title }}
        </h1>
      </div>
    </BRow>
    <BRow>
      <BCol cols="6" lg="3">
        <div class="subtitle">
          <div>
            <span class="sub-title">
              {{ number_1 }}
            </span>
          </div>
          <div class="sub-subtitle">
            <span>
              {{ subtitle_1 }}
            </span>
          </div>
        </div>
      </BCol>
      <BCol cols="6" lg="3">
        <div class="subtitle">
          <div>
            <span class="sub-title">
              {{ number_2 }}
            </span>
          </div>
          <div class="sub-subtitle">
            <span>
              {{ subtitle_2 }}
            </span>
          </div>
        </div>
      </BCol>
      <BCol cols="6" lg="3">
        <div class="subtitle">
          <div>
            <span class="sub-title">
              {{ number_3 }}
            </span>
          </div>
          <div class="sub-subtitle">
            <span>
              {{ subtitle_3 }}
            </span>
          </div>
        </div>
      </BCol>
      <BCol cols="6" lg="3">
        <div class="subtitle">
          <div>
            <span class="sub-title">
              {{ number_4 }}
            </span>
          </div>
          <div class="sub-subtitle">
            <span>
              {{ subtitle_4 }}
            </span>
          </div>
        </div>
      </BCol>
    </BRow>
  </BContainer>
</template>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
}
.subtitle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sub-title {
  font-size: 3rem;
}
</style>
