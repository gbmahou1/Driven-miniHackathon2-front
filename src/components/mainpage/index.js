import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function MainPage()
{
    return (
        <Container>
            <Body>
                <TitleBox>
                    Driven Physics
                </TitleBox>
                <TopicTitle>
                    [1] Velocidade
                </TopicTitle>
                <Link to="assunto/1">
                <ContentBox>
                        Estude esse tópico! ->
                </ContentBox>
                </Link>
                <TopicTitle>
                    [2] Força
                </TopicTitle>
                <Link to="assunto/2">
                <ContentBox>
                        Estude esse tópico! ->
                </ContentBox>
                </Link>
                <TopicTitle>
                    [3] Movimento Variado
                </TopicTitle>
                <Link to="assunto/3">
                <ContentBox>
                        Estude esse tópico! ->
                </ContentBox>
                </Link>
                <TopicTitle>
                    [4] Encontro de Partículas
                </TopicTitle>
                <Link to="assunto/4">
                <ContentBox>
                        Estude esse tópico! ->
                </ContentBox>
                </Link>
            </Body>
        </Container>
    )
}


const Body = styled.div`
	position: absolute;
	width: 600px;
	height: 100%;
	bottom: 0;
	margin: auto;
	left: 0;
	right: 0;
	background: whitesmoke;
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: darkgray;
	left: 0;
	top: 0;
	position: absolute;
	
`;

const TitleBox = styled.div`
	height: 100px;
    width: 100%;
    background-color: darkcyan;
    line-height: 100px;
    font-size: 30px;
    font-weight: bolder;
    text-align: center;
    color: white;
`;

const TopicTitle = styled.div`
    width: 550px;
    margin: auto;
    margin-top: 20px;
    color: darkcyan;
    font-size: 20px;
`;

const ContentBox = styled.div`
    width: 500px;
    height: 100px;
    border-radius: 30px;
    background-color: lightgrey;
    font-weight: bolder;
    font-size: 30px;
    color: white;
    margin: auto;
    margin-top: 20px;
    line-height: 100px;
    text-align: center;
    text-decoration: none;
`;