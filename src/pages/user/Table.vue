<template>
  <div>
    <Form ref="formInline" label-position="left" :label-width="100" :model="formInline" :rules="ruleInline" inline>
      <Form-item prop="user"  label="标题大" >
        <Input type="text" v-model="formInline.user" placeholder="用户名称"/>
      </Form-item>
      <Form-item prop="password" label="标题">
        <Input type="password" v-model="formInline.password" placeholder="Password"/>
      </Form-item>
      </Form-item :label-width="0">
        <Button  :loading="queryUserListLoading" type="primary" @click="queryUserList('formInline')">查询用户信息</Button>
      </Form-item>
    </Form>
    <Table :context="self" :data="tableData"  :columns="columns" stripe></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="100" show-sizer @on-change="changePage" show-total></Page>
      </div>
    </div>
    <UserForm></UserForm>
  </div>
</template>

<script>
  import  UserForm from '../../component/user/Form.vue'

  export default {
    data () {
      return {
        queryUserListLoading:false,
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ]
        },
        self: this,
        tableData: this.data(),
        columns: [
          {title: '用户姓名',key: 'name'},
          {title: '用户登录帐号',key: 'account'},
          {title: '手机掩码',key: 'phoneNo'},
          {title: '地址',key: 'address'},
          {title: '状态',key: 'status',}
        ]
      }
    },
    methods: {
      queryUserList(name) {
        try{
          this.queryUserListLoading=true;
          this.$refs[name].validate((valid) => {
            if (valid) {
              this.$Message.success('提交成功!');
              this.tableData = this.data();
            } else {
              this.$Message.error('表单验证失败!');
            }
          })
        }catch (e){

        }finally {
            this.queryUserListLoading=false;
        }

      },
      data() {
        let data = [];
        for (let i = 0; i < 10; i++) {
          data.push({
            name: "212121"+Math.floor(Math.random () * 100 + 1),
            account: "12121"+Math.floor(Math.random () * 100 + 1),
            phoneNo:18675543+Math.floor(Math.random () * 100 + 1),
            address:"位置区域"+Math.floor(Math.random () * 100 + 1),
            status:"可用状态",
          })
        }
        return data;
      },
      changePage () {
          console.info("数据发生了改变")
        this.tableData = this.data();
      },
      components: {
          UserForm
      }
    }
  }
</script>
