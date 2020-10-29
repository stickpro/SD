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
          <div class="portfolio-content_goal">Цель моего творчества – вызвать именно такие эмоции</div>
          <div class="portfolio-content_wrap">
            <div class="portfolio-content_title">
              <div
                class="headline portfolioTitle1"
                :class="{portfolioHeadlineAnime1:config.animation }"
              >такого</div>
              <div
                class="headline portfolioTitle2"
                :class="{portfolioHeadlineAnime2:config.animation }"
              >я еще</div>
              <div
                class="headline portfolioTitle3"
                :class="{portfolioHeadlineAnime3:config.animation }"
              >не видел</div>
            </div>
            <div class="portfolio-content_list">
              <div class="portfolio-content_items clearfix">
                <a
                  target="_blank"
                  class="portfolio-item"
                  href="https://stick-design.ru/portfolio/shagova"
                >
                  <div class="portfolio-item_preview">
                    <img
                      src="https://stick-design.ru/storage/portfolios/October2019/PquUGeciiv7XKUczZg0K.png"
                      alt
                    />
                  </div>
                  <div class="portfolio-item_text">
                    <div class="portfolio-item_name">shagova.photo</div>
                    <div class="portfolio-item_category">portfolio</div>
                  </div>
                </a>
                <a
                  target="_blank"
                  class="portfolio-item"
                  href="https://stick-design.ru/portfolio/smallhd"
                >
                  <div class="portfolio-item_preview">
                    <img
                      src="https://stick-design.ru/storage/portfolios/October2019/gCufv7sBp0eoyUFX7fPH.jpg"
                      alt
                    />
                  </div>
                  <div class="portfolio-item_text">
                    <div class="portfolio-item_name">SmallHD</div>
                    <div class="portfolio-item_category">e-commerce</div>
                  </div>
                </a>
                <a
                  target="_blank"
                  class="portfolio-item"
                  href="https://stick-design.ru/portfolio/synchro"
                >
                  <div class="portfolio-item_preview">
                    <img
                      src="https://stick-design.ru/storage/portfolios/October2019/xDcbZ392n9PEalrErKcC.png"
                      alt
                    />
                  </div>
                  <div class="portfolio-item_text">
                    <div class="portfolio-item_name">synchro.ru</div>
                    <div class="portfolio-item_category">e-commerce</div>
                  </div>
                </a>
              </div>
              <div class="portfolio-content_items clearfix">
                <a
                  target="_blank"
                  class="portfolio-item"
                  href="https://stick-design.ru/portfolio/retroclimat"
                >
                  <div class="portfolio-item_preview">
                    <img
                      src="https://stick-design.ru/storage/portfolios/October2019/kxiMZvw4LE29LxR6DZHE.png"
                      alt
                    />
                  </div>
                  <div class="portfolio-item_text">
                    <div class="portfolio-item_name">retro-climat.ru</div>
                    <div class="portfolio-item_category">e-commerce</div>
                  </div>
                </a>
                <a
                  target="_blank"
                  class="portfolio-item"
                  href="https://stick-design.ru/portfolio/domdecora"
                >
                  <div class="portfolio-item_preview">
                    <img
                      src="https://stick-design.ru/storage/portfolios/October2019/HuJMCDg1t73zfVqyVTDn.jpg"
                      alt
                    />
                  </div>
                  <div class="portfolio-item_text">
                    <div class="portfolio-item_name">domdecora</div>
                    <div class="portfolio-item_category">e-commerce</div>
                  </div>
                </a>
                <a
                  target="_blank"
                  class="portfolio-item"
                  href="https://stick-design.ru/portfolio/brothersbarber"
                >
                  <div class="portfolio-item_preview">
                    <img
                      src="https://stick-design.ru/storage/portfolios/October2019/fDp3AWmvEWKgbUI0B7MT.png"
                      alt
                    />
                  </div>
                  <div class="portfolio-item_text">
                    <div class="portfolio-item_name">brothersbarber</div>
                    <div class="portfolio-item_category">landing</div>
                  </div>
                </a>
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
            <span class="logo_name">Владислав</span>
            <span class="logo_surname">Булгаков</span>
          </div>
          <a class="portfolio-watch">
            <div class="portfolio-watch_text">Смотреть все</div>
            <div class="portfolio-watch_triangles">
              <svg class="portfolio_triangle" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polygon points="0,0 13,7.5 0,15" />
              </svg>
              <svg class="portfolio_triangle" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polygon points="0,0 11,6.5 0,13" />
              </svg>
              <svg class="portfolio_triangle" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polygon points="0,0 10,5.5 0,11" />
              </svg>
            </div>
          </a>
        </div>
        <div class="lang">ru</div>
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
    >wow</div>
    <div
      class="wow_word wow_word-bottom-left"
      :class="{wowWordBottomLeftMove: config.animation}"
    >wow</div>
    <div class="wow_line wow_white-line" :class="{wowWhiteLineMove: config.animation}"></div>
    <div class="wow_line wow_black-line" :class="{wowBlackLineMove: config.animation}"></div>
    <div class="wow_line wow_coral-line" :class="{wowCoralLineMove: config.animation}"></div>
  </section>
</template>
<script>
import {mapMutations} from "vuex";

export default {
  name: "PortfolioScreen",
  props: ["config"],
  data: () => ({
    portfolioBgTop: null
  }),
  methods: {
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
  }
};
</script>
