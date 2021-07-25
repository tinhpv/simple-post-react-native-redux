import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';

import {fetchPostsAndUsers} from '../actions';
import UserBox from '../components/UserBox';

const IndexScreen = props => {
  useEffect(() => {
    props.fetchPostsAndUsers();
  });

  return (
    <View>
      <FlatList
        data={props.posts}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.itemBody}>
              <UserBox userId={item.userId} />
              <Text style={{...styles.itemText, ...styles.rightBox}}>
                {item.body}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemBody: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  itemText: {
    fontSize: 17,
    padding: 8,
    backgroundColor: 'white',
    marginLeft: 10,
    marginVertical: 10,
  },
  rightBox: {
    flex: 1,
    marginRight: 10,
  },
});

const mapStateToProps = state => {
  return {posts: state.posts};
};

export default connect(mapStateToProps, {fetchPostsAndUsers})(IndexScreen);
