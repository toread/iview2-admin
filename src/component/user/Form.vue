<style scoped>

</style>
<template>
 <div>
   <Button type="primary" @click="modal1 = true">显示对话框</Button>
  <div>
    <Modal v-model="modal1" title="普通的Modal对话框标题" @on-ok="ok" @on-cancel="cancel">
      <Form :model="formItem" :label-width="80">
      <Row>
          <Col span="8">
          <Form-item label="姓名">
            <Input v-model="formItem.name" placeholder="请输入"></Input>
          </Form-item>
          </Col>
          <Col span="8">
          <Form-item label="输入框">
            <Input v-model="formItem.age" placeholder="请输入"></Input>
          </Form-item>
          </Col>
          <Col span="8">
          <Form-item label="输入框">
            <Input v-model="formItem.address" placeholder="请输入"></Input>
          </Form-item>
          </Col>
      </Row>
      </Form>
    </Modal>
  </div>
 </div>
</template>

<script>
  export default {
    data () {
      return {
        modal1: true,
        formItem :{
          name: 121,
          age: 12212,
          address: "dadad"
        }
      }
    },
    methods: {
      ok () {
        this.$Message.info('点击了确定');
      },
      cancel () {
        this.$Message.info('点击了取消');
      }
    }
  }
</script>
