import React from 'react';
import { Text , TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader';
import styled from 'styled-components';
import MovieSlider from '../../components/MovieSlider';
import { BG_COLOR} from '../../constants/Color';
import Section from '../../components/Section';
import MovieItem from '../../components/MovieItem';
const Container = styled.ScrollView`
    background-color: ${BG_COLOR};
`;


const MoviesPresenter = ({loading, upcoming, popular, nowPlaying})  =>
    loading ?(
     <Loader /> 
    ) : (
        <Container>
          {nowPlaying ? <MovieSlider movies={nowPlaying} />: null }
          {upcoming ? (
              <Section movies={upcoming} title="Upcoming Movies">
                {upcoming
                    .filter(movie => movie.poster_path !== null)
                    .map(movie => (
                        <MovieItem 
                            key={movie.id}
                            id={movie.id} 
                            posterPhoto={movie.poster_path} 
                            title={movie.title} 
                            voteAvg={movie.vote_average}
                        />
                    ))}
                </Section>
            ): null } 
        {popular ? (
              <Section horizontal={false} movies={popular} title="Popular Movies">
                {popular
                    .filter(movie => movie.poster_path !== null)
                    .map(movie => (
                        <MovieItem 
                            horizontal={true}
                            key={movie.id}
                            id={movie.id} 
                            posterPhoto={movie.poster_path} 
                            title={movie.title} 
                            overview={movie.overview}
                            voteAvg={movie.vote_average}
                        />
                    ))}
                </Section>
            ): null }
        </Container>
    );

MoviesPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    upcoming: PropTypes.array,
    popular:  PropTypes.array,
    nowPlaying: PropTypes.array
}

export default MoviesPresenter;