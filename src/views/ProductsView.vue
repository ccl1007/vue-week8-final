<template>
  <div class="container mt-md-5 mt-3 mb-7">
    <Loading :active="isLoading"></Loading>
    <div class="row" style="margin-top: 5rem">
      <div class="col-md-3">
        <div
          class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-0"
        >
          <div class="card border-0">
            <div
              class="card-header px-0 py-4 bg-white"
              id="headingOne"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              <h4 class="mx-auto">商品分類</h4>
            </div>
            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
            >
              <div class="card-body py-0">
                <ul class="list-group list-unstyled" style="border: 0px">
                  <li>
                    <router-link
                      to="/products"
                      class="list-group-item list-group-item-action border-0"
                      >所有商品</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{ path: '/products', query: { category: 'Top' } }"
                      class="list-group-item list-group-item-action border-0"
                      >上衣</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{ path: '/products', query: { category: 'Outer' } }"
                      class="list-group-item list-group-item-action border-0"
                      >外套</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{ path: '/products', query: { category: 'Shoes' } }"
                      class="list-group-item list-group-item-action border-0"
                      >訂製鞋款</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        path: '/products',
                        query: { category: 'Accessory' }
                      }"
                      class="list-group-item list-group-item-action border-0"
                      >飾品/配件</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <!-- row-cols-n n-定義欄數 1R/nC -->
        <div class="row g-2 row-cols-1 row-cols-md-3 row-cols-lg-3">
          <div class="col mb-4" v-for="product in products" :key="product.id">
            <div class="card border-0 m-2 position-relative">
              <!-- 圖片等高的解決方式- 使用背景圖 -->
              <router-link :to="`/product/${product.id}`">
                <div
                  :style="{ backgroundImage: `url(${product.imageUrl})` }"
                  style="
                    height: 355px;
                    background-size: cover;
                    background-position: center center;
                  "
                  :alt="product.title"
                ></div>
              </router-link>
              <h5
                class="mb-0 mt-3"
                style="
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                "
              >
                <router-link
                  class="text-decoration-none fw-bold"
                  :to="`/product/${product.id}`"
                  >{{ product.title }}</router-link
                >
              </h5>
              <div class="d-flex justify-content-between mb-1">
                <small class="text-muted"
                  ><del>NT${{ product.origin_price }}</del></small
                >
                <strong>NT${{ product.price }}</strong>
              </div>
              <button
                class="btn btn-secondary fw-bold text-white"
                @click.prevent="addToCart(product.id)"
                :disabled="status.loadingItem === product.id"
              >
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
  <!-- place for footer -->
</template>

<script>
import Pagination from '@/components/PaginationComp.vue'
import emitter from '@/utils/emitter'
export default {
  data () {
    return {
      products: [],
      id: '',
      pagination: {},
      currentPage: 1,
      isLoading: false,
      status: {
        loadingItem: ''
      }
    }
  },
  watch: {
    $route () {
      this.getProducts()
    }
  },
  components: {
    Pagination
  },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      const { category } = this.$route.query
      let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`
      if (category) {
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}&category=${category}`
      }
      this.$http.get(url).then((res) => {
        this.isLoading = false
        this.products = res.data.products
        this.pagination = res.data.pagination
      })
    },
    addToCart (id) {
      this.isLoading = true
      this.status.loadingItem = id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart `
      const data = {
        product_id: id,
        qty: 1
      }
      this.$http.post(url, { data }).then((res) => {
        this.isLoading = false
        this.$swal(res.data.message)
        // 觸發監聽事件
        emitter.emit('get-cart')
        this.status.loadingItem = ''
      })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
