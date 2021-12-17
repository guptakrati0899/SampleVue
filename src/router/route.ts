import Home from '../views/Home.vue';
import MCQComponent from '../components/mcqcomponent/mcqComponent.vue';
import  resultMcq  from '../components/mcqcomponent/resultMcq/resultMcq.vue';
import NewMcq from '@/components/newMcq/newMcq.vue';
import UserManagement from '@/components/UserManagement/UserManagement.vue';
import Adduser  from '@/components/UserManagement/Adduser/Adduser.vue';
import  Viewuser  from '@/components/UserManagement/Viewuser/Viewuser.vue';

const routes = [
    {
      path: '/',
      name: 'home',
      // component: Home
      component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/mcq',
      name: 'MCQ',
      component: MCQComponent
    },
    {
      path: '/newmcq',
      name: 'NewMCQ',
      component: NewMcq 
    },
    {
      path: '/user',
      name: 'UserManagement',
      component: UserManagement

    },
    {
      path: '/result',
      name: 'Result',
      component: resultMcq
    },
    {
      path: '/adduser',
      name: 'addUser',
      component: Adduser
    },
    {
      path: '/viewuser',
      name: 'viewUser',
      component: Viewuser
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
      children :[
        {
          name : 'About1',
          path : 'about1',
          component: () =>
          import(/* webpackChunkName: "about" */ "../views/About1Component.vue"),
        },
        {
          name : 'About2',
          path : 'about2',
          // component : About2Component,
          component: () =>
          import(/* webpackChunkName: "about" */ "../views/About2Component.vue"),
        }
      ]
    }
  ]

  export default routes;