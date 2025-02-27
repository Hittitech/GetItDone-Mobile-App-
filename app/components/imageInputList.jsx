import { Image, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import ImageInput from "../components/ImageInput";
import { ScrollView } from "react-native-gesture-handler";

const imageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris?.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default imageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
