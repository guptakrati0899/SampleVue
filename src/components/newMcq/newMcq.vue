<template>
<div>
    <div class="content-container">
      <div class="panel-left question-container-left" style="width : 70%" >
        <buttonss btn-text="Hii i am a button parent"/>

        <h2>Question/Answer</h2>
        <div class="container-inner" >
          <div  v-for=" (body, bindex) in newdata" :key ="bindex" style="text-decoration: none">
            <h2>{{body.id}}. {{body.title}}</h2>
            <p>
              {{ body.body }}
            </p>
            </div>
          <div class="question-section" v-for="(question,   index) in data" :key="index">

            <template v-if="question.isShow">
              <p>
              {{ question.questionTitle }}
            </p>
            
            <ul>
              <li v-for="(res, ind) in question.responseSet"
                :value="res"
                :key="index + ind"  >
                <label>
                <input type="radio" :value="res"/>
                {{ res }}</label>
                </li>
            </ul> 
                 
            </template>
              </div>
         
        </div>
    </div>
    </div>
    <!-- <table border ="1">
        <thead>
            <th>Sr. No.</th>
            <th>Id</th>
            <th>Question Title</th>
            <th>Question Response</th>
        </thead>
        <tbody>
            <tr v-for="(question, qIndex) in data" v-bind:key ="qIndex">
                <td>{{qIndex +1}}</td>
                <td>{{question.questionId}}</td>
                <td>{{question.questionTitle}}</td>
                <td>{{question.responseSet}}</td>
            </tr>
        </tbody>
        </table> -->
    <h1>{{message}} </h1>
    <button @click="changeMessage()">Change Message</button>
     <button @click="shortDirective()">Short Directive </button>
     <input type="text" v-model="message"/>
</div>
</template>


<script>

import {NewMcq} from './newMcq'

export default NewMcq;
 
</script>
<style scoped>

</style>
