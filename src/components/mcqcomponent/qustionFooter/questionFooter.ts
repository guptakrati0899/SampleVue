import { Vue, Component, Prop } from 'vue-property-decorator'
import {QuestionSet} from '../../../Model/model'




@Component({
    components: {
        
    }
})
export class QuestionFooter extends Vue {
    
@Prop()
selectAnswers !: Array<String>



public resultSet : Array<any> = []

@Prop()
data !:Array<QuestionSet>

@Prop()
index !:number

previousIndex(index : number) : void{
    this.$emit('anyPreviousIndex', index )
}

nextIndex(index : number) : void{
    this.$emit('anyNextIndex', index )
}
resultRoute(){
    this.resultSet = JSON.parse(JSON.stringify(this.data))
    this.selectAnswers.forEach((item : any,index:number)=>{
        this.resultSet[index].response = item
    })
    console.log(this.resultSet)
    localStorage.setItem('data',JSON.stringify(this.resultSet))
    this.data = JSON.parse(JSON.stringify(this.resultSet))
    this.$router.push('/result')
}

}