<template>
  <navbar></navbar>

  <router-view></router-view>
</template>

<script>

import Navbar from "@/components/Navbar.vue";
import PageViewer from "@/views/PageViewer.vue";
import CreatePage from "@/views/CreatePage.vue";
export default {
  components:{
    Navbar
  },
  methods: {
    pageCreated(pageObj){

      this.pages.push(pageObj);
    }
  }
}

</script>