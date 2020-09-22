<template lang="html">
  <section class="tenant-dashboard">
    <h1>tenant-dashboard Component</h1>

    <TenantList></TenantList>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'TenantDashboard',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    },
    components: {
      TenantList: () => import('@/components/tenant/tenant-list.vue')
    }
}
</script>

<style scoped></style>
