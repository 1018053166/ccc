<template>
  <main>
    <el-table
      :data="members"
      style="width: 100%">
      <el-table-column
        prop="companyid"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="companyname"
        label="公司名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="email">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="备注">
      </el-table-column>
      <el-table-column
        prop="owner"
        label="所有者地址">
      </el-table-column>
      <el-table-column
        prop="stat"
        label="状态">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="180">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row, true)" type="success" size="small">同意</el-button>
          <el-button @click="handleClick(scope.row, false)" type="danger" size="small">反对</el-button>
        </template>
      </el-table-column>
    </el-table>
  </main>
</template>

<script>
  export default {
    data (){
      return {
        members: []
      }
    },
    methods: {
      queryList() {
        this.axios('/api/company').then(res => {
          this.members = res.data
        })
      },
      handleClick(row, vote) {
        this.axios.post('/api/v1', {
            "source": "ccc",
            "method": "vote",
            "argv": {
                "_from": row.owner,
                "_fromcompanyid":row.companyid,
                "_tocompanyid": row.companyid
            }
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    },
    mounted: function() {
      this.queryList()
    }
    
  }
</script>

<style scoped>

</style>
