import React from 'react';
import './Main.css';
import MovieInfo from '../details/MovieInfo'


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            showDetails: {},
            currentMovie: null
        }
    }

    async componentDidMount() {
        try {
            const urlAddress = 'https://api.themoviedb.org/3/movie/popular?api_key=afb0115d2ce3246e2691a628fcc01737&language=en-US';
            await fetch(`${urlAddress}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((res) => res.json())
                .then((data) => this.setState({ movies: data.results }))
                .catch((err) => console.error(err));

            console.log(this.state.movies);
        } catch (err) {
            alert(err);
        }
    }

    handleClick = (event) => {
        event.currentTarget.classList.toggle('active');
    }

    viewMovieInfo = (id) => {
        debugger
        const filteredMovie = this.state.movies.filter(movie => movie.id === id)
        const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null
        this.setState({ currentMovie: newCurrentMovie })
    }

    closeMovieInfo = () => {
        this.setState({ currentMovie: null })
    }

    render() {
        return (
            <main className='App-main'>
                <div className='content'>
                    {
                        this.state.movies.map((movie, i) => {
                            return (
                                <div className='show' onClick={this.viewMovieInfo} key={i} movies={this.state.movies} movieId={movie.id}>Movie Name: {movie.title}<br />Vote range: {movie.vote_average}<br />Release Date: {movie.release_date}
                                    <MovieInfo currentMovie={this.state.currentMovie} />
                                </div>
                            );
                        })
                    }
                </div>
            </main>
        )
    }
}

export default Main;