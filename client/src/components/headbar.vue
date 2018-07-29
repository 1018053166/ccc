<template>
  <div class="header">
    <div class="logo">Taireum</div>
    <div class="user-info">
      <el-dropdown trigger="click" @command="handleCommand">
        <div class="zd-dropdown-link">
          <img :src="require('../assets/img/img.jpg')">
          <span>{{username}}</span>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="set">设置</el-dropdown-item>
          <el-dropdown-item command="signout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
  export default {
    data (){
      return {
        username: ''
      }
    },
    methods: {
      handleCommand(command) {
        switch (command) {
          case 'signout':
            break;
          case 'set':
            break;
        }
      }
    },
    mounted: function() {
      this.axios('/index/username').then(res => {
        this.username = res.data.data
      })
    }
  }
</script>

<style scoped>
  .header {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      height: 54px;
      background-color: #fff;
  }
  .logo{
      float: left;
      height: inherit;
      display: inline-flex;
      align-items: center;
  }
  .logo>img{
    height: 40px;
    margin-left: 20px;
  }
  .user-info {
      float: right;
      padding-right: 30px;
      color: #000;
      height: inherit;
  }
  .zd-dropdown-link{
      display: inline-flex;
      align-items: center;
      color: #000;
      cursor: pointer;
      height: 54px;
  }
  .zd-dropdown-link>img{
      width:30px;
      height:30px;
      border-radius: 50%;
      margin-right: 10px;
  }
  .zd-dropdown-link>span{
    font-size: 12px;
  }
  .el-dropdown-menu__item{
      text-align: center;
  }
</style>
