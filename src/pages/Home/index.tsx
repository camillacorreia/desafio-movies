import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import Pagination from '../../components/Pagination';

import api from '../../services/api';

import { Form, Listing, Img, FullDescription,
    MovieHeader, MovieDescription, Percentage,
    Date, Sinopse, Genre, Type, Error } from './styles';

interface Movie {
    id: string;
    title: string;
    poster_path:string;
    vote_average: number;
    release_date: string;
    overview: string;
    genre_ids: object[];
}

interface Genre {
    id: string;
    name: string;
}

const Home: React.FC = () => {
    const [search, setSearch] = useState('');
    const [inputError, setInputError] = useState('');
    const [movies, setMovies] = useState<Movie[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [currentPag, setCurrentPag] = useState(1);
    const [moviesPerPag] = useState(5);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!search) {
            setInputError('Digite o nome do filme ou gênero');
            return;
        }

        const response = await api.get(`search/movie?api_key=3f5c27a722111119bd0a17ecc49bbe43&language=pt-BR&query=${search}`);
        const genres = await api.get('genre/movie/list?api_key=3f5c27a722111119bd0a17ecc49bbe43&language=pt-BR');

        setMovies(response.data.results);
        setGenres(genres.data.genres);
        setInputError('');

        // eslint-disable-next-line
        if ((response.data.results).length == false) {
            setInputError('Filme ou gênero não encontrado');
        }
    }

    const indexOfLastMovie = currentPag * moviesPerPag;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPag;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    function formatDate (date: string) {
        if (date) {
            const [year, month, day] = date.split('-');
            return `${day}/${month}/${year}`
        }
    }

    function formatGenre(id: any) {
        const result = genres.find(genre => genre.id === id);
        if (result) return result.name
    }

    function paginate(pagNumber: any) {
        return setCurrentPag(pagNumber);
    }

    return (
        <>
            <Form hasError={!!inputError} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Busque um filme por nome ou gênero..."
                    onChange={event => setSearch(event.target.value)}
                    value={search}
                />
            </ Form>

            { inputError && <Error>{inputError}</Error> }

            {currentMovies.map(movie => (
                <Link to={`/details/${movie.id}`} key={movie.id}>
                    <Listing>
                        <Img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                        
                        <FullDescription>

                            <MovieHeader>
                                <p>{movie.title}</p>
                            </MovieHeader>

                            <MovieDescription>

                                <Percentage>
                                    <p>{(movie.vote_average)*10}%</p>
                                </Percentage>

                                <Date>
                                    <span>{formatDate(movie.release_date)}</span>
                                </Date>

                                <Sinopse>
                                    <p>
                                    {movie.overview}
                                    </p>
                                </Sinopse>
                                
                                <Genre>
                                    {movie.genre_ids.map(genre_id => (
                                        <Type>
                                            <span>
                                                {formatGenre(genre_id)}
                                            </span>
                                        </Type>
                                    ))}
                                </Genre>

                            </ MovieDescription>
                        </ FullDescription>
                    </ Listing>
                </ Link>
            ))}
            <Pagination moviesPerPag={moviesPerPag} totalMovies={movies.length} paginate={paginate} currentPag={currentPag} />
        </>
    );
};

export default Home;