import styled from "styled-components";

export const Container = styled.div`
    background-color: #151d31;
    border-radius: 10px;
    padding: 10px;

    img {
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
        cursor: pointer;

        &:hover{
            opacity: 0.75;
        }
    }

    .close{
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        position: relative;
        float: right;
        color: #BE2528;
        transition: all 0.2s ease;
        cursor: pointer;

        &:hover{
            opacity: 0.75;
        }

        svg{
            width: 100%;
            height: 100%;
        }
    }


`;