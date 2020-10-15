<template>
  <div>
    <div style="width: 500px; margin: 0 auto;">
      <div class="q-pa-md row text-h6 bg-blue">Create New Order</div>
      <div class="row q-ma-md">
        <div class="col-8">
          <q-input
            rounded
            outlined
            label="Customer Name"
            v-model="customername"
          />
        </div>
      </div>

      <div v-for="(item, index) in items" :key="index">
        <div class="text-h6">Item {{ index }}</div>
        <div class="row">
          <div class="col-8">
            <q-input
              rounded
              outlined
              bottom-slots
              label="Item Name"
              counter
              maxlength="12"
              v-model="item.name"
            />
          </div>
        </div>
        <div>
          <div class="row">
            <div class="col-8">
              <q-input
                type="number"
                rounded
                outlined
                label="Quantity"
                v-model="item.quantity"
              />
            </div>
          </div>
        </div>
        <div class="q-pa-md row">
          <div class="col-8">
            <q-input rounded outlined v-model="item.price" label="Price" />
          </div>
        </div>

        <div class="q-pa-md row">
          <div class="col-8">
            <q-btn
              push
              color="white"
              text-color="primary"
              round
              icon="add_circle"
              @click="addItem()"
            />
            <q-btn
              push
              color="white"
              text-color="primary"
              round
              icon="remove_circle"
              @click="removeItem(index)"
            />
          </div>
        </div>

       
      </div>
       <div class="q-pa-md row">
          <div class="col-8">
            <q-btn rounded label="Place Order" class="bg-blue" @click="add()" />
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import orders from "..//datastore/pizaadatastore.js";
export default {
  name: "PageIndex",
  data() {
    return {
      orders: orders,
      customername: "",
      index: 0,
      items: [
        {
          name: "",
          quantity: "",
          price: ""
        }
      ]
    };
  },
  methods: {
    //Adding item dynamically
    addItem() {
      this.items.push({
        name: "",
        quantity: "",
        price: ""
      });
      this.index++;
    },
    //Remove item dynamically
    removeItem(index) {
      this.items.splice(index, 1);
      this.index--;
    },
    add() {
      let orderid = Math.floor(100000 + Math.random() * 900000);//random order id
      console.log(this.customername);

      let totalamount;
      var sum = 0.0;
      for (let i = 0; i < this.items.length; i++) {
        sum = (
          parseFloat(this.items[i].price) * parseInt(this.items[i].quantity) +
          parseFloat(sum)
        ).toFixed(2);
      }
      console.log("totalamount" + sum);

      console.log(this.orders);
      this.orders.push({
        customername: this.customername,
        items: this.items,
        numberofitem: this.items.length,
        orderId: orderid,
        orderstatus: "Received",
        totalamount: sum
      });
      console.log("post add" + this.orders);
      this.$router.push("/")
    }
  }
};
console.log("hey");
</script>
<style></style>
