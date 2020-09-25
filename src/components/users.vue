<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="cardContent">
      <el-card class="box-card">
        <el-row>
          <el-col :span="8">
            <el-input placeholder="请输入内容" v-model="input">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click="centerDialogVisible = true"
              >添加用户</el-button
            >
          </el-col>
        </el-row>
        <el-table :data="tableData" border style="width: 100%">
          <div v-for="item in tableColumn" :key="item.index">
            <el-table-column
              :type="item.index"
              :prop="item.key"
              :label="item.label"
              :width="item.width"
            ></el-table-column>
          </div>
          <el-table-column label="状态">
            <template slot-scope="scope">
              <el-switch
                @change="changeSwitch(scope.row)"
                v-model="scope.row.mg_state"
                active-color="#13ce66"
                inactive-color="#ff4949"
              >
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                icon="el-icon-edit"
                @click="handleEdit(scope.$index, scope.row)"
              ></el-button>
              <el-button
                size="mini"
                icon="el-icon-delete"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              ></el-button>
              <el-tooltip
                class="item"
                effect="dark"
                content="角色分配"
                placement="top"
              >
                <el-button
                  size="mini"
                  icon="el-icon-s-tools"
                  type="primary"
                  @click="handleSet(scope.$index, scope.row)"
                ></el-button>
              </el-tooltip>
            </template>
          </el-table-column>
        </el-table>
        <div class="block">
          <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="queryInfo.pagenum"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="10"
              layout="total, sizes, prev, pager, next, jumper"
              :total="tableData.length"
            >
            </el-pagination>
          </div>
        </div>
      </el-card>
    </div>
    <el-dialog title="添加用户" :visible.sync="centerDialogVisible" width="50%" center>
      <el-form ref="formDataRef" label-width="100px" :model="formData" :rules="addFromRules">
        <el-form-item label="姓名" prop="usename">
          <el-input v-model="formData.usename"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="formData.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="formData.mobile"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="role_name">
          <el-input v-model="formData.role_name"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="mg_state">
          <el-switch @change="changeSwitch()" v-model="formData.mg_state"
            active-color="#13ce66" inactive-color="#ff4949">
          </el-switch>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit()"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: 'right',
      formData: {
        usename: '',
        email: '',
        mobile: '',
        role_name: '',
        mg_state: false
      },
      addFromRules: {
        usename: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入电话', trigger: 'blur' }
        ],
        role_name: [
          { required: true, message: '请输入角色', trigger: 'blur' }
        ],
        mg_state: [
          { required: true, message: '请输入状态', trigger: 'blur' }
        ]
      },
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 2,
        total: null
      },
      centerDialogVisible: false,
      input: '',
      tableColumn: [
        { label: '序号', type: 'index', width: '80' },
        { label: '姓名', key: 'usename', width: '120' },
        { label: '邮箱', key: 'email', width: '200' },
        { label: '电话', key: 'mobile', width: '180' },
        { label: '角色', key: 'role_name', width: '120' },
        { label: '状态', key: 'mg_state', width: '90' }
      ],
      tableData: [
        {
          usename: '王小虎',
          email: '1234567@qq.com',
          mobile: '123456789',
          role_name: '学生',
          mg_state: true
        },
        {
          usename: '王大虎',
          email: '1234567@qq.com',
          mobile: '123456789',
          role_name: '学生',
          mg_state: false
        }
      ]
    }
  },
  methods: {
    handleEdit() {},
    handleDelete() {},
    handleSet() {},
    handleSizeChange(value) {
      this.queryInfo.pagesize = value
    },
    handleCurrentChange(value) {
      this.queryInfo.pagenum = value
    },
    changeSwitch(value) {
      console.log(value)
      // 此处要掉接口
    },
    submit() {
      console.log(this.formData)
      this.$refs.formDataRef.validate((avild) => {
        if (!avild) return this.$Message.error('请核对数据是否填写完整')
        this.centerDialogVisible = false
      })
    }
  }
}
</script>
<style scoped>
.cardContent {
  padding: 10px;
}
.clearfix {
  display: flex;
}
.el-input {
  width: 300px;
  margin-right: 18px;
}
.el-table {
  margin-top: 18px;
}
</style>
