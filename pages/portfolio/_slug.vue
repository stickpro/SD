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
<!--          @foreach ($portfolio->gallery as $i => $photo)-->
<!--          @if ($i%2 == 0)-->
<!--          <div class="col-lg-8 col-12">-->
<!--            @if($photo['title'])-->
<!--            <div class="bridal-text">{{ $photo['title'] }}<span> site</span></div>-->
<!--            @endif-->
<!--            <div class="bridal__item bridal__item_center slide-left">-->
<!--              <img src="/storage/{{ $photo['name'] }}" alt="{{ $photo['title'] }}"  class="slideimg-left"></div>-->
<!--          </div>-->
<!--          @elseif ($i%2 == 1)-->
<!--          <div class="col-lg-9 col-12 ml-auto">-->
<!--            <div class="bridal__item bridal__item_second slide-right">-->
<!--              <img src="/storage/{{ $photo['name'] }}" alt="{{ $photo['title'] }}" class="slideimg-right"></div>-->
<!--            <h3 class="case-title">{{ $photo['title'] }}</h3>-->
<!--          </div>-->
<!--          @endif-->
<!--          @endforeach-->
          <div v-for="(image,index) in portfolio.images">
            <div :class="`${index%2 == 0 ? 'col-lg-8': 'col-lg-9 ml-auto'} col-12`">
              <div v-if="index%2 == 0" class="bridal-text">{{ image.title }}<span> site</span></div>
                <div v-if="index%2 == 0" class="bridal__item bridal__item_center slide-left slideInLeft animated"
                     :class="isVisibleImage[index] ? 'slideInLeft animated' : '' "
                     v-observe-visibility="visibilityChanged(true, index)">
                  <img :src="imgMockup(image.slug)" class="slideimg-left"
                       :class="isVisibleImage[index] ? 'slideInLeft animated' : '' " />
                </div>
                <div v-else-if="index%2 == 1" class="bridal__item bridal__item_second slide-right"
                     :class="isVisibleImage[index] ? 'slideInRight animated' : ''"
                     v-observe-visibility="visibilityChanged(true, index)">
                  <img :src="imgMockup(image.slug)" class="slideimg-right"
                       :class="isVisibleImage[index] ? 'slideInRight animated' : ''" />
                </div>
                <h3 v-if="index%2 == 1" class="case-title">{{ image.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer-case">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="navigation">

              <div class="navigation__item">
                <a href="" class="navigation__link">
                  <h3 class="navigation__heading"> title </h3>
                  <div class="navigation__desc">desc</div>
                </a>
              </div>
            </div>

            <div class="navigation__arrows">
              <div class="navigation__arrows">
                <div class="navigation__arrow navigation__arrow_prev slick-arrow" style=""></div>
                <div class="navigation__arrow navigation__arrow_next slick-arrow" style=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "slug",
  computed: {
    ...mapGetters({
      portfolio: 'portfolio/getPortfolio'
    })
  },
  data: () => ({
    isVisibleImage: Array.apply(null, Array(30)).map(Number.prototype.valueOf,0).fill(false),
  }),
  async asyncData({store, params, error}) {
    try {
      await store.dispatch('portfolio/loadPortfolio', params.slug)
    } catch (e) {
      error({statusCode: 404, message: '404 not found'})
    }
  },
  methods: {
    imgMockup(src) {
      return this.$cloudinary.image.url(src, {
        fetchFormat: 'auto',
        quality: '100',
      })
    },
    visibilityChanged(isVisible, index) {
      this.isVisibleImage[index] = isVisible
      console.log(isVisible, index, this.isVisibleImage)
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/grid.scss";

@import "~assets/scss/main_portfolio.css";
</style>
