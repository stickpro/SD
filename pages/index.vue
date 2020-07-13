<template>
  <full-page :options="options" ref="fullpage">
    <FirstScreen :config.sync="firstPage" />
    <SecondScreen :config.sync="secondPage" />
    <PortfolioScreen :config.sync="portfolioPage" />
  </full-page>
</template>

<script>
import FirstScreen from "@/components/FirstScreen";
import SecondScreen from "@/components/SecondScreen";
import PortfolioScreen from "@/components/PortfolioScreen";
export default {
  components: {
    FirstScreen,
    SecondScreen,
    PortfolioScreen
  },
  data() {
    return {
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        menu: "#menuright",
        css3: false,
        scrollingSpeed: 1200,
        anchors: [
          "firstPage",
          "secondPage",
          "thirdPage",
          "fourthPage",
          "fifthPage"
        ],
        responsiveWidth: 768,
        responsiveHeight: 480,
        afterLoad: this.afterLoad,
        onLeave: this.onLeave
      },
      animation: false,
      logoAnimated: true,
      firstPage: {
        animation: true,
        menuBlack: false,
        menuIndex: 0,
        fullpageApi: {}
      },
      secondPage: {
        animation: false,
        timeOutAnim: false,
        fullpageApi: {}
      },
      portfolioPage: {
        animation: false,
        fullpageApi: {}
      },
    };
  },
  methods: {
    afterLoad: function(origin, destination, direction) {
      if (destination.index == 1) {
        this.firstPage.animation = false;
        this.firstPage.menuBlack = true;
        //second Page
        this.secondPage.animation = true;
      }

      if (destination.index == 2) {
        this.portfolioPage.animation = true
        setTimeout(this.portfolioPage.timeOutAnim = true, 4500)
        this.firstPage.menuBlack = false;

      }
    },
    onLeave: function(origin, destination, direction) {
      this.firstPage.menuIndex = destination.index;
      if (destination.index == 0) {
        this.firstPage.animation = true;
        this.firstPage.menuBlack = false;

      }

      if (destination.index == 2) {
      }
    }
  },
  mounted() {
    this.firstPage.fullpageApi = this.$refs.fullpage.api;
  }
};
</script>
