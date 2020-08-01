import React from 'react';

import { Footer, Pag } from './styles';

const Pagination: any = ( {moviesPerPag, totalMovies, paginate, currentPag} ) => {
    let pagNumbers: any = [];

    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPag); i++) {
        pagNumbers.push(i);
    }

    return (
        <>
            <Footer>
                {pagNumbers.map (number => (
                    <Pag key={number} onClick={() => paginate(number)}>
                        <span className={currentPag === number ? 'enable' : 'disable'} >{number}</span>
                    </Pag>
                ))}
            </Footer>
      </>
    );
}

export default Pagination;