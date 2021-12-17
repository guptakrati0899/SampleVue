import {Vue, Component} from 'vue-property-decorator'


@Component
export  class UserManagement extends Vue{

    
    addRoute(){
        this.$router.push(`/adduser`)
    }
   
   
}