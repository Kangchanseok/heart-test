<template lang="pug">
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import { getusername } from '../../service'

export default {
  created () {
    const token = this.$route.query.token
    console.log('token', token)
    if (token) {
      this.setToken(token)
      this.fetchUser()
    }
    console.log(getusername(token))
    this.$router.replace('/')
  },
  methods: {
    ...mapActions(['fetchUser']),
    ...mapMutations(['setToken'])
  }
}
</script>
