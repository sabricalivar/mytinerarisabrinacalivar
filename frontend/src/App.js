import './App.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home';
import Cities from './pages/Cities';
import Cmpt404 from './pages/404';
import Login from './pages/Login';
import Navegador from './components/Navegador';
import Footer from './components/Footer'
import City from './pages/City';
import Admin from './pages/Admin';
import Signup from './pages/Signup';
import { connect } from 'react-redux';
import usersActions from './redux/actions/usersActions';
import { useEffect } from 'react';
import SwiperCore, {
  Pagination,Navigation
} from 'swiper';


const App = (props) => { 
  SwiperCore.use([Pagination,Navigation]);

  useEffect(()=>{
    if(localStorage.getItem('token')){
      props.logInLS(localStorage.getItem('token'))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <BrowserRouter>
    <div>
      <Route component={Navegador}/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/cities' component={Cities}/>
        <Route path='/city/:id' component={City}/>
        <Route path='/notFound' component={Cmpt404}/>
        <Route path='/admin' component={Admin}/>
        {!props.token &&  <Route path='/login' component={Login}/>}
        {!props.token && <Route path='/signup' component={Signup}/>}
        <Redirect to='/'/>
      </Switch>
      <Route component={Footer}/>
    </div>
    </BrowserRouter>
  )
}
const mapStateToProps = state => {
  
  return {
      token: state.users.token,
  }
}

const mapDispatchToProps={
  logInLS:usersActions.logInLS
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
