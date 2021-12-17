import { Vue, Component,Prop } from 'vue-property-decorator'
import  Edituser  from '../Edituser/Edituser.vue'

@Component({
    components: {
        'edit': Edituser
    }
})

export class Viewuser extends Vue {
    
    public result :any=[]
    
    public edit:boolean = false

    public name: string =""
    public email: string =""
    public phone: string =""
    public editdata: any =""



  
    mounted(){
      
        let data : any = localStorage.getItem('userList')
        this.result = JSON.parse(data)
    }

    deleteuser(key: string){
      
        let splicear : any = localStorage.getItem('userList')
        let splicearr:any = JSON.parse(splicear)
        for (var index = 0; index < splicearr.length; index++) {
            if(splicearr[index].key==key){
                splicearr.splice(index, 1);
            }
           
          }

          localStorage.setItem('userList', JSON.stringify(splicearr))
          this.result.forEach((element : any, index : number) => {
            if(element.key == key){
                this.result.splice(index,1);
            }
         });


        }
    

      
            
      
    

    edituser(key: any){
            this.edit=true
            this.name=key.name
            this.email=key.email
            this.phone=key.phonenumber
            console.log(key)
            this.editdata=key
            console.log(this.editdata)
            
            
          }

        
}

