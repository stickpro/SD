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

<style lang="scss" scoped>
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

.order {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  width: 100%;
  height: 100vh;
  background: #2d2d2d;
  color: #fff;
}

.order_wrap {
  height: 100%;
  float: left;
}

.order_wrap__left, .order_wrap__middle {
  -webkit-box-shadow: 3px 0 6px 0 rgba(4, 4, 4, 0.14);
  box-shadow: 3px 0 6px 0 rgba(4, 4, 4, 0.14);
}

.order_wrap__left {
  width: 22.7%;

.order_textline {
  margin-left: 80%;
}
}

.order_wrap__middle {
  width: 53%;
  position: relative;

.order_textline {
  margin-top: 106.3%;
  margin-left: 45%;
}
}

.order_content, .order_thankyou {
  position: absolute;
  top: 0;
  left: 0;
  width: 86.7%;
  margin-left: 4.5%;
  margin-top: 14%;
}

.order_content .headline, .order_thankyou .headline {
  color: #fd7878;
}

.order_form {
  margin-top: 68px;

p {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
  margin-bottom: 43px;
  position: relative;

&:nth-child(3) {
   margin-bottom: 130px;
 }

&:nth-child(4) {
   margin-bottom: 0;
 }
}

label {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: .23em;
  text-transform: uppercase;
  color: #fff;
  -ms-flex-item-align: end;
  align-self: flex-end;

&.error {
   position: absolute;
   bottom: -60%;
   text-align: center;
   width: 100%;
   font-size: 11px;
   font-weight: 400;
   text-transform: none;
   color: #fe2929;
   letter-spacing: 0.15em;
 }
}

input {
  width: 79%;
  height: 26px;
  border: none;
  border-bottom: 1px solid #fff;
  background: #2d2d2d;
  font-size: 20px;
  color: #fff;
  -webkit-transition: all .2s linear 0s;
  transition: all 0.2s linear 0s;

&:-webkit-autofill {
   -webkit-box-shadow: inset 0 0 0 100px #2d2d2d;
   -webkit-text-fill-color: #fff;
 }
}

select:-webkit-autofill, textarea:-webkit-autofill {
  -webkit-box-shadow: inset 0 0 0 100px #2d2d2d;
  -webkit-text-fill-color: #fff;
}

input {
&.error {
   border: none;
   border-bottom: 1px solid #fe2929;
   color: #fe2929;
 }

&:focus {
   border-bottom: 4px solid #fd7878;

~ .label {
  color: #fd7878;
}
}
}

button {
  float: right;
  width: 79%;
  height: 60px;
  background: #fff;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: .23em;
  text-transform: uppercase;
  color: #2d2d2d;
  border: none;
  margin-top: 67px;
  cursor: pointer;
  position: relative;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  -webkit-box-shadow: 0 0 1px transparent;
  box-shadow: 0 0 1px transparent;
  -webkit-transition: all .1s;
  transition: all 0.1s;

&:hover {
   background: #2d2d2d;
   color: #fff;
 }

&:after, &:before {
            content: "";
            position: absolute;
            z-index: -1;
            left: 50%;
            right: 50%;
            bottom: 0;
            background: #fff;
            height: 1px;
            -webkit-transition-property: left, right;
            transition-property: left, right;
            -webkit-transition-duration: .6s;
            transition-duration: .6s;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
          }

&:after {
   top: 0;
 }

&:active {
&::after, &::before {
             left: 0;
             right: 0;
           }
}

&:focus {
&::after, &::before {
             left: 0;
             right: 0;
           }
}

&:hover {
&::after, &::before {
             left: 0;
             right: 0;
           }
}
}
}

.order_thankyou {
  width: 95.5%;
  margin-top: 27%;

.headline {
  margin-bottom: 75px;
}

.thankyou-text {
  font-size: 14px;
  font-weight: 300;
  letter-spacing: .23em;
  text-transform: uppercase;
  border-bottom: 1px solid #fff;
  padding-bottom: 32px;
}

.thankyou-text-2 {
  font-weight: 700;
  margin-top: 39px;
}

.thankyou-text-3 {
  font-size: 12px;
  line-height: 26px;
  opacity: .35;
  width: 402px;
  border: none;
  text-transform: none;
  padding-bottom: 0;
  margin-top: 36px;
}

.order_close-button {
  width: 401px;
  height: 60px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: .23em;
  text-transform: uppercase;
  color: #2d2d2d;
  background: #fff;
  text-align: center;
  padding: 20px 0;
  margin-top: 38px;
  cursor: pointer;
  position: relative;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  -webkit-box-shadow: 0 0 1px transparent;
  box-shadow: 0 0 1px transparent;
  -webkit-transition: all .1s;
  transition: all 0.1s;

&:hover {
   background: #2d2d2d;
   color: #fff;
 }

&:after, &:before {
            content: "";
            position: absolute;
            z-index: -1;
            left: 50%;
            right: 50%;
            bottom: 0;
            background: #fff;
            height: 1px;
            -webkit-transition-property: left, right;
            transition-property: left, right;
            -webkit-transition-duration: .6s;
            transition-duration: .6s;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
          }

&:after {
   top: 0;
 }

&:active {
&::after, &::before {
             left: 0;
             right: 0;
           }
}

&:focus {
&::after, &::before {
             left: 0;
             right: 0;
           }
}

&:hover {
&::after, &::before {
             left: 0;
             right: 0;
           }
}
}
}

.order_wrap__right {
  width: 24.2%;

.order_textline {
  margin-top: 233%;
  margin-left: -5px;
}
}

.order_textline {
  font-family: BEYNO, sans-serif;
  font-size: 60px;
  letter-spacing: .75em;
  text-transform: uppercase;
  color: #313131;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
  -webkit-transform-origin: left top;
  transform-origin: left top;
  margin-top: 248%;
}

.order_close {
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 56px;
  margin-top: 100px;
  cursor: pointer;

p, svg {
  float: left;
}

p {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .23em;
  text-transform: uppercase;
  margin-right: 10px;
}
}
@media screen and (max-width: 1400px) {
  .order_close {
    margin-top: 50px;
  }

  .order_wrap__left {
    width: 18.7%;
  }

  .order_wrap__middle {
    width: 65%;
  }

  .order_wrap__right {
    width: 16.3%;
  }

  .order_form p:nth-child(3) {
    margin-bottom: 43px;
  }

  .order_content, .order_thankyou {
    margin-top: 8%;
  }

  .order_content {
    width: 90%;
    margin-left: 5%;
  }

  .order_form button {
    width: 524px;
  }

  .order_wrap__left .order_textline {
    margin-left: 60%;
  }

  .order_form {
    margin-top: 30px;
  }
}
@media screen and (max-width: 1400px) and (max-height: 710px) {

  .order_content {
    margin-top: 5%;
  }

  .order_form {
    margin-top: 20px;

    p {
      margin-bottom: 40px;

      &:nth-child(3) {
        margin-bottom: 40px;
      }
    }
  }

  .order_content .headline {
    line-height: 90px;
  }
}
@media screen and (max-width: 1200px) {

  .order_content {
    margin-top: 3%;
  }

  .order_form {
    margin-top: 20px;

    p {
      margin-bottom: 40px;

      &:nth-child(3) {
        margin-bottom: 40px;
      }
    }
  }

  .order_content .headline {
    line-height: 88px;
  }

  .order_form {
    input {
      width: 70%;
    }

    button {
      width: 395px;
    }
  }

  .order_thankyou .thankyou-text {
    font-size: 13px;
  }
}
@media screen and (max-width: 479px) {
  .order_thankyou {
    .thankyou-text-3 {
      width: 100%;
    }

    text-align: center;

    .thankyou-text-2 {
      line-height: 1.5;
    }
  }

  .order_form input {
    width: 67%;
  }
}
@media screen and (max-height: 1000px) {
  .order_form p:nth-child(3) {
    margin-bottom: 43px;
  }
}
</style>
