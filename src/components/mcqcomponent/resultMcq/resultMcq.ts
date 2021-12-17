import { Vue, Component} from 'vue-property-decorator'
import { ResultSet } from '@/Model/model'
import {mcqData} from '../mcqData';

@Component
export class resultMcq extends Vue {
    public data : Array<ResultSet> = mcqData
    public selectAnswers : string[] = ['','','','','','','','','','']
    public result : any = []
    // beforeMount(){
    //     console.log('before mount')

    // }

    mounted(){
        let data : any = localStorage.getItem('data')
        this.result = JSON.parse(data)
        console.log(data)
    }

    }
//     created(){
//         console.log('created')

//     }

//    updated(){
//     console.log('updated')

//    }
//    beforeUpdate(){
//     console.log('before update')

//    }

//    beforeDestroy(){
//     console.log('before destroy')

//    }

//    destroyed(){
//     console.log('destroyed')

//    }
 

