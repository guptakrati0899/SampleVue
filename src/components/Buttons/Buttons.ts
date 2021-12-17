import {Vue, Component} from 'vue-property-decorator'

@Component
export default class Buttons extends Vue{

    
    beforeMount(){
        console.log("beforeMount")
    }

    mounted(){
        console.log("mouonted")
    }

    created(){
        console.log("created")
    }

    updated(){
        console.log("updatee")
    }

    beforeUpdate(){
        console.log("beforeUpdate")
    }

    beforeDestroy(){
        console.log("beforeDestroy")
    }

    destroyed(){
        console.log("destroyed")
    }
   
    
    
}