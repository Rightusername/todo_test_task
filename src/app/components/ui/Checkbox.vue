<template>
  <label class="app-checkbox-comp">
    <input type="checkbox" v-bind="{ checked: value }" @change="onchange" />
    <div class="box" :class="{ checked: value }"></div>
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
  components: {},
  props: ['value'],

  data() {
    return {};
  },
  created() {},

  methods: {
    onchange(e) {
      if (this.value) {
        this.$emit('input', false);
      } else {
        this.$emit('input', true);
      }
    },

    toggle(e) {
      if (this.value) {
        this.$emit('input', false);
      } else {
        this.$emit('input', true);
      }
    },
  },
};
</script>

<style lang="scss" scoped>

.app-checkbox-comp {
  width: 18px;
  height: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #efefef;
  flex-shrink: 0;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .box {
    width: 12px;
    height: 12px;
    background: #37b7fa;
    transform: scale(0);
    opacity: 0;
    transition: all 0.1s ease-in;

    &.checked {
      opacity: 1;
      transform: scale(1);
    }
  }
}
</style>
