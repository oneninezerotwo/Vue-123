
<template>
    <div id="receipt">
        <div class="receipt_null">
            <div class="receipt_null_inner">你还没有 待收获 订单</div>
        </div>
        <div class="receipt_goods"></div>
        <Like></Like>
    </div>
</template>
<script>
import Like from '../Like';

export default {
    components:{
        Like,
    }
    
}
</script>

<style lang="scss" scoped>
#receipt{
    .receipt_null{
        background: #fff;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
        height: 5.4rem;
        .receipt_null_inner{
            width: 6.266667rem;
            height: 3.946667rem;
            margin-bottom: .413333rem;
            padding-top: 3.533333rem;
            font-size: .413333rem;
            color:#999;
            line-height: .413333rem;
            text-align: center;
            background: url(//s1.mi.com/m/images/m/empty.png) 50% 0 no-repeat;
            background-size: 2.773333rem 2.773333rem;          
        }
    }
}
</style>
