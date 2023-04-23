import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const products = [
                          {
                            id: 1,
                            name: 'Parfum Oud Royal',
                            description: 'Une fragrance classique et boisée, avec des notes de cuir et de musc.',
                            price: '80€',
                            imageUrl: "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dwe2e66b3e/primary_packshot_3/2022/Fragrance/Absolus_Dorient/G013224_3346470132245_OUD_ESS-22-EDP-VAPO-125ML.png?sw=900&sh=900"
                          },
                          {
                            id: 2,
                            name: 'Parfum Oud Noir',
                            description: 'Un parfum profond et sombre, avec des notes d\'encens et de patchouli.',
                            price: '90€',
                            imageUrl: "https://www.franciskurkdjian.com/dw/image/v2/BJSB_PRD/on/demandware.static/-/Sites-mfk-master-catalog/default/dwb39e8054/Packshots%202022/OUD/PACKSHOT_OUD_70ML_EDP_VUE3-3-4_FOND-TRANSPARENT_460x460.png?sw=640&sh=640&strip=false"
                          },
                          {
                            id: 3,
                            name: 'Parfum Oud Blanc',
                            description: 'Une fragrance légère et aérienne, avec des notes de bergamote et de jasmin.',
                            price: '70€',
                            imageUrl: "https://medias.yves-rocher.fr/medias/?context=bWFzdGVyfGltYWdlc3wxMTA1ODE2fGltYWdlL3BuZ3xzeXNfbWFzdGVyL2ltYWdlcy9oOWUvaGQzLzk2MDE3MTAzOTEzMjZ8Y2FjYzVhOGI1NDJkM2UzM2YwNTE1NGU2MDZkZmZmMTlkNDcwN2ZiNDE3ZDRjMTdmMmY5YjdjNTlkNzEzMTBlMw&twic=v1/resize=550/background=white/quality=100"
                          },
                          {
                            id: 4,
                            name: 'Parfum Oud Mystique',
                            description: 'Un parfum envoûtant et mystérieux, avec des notes d\'ambre et de bois de santal.',
                            price: '100€',
                            imageUrl: "https://medias.yves-rocher.fr/medias/?context=bWFzdGVyfGltYWdlc3w1Mjk5NDl8aW1hZ2UvcG5nfHN5c19tYXN0ZXIvaW1hZ2VzL2hkNy9oOGYvOTU3MjY0ODY0ODczNHw2N2ViZjU4YzMxNDU3ODllZTExMzg4YzRhYmM2YjA3YzI5NDdhZWY3NDExNTY5ZmNhMDgzNjY4ODA2YmRiYWIz&twic=v1/resize=550/background=white/quality=100"
                          }
                          
                        ];
                        

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Parfums d'Oud</Text>
      </View>
      <View style={styles.productsContainer}>
        {products.map((product) => (
          <View key={product.id} style={styles.product}>
            <Image source={{ uri: product.imageUrl }} style={styles.productImage} />

            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productDescription}>{product.description}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  header: {
    height: 50,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  product: {
    width: '48%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover'
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5
  },
  productDescription: {
    fontSize: 14,
    marginBottom: 10
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e74c3c'
  }
});
