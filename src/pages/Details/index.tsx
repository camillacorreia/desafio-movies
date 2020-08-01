import React from 'react';

import thor from '../../assets/thor.jpg';

import { Container, FullDescription, Header, Img,
    InforComplementary, DivDetails, Sinopse,
    InforTitle, Infor, DivGenre, Genre, Type,
    DivPercentage, Percentage, Trailler  } from './styles';

const Details: React.FC = () => {
    return (
        <>
            <Container>

                <FullDescription>

                    <Header>
                        <span>Thor: Ragnarok</span>
                        <p>27/10/2017</p>
                    </Header>

                    <InforComplementary>

                        <DivDetails>

                            <Sinopse>
                                <span>Sinopse</span>
                                <hr/>
                                <p>
                                Thor está preso do outro lado do universo. Ele precisa correr contra o tempo para
                                voltar a Asgard e parar Ragnarok, a destruição de seu mundo, que está nas mãos da
                                poderosa e implacável vilã Hela.
                                </p>
                            </Sinopse>

                            <InforTitle>
                                <span>Informações</span>
                                <hr />
                            </InforTitle>

                            <Infor>
                                <div>
                                    <span className="letter">Situação</span>
                                    <span className="smaller-letter">Lançado</span>
                                </div>
                                <div>
                                    <span className="letter">Idioma</span>
                                    <span className="smaller-letter">English</span>
                                </div>
                                <div>
                                    <span className="letter">Duração</span>
                                    <span className="smaller-letter">2h10min</span>
                                </div>
                                <div>
                                    <span className="letter">Orçamento</span>
                                    <span className="smaller-letter">$180.000.000,00</span>
                                </div>
                                <div>
                                    <span className="letter">Receita</span>
                                    <span className="smaller-letter">$180.000.000,00</span>
                                </div>
                                <div>
                                    <span className="letter">Lucro</span>
                                    <span className="smaller-letter">$180.000.000,00</span>
                                </div>
                            </Infor>

                            <DivGenre>
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
                            </DivGenre>

                            <DivPercentage>
                                <Percentage>
                                    <p>75%</p>
                                </ Percentage>
                            </ DivPercentage>

                        </ DivDetails>

                        
                        <Img>
                            <img src={thor} alt="Thor"/>
                        </Img>

                    </ InforComplementary>
                </ FullDescription>

                <Trailler>
                    <iframe
                        title="Thor"
                        src="https://www.youtube.com/embed/Sdml0HYLkqU"
                    ></iframe>
                </ Trailler>

            </ Container>
        </>
    );
};

export default Details;