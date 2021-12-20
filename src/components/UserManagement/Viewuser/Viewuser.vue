<template>
  <div class="view">
    <h1>View User</h1>
    <table border="4">
      <thead>
        <th>Sr no</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone number</th>
        <th>Edit/Delete</th>
      </thead>
      <tbody>
        <tr v-for="(post, index) in result" :key="index">
          <td>{{ index }}</td>
          <td>{{ post.name }}</td>
          <td>{{ post.email }}</td>
          <td>{{ post.phonenumber }}</td>
          <td><button @click="edituser(post)">Edit</button><button @click="deleteuser(post.key)">Delete</button></td>
        </tr>
      </tbody>
    </table>
    <div v-if="edit" class="editpopup">
              <edit :editdata="editdata" :edit ="edit"/>
    </div>
   
  </div>
</template>


<script>
import { Viewuser } from "./Viewuser";
export default Viewuser;
</script>

<style lang="less">
@import "./Viewuser.less";
</style>