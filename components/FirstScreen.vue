<template>
  <header id="header" class="section">
    <div class="container">
      <div class="header_textline header_textline__up">[etdsqlbpfqyt</div>
      <div class="header_textline header_textline__up2">[etdsqlbpfqyt</div>
      <div class="header_textline header_textline__down">[etdsqlbpfqyt</div>
      <div class="header_textline header_textline__down2">[etdsqlbpfqyt</div>
      <div class="header_textline header_textline__up">[etdsqlbpfqyt</div>
      <div class="header_textline header_textline__up2">[etdsqlbpfqyt</div>
      <div class="header_textline header_textline__down">[etdsqlbpfqyt</div>
      <div class="header_textline header_textline__down2">[etdsqlbpfqyt</div>
      <div class="header_v-line header_v-line__left"></div>
      <div class="header_v-line header_v-line__middleleft"></div>
      <div class="header_v-line header_v-line__middleright"></div>
      <div class="header_v-line header_v-line__right"></div>
      <div class="menutop">
        <div class="logo" :class="{ slideInLeftLL: logoAnimated }">
          <span class="logo_letters">S</span>
          <span class="logo_letters logo_letters__b">d</span>
          <div class="logo_stroke">
            <span class="logo_dash"></span>
            <span class="logo_dash"></span>
          </div>
          <span class="logo_name">Владислав</span>
          <span class="logo_surname">Булгаков</span>
        </div>
        <a
          class="portfolio-word"
          :class="{ slideInLeftPL: logoAnimated }"
          href="#thirdPage"
        >Портфолио</a>
        <a
          class="email"
          :class="{ slideInLeftEL: logoAnimated }"
          href="mailto:"
          rel="external"
        >info@stick-design.ru</a>
        <a
          href="tel:+79187509500"
          :class="{ slideInRightT: logoAnimated }"
          class="tel"
        >+7 (918) 750-95-00</a>
        <a class="starter" :class="{ slideInRightS: logoAnimated }">
          Начать работу
          <span class="line-1"></span>
          <span class="line-2"></span>
          <span class="line-3"></span>
          <span class="line-4"></span>
        </a>
        <div class="hamburger js-MenuItem" :class="{ slideInRightH: logoAnimated }">
          <span class="hamburger_line hamburger_line__up"></span>
          <span class="hamburger_line hamburger_line__middleUp"></span>
          <span class="hamburger_line hamburger_line__middleBottom"></span>
          <span class="hamburger_line hamburger_line__bottom"></span>
        </div>
      </div>
      <div class="intro-portfolio-word-wrap">
        <a class="intro-portfolio-word" data-menuanchor="thirdPage" href="#thirdPage">Портфолио</a>
      </div>
      <div class="starter-mobile-wrap">
        <a class="starter starter-mobile">
          Начать работу
          <span class="line-1"></span>
          <span class="line-2"></span>
          <span class="line-3"></span>
          <span class="line-4"></span>
        </a>
      </div>
      <div class="socials" :class="{ slideInUpS: logoAnimated }">
        <div class="socials_icons">
          <a href="https://t.me/stick_qwe">
            <svg-icon 
              name="telegram"
              height="14px"
              width="14px"
            />
          </a>
          <a href="https://api.whatsapp.com/send?phone=79187509500">
            <svg-icon 
              name="whatsapp"
              height="14px"
              width="14px"
            />
          </a>
          <a href="https://vk.com/id383968">
            <svg-icon 
              name="vk"
              height="14px"
              width="14px"
            />
          </a>
          <a href="skype:stick_25?chat">
            <svg-icon 
              name="skype"
              height="14px"
              width="14px"
            />
          </a>
        </div>
        <div class="socials_text">Давайте знакомиться</div>
      </div>
      <div class="intro">
        <h1 @click="split">
          <span class="design split" v-model="text">Stick</span>
          <span class="bureau split" v-model="text">Design</span>
          <div class="intro_text split" v-model="text">Владислав&nbsp;Булгаков</div>
        </h1>
      </div>
      <div class="menuright-wrap">
        <div class="menuright-wrap2">
          <div class="menuright" :class="{ slideInDownM: logoAnimated }">
            <a class="menuright_item" href="#firstPage">
              <span class="menuright_number">
                <span class="zero">0</span>
                <span class="digit">
                  <div class="digit_square"></div>
                  <span class="digit_number">1</span>
                </span>
              </span>
              <span class="menuright_stroke"></span>
            </a>
            <a class="menuright_item" href="#secondPage">
              <span class="menuright_number">
                <span class="zero">0</span>
                <span class="digit">
                  <div class="digit_square"></div>
                  <span class="digit_number">2</span>
                </span>
              </span>
              <span class="menuright_stroke"></span>
            </a>
            <a class="menuright_item" href="#thirdPage">
              <span class="menuright_number">
                <span class="zero">0</span>
                <span class="digit">
                  <div class="digit_square"></div>
                  <span class="digit_number">3</span>
                </span>
              </span>
              <span class="menuright_stroke"></span>
            </a>
            <a class="menuright_item" href="#fourthPage">
              <span class="menuright_number">
                <span class="zero">0</span>
                <span class="digit">
                  <div class="digit_square"></div>
                  <span class="digit_number">4</span>
                </span>
              </span>
              <span class="menuright_stroke"></span>
            </a>
            <a class="menuright_item" href="#fifthPage">
              <span class="menuright_number">
                <span class="zero">0</span>
                <span class="digit">
                  <div class="digit_square"></div>
                  <span class="digit_number">5</span>
                </span>
              </span>
              <span class="menuright_stroke"></span>
            </a>
            <div class="menuright_pointer">
              <span class="pointer"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="section-footer">
        <div class="sloganwrap">
          <div class="slogan" :class="{ slideInLeft: logoAnimated }">
            <div class="slogan_title">Воплотим с нуля</div>
            <div class="slogan_text">Ваши идеи + мои решения = готовый продукт</div>
          </div>
        </div>
        <a class="triangle-coral" :class="{ slideInUp: logoAnimated }" href="#secondPage">
          <div></div>
          <svg-icon
            name="trigle_top"
            class="triangle-coral_item triangle-coral_item__top"
            width="21px"
            height="19px"
          />
          <svg-icon
            name="trigle_middle"
            class="triangle-coral_item triangle-coral_item__middle"
            width="17px"
            height="15px"
          />
          <svg-icon
            name="trigle_bottom"
            class="triangle-coral_item triangle-coral_item__bottom"
            width="12px"
            height="10px"
          />
        </a>
      </div>
    </div>
    <!-- Меню Гамбургера -->
    <div class="hamburgerMenu">
      <div class="hamburgerMenu_wrap">
        <div class="hamburgerMenu_top-wrap js-MenuItem">
          <div class="hamburgerMenu_top">
            <div class="container">
              <a class="logo hamburgerMenu_logo js-MenuItem" href="#firstPage">
                <span class="logo_letters">s</span>
                <span class="logo_letters logo_letters__b">d</span>
                <div class="logo_stroke">
                  <span class="logo_dash"></span>
                  <span class="logo_dash"></span>
                </div>
                <span class="logo_name">Владислав</span>
                <span class="logo_surname">Булгаков</span>
              </a>
              <div class="hamburgerMenu-icon hamburger-offer js-MenuItem">
                <span class="hamburger_line hamburger_line__up"></span>
                <span class="hamburger_line hamburger_line__middleUp"></span>
                <span class="hamburger_line hamburger_line__middleBottom"></span>
                <span class="hamburger_line hamburger_line__bottom"></span>
              </div>
            </div>
          </div>
        </div>

        <ul class="hamburgerMenu_list">
          <li class="hamburgerMenu_item hamburgerMenu__item1 js-MenuItem clearfix">
            <svg class="hamburgerMenu_triangle" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <polygon points="0,0 13,7.5 0,15" />
            </svg>
            <p>Главная</p>
          </li>
          <li class="hamburgerMenu_item hamburgerMenu__item2 js-MenuItem clearfix">
            <svg class="hamburgerMenu_triangle" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <polygon points="0,0 13,7.5 0,15" />
            </svg>
            <p>Основные принципы</p>
          </li>
          <li class="hamburgerMenu_item hamburgerMenu__item3 js-MenuItem clearfix">
            <svg class="hamburgerMenu_triangle" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <polygon points="0,0 13,7.5 0,15" />
            </svg>
            <p>Портфолио</p>
          </li>
          <li class="hamburgerMenu_item hamburgerMenu__item4 js-MenuItem clearfix">
            <svg class="hamburgerMenu_triangle" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <polygon points="0,0 13,7.5 0,15" />
            </svg>
            <p>Направления деятельности</p>
          </li>
          <li class="hamburgerMenu_item hamburgerMenu__item5 js-MenuItem clearfix">
            <svg class="hamburgerMenu_triangle" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <polygon points="0,0 13,7.5 0,15" />
            </svg>
            <p>Контакты</p>
          </li>
        </ul>
        <div class="hamburgerMenu_bottom js-MenuItem"></div>
      </div>
    </div>
  </header>
</template>
<script>
import { gsap } from "gsap"


export default {
  name: "FirstScreen",
  data() {
    return {
      logoAnimated: true,
      text: null,
      split: null
    };
  },
  mounted() {
    this.logoAnimated = true;
    console.log(this.text)
  },
  updated() {
    this.logoAnimated = false;
  },
  method: {
    random(min, max){
      return (Math.random() * (max - min)) + min;
    },
    split() {
        console.log(this.text)
    }

  }
};
</script>