import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, Avatar, Button, Card, Paragraph, Title } from 'react-native-paper';

const App = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

  const styles = StyleSheet.create({
    container: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '50%'
    }
  });

  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Title" subtitle="Subtitle" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
      <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover style={styles.container} source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default App;
