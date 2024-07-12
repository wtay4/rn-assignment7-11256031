import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const ProductDetailScreen = ({ route, navigation }) => {
  const { product, addToCart } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
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
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
        <Text style={styles.materialTitle}>MATERIALS</Text>
        <Text style={styles.materialText}>
          We work with monitoring programmes to ensure compliance with safety,
          health, and quality standards for our products.
        </Text>
        <View style={styles.materialIcons}>
  <View style={styles.iconWithText}>
    <Image
      source={require("../assets/Door to Door Delivery.png")}
      style={styles.materialIcon}
    />
    <Text>Door to Door Delivery</Text>
  </View>

  <View style={styles.iconWithText}>
    <Image
      source={require("../assets/Do Not Bleach.png")}
      style={styles.materialIcon}
    />
    <Text>Do not bleach</Text>
  </View>

  <View style={styles.iconWithText}>
    <Image
      source={require("../assets/Do Not Tumble Dry.png")}
      style={styles.materialIcon}
    />
    <Text>Do not tumble dry</Text>
  </View>

  <View style={styles.iconWithText}>
    <Image
      source={require("../assets/Do Not Wash.png")}
      style={styles.materialIcon}
    />
    <Text>Dry clean with tetrachloroethylene</Text>
  </View>
</View>
        <Text style={styles.shippingInfo}>
          Free Flat Rate Shipping Estimated to be delivered on 09/11/2021 -
          12/11/2021.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => addToCart(product)}
      >
        <Text style={styles.addToCartButtonText}>ADD TO BASKET</Text>
      </TouchableOpacity>
    </ScrollView>
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
    padding: 10,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 5,
  },
  productImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },
  productInfo: {
    padding: 20,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 24,
    color: "#e60000",
    marginBottom: 20,
  },
  materialTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  materialText: {
    fontSize: 14,
    color: "#888",
    marginBottom: 20,
  },
  materialIcons: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  materialIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 10, 
  },
  shippingInfo: {
    fontSize: 14,
    color: "#888",
    marginBottom: 20,
  },
  addToCartButton: {
    backgroundColor: "#000",
    padding: 15,
    alignItems: "center",
  },
  addToCartButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProductDetailScreen;
