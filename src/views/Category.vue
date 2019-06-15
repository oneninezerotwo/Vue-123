<template>
    <div id="category">
        <!-- 头部 -->
        <header class="header">
            <div class="back_icon">
                <a href="javascript:;"></a>
            </div>
            <div class="title">分类</div>
            <div class="find_icon">
                <a href="javascript:;"></a>
            </div>
        </header>
        <!-- 主体 -->
        <main class="main">
            <!-- 选项卡title -->
            <div class="tabs_title">
                <ul class="tab_list">
                    <li class="list_item">
                        <a href="javascript:;">新品</a>
                    </li>
                </ul>
            </div>
            <!-- 选项卡内容 -->
            <div class="tabs_content">


            </div>
        </main>
    </div>
</template>
<script>
export default {
    created(){
        this.$store.state.footShow = true;
    }  
}
</script>
<style lang="scss" scoped>
#category{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    // 头部
    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 1.333333rem;
        background: #f2f2f2;
        .title{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            display: block;
            height: 100%;
            background:red;
        }
        .back_icon,find_icon{

            a{
                display: block;
                width: .533333rem;
                height: .533333rem;
                background: pink;

            }
        }
       
    }
    // 主体
    .main{
        flex: 1;
        display: flex;
        flex-direction: row;
        .tabs_title{
            width: 2.106667rem;
            height: 100%;
            border-right: 2px solid grey;
        }
        .tabs_content{
            flex: 1;
        }
    }
}

</style>
