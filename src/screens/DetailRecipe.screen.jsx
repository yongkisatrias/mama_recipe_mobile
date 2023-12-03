import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Linking,
  Image,
} from 'react-native';
import {Text, Button, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import firestore from '@react-native-firebase/firestore';

function DetailRecipeScreen({navigation, route}) {
  const [bodyView, setBodyView] = React.useState('ingredients');
  const {image, title, ingredients, youtube, made, slug} = route.params;
  const [commentList, setCommentList] = React.useState([]);
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    handleGetComment();
  }, []);

  const handleGetComment = () => {
    firestore()
      .collection('comment')
      .where('recipeSlug', '==', slug)
      .get()
      .then(querySnapshot => {
        let tempData = [];
        querySnapshot.forEach(documentSnapshot => {
          tempData.push(documentSnapshot);
        });
        setCommentList(tempData);
      });
  };

  const handleComment = () => {
    firestore()
      .collection('comment')
      .add({
        name: 'user',
        photo: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
        recipeSlug: slug,
        comment: message,
        created_at: new Date().getTime(),
      })
      .then(() => {
        handleGetComment();
      });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.root}>
          {/* Hero Section */}
          <ImageBackground
            source={{uri: image}}
            style={styles.heroImage}
            resizeMode="cover">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.arrowIcon}>
                <Icon name="arrowleft" size={30} color="#fff" />
              </Text>
            </TouchableOpacity>
            <View style={styles.heroTitle}>
              <Text style={styles.foodTitle}>{title}</Text>
              <Text style={styles.chefName}>By {made}</Text>
            </View>
          </ImageBackground>
          {/* Hero Section End */}

          {/* Body section */}
          <View style={styles.headerBodySection}>
            {/* Body button */}
            <View style={{flexDirection: 'row'}}>
              <Button
                onPress={() => setBodyView('ingredients')}
                labelStyle={{
                  fontSize: 16,
                  ...(bodyView === 'ingredients'
                    ? {
                        color: '#18172B',
                        paddingBottom: 2,
                        borderBottomColor: '#EEC302',
                        borderBottomWidth: 2,
                      }
                    : {color: '#666666'}),
                }}>
                Ingredients
              </Button>
              <Button
                onPress={() => setBodyView('video step')}
                labelStyle={{
                  fontSize: 16,
                  ...(bodyView === 'video step'
                    ? {
                        color: '#18172B',
                        paddingBottom: 2,
                        borderBottomColor: '#EEC302',
                        borderBottomWidth: 2,
                      }
                    : {color: '#666666'}),
                }}>
                Video Step
              </Button>
            </View>
            {/* Body view */}
            {bodyView === 'ingredients' ? (
              <View style={styles.bodyViewBackground}>
                <Text style={styles.bodyViewText}>{ingredients}</Text>
              </View>
            ) : null}
            {bodyView === 'video step' ? (
              <View style={{marginTop: 15}}>
                <TouchableOpacity
                  onPress={() => Linking.openURL(youtube?.link)}>
                  <View style={styles.bodyViewSection}>
                    <Icon name="play" size={40} color="#EEC302" />
                    <View style={{paddingRight: 30}}>
                      <Text style={styles.videoStepTitle}>
                        {youtube?.title}
                      </Text>
                      <Text style={styles.videoStepLink}>{youtube?.link}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            ) : null}
            {/* Comment view */}
            <View>
              <TextInput
                placeholder="Comment :"
                mode="outlined"
                multiline={true}
                numberOfLines={4}
                style={styles.textInputComment}
                onChangeText={value => setMessage(value)}
              />
              <Button
                mode="contained"
                style={styles.postCommentButton}
                onPress={handleComment}>
                Post Comment
              </Button>
              <Text style={styles.titleCommentSection}>Comment :</Text>
              {commentList
                ?.sort(
                  (next, prev) =>
                    prev?._data.created_at - next?._data.created_at,
                )
                .map((item, key) => (
                  <View style={styles.commentSection} key={key}>
                    <Image
                      source={{uri: item?._data?.photo}}
                      style={styles.avatarProfile}
                    />
                    <View>
                      <Text style={styles.nameComment}>
                        {item?._data?.name}
                      </Text>
                      <Text style={styles.commentInput}>
                        {item?._data?.comment}
                      </Text>
                    </View>
                  </View>
                ))}
            </View>
          </View>
          {/* Body section end */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heroImage: {
    height: 400,
  },
  arrowIcon: {
    paddingTop: 15,
    paddingLeft: 15,
  },
  heroTitle: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  foodTitle: {
    color: '#FBFBFB',
    fontSize: 32,
    fontWeight: 800,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  chefName: {
    color: '#FBFBFB',
    fontSize: 15,
    fontWeight: 400,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  headerBodySection: {
    backgroundColor: '#fff',
    marginTop: -30,
    minHeight: 450,
    borderRadius: 25,
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  bodyViewBackground: {
    backgroundColor: '#FAF7ED',
    marginTop: 15,
    padding: 20,
    borderRadius: 10,
  },
  bodyViewText: {
    color: '#666666',
    fontSize: 15,
    fontWeight: 500,
  },
  bodyViewSection: {
    backgroundColor: '#FAF7ED',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
    gap: 10,
  },
  videoStepTitle: {
    fontSize: 15,
    fontWeight: 500,
  },
  videoStepLink: {
    color: '#666666',
    fontSize: 15,
    fontWeight: 500,
  },
  textInputComment: {
    marginTop: 20,
    paddingTop: 20,
    backgroundColor: '#FAF7ED',
  },
  postCommentButton: {
    borderRadius: 5,
    backgroundColor: '#EFC81A',
    paddingVertical: 5,
    marginTop: 20,
  },
  titleCommentSection: {
    marginVertical: 10,
    fontSize: 14,
    fontWeight: 500,
    color: '#666666',
  },
  commentSection: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarProfile: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  nameComment: {
    fontSize: 13,
    fontWeight: 700,
  },
  commentInput: {
    fontSize: 14,
    fontWeight: 500,
  },
});

export default DetailRecipeScreen;
