<template>
  <div class="container" style="margin-top: 5rem">
    <Loading :active="isLoading"></Loading>
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
                height: 400px;
                background-size: contain;
                background-repeat: no-repeat;
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
              <router-link class="text-muted text-decoration-none" to="/"
                >首頁</router-link
              >
            </li>
            <li class="breadcrumb-item">
              <router-link
                class="text-muted text-decoration-none"
                to="/products"
                >全部商品</router-link
              >
            </li>
            <li class="breadcrumb-item">
              <router-link
                class="text-decoration-none"
                :to="`/product/${product.id}`"
                >{{ product.title }}</router-link
              >
            </li>
          </ol>
        </nav>
        <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
        <div class="row">
          <div class="col-md-6">
            <p
            class="text-muted"
            style="white-space: pre-wrap;">
              {{ product.description }}
            </p>
          </div>
          <div class="col-md-6 align-self-end">
            <p class="mb-0 text-muted text-end">
              <del>NT${{ product.origin_price }}</del>
            </p>
            <p class="h4 fw-bold text-end">NT${{ product.price }}</p>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-6">
            <div class="input-group my-3 bg-light rounded">
              <div class="input-group-prepend">
                <button
                  class="btn btn-outline-dark border-0 py-2"
                  :class="{ 'not-allowed': qty === 1 }"
                  :disabled="qty === 1"
                  type="button"
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
                  @click.prevent="changeQty('inc')"
                >
                  <i class="bi bi-plus-circle"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-6 ">
            <a
              href="#"
              class="text-nowrap btn btn-dark w-100 py-2"
              @click.prevent="addToCart"
              :disabled="status.loadingItem === product.id"
              >加入購物車</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-md-8 mx-auto">
        <p
        style="white-space: pre-wrap;">
          {{ product.content }}
        </p>
      </div>
    </div>
    <h3 class="fw-bold">您可能還喜歡以下產品</h3>
    <div class="swiper-container mt-4 mb-5">
      <Swiper
        :spaceBetween="2"
        :loop="true"
        :navigation="true"
        :modules="modules"
        :breakpoints="swiperOption"
        class="my-2"
      >
        <SwiperSlide v-for="item in products" :key="item.id">
          <div class="card cursor-pointer" @click="getProduct(item.id)">
            <router-link
              class="text-decoration-none"
              :to="`/product/${item.id}`"
              target="_blank"
            >
              <div class="overflow-hidden position-relative">
                <div
                  :style="{ backgroundImage: `url(${item.imageUrl})` }"
                  style="
                    height: 300px;
                    background-size: cover;
                    background-position: center center;
                  "
                ></div>
              </div>
              <div class="card-body">
                <h4
                  class="card-title space-nowrap overflow-hidden text-truncate"
                >
                  <strong>{{ item.title }}</strong>
                </h4>
                <p class="card-text text-truncate text-muted mb-2">
                  {{ item.description }}
                </p>
                <div class="d-flex justify-content-center align-items-center">
                  <h5 class="fs-3 mb-0 me-2">NT${{ item.price }}</h5>
                  <h5 class="fs-6 mb-0 text-decoration-line-through text-muted">
                    NT${{ item.origin_price }}
                  </h5>
                </div>
              </div>
            </router-link>
          </div>
        </SwiperSlide>
      </Swiper>
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
      isLoading: false,
      status: {
        loadingItem: ''
      },
      // modules放在data即可
      modules: [Navigation, Pagination],
      swiperOption: {
        1: {
          slidesPerView: 1,
          slidesPerGroup: 1
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2
        },
        992: {
          slidesPerView: 3,
          slidesPerGroup: 3
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4
        }
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    getProducts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url).then((res) => {
        this.products = res.data.products
      })
    },
    getProduct () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id} `
      this.$http.get(url).then((res) => {
        this.isLoading = false
        console.log('getProduct', res)
        this.product = res.data.product
      })
    },
    addToCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart `
      const data = {
        product_id: this.id,
        qty: this.qty
      }
      this.$http.post(url, { data }).then((res) => {
        this.isLoading = false
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
