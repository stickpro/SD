<template>
  <full-page :options="options" id="fullpage">
    <FirstScreen />
    <SecondScreen />
  </full-page>
</template>

<script>
import FirstScreen from "@/components/FirstScreen";
import SecondScreen from "@/components/SecondScreen";
export default {
  components: {
    FirstScreen,
    SecondScreen
  },
  data() {
    return {
      options: {
        anchors: [
          "firstPage",
          "secondPage",
          "thirdPage",
          "fourthPage",
          "fifthPage"
        ],
        menu: "#menuright",
        css3: false,
        scrollingSpeed: 1200,
        // scrollBar: true,
        // fitToSection: false,
        responsiveWidth: 768,
        responsiveHeight: 480
      }
    };
  }
};
</script>
