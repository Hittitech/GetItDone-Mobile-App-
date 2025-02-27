import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red Jacket For Sale",
    price: 100,
    image: require("../../assets/images/jacket.jpg"),
  },
  {
    id: 2,
    title: "Red Jacket For Sale",
    price: 100,
    image: require("../../assets/images/jacket.jpg"),
  },
  {
    id: 3,
    title: "Couch in great condition",
    price: 1000,
    image: require("../../assets/images/jacket.jpg"),
  },
];

const ListingScreen = () => {
  return (
    <Screen>
      <FlatList
        style={styles.container}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
