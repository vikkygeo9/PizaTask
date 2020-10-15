<template>
  
   <div class="q-pa-md">
    <q-toolbar class="bg-purple text-white shadow-2 rounded-borders">
      <q-btn flat label="Homepage" to="/"/>
      <q-space />

      <q-tabs v-model="tab" shrink stretch>
       
       <q-route-tab
    label="Create Order"
    to="/CreateOrder"
    icon="create"
  />

  
      </q-tabs>
    </q-toolbar>
    <div>
     <router-view />
    </div>
  </div>
  </template>

<script>
export default {
  data () {
    return {
      tab: 'mails'
    }
  }
}
</script>
