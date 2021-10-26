import { Component } from "react";
import Header from "./components/Header";
import Headline from "./components/Headline";
import Button from './components/Button';
import ListItem from './components/ListItem';
import { connect } from 'react-redux';
import { fetchPosts } from "./redux/actions";
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
  

class App extends Component {

  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  

  fetch() {
    this.props.fetchPosts();
  }

  render() {

    console.log(this.props)

    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch
    };

  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Headline header='Posts' desc='Click the button to render posts' tempArr={tempArr} />
        <Button {...configButton} />
      </main>
    </div>
  );
}
}

const mapStateToProps = state => {
  console.log(state)
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(App);
