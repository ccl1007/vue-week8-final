<template>
  <div
    class="position-relative d-flex align-items-center justify-content-center"
    style="min-height: 400px margin-top: 5rem"
  >
    <div
      class="position-absolute"
      style="
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(https://i0.wp.com/littlemy-lm.com/wp-content/uploads/2022/01/19282B76-7355-4666-A9FB-7C02D2B4055C.png?resize=1024%2C480&ssl=1);
        background-position: center center;
        opacity: 0.1;
      "
    ></div>
    <h2 class="fw-bold">2022<i class="bi bi-flower3"></i>春季新品</h2>
  </div>
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="row">
      <div class="col-md-3">
        <div
          class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3"
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
                <ul class="list-group list-unstyled border-0" >
                  <li>
                    <router-link to='/products' class="py-2 list-group-item list-group-item-action"
                      >所有商品</router-link>
                  </li>
                  <li>
                    <router-link :to="{ path: '/products',query: { category: 'Top' }} " class="py-2 list-group-item list-group-item-action"
                      >上衣</router-link>
                  </li>
                  <li>
                    <router-link :to="{ path: '/products',query: { category: 'Outer' }} " class="py-2 list-group-item list-group-item-action"
                      >外套</router-link>
                  </li>
                  <li>
                    <router-link :to="{ path: '/products',query: { category: 'Shoes' }} " class="py-2 list-group-item list-group-item-action"
                      >訂製鞋款</router-link>
                  </li>
                  <li>
                    <router-link :to="{ path: '/products',query: { category: 'Accessory' }} " class="py-2 list-group-item list-group-item-action"
                      >飾品/配件</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <!-- row-cols-n n-定義欄數 1R/nC -->
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2">
          <div class="col" v-for="product in products" :key="product.id">
            <div class="card border-0 mb-4 position-relative position-relative">
              <!-- <img
                :src="product.imageUrl"
                class="card-img-top rounded-0"
                :alt="product.title"
              /> -->
              <!-- 圖片等高的解決方式- 使用背景圖 -->
              <router-link :to="`/product/${product.id}`">
                <div
                  :style="{ backgroundImage: `url(${product.imageUrl})` }"
                  style="
                    height: 355px;
                    background-size: cover;
                    background-position: center center;
                  "
                ></div>
              </router-link>
              <router-link :to="`/product/${product.id}`">
                <i
                  class="bi bi-suit-heart position-absolute"
                  style="right: 10px; top: 10px"
                ></i>
              </router-link>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <router-link :to="`/product/${product.id}`">{{
                    product.title
                  }}</router-link>
                </h4>
                <p class="card-text mb-0">
                  NT${{ product.price }}
                  <span class="text-muted"
                    ><del>NT${{ product.origin_price }}</del></span
                  >
                </p>
                <p class="text-muted mt-3"></p>
              </div>
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
export default {
  data () {
    return {
      products: [],
      pagination: {},
      currentPage: 1
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
      const { category } = this.$route.query
      let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`
      if (category) {
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}&category=${category}`
      }
      this.$http.get(url).then((res) => {
        console.log('getProducts:', res)
        this.products = res.data.products
        this.pagination = res.data.pagination
      })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
