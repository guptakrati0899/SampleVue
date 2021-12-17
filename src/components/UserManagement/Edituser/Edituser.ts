import { Vue, Component,Prop} from 'vue-property-decorator'


@Component
export class Edituser extends Vue {

    
    @Prop()
    editdata !:any

   
}