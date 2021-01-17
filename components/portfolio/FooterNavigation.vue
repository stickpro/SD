<template>
  <div class="col-12">
    <div class="navigation">
      <client-only>
      <splide :options="options">
        <splide-slide v-for="portfolio in portfolios" :key="portfolio.id">
          <div class="navigation__item">
            <nuxt-link :to="localePath({name: 'portfolio-slug', params: { slug: portfolio.slug }})" class="navigation__link">
              <h3 class="navigation__heading"> {{ portfolio.title }} </h3>
              <div class="navigation__desc">{{ portfolio.filter.name }}</div>
            </nuxt-link>
          </div>
        </splide-slide>
        <template v-slot:controls>
          <div class="splide__arrows navigation__arrows">
            <button class="navigation__arrow navigation__arrow_prev splide__arrow splide__arrow--prev">
            </button>
            <button class="navigation__arrow navigation__arrow_next splide__arrow splide__arrow--next">
            </button>
          </div>
        </template>
      </splide>
      </client-only>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {
      options: {
        type: 'loop',
        width: "100%",
        perPage: 2,
        pagination: false,
      },
    };
  },
  methods: {
    ...mapActions({
      loadPortfolios: 'portfolio/loadPortfolios'
    }),
  },
  computed: {
    ...mapGetters({
      portfolios: 'portfolio/getPortfolios'
    })
  },
  created() {
    this.loadPortfolios({show_home: true})
  },
}
</script>
<style>
.navigation {
  color: white;
  display: block;
  cursor: pointer;
  position: relative;
}

.navigation__heading {
  font-family: "BebasNeue";
  font-size: 48px;
  font-weight: 700;
  line-height: 1.5em;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  margin-bottom: 40px;
  color: #fff;
  -webkit-transition: 0.3s all ease;
  -webkit-transition: 0.3s color ease;
  transition: 0.3s color ease;
}

.navigation__desc {
  font-size: 13px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.1em;
  color: #fff;
  -webkit-transition: 0.3s all ease;
  -webkit-transition: 0.3s color ease;
  transition: 0.3s color ease;
}

.navigation__item:hover .navigation__heading,
.navigation__item:hover .navigation__desc {
  color: #fd7878;
}

.navigation .navigation__link,
.slick-active .navigation__link {
  text-align: left;
  text-decoration: none;
}

.navigation__item:focus,
.navigation__link:focus {
  outline: none;
}

.navigation__link {
  display: block;
  margin-left: 160px;
  margin-right: 0%;
  text-align: left;
}

.slick-current .navigation__link {
  margin-left: 0;
  margin-right: 160px;
  text-align: right;
}

.slick-current .navigation__heading {
  margin-right: -20px;
}

.navigation__arrow {
  width: 64px;
  height: 15px;
  display: block;
  cursor: pointer;
  display: inline-block;
  -webkit-transition: background 0.3s ease;
  transition: background 0.3s ease;
}

.navigation__arrows {
  margin: 140px auto 0;
  max-width: 480px;
  text-align: center;
}

.navigation__arrow_prev {
  background: url('~assets/img/arrow-prev.png') no-repeat center center;
  margin-left: 0;
  margin-right: 160px;
  position: relative;
}

.navigation__arrow_prev:hover {
  background: url('~assets/img/arrow-prev-h.png') no-repeat center center;
}

.navigation__arrow_next {
  background: url('~assets/img/arrow-next.png') no-repeat center center;
  margin-left: 160px;
  margin-right: 0%;
  position: relative;
}

.navigation__arrow_next:hover {
  background: url('~assets/img/arrow-next-h.png') no-repeat center center;
}
@media screen and (max-width: 992px) {
  .navigation__heading {
    font-size: 36px;
    margin-bottom: 30px;
  }
}
@media screen and (max-width: 427px) {
  .navigation__heading {
    font-size: 18px;
    letter-spacing: 0.2em;
  }

}
</style>
