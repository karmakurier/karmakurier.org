<template>
  <div
    class="btn-wrapper"
    :class="{primary: type==='is-primary', secondary: type==='is-secondary', success: type==='success', danger: type==='is-danger', disabled: disabled}"
    @click="$emit('click')"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    disabled: Boolean
  }
};
</script>

<style lang="scss" scoped>
@import "@/Branding.scss";

// Buttons
.btn-wrapper {
  display: inline-block;
  // min-width: 200px;
  border-radius: 8px;
  padding: 6px 12px 6px 12px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: all 0.16s ease;

  &.primary {
    border: 3px solid $primary;

    &:hover {
      color: white;
      background-color: $primary;
    }
  }

  &.secondary {
    border: 3px solid $secondary;

    &:hover {
      color: white;
      background-color: $secondary;
    }
  }

  &.danger {
    border: 3px solid $danger;

    &:hover {
      color: white;
      background-color: $danger;
    }
  }

  &.success {
    border: 3px solid $success;

    &:hover {
      color: white;
      background-color: $success;
    }
  }

  &.disabled {
    opacity: 0.64;
    cursor: not-allowed;
    pointer-events: none;
  }
}
</style>
