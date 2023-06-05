import right_image from './pics.jpg';
import icon from './icon.png';
import './App.css';


function Navigation() {
  return (
    <nav>
      <div id="icons">
        <img src={icon} />
        <h1>TECHBARGE</h1>
      </div>
      <div id="links">
          <ul>
            <li><a href="#" class="active">What We create</a></li>
            <li><a href="#">Opportunities</a></li>
            <li><a href="#">Indusry Examples</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
          <button>Get Started</button>
      </div>
    </nav>
  )
}

function LeftContent() {
  return (
      <div>
        <h1>Simplified <br/> Intergration</h1>
        <p>
          Let's import data from your existing systems like QuickBooks or 
          even digitize your hard copy files. Add custom tags for easy
          searchability later.
        </p>
      </div>
  )
}

function RightContent() {
  return (
      <img src={right_image} />
  )
}

function Container({id}, {contents}) {

  if ({id}.id == "left") {
    return (
      <div id={id}>
          <LeftContent/>
      </div>
    )
  } else {
    return (
      <div id={id}>
        <RightContent/>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Container id="left"/>
      <Container id="normal"/>
    </div>
  );
}

export default App;
