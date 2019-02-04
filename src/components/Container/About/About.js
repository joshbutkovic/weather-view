import React from 'react';
import { Container, Paragraph, AnchorLink } from '../../../utils/poseAnimations';

const About = () => (
    <Container>
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-10-mobile is-offset-1-mobile is-8 is-offset-2">
                        <h1 className="is-size-2 is-size-3-mobile">What is WeatherView?</h1>
                        <Paragraph className="is-italic">
                        <span className="subtitle">
                            "A neat little React/Redux app to search current and future weather"
                        </span>
                        </Paragraph><br/>
                        <Paragraph>
                            This app is powered by the <strong>OpenWeatherMap Weather API</strong>.
                            Visit this link to create your own free API key.
                            <br/><br/><AnchorLink href={'https://openweathermap.org/api'}>https://openweathermap.org/api</AnchorLink>.
                            <br/><br/>This is a fantastic free
                            API for building fun projects like this one.
                        </Paragraph><br/>
                        <h2 className="is-size-4">Featured Libraries</h2>
                        <Paragraph>
                            <AnchorLink
                                href="https://github.com/axios/axios" rel="noopener noreferrer" target="_blank">Axios
                            </AnchorLink><br/>
                            <AnchorLink href="https://bulma.io/" rel="noopener noreferrer"
                                        target="_blank">Bulma</AnchorLink><br/>
                            <AnchorLink href="https://lodash.com/" rel="noopener noreferrer"
                                        target="_blank">Lodash</AnchorLink><br/>
                            <AnchorLink href="https://momentjs.com/" rel="noopener noreferrer"
                                        target="_blank">Moment</AnchorLink><br/>
                            <AnchorLink href="https://github.com/sass/node-sass" rel="noopener noreferrer"
                                        target="_blank">Node Sass</AnchorLink><br/>
                            <AnchorLink href="https://reactjs.org/" rel="noopener noreferrer"
                                        target="_blank">React</AnchorLink><br/>
                            <AnchorLink href="https://reactjs.org/" rel="noopener noreferrer"
                                        target="_blank">React-Router</AnchorLink><br/>
                            <AnchorLink href="https://redux.js.org/" rel="noopener noreferrer" target="_blank">Redux
                            </AnchorLink><br/>
                            <AnchorLink href="https://github.com/reduxjs/redux-thunk" rel="noopener noreferrer" target="_blank">Thunk
                            </AnchorLink><br/>
                            <AnchorLink href="https://rma-consulting.github.io/react-easy-chart/"
                                        rel="noopener noreferrer" target="_blank">React Easy Chart</AnchorLink><br/>
                            <AnchorLink href="https://github.com/maslianok/react-resize-detector"
                                        rel="noopener noreferrer" target="_blank">React Resize Detector</AnchorLink><br/>
                            <AnchorLink href="https://www.npmjs.com/package/react-toggle-switch"
                                        rel="noopener noreferrer" target="_blank">React Toggle Switch</AnchorLink><br/>
                            <AnchorLink href="https://origin.fontawesome.com/how-to-use/on-the-web/using-with/react"
                                        rel="noopener noreferrer" target="_blank">React Font Awesome</AnchorLink><br/>
                            <AnchorLink href="https://www.npmjs.com/package/react-toggle-switch"
                                        rel="noopener noreferrer" target="_blank">React Toggle Switch</AnchorLink><br/><br/>
                            A big thanks to <strong>PopMotion</strong>, all the animations are done with Pose for React.<br/>
                            What a fantastic high level library!<br/><br/>
                            <AnchorLink href="https://popmotion.io/pose/"
                                        rel="noopener noreferrer" target="_blank">POSE</AnchorLink><br/>
                        </Paragraph>
                        <hr/>
                        <Paragraph>
                            <strong>Created By:</strong>&nbsp;Josh Butkovic<br/>
                            <strong>Github:</strong>&nbsp;
                            <AnchorLink href="https://github.com/joshbutkovic" rel="noopener noreferrer"
                                        target="_blank">https://github.com/joshbutkovic</AnchorLink><br/>
                            <strong>Gmail:</strong>&nbsp;
                            <AnchorLink href="mailto:joshbutkovic@gmail.com?subject=A Message From WeatherView">
                                joshbutkovic@gmail.com
                            </AnchorLink>
                        </Paragraph>
                    </div>
                </div>
            </div>
        </section>
    </Container>
);

export default About;