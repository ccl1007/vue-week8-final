<template>
 <div class="container margin-top: 5rem">
    <div class="row align-items-center">
      <div class="col-md-7">
      <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      >
        <swiper-slide v-for="image in product.imagesUrl" :key="image">
            <div
              :style="{ backgroundImage: `url(${image})` }"
              style="
                height: 700px;
                background-size: cover;
                background-position: center center;
              "
            ></div>
        </swiper-slide>
      </swiper>
      </div>
      <div class="col-md-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white px-0 mb-0 py-3">
            <li class="breadcrumb-item">
             <router-link class="text-muted" to="/">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link class="text-muted" to="/products">全部商品</router-link>
            </li>
             <li class="breadcrumb-item">
            <router-link :to="`/product/${product.id}`">{{product.title}}</router-link>
            </li>
          </ol>
        </nav>
        <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
        <p class="mb-0 text-muted text-end">
          <del>NT${{ product.origin_price }}</del>
        </p>
        <p class="h4 fw-bold text-end">NT${{ product.price }}</p>
        <div class="row align-items-center">
          <div class="col-6">
            <div class="input-group my-3 bg-light rounded">
              <div class="input-group-prepend">
                <button
                  class="btn btn-outline-dark border-0 py-2"
                  :class="{ 'not-allowed': qty === 1 }"
                  :disabled="qty === 1"
                  type="button"
                  id="button-addon1"
                  @click="changeQty('dec')"
                >
                  <i class="bi bi-dash-circle"></i>
                </button>
              </div>
              <input
                type="text"
                class="form-control border-0 text-center my-auto shadow-none bg-light"
                placeholder="1"
                v-model="qty"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-dark border-0 py-2"
                  type="button"
                  id="button-addon2"
                  @click.prevent="changeQty('inc')"
                >
                  <i class="bi bi-plus-circle"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-6">
            <a
              href="#"
              class="text-nowrap btn btn-dark w-100 py-2"
              @click.prevent="addToCart"
              >加入購物車</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-md-4">
        <p>
          {{ product.content }}
        </p>
      </div>
      <div class="col-md-3">
        <p class="text-muted">
          {{ product.description }}
        </p>
      </div>
    </div>
    <!-- swiper -->
    <!-- <h3 class="fw-bold">Lorem ipsum dolor sit amet</h3>
    <div class="swiper-container mt-4 mb-5">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img
              src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <a href="#" class="text-dark"> </a>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
              <p class="card-text mb-0">
                NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
              </p>
              <p class="text-muted mt-3"></p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img
              src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <a href="#" class="text-dark"> </a>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
              <p class="card-text mb-0">
                NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
              </p>
              <p class="text-muted mt-3"></p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img
              src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <a href="#" class="text-dark"> </a>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
              <p class="card-text mb-0">
                NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
              </p>
              <p class="text-muted mt-3"></p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img
              src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <a href="#" class="text-dark"> </a>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
              <p class="card-text mb-0">
                NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
              </p>
              <p class="text-muted mt-3"></p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img
              src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <a href="#" class="text-dark"> </a>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
              <p class="card-text mb-0">
                NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
              </p>
              <p class="text-muted mt-3"></p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <h3 class="fw-bold">您可能還喜歡以下產品</h3>
    <div class="swiper-container mt-4 mb-5">
      <swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      >
        <swiper-slide v-for="item in products" :key="item.id">
          <router-link :to="`/product/${item.id}`" target="_blank" >
            <div
              :style="{ backgroundImage: `url(${item.imageUrl})` }"
              style="
                height: 300px;
                background-size: cover;
                background-position: center center;
              "
            ></div>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>

  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import emitter from '@/utils/emitter'

export default {
  data () {
    return {
      products: [],
      product: [],
      id: '',
      qty: 1,
      // modules放在data即可
      modules: [Navigation, Pagination]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url).then((res) => {
        this.products = res.data.products
      })
    },
    getProduct () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id} `
      this.$http.get(url).then((res) => {
        console.log('getProduct', res)
        this.product = res.data.product
      })
    },
    addToCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart `
      const data = {
        product_id: this.id,
        qty: this.qty
      }
      this.$http.post(url, { data }).then((res) => {
        console.log('addToCart:', res)
        alert(res.data.message)
        // 觸發監聽事件
        emitter.emit('get-cart')
      })
    },
    changeQty (num) {
      if (num === 'inc') {
        this.qty += 1
      }
      if (num === 'dec') {
        this.qty -= 1
      }
    }

  },
  mounted () {
    // 取得參數ID
    this.id = this.$route.params.id
    this.getProduct()
    this.getProducts()
  }
}
</script>
