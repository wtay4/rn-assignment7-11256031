import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      const storedCart = await AsyncStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadCart();
    fetchProducts();
  }, []);

  const addToCart = async (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require("../assets/Menu.png")} style={styles.icon} />
        </TouchableOpacity>
        <Image source={require("../assets/Logo.png")} style={styles.logo} />
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Image
              source={require("../assets/Search.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Image
              source={require("../assets/shoppingBag.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.storyText}>OUR STORY</Text>
      <TouchableOpacity>
        <Image
          source={require("../assets/addbutton.png")}
          style={styles.addbutton}
        />
      </TouchableOpacity>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProductDetail", { product: item, addToCart })
            }
            style={styles.productContainer}
          >
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <TouchableOpacity onPress={() => addToCart(item)}>
              <Image
                source={require("../assets/add_circle.png")}
                style={styles.addButton}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
      <Button
        title="Go to Cart"
        onPress={() => navigation.navigate("Cart")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  logo: {
    width: 120,
    height: 40,
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 50,
  },
  storyText: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
  },
  productContainer: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  productPrice: {
    fontSize: 16,
    color: "#e60000",
    marginVertical: 5,
    left: -60,
  },
  addButton: {
    width: 30,
    height: 30,
    marginBottom: 10,
    top: -30,
    left: 60,
  },
  addbutton: {
    top: -35,
    left: 260,
  },
});

export default HomeScreen;
