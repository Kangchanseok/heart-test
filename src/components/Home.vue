<template>
  <div class="home">

  <Main />
  <Popular2 />
  <Location />

  </div>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/Main"; 
import Popular2 from '@/components/Popular2';
import Location from '@/components/Location';

export default {
  name: "Home",
  components: {
    Main,
    Popular2,
    Location
  },
};
</script>


<style scoped>

</style>