import Header from "./components/Header";
import Headline from "./components/Headline";
import './styles/app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Headline header='Posts' desc='Click the button to render posts' />
      </main>
    </div>
  );
}

export default App;
