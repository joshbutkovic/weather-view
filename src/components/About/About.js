import React from 'react';
import { Container, Paragraph } from '../../utils/poseAnimations';

const About = () => (
    <Container>
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-10-mobile is-offset-1-mobile is-8 is-offset-2">
                        <h2 className="is-size-3">About WeatherView</h2>
                        <Paragraph className="is-italic">
                        <span className="subtitle">
                            A neat little react app to query current and future weather.
                        </span>
                        </Paragraph><br/>
                        <h4 className="is-size-4">Featuring</h4>
                        <Paragraph>
                            React/Redux
                        </Paragraph><br/>
                        <Paragraph>
                            It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.
                        </Paragraph>
                        <hr/>
                        <Paragraph>
                            It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Paragraph>
                    </div>
                </div>
            </div>
        </section>
    </Container>
);

export default About;