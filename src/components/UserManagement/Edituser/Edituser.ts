import { Vue, Component,Prop} from 'vue-property-decorator'


@Component
export class Edituser extends Vue {

    
    @Prop()
    editdata !:any

    @Prop()
    edit !:any

    editSave(key : string, event: any){
        event.preventDefault();
        this.edit = false;

        let savear : any = localStorage.getItem('userList')
        let savearr:any = JSON.parse(savear)
        for (var index = 0; index < savearr.length; index++) {
            if(savearr[index].key==key){
                savearr[index].name =this.editdata.name
                savearr[index].email =this.editdata.email
                savearr[index].phonenumber =this.editdata.phonenumber

                break
            }
            
           
          }

          localStorage.setItem('userList', JSON.stringify(savearr))
       


    }

   
}