<template>
  <div class="app-root dark">
    <router-view />
    <modals-container />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {},
  data() {
    return {
      isGrab: false,
      isLoaded: false,
    };
  },
  computed: {
    styleProp() {
      return {};
    },
  },
  updated() {
  },
  created() {},

  mounted() {},

  methods: {

  },
};
</script>

<style lang="scss">
@import '~styles/style.scss';
@import '~styles/libs/vmodal.scss';
</style>

<style lang="scss" scoped>
@import '~styles/fonts/didactgothic.scss';

.app-root {
  height: 100%;
  min-width: 1024px;
  font-family: 'Didact Gothic';
  // background: url('./../assets/images/bg.png');
  background: var(--background-darken-color);
}
</style>
