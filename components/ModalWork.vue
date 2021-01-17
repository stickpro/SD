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
          <div class="order_content" v-if="!success">
            <div class="headline">
              {{ $t('modal.start') }}<br>{{ $t('modal.work') }}?
            </div>
            <div class="order_form clearfix" id="popupResult">
              <p>
                <input type="text"
                       name="name"
                       v-model="name"
                       @mouseenter="errors.name = false"
                       required>
                <label class="error" v-if="errors.name">{{ $t('modal.errors.name') }}</label>
                <label class="label">{{ $t('modal.name') }}</label>
              </p>
              <p>
                <input type="text"
                       name="email"
                       v-model="email"
                       @mouseenter="errors.email = false"
                       required>
                <label class="error" v-if="errors.email">{{ $t('modal.errors.email') }}</label>
                <label class="label">{{ $t('modal.email') }}</label>
              </p>
              <p>
                <input type="number"
                       name="tel"
                       v-model="phone"
                       @mouseenter="errors.phone = false"
                       required>
                <label class="error" v-if="errors.phone">{{ $t('modal.errors.phone') }}</label>
                <label class="label">{{ $t('modal.phone') }}</label>
              </p>
              <p>
                <input type="text" name="text" v-model="message">
                <label class="label">{{ $t('modal.message') }}</label>
              </p>
              <button type="submit" @click="submit">
                {{ $t('modal.submit') }}
              </button>
            </div>
          </div>
          <div class="order_thankyou" v-else>
            <div class="headline">
              {{ $t('modal.thank_you.title') }}
            </div>
            <p class="thankyou-text thankyou-text-1">
              {{ $t('modal.thank_you.text') }}
            </p>
            <p class="thankyou-text thankyou-text-2">
              {{ $t('modal.thank_you.text2') }}
            </p>
            <p class="thankyou-text thankyou-text-3">
              {{ $t('modal.thank_you.text3') }}
            </p>
            <div class="order_close-button"  @click="toggleModal">
              {{ $t('modal.thank_you.close') }}
            </div>
          </div>
          <div class="order_thankyou" v-if="errorMessage">
            <div class="headline">
              Простите =(
            </div>
            <p class="thankyou-text thankyou-text-1">
              Произошла ошибка на сервере, попробуйте отправить сообщение позже,
              либо свяжитесь со мной любым другим удобным способом
            </p>
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
            <svg-icon name="close" width="10px" height="10px"/>
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
  data: () => ({
    success: false,
    name: '',
    email: '',
    phone: '',
    message: null,
    errorMessage: false,
    errors: {
      name: false,
      email: false,
      phone: false,
    },
  }),
  computed: {
    ...mapGetters({
      modal: 'app/modal',
    }),
  },
  methods: {
    ...mapMutations({
      toggleModal: 'app/toggleModal'
    }),
    submit() {
      if (this.name.length <= 3) {
        this.errors.name = true
      }
      if (!this.validEmail(this.email)) {
        this.errors.email = true
      }
      if (this.phone.length > 12 || this.phone.length < 7) {
        this.errors.phone = true
      }
      if (!Object.values(this.errors).includes(true)) {
        try {
          this.success = true
          this.sendRequest()
        } catch {
          this.errorMessage = true
        }
      }
    },
    async sendRequest() {
      await this.$axios.$post('api/telegrams/send', {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message
      })
    },
    validEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
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
  /* .slide-fade-leave-active below version 2.1.8 */
{
  transform: translateX(10px);
  opacity: 0;
}
</style>
