<template lang="html">
  <section class="property-dashboard">
    <PropertyList></PropertyList>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'PropertyDashboard',
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
      PropertyList: () => import('@/components/property/property-list.vue')
    }
}
</script>

<style scoped></style>
