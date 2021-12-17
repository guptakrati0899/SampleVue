<template>
<div class="result-display">
     <h1 class="head">Result</h1>
        <div class="container-inner" >
          <div class="question-section" v-for="(question,   index) in result" :key="index">
            
            <h4 class="inner">Question Id:  {{question.questionId}}</h4>
            <h4 class="inner">Question Title: {{question.questionTitle}}</h4>
            <h4 class="inner-h">Question response: {{ question.response }}</h4>
    
    </div>
        </div>
</div>
    
</template>


<script>
 import {resultMcq} from '../resultMcq/resultMcq'
 export default resultMcq;

</script>

<style lang="less" >

@import "./resultMcq.less";






</style> 
