import posed from 'react-pose';

export const Container = posed.div({
    enter: { staggerChildren: 50 }
});

export const Paragraph = posed.p({
    enter: {x:20, opacity: 1 },
    exit: {x:0, opacity: 0 }
});

export const GetWeatherAnimation = posed.div({
    hidden: { y: -10, x: -10, opacity: 0, transition: { duration: 250 } },
    visible: { y: 0, x: 0, opacity: 1, transition: { duration: 250 } },
});
