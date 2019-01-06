import React, { Component } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import axios from 'axios'
import Article from '../components/News'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      refresPage: true
    }
  }

  componentDidMount() {
    // get ambil dari newsapi 
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=14a294ac0b1a487486c876ac93c4bd9c')
      .then(resp => {
        //   setState memberikan nilai kepada state articles
          this.setState({ articles : resp.data.articles})
      }).catch(err => {
          console.log(err)
          this.setState({ refresPage: false })
      }) 
  }

  render() {
		const {articles, refresPage} = this.state
		const {navigate} = this.props.navigate

    return (
      <FlatList
        data={ articles }
        renderItem={({ item }) => <Article article={item} navigate={navigate} />}
        keyExtractor={(item,index) => index.toString()}
      />
    );
  }
}