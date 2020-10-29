<template>
  <div class="portfolio__page">
    <header class="header" id="header" ref="header">
      <nav class="nav-bar">
        <div class="container-fluid d-flex justify-content-between align-items-center flex-wrap">
          <nuxt-link to="/" class="logo animated fadeInLeft">

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
          <div class="contacts animated fadeInRight">
            <a href="mailto:hello@d-b.ag" class="mail">info@stick-design.ru</a>
            <a href="tel:+38978690538" class="phone">+7 (918) 750-95-00</a>
          </div>
        </div>
      </nav>
      <div class="main-header" id="main-header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="offer">
                <h1 class="offer__heading zoomIn animated"><span class="offer__glich"><span
                  class="offer__c">с</span>озд<span class="offer__a letter-a"></span>ни<span class="offer__e"
                                                                                             data-text="е">е</span></span>
                  <span class="offer__glich-secondary" data-text="сайтов">с<span class="letter-a offer__aa"></span>йтов</span>
                </h1>

                <div class="offer__desc desc fadeInRight animated"> Если вам надоело изучать информацию о создании
                  сайтов.<br>
                  Можете успокоиться - вы попали в нужное место к нужному человеку.
                </div>
                <div class="offer__wrapper d-sm-flex justify-content-center">
                  <button class="consult-btn button glitch-btn" data-text="заказать консультацию"><span>заказать консультацию</span>
                  </button>
                  <nuxt-link to="/" class="offer__more button">узнать больше
                    <span class="line-1"></span>
                    <span class="line-2"></span>
                    <span class="line-3"></span>
                    <span class="line-4"></span></nuxt-link>
                </div>
              </div>
              <div class="social d-flex justify-content-center">
                <a href="https://t.me/stick_qwe" target="_blank" rel="nofollow"
                   class="social__item animated fadeInLeft">telegram</a>
                <a href="https://api.whatsapp.com/send?phone=9187509500" target="_blank" rel="nofollow"
                   class="social__item animated fadeInLeft">whatsapp</a>
                <a href="https://vk.com/id383968" target="_blank" rel="nofollow"
                   class="social__item animated fadeInLeft">vk</a>
                <a href="skype:stick_25?chat" target="_blank" rel="nofollow" class="social__item animated fadeInLeft">skype</a>
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
                class="proposal__span">вс<span
                class="proposal__e letter-a"></span>,</span> <span class="proposal__span-second"
                                                                   data-text="что вы ищете">что вы ищете</span>
              <span>
                            <span class="proposal__bg" data-text="есть у нас.">есть у н<span
                              class="letter-a proposal__a"></span>с.</span>
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
              Обычно, в этом месте компании рассказывают о том,
              какие типы сайтов они делают,
              а так же непонятные другие слова типа php, nginx, docker они знают
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
                  :class="dots2 ? 'fadeInLeft animated' : ''">Не хочется утомлять вас. Я делаю всё.</h3>
              <p class="proposal__text desc">Всё, что связано с web-технологиями, сайтами и тем, что их окружает.</p>
            </div>
          </div>
          <div class="col-12 d-flex justify-content-end">
            <div class="proposal__block_3"
                 v-observe-visibility="{
                    callback: visiblePersonalBlock3,
                     once: true,
                  }"
                 :class="isVisiblePersonalBlock3 ? 'fadeInRight animated' : ''">
              <p class="proposal__text desc">Мы можем связаться с вами прямо сейчас, чтобы услышать
                ваши задачи и предложить свое решение</p>
              <button class="button consult-btn glitch-btn" data-text="заказать консультацию"><span>заказать консультацию</span>
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
              <p>Цель моего творчества – вызвать именно такие эмоции</p>
            </div>
            <h2 class="portfolio__heading section-heading"
                v-observe-visibility="{
                     callback: visiblePortfolioDesc,
                     once: true,
                     throttle: 1000,
                  }"
                :class="isVisiblePortfolioDesc ? 'fadeInRight animated' : ''">т<span
              class="proposal__a letter-a white-a"></span>кого<br> я
              <span class="proposal__a letter-a white-e"></span>ще<br> н<span
                class="proposal__a letter-a white-e"></span> видел</h2>
          </div>
          <div class="col-lg-6 col-12 d-flex flex-wrap justify-content-between">


            <a class="portfolio__item  portfolio__item_first portfolio__main
                                            "
               href="https://stick-design.ru/portfolio/shagova" target="_blank">
              <div class="portfolio__preview">
                <div class="portfolio__previewbox">
                  <img src="/storage/portfolios/October2019/PquUGeciiv7XKUczZg0K.png" alt="shagova.photo"
                       class="portfolio__previewimg">
                  <div class="portfolio__overlay">
                    <h4 class="portfolio__title"> shagova.photo</h4>
                  </div>
                </div>
              </div>
              <div class="portfolio__text">
                <div class="portfolio__name">
                  shagova.photo
                </div>
                <div class="portfolio__category">
                  portfolio
                </div>
              </div>
            </a>

            <a class="portfolio__item "
               href="https://stick-design.ru/portfolio/smallhd" target="_blank">
              <div class="portfolio__preview">
                <div class="portfolio__previewbox">
                  <img src="/storage/portfolios/October2019/gCufv7sBp0eoyUFX7fPH.jpg" alt="SmallHD"
                       class="portfolio__previewimg">
                  <div class="portfolio__overlay">
                    <h4 class="portfolio__title"> SmallHD</h4>
                  </div>
                </div>
              </div>
              <div class="portfolio__text">
                <div class="portfolio__name">
                  SmallHD
                </div>
                <div class="portfolio__category">
                  e-commerce
                </div>
              </div>
            </a>

            <a class="portfolio__item "
               href="https://stick-design.ru/portfolio/synchro" target="_blank">
              <div class="portfolio__preview">
                <div class="portfolio__previewbox">
                  <img src="/storage/portfolios/October2019/xDcbZ392n9PEalrErKcC.png" alt="synchro.ru"
                       class="portfolio__previewimg">
                  <div class="portfolio__overlay">
                    <h4 class="portfolio__title"> synchro.ru</h4>
                  </div>
                </div>
              </div>
              <div class="portfolio__text">
                <div class="portfolio__name">
                  synchro.ru
                </div>
                <div class="portfolio__category">
                  e-commerce
                </div>
              </div>
            </a>

            <a class="portfolio__item                                                     portfolio__main
                                            "
               href="https://stick-design.ru/portfolio/retroclimat" target="_blank">
              <div class="portfolio__preview">
                <div class="portfolio__previewbox">
                  <img src="/storage/portfolios/October2019/kxiMZvw4LE29LxR6DZHE.png" alt="retro-climat.ru"
                       class="portfolio__previewimg">
                  <div class="portfolio__overlay">
                    <h4 class="portfolio__title"> retro-climat.ru</h4>
                  </div>
                </div>
              </div>
              <div class="portfolio__text">
                <div class="portfolio__name">
                  retro-climat.ru
                </div>
                <div class="portfolio__category">
                  e-commerce
                </div>
              </div>
            </a>

            <a class="portfolio__item "
               href="https://stick-design.ru/portfolio/domdecora" target="_blank">
              <div class="portfolio__preview">
                <div class="portfolio__previewbox">
                  <img src="/storage/portfolios/October2019/HuJMCDg1t73zfVqyVTDn.jpg" alt="domdecora"
                       class="portfolio__previewimg">
                  <div class="portfolio__overlay">
                    <h4 class="portfolio__title"> domdecora</h4>
                  </div>
                </div>
              </div>
              <div class="portfolio__text">
                <div class="portfolio__name">
                  domdecora
                </div>
                <div class="portfolio__category">
                  e-commerce
                </div>
              </div>
            </a>

            <a class="portfolio__item "
               href="https://stick-design.ru/portfolio/brothersbarber" target="_blank">
              <div class="portfolio__preview">
                <div class="portfolio__previewbox">
                  <img src="/storage/portfolios/October2019/fDp3AWmvEWKgbUI0B7MT.png" alt="brothersbarber"
                       class="portfolio__previewimg">
                  <div class="portfolio__overlay">
                    <h4 class="portfolio__title"> brothersbarber</h4>
                  </div>
                </div>
              </div>
              <div class="portfolio__text">
                <div class="portfolio__name">
                  brothersbarber
                </div>
                <div class="portfolio__category">
                  landing
                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-6 col-12 d-flex flex-wrap justify-content-between">


            <a class="portfolio__item "
               href="https://stick-design.ru/portfolio/fashionbrandshop" target="_blank">
              <div class="portfolio__preview">
                <div class="portfolio__previewbox">
                  <img src="/storage/portfolios/October2019/2nKObXGeVOC7ZGf4FfYu.png" alt="FashionBrandShop"
                       class="portfolio__previewimg">
                  <div class="portfolio__overlay">
                    <h4 class="portfolio__title"> FashionBrandShop</h4>
                  </div>
                </div>
              </div>
              <div class="portfolio__text">
                <div class="portfolio__name">
                  FashionBrandShop
                </div>
                <div class="portfolio__category">
                  e-commerce
                </div>
              </div>
            </a>
          </div>

          <button class="portfolio__button consult-btn button glitch-btn" data-text="мне нужен результат"><span>мне нужен результат</span>
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
                        <span class="benefits__heading-first" data-text="Меня">
                           Меня
                        </span> <br>
              <span class="benefits__heading-second" data-text="выбирают">
                            выбир<span class="proposal__a letter-a  black-a"></span>ют
                        </span>
            </h2>
            <div class="benefits__desc">Клиенты выбирают меня потому, что я делаю хорошо</div>
          </div>
          <div class="col-lg-5 col-xl-6">
            <ul class="benefits__list"
                v-observe-visibility="{
                    callback: visibleBenefitsTitle,
                     once: true,
                  }"
                :class="isVisibleBenefitsTitle ? 'fadeInRight animated' : ''">
              <li class="benefits__item">
                <h4 class="benefits__title">5 лет</h4>
                <p class="benefits__text">на рынке разработки</p>
              </li>
              <li class="benefits__item">
                <h4 class="benefits__title">Опыт</h4>
                <p class="benefits__text">в различных нишах</p>
              </li>
              <li class="benefits__item">
                <h4 class="benefits__title">Результат</h4>
                <p class="benefits__text">бескомпромиссный</p>
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
                С вашими идеями и моими решаниями
                мы воплотим продукт который вам поможет
              </div>
              <div class="benefits__card"
                   v-observe-visibility="{
                    callback: visibleBenefitsCard,
                     once: true,
                  }"
                   :class="isVisibleBenefitsCard ? 'fadeInDown animated' : ''">
                <span class="benefits__tip">02</span>
                Найдем дизайн решение достойное
                Вашей ниши
              </div>
              <div class="benefits__card"
                   v-observe-visibility="{
                    callback: visibleBenefitsCard,
                     once: true,
                    }"
                   :class="isVisibleBenefitsCard ? 'fadeInDown animated' : ''">
                <span class="benefits__tip">03</span>
                Мы работаем удаленно, в кофмортной
                для вас и меня обстановке
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
                :class="isVisibleLastChange ? 'fadeInLeft animated' : ''">Я н<span
              class="proposal__a letter-a white-e"></span> буду
              <span class="lastchance__span"><span class="lastchance__glich">умолять</span></span> в<span
                class="proposal__a letter-a white-a"></span>с</h2>
          </div>
          <div class="col-xl-5 d-flex justify-content-lg-end">
            <div class="lastchance__block"
                 v-observe-visibility="{
                    callback: visibleLastChange,
                     once: true,
                }"
                 :class="isVisibleLastChange ? 'fadeInRight animated' : ''">
              Я буду <strong>рад</strong>
              работать с вами, потому что ценю ваше время
              и потребности так же, как и свои
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
              <button @click="toggleModal" class="button lastchance__button glitch-btn" data-text="оставить заявку">
                <span>оставить заявку</span></button>
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
                                Владислав
                            </span>
                <span class="logo_surname">
                                Булгаков
                            </span>
              </nuxt-link>
              <div class="copyright">2018 Все права защищены</div>
              <div @click="scrollTo" class="goup d-flex" href="#header">
                <p class="goup_text">
                  Наверх
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
import HeaderSection from "@/components/portfolio/HeaderSection";
import ModalWork from "@/components/ModalWork";
import {mapMutations} from "vuex";
export default {
  name: "portfolio",
  transition: 'intro',
  components: {
    HeaderSection,
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
  methods: {
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
    ...mapMutations({
      toggleModal: 'app/toggleModal'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/grid.scss";

@import "~assets/scss/main_portfolio.css";


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
