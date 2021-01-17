<template>
  <transition name="slide-fade" mode="out-in">
    <div class="hamburgerMenu" v-show="menu">
      <div class="hamburgerMenu_wrap">
        <div class="hamburgerMenu_top-wrap js-MenuItem" style="transform: matrix(1, 0, 0, 1, 0, 0);">
          <div class="hamburgerMenu_top">
            <div class="container">
              <a class="logo hamburgerMenu_logo js-MenuItem" href="#firstPage">
                <span class="logo_letters">s</span>
                <span class="logo_letters logo_letters__b">d</span>
                <div class="logo_stroke">
                  <span class="logo_dash"></span>
                  <span class="logo_dash"></span>
                </div>
                <span class="logo_name">Владислав</span>
                <span class="logo_surname">Булгаков</span>
              </a>
              <div class="hamburgerMenu-icon hamburger-offer js-MenuItem" @click="toggleMenu">
                <span class="hamburger_line hamburger_line__up"></span>
                <span class="hamburger_line hamburger_line__middleUp"></span>
                <span class="hamburger_line hamburger_line__middleBottom"></span>
                <span class="hamburger_line hamburger_line__bottom"></span>
              </div>
            </div>
          </div>
        </div>

        <ul class="hamburgerMenu_list">
          <li v-for="menu in menuList" :key="menu.index" class="hamburgerMenu_item hamburgerMenu__item1 js-MenuItem clearfix"  @click="location(menu.number)">
            <svg class="hamburgerMenu_triangle" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <polygon points="0,0 13,7.5 0,15"/>
            </svg>
            <p>{{ menu.name }}</p>
          </li>
        </ul>
        <div class="hamburgerMenu_bottom js-MenuItem" style="transform: matrix(1, 0, 0, 1, 0, 0);"></div>
      </div>
    </div>
  </transition>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: "Menu",
  props: ["config"],
  computed: {
    ...mapGetters({
      menu: 'app/menu',
    }),
  },
  data() {
    return {
      menuList: [
        {index: 0, number: 1, name: this.$t('menu.home') },
        {index: 1, number: 2, name: this.$t('menu.basic') },
        {index: 2, number: 3, name: this.$t('menu.portfolio') },
        {index: 3, number: 4, name: this.$t('menu.activities') },
        {index: 4, number: 5, name: this.$t('menu.contacts') },
      ]
    }
  },
  methods: {
    ...mapMutations({
      toggleMenu: 'app/toggleMenu'
    }),
    location(index) {
      this.toggleMenu()
      this.config.fullpageApi.moveTo(index)
    }
  }
}

</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
