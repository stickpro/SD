<template>
  <div class="portfolio__page">
    <header class="header" id="header" ref="header">
      <nav class="nav-bar">
        <div class="container-fluid d-flex justify-content-between align-items-center flex-wrap">
          <nuxt-link :to="localePath('index')" class="logo animated fadeInLeft">

            <span class="logo_letters">s</span>
            <span class="logo_letters logo_letters__b">d</span>
            <div class="logo_stroke">
              <span class="logo_dash"></span>
              <span class="logo_dash"></span>
            </div>
            <span class="logo_name">
          {{ $t('me.name') }}
        </span>
            <span class="logo_surname">
          {{ $t('me.lastname') }}
        </span>
          </nuxt-link>
          <div class="contacts animated fadeInRight d-lg-flex align-items-center fadeInDown">
            <a href="https://www.instagram.com/stick_qwe/" class="mail" target="_blank">instagram: stick_qwe</a>
            <a href="mailto:info@stick-design.ru" class="mail">info@stick-design.ru</a>
            <a href="tel:+79187509500" class="phone">+7 (918) 750-95-00</a>
            <div class="social d-flex">
              <a href="tg://resolve?domain=stick_qwe" target="_blank" rel="nofollow"
                 class="social__item animated fadeInLeft">
                <svg-icon name="telegram" width="20px" height="20px"/>
              </a>
              <a href="https://api.whatsapp.com/send?phone=79187509500" target="_blank" rel="nofollow"
                 class="social__item animated fadeInLeft">
                <svg-icon name="whatsapp" width="20px" height="20px"/>
              </a>
              <a href="skype:stick_qwe?chat" target="_blank" rel="nofollow" class="social__item animated fadeInLeft">
                <svg-icon name="skype" width="20px" height="20px"/>
              </a>
              <a href="https://vk.com/id383968" target="_blank" rel="nofollow" class="social__item animated fadeInLeft">
                <svg-icon name="vk" width="20px" height="20px"/>
              </a>
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
      </nav>
      <div class="main-header" id="main-header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="offer">
                <h1 class="offer__heading zoomIn animated"><span class="offer__glich"><span
                  class="offer__c">{{ $t('portfolio_page.title1') }}</span>{{ $t('portfolio_page.title2') }}
                    <span v-if="$i18n.locale === 'ru'" class="offer__a letter-a"></span>
                      {{ $t('portfolio_page.title3') }}
                    <span class="offer__e">{{ $t('portfolio_page.title4') }}</span>
                  </span>
                  <span class="offer__glich-secondary">{{ $t('portfolio_page.title5') }}
                    <span v-if="$i18n.locale === 'ru'" class="letter-a offer__aa"></span>{{ $t('portfolio_page.title6') }}</span>
                </h1>

                <div class="offer__desc desc fadeInRight animated"> {{ $t('portfolio_page.desc1') }}<br>
                  {{ $t('portfolio_page.desc2') }}
                </div>
                <div class="offer__wrapper d-sm-flex justify-content-center">
                  <button class="consult-btn button glitch-btn" @click="toggleModal"><span>{{ $t('portfolio_page.consult') }}</span>
                  </button>
                  <nuxt-link :to="localePath('index')" class="offer__more button">{{ $t('portfolio_page.learn') }}
                    <span class="line-1"></span>
                    <span class="line-2"></span>
                    <span class="line-3"></span>
                    <span class="line-4"></span></nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <img src="~/assets/img/line.png" v-show="show"
               v-observe-visibility="{
                    callback: visibleLineImg,
                     once: true,
                  }"
               :class="lineImg ? 'fadeInDown animated' : ''"
               alt=""
               class="offer__line">
        </div>
      </div>
    </header>
    <section class="proposal" id="proposal">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 pr-xl-0 col-12">
            <div v-show="show"
                 v-observe-visibility="{
                    callback: visibilityChanged,
                     once: true,
                  }"
                 :class="isVisible ? 'zoomIn animated' : ''" class="section-heading proposal__heading">
              <span
                class="proposal__span">{{ $t('portfolio_page.we')}}<span class="proposal__e letter-a" v-if="$i18n.locale === 'ru'"></span>,
              </span>
              <span class="proposal__span-second">{{ $t('portfolio_page.want') }}</span>
              <span>
              <span class="proposal__bg">{{ $t('portfolio_page.have') }}<span class="letter-a proposal__a" v-if="$i18n.locale === 'ru'"></span>{{  $t('portfolio_page.for')}}.</span>
              </span>
            </div>
          </div>
          <div class="col-xl-6 col-12 d-flex justify-content-center align-items-end">
            <div class="proposal__block_1 desc"
                 v-show="show"
                 v-observe-visibility="{
                    callback: visibilityChanged,
                     once: true,
                  }"
                 :class="isVisible ? 'fadeInRight animated' : ''">
            {{ $t('portfolio_page.proposal') }}
            </div>
          </div>
          <div class="col-12 d-flex justify-content-center">
            <div class="proposal__block_2"
                 v-show="show"
                 v-observe-visibility="{
                    callback: visiblePersonalBlock2,
                     once: true,
                  }"
                 :class="isVisiblePersonalBlock2 ? 'fadeInLeft animated' : ''">
              <h3 class="proposal__title"
                  v-observe-visibility="{
                    callback: visibleDots2,
                     once: true,
                  }"
                  :class="dots2 ? 'fadeInLeft animated' : ''">{{ $t('portfolio_page.prop_title') }}</h3>
              <p class="proposal__text desc">{{ $t('portfolio_page.prop_desc') }}</p>
            </div>
          </div>
          <div class="col-12 d-flex justify-content-end">
            <div class="proposal__block_3"
                 v-observe-visibility="{
                    callback: visiblePersonalBlock3,
                     once: true,
                  }"
                 :class="isVisiblePersonalBlock3 ? 'fadeInRight animated' : ''">
              <p class="proposal__text desc">{{ $t('portfolio_page.prop_text') }}</p>
              <button class="button consult-btn glitch-btn" @click="toggleModal"><span>{{ $t('portfolio_page.consult') }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img src="~/assets/img/dots2.png" alt="" class="proposal__left"
           v-observe-visibility="{
                    callback: visibleDots2,
                     once: true,
                  }"
           :class="dots2 ? 'fadeInLeft animated' : ''">
      <img src="~/assets/img/black_lines.png" alt="" class="proposal__right"
           v-observe-visibility="{
                    callback: visiblePersonalBlock3,
                     once: true,
                  }"
           :class="isVisiblePersonalBlock3 ? 'fadeInRight animated' : ''">
    </section>
    <section class="portfolio" id="portfolio">
      <div class="container-fluid container-fluid_portfolio">
        <div class="row">
          <div class="col-12 d-lg-flex justify-content-between">
            <div class="portfolio__desc"
                 v-observe-visibility="{
                     callback: visiblePortfolioDesc,
                     once: true,
                     throttle: 1000,
                  }"
                 :class="isVisiblePortfolioDesc ? 'zoomIn animated' : ''"><span>WOW</span>
              <p>{{ $t('portfolio_screen.goal') }}</p>
            </div>
            <h2 class="portfolio__heading section-heading"
                v-observe-visibility="{
                     callback: visiblePortfolioDesc,
                     once: true,
                     throttle: 1000,
                  }"
                :class="isVisiblePortfolioDesc ? 'fadeInRight animated' : ''">{{ $t('portfolio_page.s') }}<span
              class="proposal__a letter-a white-a" v-if="$i18n.locale === 'ru'"></span>{{ $t('portfolio_page.uch') }}<br> {{ $t('portfolio_page.i') }}
              <span class="proposal__a letter-a white-e" v-if="$i18n.locale === 'ru'"></span>{{ $t('portfolio_page.sh') }}<br v-if="$i18n.locale === 'ru'"> {{ $t('portfolio_page.n') }}<span
                class="proposal__a letter-a white-e" v-if="$i18n.locale === 'ru'"></span> {{ $t('portfolio_page.like')}}</h2>
          </div>
          <div class="col-lg-6 col-12 d-flex flex-wrap justify-content-between" v-for="item in chunk(portfolios, 6)">

            <template v-for="(portfolio, index) in item">
              <nuxt-link :to="localePath({name: 'portfolio-slug', params: { slug: portfolio.slug }})"
                          :class="`portfolio__item ${index === 0 ? 'portfolio__item_first portfolio__main' : ''}
                          ${index%3 === 0 && index < 6 ? 'portfolio__main' : '' }
                          ${index%2 === 2 && index >= 6 ?  'portfolio__main' : ''}`">
                <div class="portfolio__preview">
                  <div class="portfolio__previewbox">
                    <img :src="imgPortfolio(portfolio.image.slug)" alt="portfolio.title"
                         class="portfolio__previewimg">
                    <div class="portfolio__overlay">
                      <h4 class="portfolio__title"> {{ portfolio.title }}</h4>
                    </div>
                  </div>
                </div>

                <div class="portfolio__text">
                  <div class="portfolio__name">
                    {{ portfolio.title }}
                  </div>
                  <div class="portfolio__category">
                    {{ portfolio.filter.name }}
                  </div>
                </div>
              </nuxt-link>
            </template>
          </div>
          <button class="portfolio__button consult-btn button glitch-btn" @click="toggleModal"><span>{{ $t('portfolio_page.result')}}</span>
          </button>
        </div>
      </div>
    </section>
    <section class="benefits" id="benefits">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 col-xl-6">
            <h2 class="section-heading benefits__heading"
                v-observe-visibility="{
                    callback: visibleBenefitsTitle,
                     once: true,
                  }"
                :class="isVisibleBenefitsTitle ? 'zoomIn animated' : ''">
                        <span class="benefits__heading-first">
                           {{ $t('portfolio_page.me') }}
                        </span> <br>
              <span class="benefits__heading-second">
                            {{ $t('portfolio_page.chose') }}<span class="proposal__a letter-a  black-a" v-if="$i18n.locale === 'ru'"></span>{{ $t('portfolio_page.en')}}
                        </span>
            </h2>
            <div class="benefits__desc">{{ $t('portfolio_page.benefits') }}</div>
          </div>
          <div class="col-lg-5 col-xl-6">
            <ul class="benefits__list"
                v-observe-visibility="{
                    callback: visibleBenefitsTitle,
                     once: true,
                  }"
                :class="isVisibleBenefitsTitle ? 'fadeInRight animated' : ''">
              <li class="benefits__item">
                <h4 class="benefits__title">{{ $t('portfolio_page.benefits1.title') }}</h4>
                <p class="benefits__text">{{ $t('portfolio_page.benefits1.text') }}</p>
              </li>
              <li class="benefits__item">
                <h4 class="benefits__title">{{ $t('portfolio_page.benefits2.title') }}</h4>
                <p class="benefits__text">{{ $t('portfolio_page.benefits2.text') }}</p>
              </li>
              <li class="benefits__item">
                <h4 class="benefits__title">{{ $t('portfolio_page.benefits3.title') }}</h4>
                <p class="benefits__text">{{ $t('portfolio_page.benefits3.text') }}</p>
              </li>
            </ul>
          </div>
          <div class="col-12">
            <div class="benefits__block d-md-flex justify-content-between">
              <div class="benefits__card"
                   v-observe-visibility="{
                    callback: visibleBenefitsCard,
                     once: true,
                  }"
                   :class="isVisibleBenefitsCard ? 'fadeInDown animated' : ''">
                <span class="benefits__tip">01</span>
                {{ $t('portfolio_page.benefits1.card') }}
              </div>
              <div class="benefits__card"
                   v-observe-visibility="{
                    callback: visibleBenefitsCard,
                     once: true,
                  }"
                   :class="isVisibleBenefitsCard ? 'fadeInDown animated' : ''">
                <span class="benefits__tip">02</span>
                {{ $t('portfolio_page.benefits2.card') }}
              </div>
              <div class="benefits__card"
                   v-observe-visibility="{
                    callback: visibleBenefitsCard,
                     once: true,
                    }"
                   :class="isVisibleBenefitsCard ? 'fadeInDown animated' : ''">
                <span class="benefits__tip">03</span>
                {{ $t('portfolio_page.benefits3.card') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-xl-7">
            <h2 class="lastchance__heading section-heading"
                v-observe-visibility="{
                    callback: visibleLastChange,
                     once: true,
                }"
                :class="isVisibleLastChange ? 'fadeInLeft animated' : ''">{{ $t('portfolio_page.i') }} {{ $t('portfolio_page.will') }}<span
              v-if="$i18n.locale === 'ru'"
              class="proposal__a letter-a white-e"></span> {{ $t('portfolio_page.not') }}<span class="lastchance__span"><span class="lastchance__glich">{{ $t('portfolio_page.beg') }}</span></span> {{ $t('portfolio_page.you') }}<span
                class="proposal__a letter-a white-a"  v-if="$i18n.locale === 'ru'"></span>{{ $t('portfolio_page.you2') }}</h2>
          </div>
          <div class="col-xl-5 d-flex justify-content-lg-end">
            <div class="lastchance__block"
                 v-observe-visibility="{
                    callback: visibleLastChange,
                     once: true,
                }"
                 :class="isVisibleLastChange ? 'fadeInRight animated' : ''">
             {{ $t('portfolio_page.lastchance') }}
            </div>
          </div>
          <div class="col-12">
            <div class="contacts d-flex justify-content-between align-items-center flex-wrap"
                 v-show="isVisibleContacts"
                 v-observe-visibility="{
                    callback: visibleContacts,
                     once: true,
                }"
                 :class="isVisibleContacts ? 'fadeInDown animated' : ''">
              <button @click="toggleModal" class="button lastchance__button glitch-btn">
                <span>{{ $t('app.submit') }}</span></button>
              <a href="tel:+9187509500" class="phone">+7 (918) 750-95-00</a>
              <div class="social d-flex">
                <a href="https://t.me/stick_qwe" target="_blank" rel="nofollow" class="social__item">telegram</a>
                <a href="https://api.whatsapp.com/send?phone=9187509500" target="_blank" rel="nofollow"
                   class="social__item">whatsapp</a>
                <a href="https://vk.com/id383968" target="_blank" rel="nofollow" class="social__item">vkontakte</a>
                <a href="skype:stick_25?chat" target="_blank" rel="nofollow" class="social__item">skype</a>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="footer__bottom d-flex justify-content-between align-items-center flex-wrap">
              <nuxt-link to="/" class="logo">
                <span class="logo_letters">s</span>
                <span class="logo_letters logo_letters__b">d</span>
                <div class="logo_stroke">
                  <span class="logo_dash"></span>
                  <span class="logo_dash"></span>
                </div>
                <span class="logo_name">
                                {{ $t('me.name') }}
                            </span>
                <span class="logo_surname">
                                {{ $t('me.lastname') }}
                            </span>
              </nuxt-link>
              <div class="copyright">{{  (new Date()).getFullYear() }} {{ $t('app.copyright')}}</div>
              <div @click="scrollTo" class="goup d-flex">
                <p class="goup_text">
                  {{ $t('app.up')}}
                </p>
                <svg class="goup_triangle" xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <polygon points="7.5,0 15,15 0,15"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="~/assets/img/footer_shape.png" alt="" class="footer__left"
           v-show="isVisibleContacts"
           v-observe-visibility="{
                    callback: visibleContacts,
                     once: true,
                }"
           :class="isVisibleContacts ? 'fadeInLeft animated' : ''">
      <img src="~/assets/img/footer_shape2.png" alt="" class="footer__right"
           v-show="isVisibleContacts"
           v-observe-visibility="{
                    callback: visibleContacts,
                     once: true,
                }"
           :class="isVisibleContacts ? 'fadeInRight animated' : ''">
    </footer>
    <ModalWork />
  </div>
</template>

<script>
import ModalWork from "@/components/ModalWork";
import {mapActions, mapGetters, mapMutations} from "vuex";
export default {
  name: "portfolio",
  transition: 'intro',
  components: {
    ModalWork,
  },
  data() {
    return {
      show: true,
      isVisible: false,
      isVisiblePersonalBlock2: false,
      isVisiblePersonalBlock3: false,
      lineImg: false,
      dots2: false,
      isVisiblePortfolioDesc: false,
      isVisibleBenefitsTitle: false,
      isVisibleBenefitsCard: false,
      isVisibleLastChange: false,
      isVisibleContacts: false,
    }
  },
  computed: {
    ...mapGetters({
      portfolios: 'portfolio/getPortfolios'
    }),
  },
  methods: {
    ...mapActions({
      loadPortfolios: 'portfolio/loadPortfolios'
    }),
    visibilityChanged(isVisible) {
      this.isVisible = isVisible
    },
    visiblePersonalBlock2(isVisible) {
      this.isVisiblePersonalBlock2 = isVisible
    },
    visiblePersonalBlock3(isVisible) {
      this.isVisiblePersonalBlock3 = isVisible
    },
    visibleLineImg(isVisible) {
      this.lineImg = isVisible
    },
    visibleDots2(isVisible) {
      this.dots2 = isVisible
    },
    visiblePortfolioDesc(isVisible) {
      this.isVisiblePortfolioDesc = true
    },
    visibleBenefitsTitle(isVisible) {
      this.isVisibleBenefitsTitle = isVisible
    },
    visibleBenefitsCard(isVisible) {
      this.isVisibleBenefitsCard = isVisible
    },
    visibleLastChange(isVisible) {
      this.isVisibleLastChange = isVisible
    },
    visibleContacts(isVisible) {
      this.isVisibleContacts = isVisible
    },
    scrollTo() {
      this.$refs.header.scrollIntoView({ behavior: 'smooth' })
    },
    chunk(array, size) {
      const chunked_arr = [];
      let index = 0;
      while (index < array.length) {
        chunked_arr.push(array.slice(index, size + index));
        index += size;
      }
      return chunked_arr;
    },

    imgPortfolio(src) {
      return this.$cloudinary.image.url(src, {
        crop: 'scale',
        fetchFormat: 'auto',
        quality: '100',
        width: 745,
      })
    },
    ...mapMutations({
      toggleModal: 'app/toggleModal'
    })
  },
  created() {
    this.loadPortfolios()
  },
}
</script>

<style lang="scss" scoped>
::v-deep {

@import "~assets/scss/grid.scss";
@import "~assets/scss/main_portfolio.css";

}

.zoomIn-enter-active {
  animation: zoomIn .5s;
}

.zoomIn-leave-active {
  animation: zoomIn .5s reverse;
}

@-webkit-keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}
</style>
