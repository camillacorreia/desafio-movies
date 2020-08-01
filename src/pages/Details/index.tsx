import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/api';

import { Container, FullDescription, Header, Img,
    InforComplementary, DivDetails, Sinopse,
    InforTitle, Infor, DivGenre, Genres, Type,
    DivPercentage, Percentage, Trailler  } from './styles';

interface IdParams {
    id: string;
}

interface Language {
    id: string;
    name: string;
}

interface Genre {
    id: string;
    name: string;
}

interface Video {
    id: string;
    key: string;
    name: string;
}

interface Movie {
    overview: string;
    release_date: string;
    id: string;
    title: string;
    vote_average: number;
    poster_path:string;
    genres: Genre[];
    status:string;
    spoken_languages: Language[];
    runtime: number;
    budget: number;
    revenue:number;
    videos: {
        results: Video[];
    }
}

const Details: React.FC = () => {
    const [detail, setDetails] = useState<Movie | null>(null);
    const { params } = useRouteMatch<IdParams>();

    useEffect(() => {
        api.get(`movie/${params.id}?api_key=3f5c27a722111119bd0a17ecc49bbe43&language=pt-BR&append_to_response=videos`).then((response) => {
            setDetails(response.data);
        });
    }, [params.id]);

    function formatDate (date: string) {
        if (date) {
            const [year, month, day] = date.split('-');
            return `${day}/${month}/${year}`
        }
    }

    function formatTime (time: number) {
        const hours = Math.floor(time / 60);
        const minutes = time - (hours * 60);
        return hours > 0 ? hours + 'h  ' + minutes + 'min' : minutes + 'min';
    }

    function formatValue (value: number) {
        let result = value+'';
        result = result.replace(/([0-9]{2})$/g, ",$1");
        if (result.length > 6)
            result = result.replace(/([0-9]{3}),([0-9]{2})$/g, ".$1,$2");

        if( result.length > 9)
            result = result.replace(/([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g,".$1.$2,$3");
            
        return result
    }

    return (
        <>
            { detail &&
                <Container key={detail.id}>

                    <FullDescription>

                        <Header>
                            <span>{detail.title}</span>
                            <p>{formatDate(detail.release_date)}</p>
                        </Header>

                        <InforComplementary>

                            <DivDetails>

                                <Sinopse>
                                    <span>Sinopse</span>
                                    <hr/>
                                    <p>
                                    {detail.overview}
                                    </p>
                                </Sinopse>

                                <InforTitle>
                                    <span>Informações</span>
                                    <hr />
                                </InforTitle>

                                <Infor>
                                    <div>
                                        <span className="letter">Situação</span>
                                        <span className="smaller-letter">{(detail.status === 'Released') ? 'Lançado' : 'Em breve'}</span>
                                    </div>
                                    <div>
                                        <span className="letter">Idioma</span>
                                        {(typeof(detail.spoken_languages) == 'object') ?
                                        detail.spoken_languages.map(language =>
                                        <span className="smaller-letter" key={language.id}>{language.name}</span>) : <span className="letra-menor"> nada </span>}
                                    </div>
                                    <div>
                                        <span className="letter">Duração</span>
                                        <span className="smaller-letter">{formatTime(detail.runtime)}</span>
                                    </div>
                                    <div>
                                        <span className="letter">Orçamento</span>
                                        <span className="smaller-letter">${formatValue(detail.budget)}</span>
                                    </div>
                                    <div>
                                        <span className="letter">Receita</span>
                                        <span className="smaller-letter">${formatValue(detail.revenue)}</span>
                                    </div>
                                    <div>
                                        <span className="letter">Lucro</span>
                                        <span className="smaller-letter">${formatValue(detail.revenue - detail.budget)}</span>
                                    </div>
                                </Infor>

                                <DivGenre>
                                    <Genres>
                                        {(typeof(detail.genres) == 'object') ?
                                        detail.genres.map(genre =>
                                        <Type key={genre.id}>
                                            <span>{genre.name}</span>
                                        </Type>)
                                        :  <Type><span>Sem gênero</span></Type>}
                                    </Genres>
                                </DivGenre>

                                <DivPercentage>
                                    <Percentage>
                                        <p>{(detail.vote_average)*10}%</p>
                                    </ Percentage>
                                </ DivPercentage>

                            </ DivDetails>

                            
                            <Img>
                                <img src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`} alt={detail.title} />
                            </Img>

                        </ InforComplementary>
                    </ FullDescription>

                    {(detail.videos && typeof(detail.videos.results) == 'object') ?
                    detail.videos.results.map(video => (
                        <Trailler key={video.id}>
                            <iframe
                                title={video.name}
                                src={`https://www.youtube.com/embed/${video.key}`}
                            ></iframe>
                        </Trailler>
                    )) : <></>}

                </ Container>
            }
        </>
    );
};

export default Details;