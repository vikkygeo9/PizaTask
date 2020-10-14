<template>
  <div class="row">
    
    <div class="col-9">
      <q-table
        class="my-sticky-virtscroll-table"
        virtual-scroll
        :pagination.sync="pagination"
        :rows-per-page-options="[0]"
        :virtual-scroll-sticky-size-start="48"
        row-key="index"
        title="Orders"
        :data="orders"
        :columns="columns"
        @row-click="onRowClick"
      />
    </div>
    <div class="col-3">
      <q-card >
        <q-card-section class="my-card bg-blue text-white">
          <div class="text-h6">Order # {{ this.ordersummary.orderId }}</div>
           <div class="text-h6">Customer Name {{ this.ordersummary.customername }}</div>
        </q-card-section>
        <q-card-section>
          <div class="q-mr-md">
          <div class="row">
  <div class="col-5">Name</div>
  <div class="col-3">Quantity</div>
  <div class="col-3">Price</div>
            </div>
            <OrderItem
              v-for="item in this.ordersummary.items"
              :key="item.name"
              :order="item"
            />
          </div>
          <div class="row">
     <div class="col-9">Total Amount</div>
     <div class="col-3">{{this.ordersummary.totalamount}}</div>
            </div>
        </q-card-section>

        <div v-if="this.ordersummary.orderstatus === 'Received'">
        <q-card-actions>
          <q-btn flat @click="OnChangeStatus($event)" title="Preparing">Preparing</q-btn>
          <q-btn flat @click="OnChangeStatus($event)" title="Ready to Serve" >Ready to Serve</q-btn>
        </q-card-actions>
        </div>
         <div v-if="this.ordersummary.orderstatus === 'Preparing'">
           <q-card-actions>
          <q-btn flat @click="OnChangeStatus($event)" title="Ready to Serve">Ready to Serve</q-btn>
          </q-card-actions>
           </div>

           <div v-if="this.ordersummary.orderstatus === 'Ready to Serve'">
           <q-card-actions>
          <q-btn flat @click="OnChangeStatus($event)" title="Delievered">Delivered</q-btn>
          </q-card-actions>
           </div>


      


      </q-card>
    </div>
  </div>
</template>

<script>
import OrderItem from "components/orderitem.vue";
const orders = [
  {
    orderId: 912221,
    customername: "Jim kelly",
    numberofitem: 8,
    totalamount: 6.0,
    orderstatus: "Received",
    items: [
      {
        name: "VegDeluxePizza",
        price: 320,
        quantity: 1
      },
      {
        name: "7up coke",
        price: 70,
        quantity: 1
      }
    ]
  },
  {
    orderId: 912222,
    customername: "Ram Singh",
    numberofitem: 8,
    totalamount: 6.0,
    orderstatus: "Preparing",
    items: [
      {
        name: "VegDeluxePizza",
        price: 320,
        quantity: 1
      },
      {
        name: "7up coke",
        price: 70,
        quantity: 1
      }
    ]
  },
  {
    orderId: 912223,
    customername: "Jim kelly",
    numberofitem: 8,
    totalamount: 6.0,
    orderstatus: "Ready to Serve",
    items: [
      {
        name: "VegDeluxePizza",
        price: 320,
        quantity: 1
      },
      {
        name: "7up coke",
        price: 70,
        quantity: 1
      }
    ]
  },
  {
    orderId: 912224,
    customername: "Jim kelly",
    numberofitem: 8,
    totalamount: 6.0,
    orderstatus: "Received",
    items: [
      {
        name: "VegDeluxePizza",
        price: 320,
        quantity: 1
      },
      {
        name: "7up coke",
        price: 70,
        quantity: 1
      }
    ]
  }
];

export default {
  components: { OrderItem },
  data() {
    return {
      orders,
      ordersummary: {},
      pagination: {
        rowsPerPage: 25
      },

      columns: [
        {
          name: "Orderid",
          label: "#",
          field: "orderId"
        },
        {
          name: "customername",
          label: "customername",
          align: "left",
          field: "customername",
          sortable: true
        },

        {
          name: "numberofitem",
          align: "center",
          label: "numberofitem",
          field: "numberofitem",
          sortable: true
        },
        {
          name: "totalamount",
          label: "totalamount",
          field: "totalamount",
          sortable: true
        },
        { name: "orderstatus", label: "orderstatus", field: "orderstatus" }
      ]
    };
  },
  methods: {
    onRowClick(evt, row) {
      this.ordersummary = row;
      console.log(row);
      console.log(this.ordersummary);
    },
    OnChangeStatus(evt)
    {
     let buttonname=evt.target.textContent;
     console.log(buttonname);
     if(buttonname=='Delivered')
     {
       this.orders.forEach((element, index) => {
         console.log("in array");
    if(element.orderId === this.ordersummary.orderId) {
       element.orderstatus = "Delivered";
    }
});
     }

 if(buttonname=='Preparing')
     {
       this.orders.forEach((element, index) => {
         console.log("in array");
    if(element.orderId === this.ordersummary.orderId) {
        element.orderstatus = "Preparing";
    }
});
     }

     if(buttonname=='Ready to Serve')
     {
       this.orders.forEach((element, index) => {
         console.log("in array");
    if(element.orderId === this.ordersummary.orderId) {
       console.log(element.orderId);
    }
});
     }

    }
  }
};
</script>
