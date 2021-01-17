<template>
  <section id="portfolio" class="section">
    <div class="container clearfix">
      <div class="portfolio-bg-top" @mousemove="paralaxIn" @mouseleave="paralaxOut">
        <div class="portfolio-wow-big">wow</div>
        <div class="portfolio-wow-small">
          <span
            class="wow-dash-left"
            :class="{ wowDashLeftMove: config.animation, 'wow-dash-left2': config.timeOutAnim }"
          ></span>
          <span
            class="wow-text"
            :class="{ wowTextMove: config.animation, wowTextMove2: config.timeOutAnim }"
          >wow</span>
          <span
            class="wow-dash-right"
            :class="{ wowDashRightMove: config.animation, 'wow-dash-right2': config.timeOutAnim }"
          ></span>
        </div>
      </div>
      <div class="portfolio-bg-bottom">
        <span class="portfolio-wow-big">ow</span>
        <span class="portfolio-wow-big">w</span>
      </div>
      <div class="portfolio-top">
        <div>
          <div class="socials_icons">
            <a href="https://t.me/stick_qwe">
              <svg-icon name="telegram" height="14px" width="14px"/>
            </a>
            <a href="https://api.whatsapp.com/send?phone=79187509500">
              <svg-icon name="whatsapp" height="14px" width="14px"/>
            </a>
            <a href="https://vk.com/id383968">
              <svg-icon name="vk" height="14px" width="14px"/>
            </a>
            <a href="skype:stick_25?chat">
              <svg-icon name="skype" height="14px" width="14px"/>
            </a>
          </div>
          <div class="socials_text">{{ $t('home.acquainted') }}</div>
        </div>
        <div class="hamburger hamburger-portfolio js-MenuItem" @click="toggleMenu">
          <span class="hamburger_line hamburger_line__up"></span>
          <span class="hamburger_line hamburger_line__middleUp"></span>
          <span class="hamburger_line hamburger_line__middleBottom"></span>
          <span class="hamburger_line hamburger_line__bottom"></span>
        </div>
      </div>

      <div class="portfolio-body">
        <div class="portfolio-line"></div>
        <div class="portfolio-content">
          <div class="portfolio-content_goal">{{ $t('portfolio_screen.goal') }}</div>
          <div class="portfolio-content_wrap">
            <div class="portfolio-content_title">
              <div
                class="headline portfolioTitle1"
                :class="{portfolioHeadlineAnime1:config.animation }"
              >{{ $t('portfolio_screen.headline1') }}
              </div>
              <div
                class="headline portfolioTitle2"
                :class="{portfolioHeadlineAnime2:config.animation }"
              >{{ $t('portfolio_screen.headline2') }}
              </div>
              <div
                class="headline portfolioTitle3"
                :class="{portfolioHeadlineAnime3:config.animation }"
              >{{ $t('portfolio_screen.headline3') }}
              </div>
            </div>
            <div class="portfolio-content_list">
              <div class="portfolio-content_items clearfix">
                <nuxt-link v-for="portfolio in portfolios" :key="portfolio.id" class="portfolio-item"
                           :to="localePath({name: 'portfolio-slug', params: { slug: portfolio.slug }})">
                  <div class="portfolio-item_preview">
                  <cld-image
                      :public-id="portfolio.image.slug"
                      width="290"
                      crop="fill"
                      fetchFormat="auto"
                      quality="auto"
                    />
                  </div>
                  <div class="portfolio-item_text">
                    <div class="portfolio-item_name">{{ portfolio.title }}</div>
                    <div class="portfolio-item_category">{{ portfolio.filter.name }}</div>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio-footer">
        <div class="portfolio-footer_left">
          <div class="logo" @click="config.fullpageApi.moveTo(1)">
            <span class="logo_letters">s</span>
            <span class="logo_letters logo_letters__b">d</span>
            <div class="logo_stroke">
              <span class="logo_dash"></span>
              <span class="logo_dash"></span>
            </div>
            <span class="logo_name">{{ $t('me.name') }}</span>
            <span class="logo_surname">{{ $t('me.lastname') }}</span>
          </div>
          <nuxt-link :to="localePath('portfolio')" class="portfolio-watch">
            <div  class="portfolio-watch_text">{{ $t('portfolio_screen.watch') }} </div>
            <div class="portfolio-watch_triangles">
              <svg class="portfolio_triangle" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polygon points="0,0 13,7.5 0,15"/>
              </svg>
              <svg class="portfolio_triangle" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polygon points="0,0 11,6.5 0,13"/>
              </svg>
              <svg class="portfolio_triangle" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polygon points="0,0 10,5.5 0,11"/>
              </svg>
            </div>
          </nuxt-link>
        </div>
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
    <div class="wow_bg" :class="{wowMove: config.animation}">
      <div class="wow_bg-bl"></div>
      <div class="wow_bg-coral"></div>
    </div>
    <div class="wow_vtext-wrap vtext-left-wrap" v-if="config.timeOutAnim">
      <div class="wow_vtext vtext-left" :class="{wowVtextCoralUp: config.animation}">
        <div class="wow_vtext-inner">inqhwakzfup</div>
      </div>
    </div>
    <div class="wow_vtext-wrap vtext-middle-wrap">
      <div class="wow_vtext vtext-middle" :class="{wowVtextCoralDown: config.animation}">
        <div class="wow_vtext-inner">inqhwakzfup</div>
      </div>
    </div>
    <div class="wow_vtext-wrap vtext-right-wrap">
      <div class="wow_vtext vtext-right" :class="{wowVtextBlackUp: config.animation}">
        <div class="wow_vtext-inner">inqhwakzfup</div>
      </div>
    </div>
    <div class="wow_word wow_word-top" :class="{wowWordTopMove: config.animation}">wow</div>
    <div
      class="wow_word wow_word-bottom-right"
      :class="{wowWordBottomRightMove: config.animation}"
    >wow
    </div>
    <div
      class="wow_word wow_word-bottom-left"
      :class="{wowWordBottomLeftMove: config.animation}"
    >wow
    </div>
    <div class="wow_line wow_white-line" :class="{wowWhiteLineMove: config.animation}"></div>
    <div class="wow_line wow_black-line" :class="{wowBlackLineMove: config.animation}"></div>
    <div class="wow_line wow_coral-line" :class="{wowCoralLineMove: config.animation}"></div>
  </section>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  name: "PortfolioScreen",
  props: ["config"],
  data: () => ({
    portfolioBgTop: null
  }),
  methods: {
    ...mapActions({
      loadPortfolios: 'portfolio/loadPortfolios'
    }),
    paralaxIn() {
      const portfolioBgTop = this.$el.getElementsByClassName(
        "portfolio-wow-big"
      );
      const portfolioWowSmall = this.$el.getElementsByClassName(
        "portfolio-wow-small"
      );
      this.$anime({
        targets: portfolioBgTop,
        translateX: -40,
        translateY: -40,
        duration: 1500,
        easing: "easeOutElastic",
        elasticity: 400
      });
      this.$anime({
        targets: portfolioWowSmall,
        translateX: 20,
        translateY: 20,
        duration: 1500,
        easing: "easeOutElastic",
        elasticity: 400
      });
    },
    paralaxOut() {
      const animeDiv = this.$el.getElementsByClassName("portfolio-wow-big");
      const portfolioWowSmall = this.$el.getElementsByClassName(
        "portfolio-wow-small"
      );
      this.$anime({
        targets: animeDiv,
        translateX: 0,
        translateY: 0,
        duration: 1500,
        easing: "easeOutElastic",
        elasticity: 400
      });
      this.$anime({
        targets: portfolioWowSmall,
        translateX: 20,
        translateY: 20,
        duration: 1500,
        easing: "easeOutElastic",
        elasticity: 400
      });
    },
    ...mapMutations({
      toggleMenu: 'app/toggleMenu'
    })
  },
  computed: {
    ...mapGetters({
      portfolios: 'portfolio/getPortfolios'
    })
  },
  created() {
    this.loadPortfolios({show_home: true})
  },
};
</script>
