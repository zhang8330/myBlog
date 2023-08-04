<template>
  <div id="container">
    <div id="headerBox" aria-label="A complete example of page header">
      <el-page-header @back="onBack">
        <template #breadcrumb>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: './page-header.html' }">
              homepage
            </el-breadcrumb-item>
            <el-breadcrumb-item
            ><a href="./page-header.html">route 1</a></el-breadcrumb-item
            >
            <el-breadcrumb-item>route 2</el-breadcrumb-item>
          </el-breadcrumb>
        </template>
        <template #content>
          <div class="flex items-center">
            <el-avatar
                class="mr-3"
                :size="32"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
            <span class="text-large font-600 mr-3"> Title </span>
            <span
                class="text-sm mr-2"
                style="color: var(--el-text-color-regular)"
            >
            Sub title
          </span>
            <el-tag>♂</el-tag>
          </div>
        </template>
        <template #extra>
          <div class="flex items-center">
            <el-button>Print</el-button>
            <el-button type="primary" class="ml-2">Edit</el-button>
          </div>
        </template>


      </el-page-header>
    </div>
    <div id="formBox">
      <el-form :model="user" ref="form" style="width: 50%;height: 100%;margin: 0 auto;">
        <el-form-item label="avatar：">
          <el-upload
              style="margin: 0 auto;border-radius: 50%;"
              class="avatar-uploader"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
          >
            <img v-if="user.imageUrl" :src="user.imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon">➕</el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item label="name：">
          <el-input v-model="user.name" />
        </el-form-item>
        <el-form-item label="sex：">
          <el-radio-group v-model="user.sex">
            <el-radio label="male" >♂</el-radio>
            <el-radio label="female" >♀</el-radio>
            <el-radio label="unknown" >👽</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="account：">
          <el-input v-model="user.account" placeholder="Please input your account" />
        </el-form-item>
        <el-form-item label="password：">
          <el-input
              v-model="user.password"
              type="password"
              placeholder="Please input your password"
              show-password
          />
        </el-form-item>
    <el-form-item style="margin-left:25%;">
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button @click="resetForm(form)">Reset</el-button>
    </el-form-item>
  </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: "loginPage",
  data(){
    return {
      user:{
        name:"",
        sex:"",
        description:"",
        account:"",
        password:"",
        imageUrl:""
      }
    }
  },
  methods:{
    onSubmit(){

    },
    resetForm(form){
      console.log(form)
      if(!form)return;
      form.resetFields();
    },
    beforeAvatarUpload(){},
    handleAvatarSuccess(){}
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body{
  width:100vw;
  height:100vh;
  /*background-color: rgb(241,217,176);*/
  /*background-color: rgb(233,190,133);*/
  /*background-image: repeating-linear-gradient( 135deg, #F1D9B0FF 0%, #E9BE85FF 100%);*/
  /*background-color: rgb(218, 165, 32);*/
  background-image:  repeating-radial-gradient( circle at center, #FFF5C3 0%, #9452A5 100%);
}
</style>
<style scoped>

#container{
  width:100%;
  height:100%;
  padding-top: 10%;
}
#headerBox{
  width:100%;
}
#formBox{
  width:50%;
  height:35%;
  margin:0 auto;
}
.avatar-uploader{
  border: 1px dashed red;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>