<template>
  <transition name="slide-fade" mode="out-in">
    <div class="order clearfix" v-show="modal">
      <div class="container">
        <div class="order_wrap order_wrap__left">
          <div class="order_textline">
            binqhwakzfup
          </div>
        </div>
        <div class="order_wrap order_wrap__middle">
          <div class="order_textline">
            binqhwakzfup
          </div>
          <div class="order_content">
            <div class="headline">
              Начнем <br>работу?
            </div>
            <form class="order_form clearfix" id="popupResult" action="action.php">
              <p>
                <input type="text" name="name" id="name" required>
                <label class="label" for="name">Имя</label>
              </p>
              <p>
                <input type="text" name="email" required>
                <label class="label" for="name">E-mail</label>
              </p>
              <p>
                <input type="text" name="tel" required>
                <label class="label" for="name">Телефон</label>
              </p>
              <p>
                <input type="text" name="text">
                <label class="label" for="name">Описание</label>
              </p>
              <button type="submit" data-submit>
                Отправить заявку
              </button>
            </form>
          </div>
          <div class="order_thankyou">
            <div class="headline">
              Спасибо
            </div>
            <p class="thankyou-text thankyou-text-1">
              Заявка успешно отправлена
            </p>
            <p class="thankyou-text thankyou-text-2">
              Наши специалисты свяжутся с вами в ближайшее время
            </p>
            <p class="thankyou-text thankyou-text-3">
              Все ваши личные данные находятся под защитой, и никогда не будут переданы третьим лицам.
            </p>
            <div class="order_close-button">
              Закрыть
            </div>
          </div>
        </div>
        <div class="order_wrap order_wrap__right">
          <div class="order_textline">
            binqhwakzfup
          </div>
          <div class="order_close" @click="toggleModal">
            <p>
              Close
            </p>
            <svg-icon name="close"  width="10px" height="10px"/>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "ModalWork",
  computed: {
    ...mapGetters({
      modal: 'app/modal',
    }),
  },
  methods: {
    ...mapMutations({
      toggleModal: 'app/toggleModal'
    }),
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
