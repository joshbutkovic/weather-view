import React from 'react';
import posed from 'react-pose';

const Container = posed.div({
    enter: { staggerChildren: 50 }
});

const Paragraphs = posed.p({
    enter: {x:20, opacity: 1 },
    exit: {x:0, opacity: 0 }
});

const About = () => (
    <Container>
        <section className="container section">
            <div className="columns">
                <div className="column">
                    <h2 className="is-size-2">About WeatherView</h2>
                    <Paragraphs className="is-italic">
                        <span className="subtitle">
                            Simply dummy text of the
                            printing and typesetting industry.
                        </span>
                    </Paragraphs><br/>
                    <Paragraphs>
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </Paragraphs><br/>
                    <Paragraphs>
                        It has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.
                    </Paragraphs><hr/>
                    <Paragraphs>
                        It was popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Paragraphs>
                </div>
            </div>
        </section>
    </Container>
);

export default About;