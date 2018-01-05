import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Icon from './icon.svg';
import './HelloWorld.scss';

const mapStateToProps = state => ({ books: state.book.books });

const HelloWorld = ({ books }) => (
  <div className="hello-world">
    <h1>
      <img src={Icon} alt="world" />
      Hello World!!!
    </h1>
    <ul className="book-list">
      {
        books.map(item => (
          <li
            className="book-item"
            key={item.id}
          >
            {item.author} - {item.title}
          </li>
        ))
      }
    </ul>
    <Link to="/">Go home</Link>
  </div>
);

HelloWorld.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }))
};

HelloWorld.defaultProps = {
  books: []
};

export default connect(mapStateToProps)(HelloWorld);
