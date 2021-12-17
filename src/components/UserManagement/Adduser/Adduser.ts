import { Vue, Component } from 'vue-property-decorator'

type User = {
    name: string,
    email: string,
    phonenumber: string,
    key: string
}

@Component
export class Adduser extends Vue {

    public user: User = {
        name: "",
        email: "",
        phonenumber: "",
        key: ""
    }

    public name: string =""
    public email: string =""
    public phone: string =""

    public userArray: any;

    public userList: Array<User> = []

    submit(event: any): void {
        event.preventDefault();
        // let name = document.getElementById('name') as any
        // let email = document.getElementById('email') as any
        // let num = document.getElementById('phonenumber') as any

        this.user.name= this.name
        this.user.email= this.email
        this.user.phonenumber= this.phone
        this.user.key = Math.random().toString()

        this.userList.push({ ...this.user })
        localStorage.setItem('userList', JSON.stringify(this.userList));
       
    }

    view(){
        this.$router.push('/viewuser')

    }


}

