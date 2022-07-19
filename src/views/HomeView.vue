<template>
  <el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary" @click="onhello()">主要按钮</el-button>
  <el-button type="success" @click="onhello()">成功按钮</el-button>
  <el-button type="info" @click="onhello()">信息按钮</el-button>
  <el-button type="warning" @click="onhello()">警告按钮</el-button>
  <el-button type="danger" @click="onhello()">危险按钮</el-button>
  <el-button type="danger" @click="onhello()">危险按钮</el-button>
</el-row>

</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  data(){
    return{
      name:''
    }
  },
  methods:{
    onhello(){
      this.$axios.get('/hello').then(res=>{
        console.log(res);
      })
    }
  }
}
</script>
