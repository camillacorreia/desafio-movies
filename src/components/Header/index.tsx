import React from 'react';
import { Link } from 'react-router-dom';

import { Headline } from './styles';

const Header: React.FC = () => {
    return (
        <Headline>
            <Link to="/">
                Movies
            </Link>
        </ Headline>
    );
};

export default Header;