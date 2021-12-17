import {Vue, Component,Watch} from 'vue-property-decorator';
import  {newMcqData}  from './newMcq.data';
import { QuestionSet } from '@/Model/model';
import { testArray } from '@/Model/model';
import Buttons from "../Buttons/Buttons.vue"
import axios from 'axios';



@Component({
    components: {
        'buttonss':Buttons
    }
})
export class NewMcq extends Vue{

    @Watch('message')
    messageFunction(val :string){
        console.log("message >>",val)

    }

    public message : string ="New MCQ Component"

    public data : Array<QuestionSet> = newMcqData
    public newdata : Array<testArray> = [] ;


    changeMessage(){
        this.message = "Dynamic message"
    }

    shortDirective(){
        this.message = "Dynamic message by shorthand"

    }

    beforeMount(){
        console.log('before mount')

    }

    mounted(){
        console.log('mounted')

    }
    created() {
        axios
          .get(`http://jsonplaceholder.typicode.com/posts`)
          .then((response) => {
            console.log(response.data);
            this.newdata = response.data
            console.log("new data",this.newdata)
           
          })
          .catch((error) => {
            console.log(error);
          });
        
      }

   updated(){
    console.log('updated')

   }
   beforeUpdate(){
    console.log('before update')

   }

   beforeDestroy(){
    console.log('before destroy')

   }

   destroyed(){
    console.log('destroyed')

   }

}