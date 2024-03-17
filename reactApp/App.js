import React, { useState } from 'react';
import { View, Text, Button, ScrollView, Image, StyleSheet } from 'react-native';

const App = () => {
  const [processRunning, setProcessRunning] = useState(false);
  const [images, setImages] = useState([]);
  const [result, setResult] = useState();
  const [lists, setLists] = useState([]);

  const startProcess = () => {
    setProcessRunning(true);
    setImages([]); // Reset images in case they exist from a previous run

    // Load 20 images from the internet
    for (let i = 0; i < 20; i++) {
      setImages((prevImages) => [
        ...prevImages,
        { url: `https://picsum.photos/200/300?image=${i}` },
      ]);
    }

    // Simulate a complex calculation (Fibonacci)
    const fibonacci = (n) => {
      if (n <= 1) {
        return n;
      }
      return fibonacci(n - 1) + fibonacci(n - 2);
    };

    setResult(fibonacci(40));

    // Add 100 elements to a list
    setLists(Array(100).fill(null));
  };

  return (
    <ScrollView style={styles.container}> 
      <View style={styles.topSection}>
        <Button title="Start" onPress={startProcess} />
      </View>

      {processRunning && (
        <View style={styles.contentSection}>
          {images.map((image) => (
            <Image key={image.url} source={{ uri: image.url }} style={styles.image} />
          ))}
          <Text style={styles.result}>Calculation completed: {result}</Text>
          {lists.map(() => (
            <Text key={Math.random()} style={styles.listItem}>
              Add element to list
            </Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topSection: {
    margin: 20,
  },
  contentSection: {
    padding: 20,
  },
  image: {
    width: 200,
    height: 150,
    margin: 10,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  listItem: {
    fontSize: 16,
    margin: 5,
  },
});

export default App;