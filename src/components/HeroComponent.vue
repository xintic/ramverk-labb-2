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
      <BCol cols="6" lg="3" class="subtitle-container">
        <div class="subtitle">
          <div class="sub-title">
            <span>
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
      <BCol cols="6" lg="3" class="subtitle-container">
        <div class="subtitle">
          <div class="sub-title">
            <span>
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
      <BCol cols="6" lg="3" class="subtitle-container">
        <div class="subtitle">
          <div class="sub-title">
            <span>
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
      <BCol cols="6" lg="3" class="subtitle-container">
        <div class="subtitle">
          <div class="sub-title">
            <span>
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
  text-align: center;
  margin-bottom: 5rem;
}
.subtitle-container {
  border-left-width: 1px;
  border-top-width: 0px;
  border-bottom-width: 0px;
  border-right-width: 0px;
  border-style: solid;
  border-left-color: rgba(34, 37, 41, 0.75);
}
.subtitle-container:first-child {
  border: none;
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
@media (max-width: 576px) {
  .subtitle-container:nth-child(odd) {
    border: none;
  }
}
</style>
