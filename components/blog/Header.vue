<template>
  <header class="header-case" id="header">
    <nav class="nav-bar">
      <div class="container-fluid d-flex justify-content-between align-items-center flex-wrap">
        <nuxt-link to="/" class="logo animated fadeInLeft">
          <div class="logo_stroke">
            <span class="logo_dash"></span>
            <span class="logo_dash"></span>
          </div>
          <span class="logo_letters">s</span>
          <span class="logo_letters logo_letters__b">d</span>
          <span class="logo_name">
                        Владислав Булгаков
                    </span>
        </nuxt-link>
        <div class="social d-flex">
          <a href="https://t.me/stick_qwe" class="social__item animated fadeInLeft">
            <svg-icon name="telegram" height="14px" width="14px" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=79187509500" class="social__item animated fadeInLeft">
            <svg-icon name="whatsapp" height="14px" width="14px" />
          </a>
          <a href="https://vk.com/id383968" class="social__item animated fadeInLeft">
            <svg-icon name="vk" height="14px" width="14px" />
          </a>
          <a href="skype:stick_25?chat" class="social__item animated fadeInLeft">
            <svg-icon name="skype" height="14px" width="14px" />
          </a>
        </div>
        <div class="contacts animated fadeInRight">
          <a href="mailto:info@stick-design.ru" class="mail">info@stick-design.ru</a>
          <a href="tel:+79187509500" class="phone">+7 (918) 750-95-00</a>
        </div>
      </div>
    </nav>
    <div class="main-header blog-page" id="main-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="headline blogTitle AddOpacity animated">
              блог
            </div>
          </div>
        </div>
      </div>
      <div class="case__name">
        <div class="case__wrapper">
          <nuxt-link to="/">главная</nuxt-link> / Блог
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header.vue"
}
</script>

<style lang="scss" scoped>

@import "~assets/scss/grid.scss";
@import "~assets/scss/blog.css";
</style>
