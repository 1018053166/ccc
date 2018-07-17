<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="'fa '+item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="'fa '+item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [{
          icon: 'fa-info',
          title: '概览',
          index: '1',
          subs: [{
            index: '/block-overview',
            title: '区块概览'
          }, {
            index: '/alliance-info',
            title: '联盟信息'
          }]
        }, {
          icon: 'fa-sitemap',
          title: '联盟管理',
          index: '2',
          subs: [{
            index: '/poa-list',
            title: 'POA成员列表'
          }, {
            index: '/poa-vote',
            title: 'POA投票平台'
          }, {
            index: '/poa-channel',
            title: 'POA通道管理'
          }]
        }, {
          icon: 'fa-users',
          title: '区块链',
          index: '3',
          subs: [{
            index: '/onekey-coalition',
            title: '一键联盟'
          }, {
            index: '/node-monitor',
            title: '节点监控'
          }, {
            index: '/smart-contract',
            title: '智能合约'
          }, {
            index: '/apis',
            title: 'APIs'
          }, {
            index: '/block-browser',
            title: '区块链浏览器'
          }]
        }, {
          icon: 'fa-tablet',
          title: '消息管理',
          index: '4',
          subs: [{
            index: '/message-list',
            title: '消息列表'
          }]
        }, {
          icon: 'fa-tablet',
          title: '社区支持',
          index: '5',
          subs: [{
            index: '/release-notes',
            title: 'Release Notes'
          }]
        }]
      }
    },
    computed:{
      onRoutes(){
        return this.$route.path;
      }
    }
  }
</script>

<style scoped>
  i{
    margin-right: 10px;
    width: 16px;
    text-align: center;
  }
  .sidebar{
      display: block;
      position: absolute;
      width: 200px;
      left: 0;
      top: 54px;
      bottom:0;
      /*background: #2E363F;*/
  }
  .sidebar>ul{
      height:100%;
  }
</style>
