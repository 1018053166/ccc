<template>
  <div>
    <el-table
      :data="members"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="公司名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="email">
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="count"
      :page-size="pageSize"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    data (){
      return {
        members: [],
        count: 0,
        pageSize: 5
      }
    },
    methods: {
      queryList(index=1, size=5) {
        this.axios(`/member/list?index=${index}&size=${size}`).then(res => {
          this.members = res.data.data.data
          this.count = res.data.data.count
          this.pageSize = res.data.data.pageSize
        })
      },
      handleCurrentChange(val) {
        this.queryList(val)
      }
    },
    mounted: function() {
      this.queryList()
    }
    
  }
</script>

<style scoped>

</style>
