import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

const UserBox = props => {
  return <View>{props.user ? <Text>{props.user.name}</Text> : null}</View>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => {
      return user.id === ownProps.userId;
    }),
  };
};

export default connect(mapStateToProps)(UserBox);
