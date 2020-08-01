import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Form, Listing, Img, FullDescription,
    MovieHeader, MovieDescription, Percentage,
    Date, Sinopse, Genre, Type } from './styles';

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
    const [movies, setMovies] = useState<Movie[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const response = await api.get(`search/movie?api_key=3f5c27a722111119bd0a17ecc49bbe43&language=pt-BR&query=${search}`);
        const genres = await api.get('genre/movie/list?api_key=3f5c27a722111119bd0a17ecc49bbe43&language=pt-BR');

        setMovies(response.data.results);
        setGenres(genres.data.genres);
    }

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

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Busque um filme por nome ou gênero..."
                    onChange={event => setSearch(event.target.value)}
                    value={search}
                />
            </ Form>

            {movies.map(movie => (
                <Link to="/" key={movie.id}>
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
        </>
    );
};

export default Home;