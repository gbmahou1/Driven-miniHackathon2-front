import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function TopicPage() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [video, setVideo] = useState();

    useEffect(() => {
        async function getVideos() {
            const response = await axios.get(`https://localhost:5000/videos/${id}`);
            setVideo(response.data);
        }
        getVideos();
    }, []);

    return (
        <Container>
            <Body>
                <TitleBox>
                    Driven Physics
                </TitleBox>
                <Video>
                    <iframe width='500' height='400' 
                        src={video}>
                    </iframe>
                </Video>
                <Quiz onClick={() => navigate(`/questions/${id}`)}>
                    PRATICAR
                </Quiz>
            </Body>
        </Container>
    );
}

const Container = styled.div`
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	background-color: darkgray;
`;

const Body = styled.div`
	left: 0;
	right: 0;
	bottom: 0;
	width: 600px;
	height: 100%;
	margin: auto;
	position: absolute;
	background: whitesmoke;
`;

const TitleBox = styled.div`
	height: 100px;
    width: 100%;
    font-size: 30px;
    line-height: 100px;
    font-weight: bolder;
    text-align: center;
    color: white;
    background-color: darkcyan;
`;

const Video = styled.div`
    width: 500px;
    height: 400px;
    margin: 50px auto;
    position: relative;
    font-weight: bolder;
    text-align: center;
    background-color: lightgrey;
`;

const Quiz = styled.div`
    width: 200px;
    height: 100px;
    border-radius: 30px;
    font-size: 22px;
    color: white;
    font-weight: bolder;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: darkcyan;

    :hover {
        cursor: pointer;
        color: black;
        background-color: cyan;
    }
`;