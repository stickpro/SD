<template>
  <div class="portfolio__slug">
    <header class="header-case" id="header-case">
      <nav class="nav-bar">
        <div class="container-fluid d-flex justify-content-between align-items-center flex-wrap">
          <nuxt-link to="/" class="logo animated fadeInLeft" target="_blank">
            <span class="logo_letters">s</span>
            <span class="logo_letters logo_letters__b">d</span>
            <div class="logo_stroke">
              <span class="logo_dash"></span>
              <span class="logo_dash"></span>
            </div>
            <span class="logo_name">
                        Владислав
                    </span>
            <span class="logo_surname">
                        Булгаков
                    </span>
          </nuxt-link>
          <div class="case__name d-sm-none">
            <div class="case__wrapper">
              <nuxt-link to="/portfolio"> портфолио</nuxt-link>
              / {{ portfolio.slug }}
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
              <nuxt-link to="/portfolio"> портфолио</nuxt-link>
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
                <img :src="imgMockup(image.slug)"
                     class="slideimg-left"
                     :class="{ 'animated slideInLeft': image.visible, 'invisible': !image.visible }"
                     />
              </div>
              <div v-else-if="index%2 === 1"
                   class="bridal__item bridal__item_second slide-right"
                   :class="{ 'visible animated slideInRight': image.visible, 'invisible': !image.visible }"
                   v-observe-visibility="{ callback: (isVisible, entry) => visibilityChanged(isVisible, entry, index), once: true, }">
                <img :src="imgMockup(image.slug)"
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
    imgMockup(src) {
      return this.$cloudinary.image.url(src, {
        fetchFormat: 'auto',
        quality: '100',
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
