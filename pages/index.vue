<template>
      <full-page :options="options" ref="fullpage" id="fullpage">
        <FirstScreen :config.sync="firstSection"/>
        <SecondScreen :config.sync="secondSection"/>
        <PortfolioScreen :config.sync="portfolioSection"/>
        <ServiceScreen :config.sync="serviceSection"/>
        <FooterScreen :config.sync="footerSection"/>
        <Menu :config.sync="menuSection"/>
        <ModalWork/>
      </full-page>
</template>

<script>
import FirstScreen from "@/components/FirstScreen";
import SecondScreen from "@/components/SecondScreen";
import PortfolioScreen from "@/components/PortfolioScreen";
import ServiceScreen from "@/components/ServiceScreen";
import FooterScreen from "@/components/FooterScreen";
import ModalWork from "@/components/ModalWork";

export default {
  transition: 'intro',
  components: {
    FirstScreen,
    SecondScreen,
    PortfolioScreen,
    ServiceScreen,
    FooterScreen,
    ModalWork
  },
  head() {
    return {
      title: this.$t('home.meta.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('home.meta.description')
        },

        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$t('home.meta.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('home.meta.description')
        },
      ]
    }
  },
  data() {
    return {
      options: {
        menu: "#menuright",
        css3: false,
        scrollingSpeed: 1200,
        responsiveWidth: 768,
        responsiveHeight: 480,
        afterLoad: this.afterLoad,
        onLeave: this.onLeave
      },
      animation: false,
      logoAnimated: true,
      firstSection: {
        animation: true,
        menuBlack: false,
        menuIndex: 0,
        fullpageApi: {}
      },
      secondSection: {
        animation: false,
        fullpageApi: {}
      },
      portfolioSection: {
        animation: false,
        timeOutAnim: true,
        fullpageApi: {}
      },
      serviceSection: {
        animation: false,
        timeOutAnim1: false,
        timeOutAnim2: false,
        timeOutAnim3: false,
        timeOutAnim4: false,
        timeOutAnim5: false,
        timeOutAnim6: false,
        timeOutAnim7: false,
        fullpageApi: {},
      },
      footerSection: {
        animation: false,
        goAnimation: false,
        fullpageApi: {},
      },
      menuSection: {
        fullpageApi: {},
      }
    };
  },
  methods: {
    afterLoad: function (origin, destination, direction) {
      if (destination.index == 1) {
        this.firstSection.animation = false;
        //this.firstSection.menuBlack = true;
        //second Page
        this.secondSection.animation = true;
      }
      if (destination.index == 2) {
        this.portfolioSection.animation = true;
        setTimeout((this.portfolioSection.timeOutAnim = false), 4500);
        this.firstSection.menuBlack = false;
      }
      if (destination.index == 3) {
        this.serviceSection.animation = true
        this.firstSection.menuBlack = true
        setTimeout(() => (this.serviceSection.timeOutAnim1 = true), 1100)
        setTimeout(() => (this.serviceSection.timeOutAnim2 = true), 1900)
        setTimeout(() => (this.serviceSection.timeOutAnim3 = true), 2700)
        setTimeout(() => (this.serviceSection.timeOutAnim4 = true), 3500)
        setTimeout(() => (this.serviceSection.timeOutAnim5 = true), 4400)
        setTimeout(() => (this.serviceSection.timeOutAnim6 = true), 7000)
      }
      if (destination.index == 4) {
        this.firstSection.menuBlack = false
        this.footerSection.animation = true
        this.footerSection.goAnimation = true

      }
    },
    onLeave: function (origin, destination, direction) {
      this.firstSection.menuIndex = destination.index;
      if (destination.index == 0) {
        this.firstSection.animation = true;
        this.firstSection.menuBlack = false;
      }
      if (origin.index == 0 && destination.index == 1) {
        this.firstSection.menuBlack = true
      }
      if (destination.index == 4 && origin.index == 3) {
      }
    }
  },
  mounted() {

      this.firstSection.fullpageApi = this.$refs.fullpage.api;
      this.secondSection.fullpageApi = this.$refs.fullpage.api;
      this.portfolioSection.fullpageApi = this.$refs.fullpage.api;
      this.serviceSection.fullpageApi = this.$refs.fullpage.api;
      this.footerSection.fullpageApi = this.$refs.fullpage.api;

      this.menuSection.fullpageApi = this.$refs.fullpage.api;
  }
};
</script>
<style lang="scss">
 #fullpage {
  @import '@/assets/scss/main.scss';
}
</style>
