import React from 'react';
import { Container, Paragraph } from '../../../utils/poseAnimations';

const About = () => (
    <Container>
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-10-mobile is-offset-1-mobile is-8 is-offset-2">
                        <h2 className="is-size-4">What is WeatherView?</h2>
                        <Paragraph className="is-italic">
                        <span className="subtitle">
                            A neat little react app to search current and future weather.
                        </span>
                        </Paragraph><br/>
                        <Paragraph>
                            This app is powered by the OpenWeatherMap Weather API.
                            Visit this link to create your own free API key
                            <br/><br/><a href={"https://openweathermap.org/api"}>https://openweathermap.org/api</a>.
                            <br/><br/>This is a fantastic free
                            API for building fun projects like this one.
                        </Paragraph><br/>
                        <h2 className="is-size-4">Featured Libraries</h2>
                        <Paragraph>
                            <a href="https://github.com/axios/axios" rel="noopener noreferrer" target="_blank">Axios</a><br/>
                            <a href="https://bulma.io/" rel="noopener noreferrer" target="_blank">Bulma</a><br/>
                            <a href="https://momentjs.com/" rel="noopener noreferrer" target="_blank">Moment</a><br/>
                            <a href="https://lodash.com/" rel="noopener noreferrer" target="_blank">Lodash</a><br/>
                            <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React</a><br/>
                            <a href="https://redux.js.org/" rel="noopener noreferrer" target="_blank">Redux & Thunk</a><br/>
                            <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React-Router</a><br/>
                            <a href="https://rma-consulting.github.io/react-easy-chart/" rel="noopener noreferrer" target="_blank">React Easy Chart</a><br/>
                            <a href="https://github.com/maslianok/react-resize-detector" rel="noopener noreferrer" target="_blank">React Size Detector</a><br/>
                            <a href="https://www.npmjs.com/package/react-toggle-switch" rel="noopener noreferrer" target="_blank">React Toggle Switch</a><br/>
                        </Paragraph>
                        <hr/>
                        <Paragraph>
                            Created by Josh Butkovic<br/>
                            Visit my github at this link<br/>
                            <a href="https://github.com/jjb867" rel="noopener noreferrer" target="_blank">https://github.com/jjb867</a>.
                        </Paragraph>
                    </div>
                </div>
            </div>
        </section>
    </Container>
);

export default About;