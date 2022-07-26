import Home from './components/home/index';
import Contact from './components/contactPage/index';
import Residential from './components/residentialPage/index';
import Commercial from './components/commercialPage/index';
import About from './components/aboutPage/index';
import Installation from './components/installationPage/index';
import PdfViewer from './components/pdfViewer/pdfViewer';
import './App.css';
import 'antd/dist/antd.min.css';
import { BrowserRouter as Router, Redirect, Route, Link as Link} from 'react-router-dom';

function App() {
  return(
    <Router>
      <div class='app'>
        <h1 class="logo"><Link to='/home'>FNOVATECH</Link></h1>
        <header  class='header'>
            <ul>
                <li><Link class='navi' to='/home'>Home</Link></li>
                <li><Link class='navi' to='/contact'>Contact Us</Link></li>
                <li><Link class='navi' to='/residential'>Residential</Link></li>
                <li><Link class='navi' to='/commercial'>Commercial</Link></li>
                <li><Link class='navi' to='/about'>About Us</Link></li>
                <li><Link class='navi' to='/installation'>Solar Installation</Link></li>
            </ul>
        </header>
        <Route exact path='/'><Redirect to='/home' /></Route>
        <Route exact path="/home" component={Home}/>
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/residential' component={Residential} />
        <Route exact path='/commercial' component={Commercial} />
        <Route exact path='/about' component={About} /> 
        <Route exact path='/installation' component={Installation} />          
        <Route path="/pdfviewer/:id" component={PdfViewer}/>
        <footer><hr></hr>Copyright © 2022 Fnovatech - All Rights Reserved.</footer>
      </div>       
    </Router>
  )
}

export default App;
