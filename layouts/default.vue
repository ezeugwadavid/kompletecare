<template>
    <div class="">
      <div class="row no-gutters">
        <div class="col-10 col-sm-3">
          <Sidenav /> 
        </div>
        <div class="col-2 main-content col-sm-9">
         <AppBody />
        </div>
      
     
    </div>
    </div>
  </template>

  <script>
  import AppBody from '~/components/body.vue'
  import Sidenav from '~/components/sidenav.vue'
  export default {
    name: 'default',
    components: {
        AppBody,
        Sidenav
    }
  }
</script>
