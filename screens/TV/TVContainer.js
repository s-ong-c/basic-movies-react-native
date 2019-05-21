import React from 'react';
import TVPresenter from './TVPresenter';
import { tv } from '../../api';
export default  class TVContainer extends React.Component {
    state = {
        loading: true,
        popular: null,
        topRated: null,
        airingToday: null
    }

    async componentDidMount(){
        let popular, topRated, airingToday, error;
        try {
            ({data: { results: popular}
            } = await tv.getPopular());
            ({data: { results: topRated}
            } = await tv.getTopRated());
            ({data: { results: airingToday}
            } = await tv.getAiringToday());

        } catch(error) {
            console.log(error);
            error = "can't get TV";
        } finally {
            this.setState({
                loading: false,
                error,
                popular,
                topRated,
                airingToday
            })
        }
    }
    render(){
        const { loading, popular, topRated, airingToday } = this.state;
        return (
            <TVPresenter 
                loading={loading} 
                topRated={topRated} 
                popular={popular} 
                airingToday={airingToday} 
                />
            );
    }
}