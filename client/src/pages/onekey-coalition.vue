<template>
  <main>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">您可以选择创建一个联盟或者加入一个联盟</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6"><el-button type="primary" @click="handleCreate">创建联盟</el-button></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6"><el-button type="primary">加入联盟</el-button></el-col>
    </el-row>
    <el-dialog title="新建" :visible.sync="dialogFormVisible">
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
        <el-button type="primary" @click="createData">确认</el-button>
      </div>
    </el-dialog>
  </main>
</template>

<script>
  export default {
    data (){
      return {
        temp: {
          from: '',
          companyname: '',
          email: '',
          enode: '',
          owner: '',
          remark: ''
        },
        dialogFormVisible: false,
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
      }
    }
  }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
    margin-top: 100px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background: #166bcc;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 80px;
  }
</style>
