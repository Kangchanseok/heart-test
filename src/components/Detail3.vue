<template>
  <div class="detail3">
  <Search />
  <Detail1 />
  <Detail2 />
  </div>
</template>

<script>

import Search from '@/components/Search'
import Detail1 from '@/components/Detail1';
import Detail2 from '@/components/Detail2';
export default {
  name: "Detail3",
  components: {
    Search,
    Detail1,
    Detail2,
  },
};
</script>


<style scoped>
/* .search{
  margin-top: 0;
  margin-bottom: 0;
  
} */
</style>