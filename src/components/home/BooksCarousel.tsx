import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles({
    container: {
        textAlign: 'center',
        marginTop: 100,
        marginBottom: 80,
    },
    title: {
        color: "white",
        fontWeight: "bold",
        marginBottom: 40,
        fontSize: '33px',
        fontFamily: 'Poppins'
    },
    img: {
        'user-drag': 'none',
        'user-select': 'none',
        '-moz-user-select': 'none',
        '-webkit-user-drag': 'none',
        '-webkit-user-select': 'none',
        '-ms-user-select': 'none',
        '&:hover': {
            filter: 'brightness(0.8)'
        }
    }
});

const booksURL = [
    "https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51aUWTfpHhL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71FDkx5WllL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81qW97ndkvL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71QUhm-AnIL.jpg",
    "https://m.media-amazon.com/images/I/51KEv8n65hL.jpg",
    "https://m.media-amazon.com/images/I/51ZYLrhJk8L.jpg",
    "https://m.media-amazon.com/images/I/519opsqvPyL.jpg",
    "https://m.media-amazon.com/images/I/51N-u8AsmdL.jpg",
    "https://m.media-amazon.com/images/I/41bFo3mXrQL.jpg",
    "https://m.media-amazon.com/images/I/41ga9hPrDYL.jpg",
    "https://m.media-amazon.com/images/I/51ZuUYAopiL.jpg",
    "https://m.media-amazon.com/images/I/51T8G2JZmmL.jpg",
    "https://m.media-amazon.com/images/I/51f-0RjOF5L.jpg",
    "https://m.media-amazon.com/images/I/51fOeX6dGqL.jpg",
    "https://m.media-amazon.com/images/I/51DGPVyS5wL.jpg"
]

export const BooksCarousel = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Typography variant="h4" className={classes.title}>
                Aliquam vitae lorem ut orci aliquet placerat 
            </Typography>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="carousel-container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                partialVisible
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 5,
                        partialVisibilityGutter: 10
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {booksURL.map(item => (
                    <div key={item}>
                        <a className={classes.img} target="_blank" rel="noopener noreferrer" href="https://wa.me/message/">
                            <img alt="" className={classes.img} height="330" src={item} />
                        </a>
                    </div>
                ))}

            </Carousel>
        </Container>
    );
};
