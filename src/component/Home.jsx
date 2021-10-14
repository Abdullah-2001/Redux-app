import React from 'react';
import { connect } from 'react-redux';
import { setData } from '../store/actions/actions';

const Home = (props) => {

    let user = { name: "John", email: "John@gmail.com" }
    console.log("Users =>", props.users);

    return (
        <div>
            <h1>Users</h1>
            <button onClick={() => props.setData(user)}>Set data</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProps = (dispatch) => ({
    setData: (user) => dispatch(setData(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);