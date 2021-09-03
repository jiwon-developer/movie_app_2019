import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        console.log(this.props);
        const { location, history } = this.props;
        if (location.state === undefined) {
            // 영화를 클릭하고 들어오지 않은경우는  home 으로 보낸다.
            // to redirect or to change user's Navigation 
            history.push("/");

        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>
        } else {
            return null;
        }

    }
}
export default Detail;