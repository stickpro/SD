<template>
  <div>
    <Header/>
    <section class="main" id="main">
      <div class="container">
        <div class="row">
            <nuxt/>
          <div class="col-lg-4">
            <div class="blog__nav fadeOutOpacity animated">
              <Category/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/blog/Header"
import Category from "@/components/blog/Category";

export default {
  name: "blog",
  components: {
    Header,
    Category
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/grid.scss";
  @import "~assets/scss/blog.css";
</style>
