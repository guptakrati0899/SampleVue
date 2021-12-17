<template>
<body>

<form >
  <div class="container">
    <h1>Add User</h1>
    <p>Please fill in this form to add an user.</p>
    <hr>

    <label for="name"><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="name" id="name" v-model="name" required>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" v-model="email" required>

    <label for="phone"><b>PhoneNumber</b></label>
    <input type="text" placeholder="Enter Phone Number" name="phonenumber" id="phonenumber" v-model="phone" required>

    <button type="submit" class="registerbtn" @click="submit($event)">Add User </button>
    <button type="submit" class="registerbtn" @click="view()"> View User</button>
    
  </div>
  
</form>


</body>


</template>

<script>
import {Adduser} from './Adduser'
export default Adduser
</script>

<style lang="less">
  @import "./Adduser.less";
</style>