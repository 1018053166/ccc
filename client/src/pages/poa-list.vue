<template>
  <main>
    <el-button style="margin-left: 10px;" @click="handleCreate" type="primary" icon="el-icon-edit">申请POA</el-button>
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
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleUpdate(scope.row)" type="primary" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form :rules="rules" ref="dataForm" :model="temp" label-position="left" label-width="70px" style='width: 400px; margin-left:50px;'>
        
        <el-form-item label="来自" prop="from">
          <el-input v-model="temp.from"></el-input>
        </el-form-item>
        <el-form-item label="公司名" prop="companyname">
          <el-input v-model="temp.companyname"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="temp.email"></el-input>
        </el-form-item>
        <el-form-item label="节点信息" prop="enode">
          <el-input v-model="temp.enode"></el-input>
        </el-form-item>
        <el-form-item label="所有者" prop="owner">
          <el-input v-model="temp.owner"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="Please input" v-model="temp.remark">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">确认</el-button>
        <el-button v-else type="primary" @click="updateData">确认</el-button>
      </div>
    </el-dialog>
  </main>
</template>

<script>
  export default {
    data (){
      return {
        members: [],
        temp: {
          from: '',
          companyname: '',
          email: '',
          enode: '',
          owner: '',
          remark: ''
        },
        dialogFormVisible: false,
        dialogStatus: '',
        textMap: {
          update: 'Edit',
          create: 'Create'
        },
        rules: {
          from: [{ required: true, message: 'from is required', trigger: 'change' }],
          companyname: [{ required: true, message: 'companyname is required', trigger: 'blur' }],
          email: [{ required: true, message: 'email is required', trigger: 'blur' }],
          enode: [{ required: true, message: 'enode is required', trigger: 'blur' }],
          owner: [{ required: true, message: 'owner is required', trigger: 'blur' }],
          remark: [{ required: true, message: 'remark is required', trigger: 'blur' }]
        }
      }
    },
    methods: {
      queryList() {
        this.axios('/api/company').then(res => {
          this.members = res.data
        })
      },
      resetTemp() {
        this.temp = {
          from: '',
          companyname: '',
          email: '',
          enode: '',
          owner: '',
          remark: ''
        }
      },
      handleCreate() {
        this.resetTemp()
        this.dialogStatus = 'create'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].clearValidate()
        })
      },
      createData() {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            this.axios.post('/api/v1', {
              source: 'ccc',
              method: 'add',
              argv: {
                _from: this.temp.from,
                _companyname: this.temp.companyname,
                _email: this.temp.email,
                _enode: this.temp.enode,
                _address: this.temp.owner,
                _remark: this.temp.remark
              }
            }).then(res => {
              console.log(res)
              this.dialogFormVisible = false
              this.$notify({
                title: '成功',
                message: '创建成功',
                type: 'success',
                duration: 2000
              })
            })
          }
        })
      },
      handleUpdate(row) {
        this.temp = Object.assign({}, row) // copy obj
        this.temp.timestamp = new Date(this.temp.timestamp)
        this.dialogStatus = 'update'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].clearValidate()
        })
      },
      updateData() {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            const tempData = Object.assign({}, this.temp)
            tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
            updateArticle(tempData).then(() => {
              for (const v of this.list) {
                if (v.id === this.temp.id) {
                  const index = this.list.indexOf(v)
                  this.list.splice(index, 1, this.temp)
                  break
                }
              }
              this.dialogFormVisible = false
              this.$notify({
                title: '成功',
                message: '更新成功',
                type: 'success',
                duration: 2000
              })
            })
          }
        })
      }
    },
    mounted: function() {
      this.queryList()
    }
    
  }
</script>

<style scoped>

</style>
