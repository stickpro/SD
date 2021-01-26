<template>
  <div class="portfolio__slug">
    <header class="header-case" id="header-case">
      <nav class="nav-bar">
        <div class="container-fluid d-flex justify-content-between align-items-center">
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
              <div class="case">
                <div class="case__preview fadeInDown animated">{{ portfolio.filter.name }}</div>
                <h1 class="case__heading fadeInLeft animated">{{ portfolio.title }}</h1>
                <div class="case__desc fadeInLeft animated">
                  {{ portfolio.description }}
                </div>
                <nuxt-link :to="portfolio.external_link" target="_blank" class="case__link fadeInUp animated">
                  {{ portfolio.external_link }}
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="case__name d-none d-sm-block ">
            <div class="case__wrapper fadeInLeft animated">
              <nuxt-link :to="localePath('portfolio')"> {{ $t('home.cases') }}</nuxt-link>
              / {{ portfolio.slug }}
            </div>
          </div>
        </div>
      </div>
      <img src="~/assets/img/dots-inner.png" alt="" class="case__dots">

      <img :src="imgMockup(portfolio.mockup.slug)" :alt="portfolio.title" class="case__mockup fadeInRight animated"/>
    </header>
    <section class="bridal main" id="bridal">
      <div class="container-fluid_plain">
        <div class="row">
          <template v-for="(image,index) in portfolio.images">
            <div :class="`${index%2 === 0 ? 'col-lg-8': 'col-lg-9 ml-auto'} col-12`">
              <div v-if="index%2 === 0" class="bridal-text">{{ image.title }}<span> site</span></div>
              <div v-if="index%2 === 0"
                   class="bridal__item bridal__item_center slide-left"
                   :class="{ 'visible animated slideInLeft': image.visible, 'invisible': !image.visible }"
                   v-observe-visibility="{ callback: (isVisible, entry) => visibilityChanged(isVisible, entry, index), once: true, }">
                <img :src="imgMockup(image.slug, 1300)"
                     class="slideimg-left"
                     :class="{ 'animated slideInLeft': image.visible, 'invisible': !image.visible }"
                     />
              </div>
              <div v-else-if="index%2 === 1"
                   class="bridal__item bridal__item_second slide-right"
                   :class="{ 'visible animated slideInRight': image.visible, 'invisible': !image.visible }"
                   v-observe-visibility="{ callback: (isVisible, entry) => visibilityChanged(isVisible, entry, index), once: true, }">
                <img :src="imgMockup(image.slug, 1300)"
                     class="slideimg-right"
                     :class="{ 'visible animated slideInRight': image.visible, 'invisible': !image.visible }"
                />
              </div>
              <h3 v-if="index%2 === 1" class="case-title">{{ image.title }}</h3>
            </div>
          </template>
        </div>
      </div>
    </section>

    <footer class="footer-case">
      <div class="container">
        <div class="row">
          <FooterNavigation />
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import FooterNavigation from "@/components/portfolio/FooterNavigation";
export default {
  name: "slug",
  transition: 'intro',
  components:  {
    FooterNavigation,
  },
  head() {
    return {
      title: this.portfolio.seo_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.portfolio.seo_description
        },

        {
          hid: 'og:title',
          property: 'og:title',
          content: this.portfolio.seo_title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.portfolio.seo_description
        },
      ]
    }
  },
  computed: {
    ...mapGetters({
      portfolio: 'portfolio/getPortfolio'
    })
  },
  async asyncData({store, params, error}) {
    try {
      await store.dispatch('portfolio/loadPortfolio', params.slug)
    } catch (e) {
      error({statusCode: 404, message: '404 not found'})
    }
  },
  methods: {
    ...mapMutations('portfolio', ['SET_IMAGE_VISIBLE']),
    imgMockup(src, width = null) {
      return this.$cloudinary.image.url(src, {
        crop: 'scale',
        fetchFormat: 'auto',
        quality: '100',
        width: width ? width : null,
      })
    },
    visibilityChanged(isVisible, entry, index) {
      this.SET_IMAGE_VISIBLE({ index, isVisible })
    }
  },
}
</script>

<style lang="scss" scoped>

@import "~assets/scss/grid.scss";

@import "~assets/scss/main_portfolio.css";

</style>
