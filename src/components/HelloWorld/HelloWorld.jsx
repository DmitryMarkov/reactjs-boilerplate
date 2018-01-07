import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Icon from './icon.svg';
import './HelloWorld.scss';
import { addBook, removeBooks } from '../../actions/bookActions';

const mapStateToProps = state => ({
  books: state.book
});

const mapDispatchToProps = dispatch => ({
  addToStore: (id, bookAuthor, bookTitle) => {
    dispatch(addBook(id, bookAuthor, bookTitle));
  },
  clearStore: () => {
    dispatch(removeBooks());
  }
});

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
    this.remove = this.remove.bind(this);
  }

  sendData() {
    this.props.addToStore(0, 'John Smith', 'React Redux 4 dummies');
  }

  remove() {
    this.props.clearStore();
  }

  render() {
    const { books } = this.props;
    return (
      <div className="hello-world">
        <h1>
          <img src={Icon} alt="world" />
          Hello World!!!
        </h1>
        <ul className="book-list">
          {
            books
              .map(item => (
                <li
                  className="book-item"
                  key={item.id}
                >
                  {item.author} - {item.title}
                </li>
              ))
          }
        </ul>
        <button onClick={this.sendData}>Add book to store</button><br />
        <button onClick={this.remove}>Clear store</button><br />
        <Link to="/">Go home</Link>
      </div>
    );
  }
}

HelloWorld.propTypes = {
  addToStore: PropTypes.func,
  clearStore: PropTypes.func,
  books: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }))
};

HelloWorld.defaultProps = {
  addToStore: '',
  clearStore: '',
  books: []
};

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
