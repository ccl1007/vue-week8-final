<template>
  <div class="container " style="margin-top: 5rem">
    <Loading :active="isLoading"></Loading>
    <div class="mt-4">
      <!-- 購物車列表 -->
      <div class="text-end">
        <button
          class="btn btn-outline-danger"
          type="button"
          @click="deleteAllCarts"
        >
          清空購物車
        </button>
      </div>
      <table class="table align-middle">
        <!-- 購物車表頭 -->
        <thead>
          <tr>
            <th></th>
            <th>品名</th>
            <th style="width: 110px">數量</th>
            <th class="text-end" >單價</th>
          </tr>
        </thead>
        <!-- 取得購物車資料 -->
        <tbody>
          <template v-if="cart.carts">
            <tr v-for="item in cart.carts" :key="item.id">
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  :disabled="status.loadingItem === item.id"
                  @click="removeCartItem(item.id)"
                >
                  <i class="bi bi-trash3"></i>
                </button>
              </td>
              <td>
                  {{ item.product.title }}
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <input
                    type="number"
                    class="form-control"
                    min="1"
                    v-model.number="item.qty"
                    @blur="updateCart(item)"
                  />
                  <div class="input-group-text"> {{ item.product.unit }}</div>
                </div>
              </td>
              <td class="text-end" >
                {{item.final_total}}
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-end">總計</td>
            <td class="text-end ">
              {{ cart.final_total }}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <!-- 訂購表單 -->
    <div class="my-5 row justify-content-center">
      <Form
        ref="form"
        class="col-md-6"
        v-slot="{ errors }"
        @submit="createOrder"
      >
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="form.user.email"
          ></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <Field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="form.user.name"
          ></Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <Field
            id="tel"
            name="電話"
            type="tel"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            rules="required|min:8|max:10"
            v-model="form.user.tel"
          ></Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <Field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="form.user.address"
          ></Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea
            name=""
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-end">
          <button class="btn btn-danger">送出訂單</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: ''
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      cart: {},
      isLoading: false
    }
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.products = response.data.products
        this.isLoading = false
      }).catch((error) => {
        this.isLoading = false
        this.$swal(error.response)
        alert('錯誤訊息')
      })
    },
    getProduct (id) {
      this.isLoading = true
      this.$router.push(`/user/product/${id}`)
    },
    addToCart (id, qty = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      const cart = {
        product_id: id,
        qty
      }

      this.$http.post(url, { data: cart }).then((res) => {
        this.status.loadingItem = ''
        this.isLoading = false
        this.$swal(res.data.message)
        this.getCart()
      }).catch((error) => {
        this.isLoading = false
        this.$swal(error.response)
      })
    },
    deleteAllCarts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`
      this.$http.delete(url).then((res) => {
        this.isLoading = false
        this.$swal(res.data.message)
        this.getCart()
      }).catch((error) => {
        this.$swal(error.response)
      })
    },
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url).then((res) => {
        this.cart = res.data.data
        this.isLoading = false
      }).catch((error) => {
        this.$swal(error.response)
      })
    },
    removeCartItem (id) {
      this.isLoading = true
      this.status.loadingItem = id
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(url).then((res) => {
        this.$swal(res.data.message)
        this.status.loadingItem = ''
        this.isLoading = false
        this.getCart()
      }).catch((error) => {
        this.isLoading = false
        this.$swal(error.response)
      })
    },
    updateCart (data) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${data.id}`
      const cart = {
        product_id: data.product_id,
        qty: data.qty
      }

      this.$http.put(url, { data: cart }).then((res) => {
        this.$swal(res.data.message)
        this.isLoading = false
        this.getCart()
      }).catch((error) => {
        this.isLoading = false
        this.$swal(error.response)
      })
    },
    createOrder () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order }).then((res) => {
        this.$swal(res.data.message)
        // this.$router.push(`/user/checkout/${response.data.orderId}`)
        this.$refs.form.resetForm()
        this.isLoading = false
      }).catch((error) => {
        this.$swal(error.response)
      })
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  }
}
</script>
