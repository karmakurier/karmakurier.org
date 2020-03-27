<template>
  <div class="karma-wrapper">
    <img class="outter" src="@/assets/illustrations/badge/karmakurier_rewards_04.svg" alt />
    <img class="inner" src="@/assets/illustrations/badge/karmakurier_rewards_03.svg" alt />
    <div class="karma-number">{{karmaPoints}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      karmaPoints: 0
    };
  },
  methods: {
    animateValue(end, duration) {
      const self = this;
      const range = end - this.karmaPoints;
      let current = this.karmaPoints;
      const increment = end > this.karmaPoints ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration / range));
      const timer = setInterval(function() {
        current += increment;
        self.karmaPoints = current;
        if (current === end) {
          clearInterval(timer);
        }
      }, stepTime);
    }
  },
  mounted() {
    this.animateValue(36, 3000);
  }
};
</script>

<style lang="scss" scoped>
@import "@/Branding.scss";

.karma-wrapper {
  position: relative;
  width: 56px;
  height: 56px;

  .outter {
    position: absolute;
  }
  .inner {
    position: absolute;
  }
  .karma-number {
    top: 8px;
    left: 15px;
    height: 40%;
    width: 40%;
    border-radius: 100%;
    border: solid 1.5px $primary;
    position: absolute;
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    line-height: 24px;
  }
}
</style>
