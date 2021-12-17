<template>
    <div>
        <div class="welcome-outer">
      <div class="welcome">
        <h1>Welcome To User Management</h1>
      <button @click="addRoute()">Add user</button>
      </div>
    </div>
    </div>
</template>
<script>

import {UserManagement} from "./UserManagement"
export default UserManagement;
 
</script>

<style lang="less">
  @import "./UserManagement.less";
</style>
