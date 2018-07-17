<template>
  <div id="app" class="wrapper">
    <HeadBar></HeadBar>
    <SideBar></SideBar>
    <div class="content">
      <!-- <h3>{{$route.name}}</h3> -->
      <transition name="move" mode="out-in"><router-view></router-view></transition>
    </div>
  </div>
</template>

<script>
import HeadBar from './components/headbar.vue'
import SideBar from './components/sidebar.vue'
export default {
  data (){
    return {
      
    }
  },
  mounted: function() {
    
  },
  methods: {
    
  },
  components: {
    HeadBar, SideBar
  }
}
</script>

<style>
  @import "./assets/css/main.css";
  /*@import "./assets/css/color-dark.css";*/
  /*@import "../static/css/theme-green/color-green.css";*/
  /*.pull-right{
    margin-bottom: 10px;
  }*/
  .el-upload--text{
    width: 178px;
    height: 178px;
  }
  .content>div{
    background-color: #fff;
    padding: 10px;
  }
  .content{
    background-color: #d9e0e7;
    padding: 20px 20px 0 20px;
    /*text-align: center;*/
  }
  hr{
    margin: 20px 0;
  }
  h3{
    margin-bottom: 20px;
    text-align: center;
  }
  h4{
    margin-bottom: 20px;
  }
  .zd-button{
    margin-left: 360px;
  }
  form{
    margin-left: 200px;
  }
  .el-table{
    margin-top: 10px;
  }
  .dialog form{
    margin-left: 10px;
  }
  .dialog form>div:not(:first-child) .el-form-item__content>div{
    min-width: 300px;
  }
  /*thead *{
    text-align: center;
  }*/
  /*.el-form-item label{
    width: 100px;
  }*/
  .close-icon{
    margin: 10px;
    opacity: 0.6;
  }
  .close-icon:hover{
    opacity: 1;
    cursor:pointer;
  }
  .dialog{
    width:600px;
    right: -600px;
    position: fixed;
    top:0px;
    bottom:0px;
    background: #ffffff;
    z-index: 299;
    transition:right 0.5s;
    overflow: auto;
  }
  .cover{
    position: fixed;
    top:0px;
    bottom:0px;
    left:0px;
    right:0px;
    background: rgba(0,0,0,0.2);
    z-index: 99;
  }
  .el-menu{
    background-color: #2d353c;
  }
  .el-menu-item{
    color: #a8acb1;
  }
  .el-menu-item:hover {
    background-color: #232a2f;
  }
  .el-submenu__title{
    color: #a8acb1;
  }
  .el-submenu .el-menu{
    background-color: #1a2229;
  }
  .el-submenu .el-menu-item:hover, .el-submenu__title:hover {
    background-color: #232a2f;
  }
</style>
