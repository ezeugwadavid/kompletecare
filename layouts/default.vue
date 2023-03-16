<template>
  <div class="">

    <div class="mobile">
      <div v-if="!shownav" @click="() => toggleNav()" class="nav-icon">
        <span class="material-symbols-outlined">
          menu
        </span>
      </div>

      <div class="row no-gutters">
        <div v-if="shownav" class="col-xs-1 col-sm-3">
          <div @click="() => toggleNav()" class="cancel">
            X
          </div>
          <Sidenav />
        </div>
        <div v-if="!shownav" class="col-xs-2 main-content col-sm-9">
          <AppBody />
        </div>

      </div>
    </div>

    <div class="destop">
      <div class="row no-gutters">
        <div class="col-xs-1 col-sm-3">
          <Sidenav />
        </div>
        <div class="col-xs-2 main-content col-sm-9">
          <AppBody />
        </div>


      </div>

    </div>

  </div>
</template>

<script>
import AppBody from '~/components/body.vue'
import Sidenav from '~/components/sidenav.vue'

export default {
  name: 'default',
  components: {
    AppBody,
    Sidenav
  },

  data() {
    return {
      shownav: false,
      mobileWidth: false
    };
  },

  mounted() {
    if (window.innerWidth <= 800) {
      this.mobileWidth = true;

    }
  },

  methods: {
    toggleNav() {
      this.shownav = !this.shownav;
    },


  }
}
</script>
