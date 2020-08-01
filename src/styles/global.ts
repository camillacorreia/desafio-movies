import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    :root {
        --primary-color: #116193;
        --secundary-color: #00ede7;
        --auxiliary-color: #ebebeb;
        --text-color: #5e5e5e;
    }
    
    body {
        background: #fff;
        -webkit-font-smoothing: antialiased;
        color: var(--text-color);
        font-family: 'Abel', 'Lato', sans-serif;
    }

    a:-webkit-any-link {
        text-decoration: none;
        cursor: pointer;
    }
`; 