import React from 'react';
import { View, TouchableNativeFeedback,  Text, Button, Card } from 'react-native';

export default class Article extends React.Component {
  render() {
    const { article, navigate} = this.props
    const { footer, judul } = styles;
    const defaultImg = 'https://ieltsonlinetests.com/sites/default/files/News-Image.jpg';
    const {
      title,
      description,
      publishedAt,
      source,
      urlToImage,
      url
    } = this.props.article;

    return (
      <TouchableNativeFeedback
        useForeground
        onPress={() => navigate("ArticlePage", {items: article})}>

        <Card
          featuredTitle={title}
          featuredTitleStyle={judul}
          image={{
            uri: urlToImage || defaultImg
          }}>

        </Card>

      </TouchableNativeFeedback>
    );
  }
}

const styles = {
  footer: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10
  },
  judul: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  }
};