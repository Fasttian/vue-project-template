<template>
  <div class="layout">
    <!-- header -->
    <Header></Header>
    <!-- header end -->

    <!-- main -->
    <div class="layout-main">
      <b-container>
        <router-view></router-view>
      </b-container>
    </div>
    <!-- main end -->

    <!-- footer -->
    <Footer></Footer>
    <!-- footer end -->
  </div>
</template>

<script>
import Header from "@/views/Header";
// import HelloWorld from '@/components/HelloWorld'
export default {
  name: "Layout",
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>

</style>

