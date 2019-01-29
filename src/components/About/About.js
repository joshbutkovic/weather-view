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
                            Simply dummy text of the
                            printing and typesetting industry.
                        </span>
                        </Paragraph><br/>
                        <Paragraph>
                            Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book.
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