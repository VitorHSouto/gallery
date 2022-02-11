import styled from "styled-components"

export const Container = styled.div`
    font-family: 'roboto';
    font-weight: 300;
    background-color: #090c14;
    color: #fff;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 10px;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    padding-top: 30px;
    margin-bottom: 30px;
`;

export const ScreenLoading = styled.div`
    text-align: center;

    .emoji{
        font-size: 50px;
        margin-bottom: 15px;
    }
`;

export const PhotoList = styled.div`
    display: grid;

    /* Tablet Styles */
    @media screen and (min-width:150px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 10px;
    }

    @media screen and (min-width:640px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    @media screen and (min-width:1000px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
    }

`;

export const UploadForm = styled.form`
    background-color: #151d31;
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 30px;

    input[type=submit] {
        background-color: #25BE43;
        border: 0;
        margin: 0 20px;
        color: #fff;
        padding: 8px 15px;
        font-size: 15px;
        border-radius: 10px;
        cursor: pointer;

        &:hover{
            opacity: 0.75;
        }
    }

    input[type='file'] {
    display: none
    }

    /* Aparência que terá o seletor de arquivo */
    label {
        background-color: #3498db;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        margin: 10px;
        padding: 6px 20px;

        &:hover{
                opacity: 0.75;
        }
    }
`;