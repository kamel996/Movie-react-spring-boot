import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { IMovie } from '../../model/movie.model';
import { addReview, getMovieData } from '../../api/movies';
import ReviewForm from './ReviewForm';

const Reviews = () => {
    const [movie, setMovie] = useState<IMovie>();
    const [loading, setLoading] = useState(false);
    const [updateSuccess, setUpdateSuccess] = useState(false);

    const revText = useRef<HTMLTextAreaElement>(null);

    const params = useParams<{ movieId: string }>();
    const movieId = params.movieId;

    useEffect(() => {
        if (movieId) {
            setLoading(true);
            getMovieData(movieId).then((response) => {
                setMovie(response);
            });
            setLoading(false)
        }
    }, [movieId, updateSuccess]);

    const handleAddReview = async (e: React.FormEvent) => {
        e.preventDefault();

        const rev = revText.current?.value;
        try {
            if (rev && movieId) {
                await addReview({ reviewBody: rev, imdbId: movieId });
                revText.current!.value = ""; 
                setUpdateSuccess(true);
            }
        } catch (err) {
            console.error(err);
        }
    };

    if(loading) return <Spinner/>

    return (
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <img src={movie?.poster} alt="" />
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <ReviewForm handleSubmit={handleAddReview} revText={revText} labelText="Write a Review?" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row>
                    {movie?.reviewIds?.map((r, index) => (
                        <React.Fragment key={index}>
                            <Row>
                                <Col>{r.body}</Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </React.Fragment>
                    ))}
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
        </Container>
    );
};

export default Reviews;
