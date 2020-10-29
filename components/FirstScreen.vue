<template>
  <header class="section">
    <div class="container">
      <div class="header_textline header_textline__up">[etdsqlbpfqyt</div>
      <div class="header_textline header_textline__up2">[etdsqlbpfqyt</div>
      <div class="header_textline header_textline__down">[etdsqlbpfqyt</div>
      <div class="header_textline header_textline__down2">[etdsqlbpfqyt</div>
      <div class="header_textline header_textline__up">[etdsqlbpfqyt</div>
      <div class="header_textline header_textline__up2">[etdsqlbpfqyt</div>
      <div class="header_textline header_textline__down">[etdsqlbpfqyt</div>
      <div class="header_textline header_textline__down2">[etdsqlbpfqyt</div>
      <div class="header_v-line header_v-line__left"></div>
      <div class="header_v-line header_v-line__middleleft"></div>
      <div class="header_v-line header_v-line__middleright"></div>
      <div class="header_v-line header_v-line__right"></div>
      <div class="menutop">
        <div class="logo" :class="{ slideInLeftLL: config.animation }">
          <span class="logo_letters">S</span>
          <span class="logo_letters logo_letters__b">d</span>
          <div class="logo_stroke">
            <span class="logo_dash"></span>
            <span class="logo_dash"></span>
          </div>
          <span class="logo_name">Владислав</span>
          <span class="logo_surname">Булгаков</span>
        </div>
        <nuxt-link
          class="portfolio-word"
          :class="{ slideInLeftPL: config.animation }"
          to="/portfolio"
        >Портфолио</nuxt-link>
        <a
          class="email"
          :class="{ slideInLeftEL: config.animation }"
          href="mailto:"
          rel="external"
        >info@stick-design.ru</a>
        <a
          href="tel:+79187509500"
          :class="{ slideInRightT: config.animation }"
          class="tel"
        >+7 (918) 750-95-00</a>
        <div class="starter" :class="{ slideInRightS: config.animation }" @click="toggleModal">
          Начать работу
          <span class="line-1"></span>
          <span class="line-2"></span>
          <span class="line-3"></span>
          <span class="line-4"></span>
        </div>
        <div class="hamburger js-MenuItem" :class="{ slideInRightH: config.animation }" @click="toggleMenu">
          <span class="hamburger_line hamburger_line__up"></span>
          <span class="hamburger_line hamburger_line__middleUp"></span>
          <span class="hamburger_line hamburger_line__middleBottom"></span>
          <span class="hamburger_line hamburger_line__bottom"></span>
        </div>
      </div>
      <div class="intro-portfolio-word-wrap">
        <nuxt-link to="/portfolio" class="intro-portfolio-word">Портфолио</nuxt-link>
      </div>
      <div class="starter-mobile-wrap">
        <div class="starter starter-mobile" @click="toggleModal">
          Начать работу
          <span class="line-1"></span>
          <span class="line-2"></span>
          <span class="line-3"></span>
          <span class="line-4"></span>
        </div>
      </div>
      <div class="socials" :class="{ slideInUpS: config.animation }">
        <div class="socials_icons">
          <a href="https://t.me/stick_qwe">
            <svg-icon name="telegram" height="14px" width="14px" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=79187509500">
            <svg-icon name="whatsapp" height="14px" width="14px" />
          </a>
          <a href="https://vk.com/id383968">
            <svg-icon name="vk" height="14px" width="14px" />
          </a>
          <a href="skype:stick_25?chat">
            <svg-icon name="skype" height="14px" width="14px" />
          </a>
        </div>
        <div class="socials_text">Давайте знакомиться</div>
      </div>
      <div class="intro">
        <h1>
          <span class="design">Stick</span>
          <span class="bureau">Design</span>
          <div class="intro_text">Владислав&nbsp;Булгаков</div>
        </h1>
      </div>
      <div class="menuright-wrap">
        <div class="menuright-wrap2">
          <div class="menuright" :class="{ slideInDownM: config.animation, bw: config.menuBlack }">
            <div  v-for="menu in menuFullpage" :key="menu.index"  class="menuright_item" @click="config.fullpageApi.moveTo(menu.number)" :class="{ active: config.menuIndex == menu.index }" >
              <span class="menuright_number" >
                <span class="zero">0</span>
                <span class="digit">
                  <div class="digit_square"></div>
                  <span class="digit_number">{{ menu.number }}</span>
                </span>
              </span>
              <span class="menuright_stroke"></span>
            </div>
            <div class="menuright_pointer">
              <span class="pointer"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="section-footer">
        <div class="sloganwrap">
          <div class="slogan" :class="{ slideInLeft: config.animation }">
            <div class="slogan_title">Воплотим с нуля</div>
            <div class="slogan_text">Ваши идеи + мои решения = готовый продукт</div>
          </div>
        </div>
        <div class="triangle-coral" @click="config.fullpageApi.moveSectionDown()">
          <div></div>
          <svg-icon
            name="trigle_top"
            class="triangle-coral_item triangle-coral_item__top"
            width="21px"
            height="19px"
          />
          <svg-icon
            name="trigle_middle"
            class="triangle-coral_item triangle-coral_item__middle"
            width="17px"
            height="15px"
          />
          <svg-icon
            name="trigle_bottom"
            class="triangle-coral_item triangle-coral_item__bottom"
            width="12px"
            height="10px"
          />
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { mapMutations } from 'vuex'

import Menu from "~/components/Menu";
export default {
  name: "FirstScreen",
  props: ["config"],
  components: {
    Menu
  },
  data() {
    return {
      text: null,
      split: null,
      open: false,
      menuFullpage: [
        {index: 0, number: 1 },
        {index: 1, number: 2 },
        {index: 2, number: 3 },
        {index: 3, number: 4 },
        {index: 4, number: 5 },
      ]
    };
  },
  methods: {
    random(min, max) {
      return Math.random() * (max - min) + min;
    },
    splitAnm() {
      const split = new SplitText('stick')
      split.chars.each(function(){
        TweenMax.from((this), 2.5, {
          opacity: 0,
          x: this.random(-500, 500),
          y: this.random(-500, 500),
          z: this.random(-500, 500),
          scale: .05,
          delay: -2.4,
          yoyo: true,
          repeat: 2,
          repeatDelay: 0
        });
      });
    },
    ...mapMutations({
      toggleMenu: 'app/toggleMenu',
      toggleModal: 'app/toggleModal'
    })
  }
};
</script>
<style>

</style>
