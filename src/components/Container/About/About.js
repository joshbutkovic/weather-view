import React from 'react';
import { Container, Paragraph } from '../../../utils/poseAnimations';

const About = () => (
    <Container>
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-10-mobile is-offset-1-mobile is-8 is-offset-2">
                        <h2 className="is-size-3">WeatherView</h2>
                        <Paragraph className="is-italic">
                        <span className="subtitle">
                            A neat little react app to query current and future weather.
                        </span>
                        </Paragraph><br/>
                        <Paragraph>
                            This app is powered by the OpenWeatherMap Weather API.
                            Visit this link to create your own free API key
                            <br/><br/><a href={"https://openweathermap.org/api"}>https://openweathermap.org/api</a>.
                            <br/><br/>This is a fantastic free
                            API for building fun projects like this one.
                        </Paragraph><br/>
                        <h2 className="is-size-3">Featured Libraries</h2>
                        <Paragraph>
                            Axios<br/>
                            Bulma<br/>
                            Moment<br/>
                            Lodash<br/>
                            React<br/>
                            Redux & Thunk<br/>
                            React-Router<br/>
                            React Easy Chart<br/>
                            React Size Detector<br/>
                            React Toggle Switch<br/>
                        </Paragraph>
                        <hr/>
                        <Paragraph>
                            Created by Josh Butkovic<br/>
                            Visit my github at this link<br/>
                            <a href="https://github.com/jjb867">https://github.com/jjb867</a>.
                        </Paragraph>
                    </div>
                </div>
            </div>
        </section>
    </Container>
);

export default About;