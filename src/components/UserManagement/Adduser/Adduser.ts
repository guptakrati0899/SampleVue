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
    public error : string[] = []

    public userList: Array<User> = []

    submit(event: any): void {
        event.preventDefault();

     

        this.user.name= this.name
        this.user.email= this.email
        this.user.phonenumber= this.phone
        this.user.key = Math.random().toString()

        if(this.user.name === ""){
            this.error.push(" Name is required.")
        }else if (!this.validName(this.user.name)) {
            this.error.push('Valid Name required.');
          }

        if(this.user.email === ""){
            this.error.push("Email is required.")
        }else if (!this.validEmail(this.user.email)) {
            this.error.push('Valid email required.');
          }

        if(this.user.phonenumber === ""){
            this.error.push("Phone Number is required.")
        }else if (!this.validPhone(this.user.phonenumber)) {
            this.error.push('Valid PhoneNumber required.');
          }

        if(this.user.name != "" && this.user.email != "" && this.user.phonenumber !=""){

        this.userList.push({ ...this.user })
        localStorage.setItem('userList', JSON.stringify(this.userList));
        }
       
    }

    validEmail(email: any){

        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);

    }

    validPhone(phonenumber :any){
        var phone =/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        return phone.test(phonenumber);

    }

    validName(name : any){
        var n =/^[A-Z][-a-zA-Z\s]+$/;
        return n.test(name)

    }
   

    view(){
        this.$router.push('/viewuser')

    }


}

