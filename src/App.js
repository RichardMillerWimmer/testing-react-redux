import Header from "./components/Header";
import Headline from "./components/Headline";
import './styles/app.scss';

/* This const is not used within our app.
   Although we are passing it to the Headline Component
   it is only here as an exampleof testing PropTypes */
   const tempArr = [{
    fName: 'Joe',
    lName: 'Bloggs',
    email: 'joebloggs@gmail.com',
    age: 24,
    onlineStatus: true
  }];
  

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Headline header='Posts' desc='Click the button to render posts' tempArr={tempArr} />
      </main>
    </div>
  );
}

export default App;
