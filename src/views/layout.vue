<template>
    <div>
        <!--快速置顶-->
        <el-backtop :visibility-height="10">
            <div class="backtop">🔝</div>
        </el-backtop>
        <!--header-->
        <div class="header">
            <el-menu
                    :default-active="activeIndex"
                    class="el-menu-header"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    router>
                <el-submenu index="1">
                    <template slot="title">用户中心</template>
                    <el-menu-item index="user">用户管理</el-menu-item>
                    <el-menu-item index="/">退出</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">需求中心</template>
                    <el-menu-item index="demands">全部需求</el-menu-item>
                </el-submenu>
                <el-menu-item index="3" disabled>消息中心</el-menu-item>
                <el-menu-item><a href="https://element.eleme.cn/#/zh-CN" target="_self">技术支持</a>
                </el-menu-item>
            </el-menu>
        </div>
        <!--view-->
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: 'demands'
            }
        },
        watch: {
            $route() {
                this.initRouter()
            }
        },
        created() {
            this.initRouter()
        },
        methods: {
            initRouter() {
                const routerName = this.$router.currentRoute.name
                this.activeIndex = routerName
                this.$router.push({
                    name: routerName
                })
            },
            handleSelect(key, keyPath) {
                if (keyPath == "/") {
                    this.$router.replace('/')
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .backtop {
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0, 0, 0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
    }

    .header {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 2;
    }

    .content {
        padding: 90px 20px 10px;
        background-color: #f0f2f5;
    }
</style>
