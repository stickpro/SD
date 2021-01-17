<template>
  <section id="start" class="section">
    <div class="start">
      <div class="container">
        <div class="start_word start_word__top">beg</div>
        <div class="start-top">
          <div class="socials" :class="{ startSocialsUp: config.animation }">
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

            <div class="socials_text">{{ $t('footer.lets') }} {{ $t('footer.meet') }}</div>
          </div>
          <div class="hamburger hamburger-start" :class="{ startHamburgerDown: config.animation }" @click="toggleMenu">
            <span class="hamburger_line hamburger_line__up"></span>
            <span class="hamburger_line hamburger_line__middleUp"></span>
            <span class="hamburger_line hamburger_line__middleBottom"></span>
            <span class="hamburger_line hamburger_line__bottom"></span>
          </div>
        </div>
        <div class="start_wrap-top">
          <div class="headline">
            <svg class="start_headline" @mouseenter="goToggle" :class="{ go: config.goAnimation }" width="435" height="170">
              <text
                id="textStrokeTop"
                text-anchor="start"
                x="0"
                y="74"
                textLength="417"
                lengthAdjust="spacing"
                class="text text-stroke"
                clip-path="url(#text1)"
              >{{ $t('footer.lets') }}</text>
              <text
                id="textStrokeBottom"
                text-anchor="start"
                x="0"
                y="168"
                textLength="368"
                lengthAdjust="spacing"
                class="text text-stroke"
                clip-path="url(#text2)"
              >{{ $t('footer.start') }}</text>

              <text
                id="textStrokeTop2"
                text-anchor="start"
                x="0"
                y="74"
                textLength="417"
                lengthAdjust="spacing"
                class="text text-stroke text-stroke-2"
                clip-path="url(#text1)"
              >{{ $t('footer.lets') }}</text>
              <text
                id="textStrokeBottom2"
                text-anchor="start"
                x="0"
                y="168"
                textLength="368"
                lengthAdjust="spacing"
                class="text text-stroke text-stroke-2"
                clip-path="url(#text2)"
              >{{ $t('footer.start') }}</text>

              <defs>
                <clipPath id="text1">
                  <text
                    text-anchor="start"
                    x="0"
                    y="74"
                    class="text"
                    textLength="417"
                    lengthAdjust="spacing"
                  >{{ $t('footer.lets') }}</text>
                </clipPath>
                <clipPath id="text2">
                  <text
                    text-anchor="start"
                    x="0"
                    y="168"
                    class="text"
                    textLength="368"
                    lengthAdjust="spacing"
                  >{{ $t('footer.start') }}</text>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="triangle-coral">
            <svg
              class="triangle-coral_item triangle-coral_item__top"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="21px"
              height="19px"
            >
              <path
                fill-rule="evenodd"
                fill="rgb(253, 120, 120)"
                d="M0.000,-0.001 L21.000,-0.001 L10.500,18.999 L0.000,-0.001 M16.811,2.530 C12.780,2.530 8.219,2.530 4.188,2.530 C6.208,6.184 8.488,10.311 10.500,13.951 C12.511,10.311 14.792,6.184 16.811,2.530 "
              />
            </svg>
            <svg
              class="triangle-coral_item triangle-coral_item__middle"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="17px"
              height="15px"
            >
              <path
                fill-rule="evenodd"
                opacity="0.702"
                fill="rgb(253, 120, 120)"
                d="M0.000,-0.001 L17.000,-0.001 L8.500,14.999 L0.000,-0.001 M13.609,1.998 C10.346,1.998 6.654,1.998 3.391,1.998 C5.025,4.882 6.872,8.140 8.500,11.013 C10.128,8.140 11.974,4.882 13.609,1.998 "
              />
            </svg>
            <svg
              class="triangle-coral_item triangle-coral_item__bottom"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="12px"
              height="10px"
            >
              <path
                fill-rule="evenodd"
                opacity="0.4"
                fill="rgb(253, 120, 120)"
                d="M-0.000,-0.001 L12.000,-0.001 L6.000,9.999 L-0.000,-0.001 M9.606,1.331 C7.303,1.331 4.697,1.331 2.393,1.331 C3.547,3.254 4.850,5.427 6.000,7.342 C7.149,5.427 8.452,3.254 9.606,1.331 "
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="start">
      <div class="container">
        <div class="start_word start_word__bottom">
          <div></div>
          <p>in</p>
        </div>
        <div class="start-line" :class="{ startSocialsUp: config.animation }"></div>
        <div class="start_wrap-bottom">
          <div class="start_buttons">
            <div class="start_order" @click="toggleModal">{{ $t('app.submit') }}</div>
          </div>
          <div class="start_contacts">
            <a href="tel:+79187509500" class="tel">+7 (918) 750-95-00</a>
            <a class="email" href="mailto:" rel="external">info@stick-design.ru</a>
          </div>
        </div>
        <div class="start-footer">
          <div class="logo" :class="{ startLogoRight: config.animation }">
            <span class="logo_letters">s</span>
            <span class="logo_letters logo_letters__b">d</span>
            <div class="logo_stroke">
              <span class="logo_dash"></span>
              <span class="logo_dash"></span>
            </div>
            <span class="logo_name">{{ $t('me.name') }}</span>
            <span class="logo_surname">{{ $t('me.lastname') }}</span>
          </div>
          <nuxt-link :to="localePath('portfolio')" class="portfolio-word" :class="{ startPortfolioRight: config.animation }">{{ $t('home.cases') }}</nuxt-link>
          <div class="copyright clearfix">
            <p :class="{ startCopyRight: config.animation }">Copyright {{  (new Date()).getFullYear() }}</p>
            <p>Stick-design {{ $t('me.name')}} {{ $t('me.lastname') }}</p>
          </div>
          <a class="goup" :class="{ startGoupLeft: config.animation }" @click="config.fullpageApi.moveTo(1)">
            <p class="goup_text">{{ $t('app.up') }}</p>
            <svg class="goup_triangle" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <polygon points="7.5,0 15,15 0,15" />
            </svg>
          </a>
          <div class="lang">
            <nuxt-link class="lang__name"
                       :class="$i18n.locale === 'ru' ? 'lang--active' : ''"
                       :to="switchLocalePath('ru')"><span></span>ru</nuxt-link>
            <nuxt-link class="lang__name"
                       :class="$i18n.locale === 'en' ? 'lang--active' : ''"
                       :to="switchLocalePath('en')">en</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: "FooterScreen",
  props: ["config"],
  methods: {
    goToggle() {
      this.config.goAnimation = false
      setTimeout(() => (this.config.goAnimation = true), 0)
    },
    ...mapMutations({
      toggleMenu: 'app/toggleMenu',
      toggleModal: 'app/toggleModal'
    })
  }
};
</script>
