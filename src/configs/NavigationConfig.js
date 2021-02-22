
  import { APP_PREFIX_PATH, AUTH_PREFIX_PATH,  DEFAULT_PREFIX_PATH} from 'configs/AppConfig'
  
  // export const commonScreens = {
  //   Help: HelpScreen,
  // };
  
  // export const authScreens = {
  //   SignIn: SignInScreen,
  //   SignUp: SignUpScreen,
  // };
  
  export const privateScreens = [
    {
      name: 'news',
      tab: 'chat',
      title: 'News',
      icon: 'ios-newspaper-outline'
    },
    
    {
      name: 'dashboard',
      tab: 'dashboards',
      title: 'Home',
      icon: 'ios-home-outline'
    },

    {
      name: 'location',
      tab: 'location',
      title: 'Find',
      icon: 'ios-location-outline'
    },

    {
      name: 'profile',
      tab: 'profile',
      title: 'Profile',
      icon: 'ios-person-outline'
    }
  ];
  
  