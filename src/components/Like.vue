<template>
    <div id="goods">
        <div class="title">
            <img src="//i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" alt="">
        </div>
        <ul class="goods_list">
            <li class="list_item" v-for="(item,index) in datas" :key="index" :data-id="item.action.path">
                <a href="javascript:;" @click="jumpDetail(item.action.path)">
                    <img :src="item.image_url" alt="">
                    <div class="goods_infos">
                        <p class="name">{{item.name}}</p>
                        <div class="price">￥{{item.price}}</div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      datas:[]
    };
  },
  methods: {
    jumpDetail(id) {
      this.$router.push({
        path: "/detail",
        query: {
          goods_id: 12
        }
      });
    }
  },
  async created() {
      this.datas = this.$store.state.like_goods;
  }
};
</script>

<style lang="scss" scoped>
#goods {
  .title {
    width: 100%;
    height: 1.666667rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .goods_list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    .list_item {
      // float: left;
      margin-bottom: 0.2rem;
      width: 49%;
      height: 6.373333rem;
      background: #fff;
      a {
        display: block;
        width: 100%;
        height: 100%;
        img {
          margin-bottom: 0.333333rem;
          width: 100%;
          height: 4.946667rem;
          border: none;
        }
        .name {
          margin-bottom: 0.293333rem;
          height: 0.293333rem;
          font-size: 0.293333rem;
          color: #000;
          line-height: 0.293333rem;
          text-indent: 0.373333rem;
          text-align: left;
          font-weight: 600;
        }
        .price {
          height: 0.32rem;
          font-size: 0.32rem;
          color: red;
          line-height: 0.32rem;
          text-indent: 0.373333rem;
          text-align: left;
        }
      }
    }
  }
}
</style>

