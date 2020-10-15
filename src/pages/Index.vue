<template>
  <div>
    <div class="row">
      <div class="q-pa-md">
        <div class="q-gutter-sm">
          <q-radio
            v-model="orderstate"
            val="All"
            label="All"
            @input="activatefilter($event)"
          />
          <q-radio
            v-model="orderstate"
            val="Received"
            label="Received"
            @input="activatefilter($event)"
          />
          <q-radio
            v-model="orderstate"
            val="Preparing"
            label="Preparing"
            @input="activatefilter($event)"
          />
          <q-radio
            v-model="orderstate"
            val="Ready to Serve"
            label="Ready to server"
            @input="activatefilter($event)"
          />
          <q-radio
            v-model="orderstate"
            val="Delievered"
            label="Delievered"
            @input="activatefilter($event)"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-7 q-pa-md">
        <q-table
          class="my-sticky-virtscroll-table"
          virtual-scroll
          :pagination.sync="pagination"
          :rows-per-page-options="[0]"
          :virtual-scroll-sticky-size-start="48"
          row-key="index"
          title="Orders"
          :data="orderlist"
          :columns="columns"
          @row-click="onRowClick"
        />
      </div>
      <div class="col-3 q-pa-md">
        <q-card>
          <q-card-section class="my-card bg-blue text-white">
            <div class="text-h6 text-center">
              <u>{{ this.ordersummary.orderstatus }}</u>
            </div>
            <div class="text-h6">Order# : {{ this.ordersummary.orderId }}</div>
            <div class="text-h6">
              Name : {{ this.ordersummary.customername }}
            </div>
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
            <q-separator inset />
            <div class="row">
              <div class="col-8">Total Amount</div>
              <div class="col-3">{{ this.ordersummary.totalamount }}</div>
            </div>
          </q-card-section>

          <div v-if="this.ordersummary.orderstatus === 'Received'">
            <q-card-actions>
              <q-btn flat @click="OnChangeStatus($event)" class="bg-blue text-white" title="Preparing"
                >Preparing</q-btn
              >
              <q-btn flat @click="OnChangeStatus($event)" class="bg-blue text-white" title="Ready to Serve"
                >Ready to Serve</q-btn
              >
            </q-card-actions>
          </div>
          <div v-if="this.ordersummary.orderstatus === 'Preparing'">
            <q-card-actions>
              <q-btn flat @click="OnChangeStatus($event)"  class="bg-blue text-white" title="Ready to Serve"
                >Ready to Serve</q-btn
              >
            </q-card-actions>
          </div>

          <div v-if="this.ordersummary.orderstatus === 'Ready to Serve'">
            <q-card-actions>
              <q-btn flat @click="OnChangeStatus($event)" class="bg-blue text-white"  title="Delievered"
                >Delivered</q-btn
              >
            </q-card-actions>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import OrderItem from "components/orderitem.vue";
import orders from "..//datastore/pizaadatastore.js";// Static data from js

export default {
  components: { OrderItem },
  data() {
    return {
      orders: orders,
      orderlist: orders,
      ordersummary: {},
      orderstate: false,

      pagination: {
        rowsPerPage: 25
      },

      columns: [
        {
          name: "Orderid",
          label: "Order #",
          field: "orderId"
        },
        {
          name: "customername",
          label: "Customer Name",
          align: "left",
          field: "customername",
          sortable: true
        },

        {
          name: "numberofitem",
          align: "center",
          label: "No Of Item",
          field: "numberofitem",
          sortable: true
        },
        {
          name: "totalamount",
          label: "Total Amount",
          field: "totalamount",
          sortable: true
        },
        { name: "orderstatus", label: "Current Status", field: "orderstatus" }
      ]
    };
  },
  methods: {
    //Handler for Row click on Grid View
    onRowClick(evt, row) {
      this.ordersummary = row;
      console.log(this.ordersummary);
    },

    //This method will filter order list data based on order status
    filterOrder(orderstatus) {
      this.orderlist = this.orders.filter(function(order) {
        return order.orderstatus == orderstatus;
      });
    },

    //this method handle radio button click selection and change the view accordingly
    activatefilter(value) {
      switch (value) {
    
        case "Ready to Serve":
          this.filterOrder("Ready to Serve");
          break;

        case "Received":
          this.filterOrder("Received");
          break;

        case "Preparing":
          this.filterOrder("Preparing");
          break;
        case "Delievered":
          this.filterOrder("Delievered");
          break;
        default:
          this.orderlist = this.orders;
      }
    },
    OnChangeStatus(evt) {
      let buttonname = evt.target.textContent;
      console.log(buttonname);
      if (buttonname == "Delivered") {
        this.orders.forEach((element, index) => {
        
          if (element.orderId === this.ordersummary.orderId) {
            element.orderstatus = "Delievered";
          }
        });
         this.activatefilter(this.orderstate);
      }

      if (buttonname == "Preparing") {
        this.orders.forEach((element, index) => {
         
          if (element.orderId === this.ordersummary.orderId) {
            element.orderstatus = "Preparing";
          }
        });
         this.activatefilter(this.orderstate);
      }

      if (buttonname == "Ready to Serve") {
        this.orders.forEach((element, index) => {
         
          if (element.orderId === this.ordersummary.orderId) {
              element.orderstatus = "Ready to Serve";
          }
        });
        this.activatefilter(this.orderstate);
      
      }
    }
  }
};
</script>
