import React from 'react';
import { Link } from 'react-router-dom';

import thor from '../../assets/thor.jpg';

import { Form, Listing, Img, FullDescription,
    MovieHeader, MovieDescription, Percentage,
    Date, Sinopse, Genre, Type } from './styles';

const Home: React.FC = () => {
    return (
        <>
            <Form>
                <input
                    type="text"
                    placeholder="Busque um filme por nome ou gênero..."
                />
            </ Form>


            <Link to="/" >
                <Listing>
                    <Img src={thor} alt="Thor: Ragnarok" />
                    
                    <FullDescription>

                        <MovieHeader>
                            <p>Thor: Ragnarok</p>
                        </MovieHeader>

                        <MovieDescription>

                            <Percentage>
                                <p>70%</p>
                            </Percentage>

                            <Date>
                                <span>25/10/2017</span>
                            </Date>

                            <Sinopse>
                                <p>
                                Thor está preso do outro lado do universo. Ele precisa correr contra o tempo
                                para voltar a Asgard e parar Ragnarok, a destruição de seu mundo, que está nas
                                mãos da poderosa e implacável vilã Hela.
                                </p>
                            </Sinopse>
                            
                            <Genre>
                                <Type>
                                    <span>
                                        Ação
                                    </span>
                                </Type>

                                <Type>
                                    <span>
                                        Aventura
                                    </span>
                                </Type>

                                <Type>
                                    <span>
                                        Comédia
                                    </span>
                                </Type>

                                <Type>
                                    <span>
                                        Fantasia
                                    </span>
                                </Type>

                            </Genre>

                        </ MovieDescription>
                    </ FullDescription>
                </ Listing>
            </ Link>
        </>
    );
};

export default Home;