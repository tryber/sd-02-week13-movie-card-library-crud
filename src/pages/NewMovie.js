import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      redirect: false,
    };
    this.movie = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      genre: '',
      rating: 0,
    };
  }

  setRedirect() {
    this.setState({
      redirect: true,
    });
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie, this);
    this.setRedirect();
  }

  renderRedirect() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return <MovieForm onSubmit={this.handleSubmit} movie={this.movie} />;
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
      </div>
    );
  }
}

export default NewMovie;
