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

  const initialState = {
    showBtn: true
  }
  

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
    this.fetch = this.fetch.bind(this);
  }

  toggleBtn() {
    const { showBtn } = this.state;
    this.setState({showBtn: !showBtn})
  }

  fetch() {
    this.props.fetchPosts();
    this.toggleBtn();
  }

  //For testing example purposes
  exampleMethod(number) {
    return number + 1
  }

  render() {
    const { posts } = this.props;
    const { showBtn } = this.state;

    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch
    };

  return (
    <div className="App" data-test='appComponent'>
      <Header />
      <main className='main'>
        <Headline header='Posts' desc='Click the button to render posts' tempArr={tempArr} />
        { showBtn && 
          <Button {...configButton} />
        }
        {posts.length > 0 && 
        <div>
          {posts.map((post, index) => {
            const { title, body } = post;
            const configListItem = { title, desc: body };
            return (
              <ListItem key={title}{...configListItem}/>
            )
          })}
          </div>}
      </main>
    </div>
  );
}
}

const mapStateToProps = state => {
  // console.log(state)
  return { posts: state.postReducer.posts }
}

export default connect(mapStateToProps, { fetchPosts })(App);
