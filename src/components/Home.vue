<template>
  <div class="home">

  <Main />
  <Popular />
  <Location />

  </div>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/Main"; 
import Popular from '@/components/Popular';
import Location from '@/components/Location';

export default {
  name: "Home",
  components: {
    Main,
    Popular,
    Location
  },
};
</script>


<style scoped>

</style>