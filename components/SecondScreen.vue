<template>
  <section id="offer" class="section">
    <div class="offer_wrap">
      <div class="offer_row offer_row__top">
        <div class="container">
          <div class="offer-letters-d">
            <span
              class="offer-letters offer-letter-d"
              :class="{offerLetterDMove: config.animation}"
            >s</span>
            <span
              class="offer-letters offer-letter-d"
              :class="{offerLetterDMove: config.animation}"
            >s</span>
          </div>
        </div>
      </div>
      <div class="offer_row offer_row__middletop">
        <div class="offer_box">
          <div class="headline">
            <svg width="480.55" height="275.5">
              <g clip-path="url(#offerHeadlinePath1)">
                <foreignObject
                  class="offer-headline offer-headline1"
                  x="0"
                  y="1"
                  width="190"
                  height="94"
                >
                  <text text-anchor="start" textLength="145" lengthAdjust="spacing">Вам</text>
                </foreignObject>
              </g>
              <g clip-path="url(#offerHeadlinePath2)">
                <foreignObject
                  class="offer-headline offer-headline2"
                  x="0"
                  y="97"
                  width="480"
                  height="94"
                >
                  <text text-anchor="start" textLength="480" lengthAdjust="spacing">не&nbsp;нужен</text>
                </foreignObject>
              </g>
              <g clip-path="url(#offerHeadlinePath3)">
                <foreignObject
                  class="offer-headline offer-headline3"
                  x="0"
                  y="193"
                  width="467"
                  height="94"
                >
                  <text text-anchor="start" textLength="247" lengthAdjust="spacing">сайт</text>
                </foreignObject>
              </g>

              <g clip-path="url(#offerHeadlinePath1)">
                <foreignObject
                  class="offer-headline-white offer-headline-white1 PathTextHover"
                  x="0"
                  y="1"
                  width="190"
                  height="94"
                >
                  <text text-anchor="start" textLength="145" lengthAdjust="spacing">Вам</text>
                </foreignObject>
              </g>
              <g clip-path="url(#offerHeadlinePath2)">
                <foreignObject
                  class="offer-headline-white offer-headline-white2 PathTextHover"
                  x="0"
                  y="97"
                  width="480"
                  height="94"
                >
                  <text text-anchor="start" textLength="480" lengthAdjust="spacing">не&nbsp;нужен</text>
                </foreignObject>
              </g>
              <g clip-path="url(#offerHeadlinePath3)">
                <foreignObject
                  class="offer-headline-white offer-headline-white3 PathTextHover"
                  x="0"
                  y="193"
                  width="467"
                  height="94"
                >
                  <text text-anchor="start" textLength="247" lengthAdjust="spacing">сайт</text>
                </foreignObject>
              </g>

              <defs>
                <clipPath id="offerHeadlinePath1">
                  <text
                    id="offerPathText1"
                    text-anchor="start"
                    x="0"
                    y="76"
                    class
                    textLength="189"
                    lengthAdjust="spacing"
                  >Вам</text>
                </clipPath>
                <clipPath id="offerHeadlinePath2">
                  <text
                    id="offerPathText2"
                    text-anchor="start"
                    x="0"
                    y="172"
                    class
                    textLength="470"
                    lengthAdjust="spacing"
                  >не нужен</text>
                </clipPath>
                <clipPath id="offerHeadlinePath3">
                  <text
                    id="offerPathText3"
                    text-anchor="start"
                    x="0"
                    y="269"
                    class
                    textLength="236"
                    lengthAdjust="spacing"
                  >сайт</text>
                </clipPath>
              </defs>
            </svg>
          </div>

          <div class="offer_white-line-wrap">
            <div class="offer_white-line"></div>
          </div>

          <div class="offer_text-wrap">
            <div
              class="offer_text"
              :class="{offerTextMove: config.animation}"
            >Сайт - это просто веб-страница, а вам нужен инструмент для привлечение клиентов и увелечения продаж</div>
          </div>
        </div>
      </div>
      <div class="offer_row">
        <div class="offer_row offer_row__middlebottom">
          <ul class="advantages container-hidden">
            <li class="advantages_item">
              <span class="advantages_number">1</span>
              <svg class="advantages_triangle" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polygon points="0,0 15,0 7.5,13" />
              </svg>
              <div class="advantages_text">Исследование ниши и целевой аудитории</div>
            </li>
            <li class="advantages_item">
              <span class="advantages_number">2</span>
              <svg class="advantages_triangle" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polygon points="0,0 15,0 7.5,13" />
              </svg>
              <div class="advantages_text">Поиск компромисных дизайн-решений</div>
            </li>
            <li class="advantages_item">
              <span class="advantages_number">3</span>
              <svg class="advantages_triangle" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polygon points="0,0 15,0 7.5,13" />
              </svg>
              <div class="advantages_text">Современные стандарты разработки</div>
            </li>
          </ul>
          <div class="container">
            <div class="offer-letters-b">
              <span
                class="offer-letters offer-letter-b"
                :class="{offerLetterBMove: config.animation}"
              >d</span>
              <span
                class="offer-letters offer-letter-b"
                :class="{offerLetterBMove: config.animation}"
              >d</span>
            </div>
          </div>
        </div>
        <div class="offer_row offer_row__middlebottom-content">
          <ul class="advantages">
            <li class="advantages_item">
              <span
                class="advantages_number advantages_number__one"
                :class="{advantagesNumberMove1: config.animation}"
              >1</span>
              <svg-icon
                name="trigle"
                class="advantages_triangle advantages_triangle__one"
                :class="{advantagesTriangleMove1: config.animation}"
                width="15px"
                height="13px"
              />
              <div class="advantages_text-wrap advantages_text-wrap__one">
                <div
                  class="advantages_text advantages_text__one"
                  :class="{advantagesTextMove1: config.animation }"
                >Исследование ниши и целевой аудитории</div>
              </div>
            </li>
            <li class="advantages_item">
              <span
                class="advantages_number advantages_number__two"
                :class="{advantagesNumberMove2: config.animation}"
              >2</span>
              <svg-icon
                name="trigle"
                class="advantages_triangle advantages_triangle__two"
                :class="{advantagesTriangleMove2: config.animation}"
                width="15px"
                height="13px"
              />
              <div class="advantages_text-wrap advantages_text-wrap__two">
                <div
                  class="advantages_text advantages_text__two"
                  :class="{advantagesTextMove2: config.animation }"
                >Поиск компромисных дизайн-решений</div>
              </div>
            </li>
            <li class="advantages_item">
              <span
                class="advantages_number advantages_number__three"
                :class="{advantagesNumberMove3: config.animation}"
              >3</span>
              <svg-icon
                name="trigle"
                class="advantages_triangle advantages_triangle__three"
                :class="{advantagesTriangleMove3: config.animation}"
                width="15px"
                height="13px"
              />
              <div class="advantages_text-wrap advantages_text-wrap__three">
                <div
                  class="advantages_text advantages_text__three"
                  :class="{advantagesTextMove3: config.animation }"
                >Современные стандарты разработки</div>
              </div>
            </li>
          </ul>
          <div class="container container-hidden">
            <div class="offer-letters-b">
              <span class="offer-letters offer-letter-b">b</span>
              <span class="offer-letters offer-letter-b">b</span>
            </div>
          </div>
        </div>
      </div>
      <div class="offer_row offer_row__bottom"></div>
    </div>
    <div class="container">
      <div class="offer-frame-top">
        <div class="offer-portfolio-word" @click="config.fullpageApi.moveSectionDown()">Портфолио</div>
        <div class="hamburger hamburger-offer js-MenuItem" @click="toggleMenu">
          <span class="hamburger_line hamburger_line__up"></span>
          <span class="hamburger_line hamburger_line__middleUp"></span>
          <span class="hamburger_line hamburger_line__middleBottom"></span>
          <span class="hamburger_line hamburger_line__bottom"></span>
        </div>
      </div>
      <div class="offer-line"></div>
      <div class="offer-footer">
        <div class="logo"  @click="config.fullpageApi.moveTo(1)">
          <span class="logo_letters">s</span>
          <span class="logo_letters logo_letters__b">d</span>
          <div class="logo_stroke">
            <span class="logo_dash"></span>
            <span class="logo_dash"></span>
          </div>
          <span class="logo_name">Владислав</span>
          <span class="logo_surname">Булгаков</span>
        </div>
        <div class="lang">ru</div>
      </div>
    </div>
  </section>
</template>
<script>
import {mapMutations} from "vuex";

export default {
  name: "SecondScreen",
  props: ["config"],
  methods: {
  ...mapMutations({
      toggleMenu: 'app/toggleMenu'
    })
  }
};
</script>
