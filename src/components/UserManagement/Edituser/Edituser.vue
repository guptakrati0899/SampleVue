<template>
<body>
<div class="edit-user">
<form >
  <div class="edittt">
      <input type="text" placeholder="name" v-model="editdata.name" >
      <input type="text" placeholder="email" v-model="editdata.email">
      <input type="text" placeholder="phone" v-model="editdata.phonenumber">
  </div>
</form>
</div>


</body>


</template>

<script>
import {Edituser} from './Edituser'
export default Edituser
</script>