<template>
<div>
  <div class="row q-ma-md ">
 
  <div class="col-6" >{{order.name}}</div>
  <div class="col-3" >{{order.quantity}}</div>
  <div class="col-3" >{{order.price}}</div>

  </div>
</div>
  
</template>
<script>
export default {
  name: 'OrderItem',
  props: {
   order: Object
  }
}
</script>