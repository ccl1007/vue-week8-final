<template>
  <div
    class="position-relative d-flex align-items-center justify-content-center"
    style="min-height: 400px"
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
      <div class="col-md-4" >
        <div
          class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3"
          id="accordionExample"
        >
          <div class="card border-0">
            <div
              class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0"
              id="headingOne"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              <div
                class="d-flex justify-content-between align-items-center pe-1"
              >
                <h4 class="mb-0">商品分類</h4>
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body py-0">
                <ul class="list-unstyled">
                  <li>
                    <router-link to="/" class="py-2 d-block text-muted">全部商品</router-link>
                  </li>
                  <li>
                    <router-link to="/" class="py-2 d-block text-muted">上衣</router-link>
                  </li>
                  <li>
                    <router-link to="/" class="py-2 d-block text-muted">外套</router-link>
                  </li>
                   <li>
                    <router-link to="/" class="py-2 d-block text-muted">飾品</router-link>
                  </li>
                   <li>
                    <router-link to="/" class="py-2 d-block text-muted">鞋子</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <!-- row-cols-n n-定義欄數 1R/nC -->
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-3">
          <div class="col" v-for="product in products" :key="product.id" >
            <div class="card border-0 mb-4 position-relative position-relative">
              <!-- <img
                :src="product.imageUrl"
                class="card-img-top rounded-0"
                :alt="product.title"
              /> -->
              <!-- 圖片等高的解決方式- 使用背景圖 -->
              <div :style="{backgroundImage:`url(${product.imageUrl})`}"
              style="height:355px;background-size: cover;background-position: center center  "
              >
              </div>
               <router-link :to="`/product/${product.id}`">
               <i class="bi bi-suit-heart position-absolute" style="right: 10px; top: 10px"></i>
               </router-link>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <router-link :to="`/product/${product.id}`">{{product.title}}</router-link>
                </h4>
                <p class="card-text mb-0"  >
                  NT${{product.price}} <span class="text-muted"><del>NT${{product.origin_price}}</del></span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- place for footer -->
</template>

<script>
export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url)
        .then((res) => {
          console.log('getProducts:', res)
          this.products = res.data.products
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
