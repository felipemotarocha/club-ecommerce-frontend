const { addDoc, collection } = require('firebase/firestore')
const { getFirestore } = require('firebase/firestore')
const { initializeApp } = require('firebase/app')

const firebaseConfig = {
  apiKey: 'AIzaSyAWe8hXyBijJ6_4fmYbwqFxDepUG8JwKBY',
  authDomain: 'club-ecommerce-2-d1f9f.firebaseapp.com',
  projectId: 'club-ecommerce-2-d1f9f',
  storageBucket: 'club-ecommerce-2-d1f9f.appspot.com',
  messagingSenderId: '141215725125',
  appId: '1:141215725125:web:ad6a9ab67342688d24552c'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const categories = [
  {
    id: '6228fc5cb7e6cb904bbe014b',
    name: 'jackets',
    displayName: 'Jaquetas',
    imageUrl:
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    products: [
      {
        id: '6228fc8bb7e6cb904bbe014e',
        name: 'Regata Azul',
        price: 150,
        imageUrl:
          'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80s'
      },
      {
        id: '6228fcb9b7e6cb904bbe0152',
        name: 'Jaqueta Jeans Ccinza',
        price: 250,
        imageUrl:
          'https://images.unsplash.com/photo-1601333144130-8cbb312386b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
        id: '6228fce4b7e6cb904bbe0154',
        name: 'Jaqueta de Couro Preta',
        price: 500,
        imageUrl:
          'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=680&q=80'
      },
      {
        id: '6228fd19b7e6cb904bbe0157',
        name: 'Blusa Colete Preta',
        price: 250,
        imageUrl:
          'https://images.unsplash.com/photo-1557418669-db3f781a58c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80'
      },
      {
        id: '6228fd3bb7e6cb904bbe015a',
        name: 'Blusão Rosa',
        price: 300,
        imageUrl:
          'https://images.unsplash.com/flagged/photo-1554033750-2137b5cfd7ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGphY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
      },
      {
        id: '6228fda4b7e6cb904bbe015f',
        name: 'Corta Vento',
        price: 250,
        imageUrl:
          'https://images.unsplash.com/photo-1604025677169-6b07c4b5d3c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
      },
      {
        id: '6228fca3b7e6cb904bbe0150',
        name: 'Jaqueta Jeans Azul',
        price: 300,
        imageUrl:
          'https://images.unsplash.com/photo-1527016021513-b09758b777bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'
      },
      {
        id: '6228fd63b7e6cb904bbe015c',
        name: 'Blazer Bege',
        price: 400,
        imageUrl:
          'https://images.unsplash.com/photo-1611485988300-b7530defb8e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      }
    ]
  },
  {
    id: '6228f760b7e6cb904bbe012e',
    name: 'sneakers',
    displayName: 'Tênis',
    imageUrl:
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    products: [
      {
        id: '6228f7a3b7e6cb904bbe0134',
        name: 'Vans Old Skool',
        price: 350,
        imageUrl:
          'https://images.unsplash.com/photo-1563183222-ff776d1076e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
        id: '6228f93db7e6cb904bbe0140',
        name: 'Nike Dunk Low Retro',
        price: 900,
        imageUrl:
          'https://images.unsplash.com/photo-1612015670817-0127d21628d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
      },
      {
        id: '6228f8c7b7e6cb904bbe013b',
        name: 'All Star',
        price: 200,
        imageUrl:
          'https://images.unsplash.com/photo-1610832745704-b5cd3ce9bcff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
      },
      {
        id: '6228f96bb7e6cb904bbe0142',
        name: 'Nike Basketball Black',
        price: 500,
        imageUrl:
          'https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
        id: '6228f7f1b7e6cb904bbe0136',
        name: 'Nike Air Force',
        price: 600,
        imageUrl:
          'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
      },
      {
        id: '6228f8afb7e6cb904bbe0139',
        name: 'Nike Air Jordan 1',
        price: 1000,
        imageUrl:
          'https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
        id: '6228f986b7e6cb904bbe0145',
        name: 'Nike Jordan Retro High',
        price: 1500,
        imageUrl:
          'https://images.unsplash.com/photo-1586525198428-225f6f12cff5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
        id: '6228f8f9b7e6cb904bbe013d',
        name: 'Vans Slip In Xadrez',
        price: 280,
        imageUrl:
          'https://images.unsplash.com/photo-1517583010307-3f789911b89c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      }
    ]
  },
  {
    id: '623064ee22376f1e6b869471',
    name: 'male',
    displayName: 'Masculino',
    imageUrl:
      'https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    products: [
      {
        id: '6230655f22376f1e6b869473',
        name: 'Camiseta de Manga Comprida',
        price: 200,
        imageUrl:
          'https://images.unsplash.com/photo-1614495039153-e9cd13240469?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
        id: '623065f422376f1e6b869488',
        name: 'Jaqueta Jeans',
        price: 300,
        imageUrl:
          'https://images.unsplash.com/photo-1594067598377-478c61d59f3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
        id: '6230662e22376f1e6b86948e',
        name: 'Blazer Clássico',
        price: 350,
        imageUrl:
          'https://images.unsplash.com/photo-1555069519-127aadedf1ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
        id: '6230661122376f1e6b86948a',
        name: 'Jaqueta de Couro',
        price: 400,
        imageUrl:
          'https://images.unsplash.com/photo-1520975954732-35dd22299614?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
        id: '6230661f22376f1e6b86948c',
        name: 'Calça Jeans',
        price: 300,
        imageUrl:
          'https://images.unsplash.com/photo-1511105043137-7e66f28270e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
      },
      {
        id: '6230658322376f1e6b86947b',
        name: 'Camiseta Branca',
        price: 100,
        imageUrl:
          'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
        id: '623065b022376f1e6b869480',
        name: 'Camisa Florida',
        price: 200,
        imageUrl:
          'https://images.unsplash.com/photo-1517191297489-48c463380e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      }
    ]
  },
  {
    id: '6228fdd8b7e6cb904bbe0162',
    name: 'female',
    displayName: 'Feminino',
    imageUrl:
      'https://images.unsplash.com/photo-1597586124394-fbd6ef244026?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    products: [
      {
        id: '6228fe63b7e6cb904bbe0165',
        name: 'Suéter Branco',
        price: 150,
        imageUrl:
          'https://images.unsplash.com/flagged/photo-1559502867-c406bd78ff24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80'
      },
      {
        id: '6228fec7b7e6cb904bbe016f',
        name: 'Regata Azul',
        price: 150,
        imageUrl:
          'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80s'
      },
      {
        id: '6228ff71b7e6cb904bbe0175',
        name: 'Suéter Vermelho Vibrante',
        price: 200,
        imageUrl:
          'https://images.unsplash.com/photo-1584670747417-594a9412fba5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
        id: '6228ff93b7e6cb904bbe0177',
        name: 'Vestido Vermelho',
        price: 250,
        imageUrl:
          'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=746&q=80'
      },
      {
        id: '6228fe80b7e6cb904bbe0168',
        name: 'Jaqueta Xadrez',
        price: 300,
        imageUrl:
          'https://images.unsplash.com/photo-1525450824786-227cbef70703?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
        id: '6228ff31b7e6cb904bbe0172',
        name: 'Blusa Branca',
        price: 200,
        imageUrl:
          'https://images.unsplash.com/photo-1624206112918-f140f087f9b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
        id: '62290014b7e6cb904bbe017c',
        name: 'Calça Jeans Azul',
        price: 200,
        imageUrl:
          'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80'
      },
      {
        id: '6228ffa5b7e6cb904bbe017a',
        name: 'Vestido Branco',
        price: 250,
        imageUrl:
          'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
      }
    ]
  },
  {
    id: '6228f52eb7e6cb904bbe0111',
    name: 'hats',
    displayName: 'Chapéus',
    imageUrl:
      'https://images.unsplash.com/photo-1511231115599-3edad51208c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    products: [
      {
        id: '6228f5beb7e6cb904bbe0119',
        name: 'Boné Casquinha',
        price: 60,
        imageUrl:
          'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      },
      {
        id: '6228f60bb7e6cb904bbe011f',
        name: 'Chapéu Pôr do Sol',
        price: 100,
        imageUrl:
          'https://images.unsplash.com/photo-1582791694770-cbdc9dda338f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
        id: '6228f6c8b7e6cb904bbe012c',
        name: 'Gorro Vermelho',
        price: 90,
        imageUrl:
          'https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80'
      },
      {
        id: '6228f5e8b7e6cb904bbe011d',
        name: 'Boné Palmeira',
        price: 75,
        imageUrl:
          'https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80'
      },
      {
        id: '6228f68eb7e6cb904bbe0125',
        name: 'Chapéu Meia Noite',
        price: 110,
        imageUrl:
          'https://images.unsplash.com/photo-1514326005837-fb4791d25e03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
        id: '6228f591b7e6cb904bbe0115',
        name: 'Boné Branco',
        price: 60,
        imageUrl:
          'https://images.unsplash.com/photo-1622445275576-721325763afe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80'
      },
      {
        id: '6228f625b7e6cb904bbe0121',
        name: 'Chapéu Vermelho Vibrante',
        price: 120,
        imageUrl:
          'https://images.unsplash.com/photo-1593476087123-36d1de271f08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
        id: '6228f648b7e6cb904bbe0123',
        name: 'Boné Cinza',
        price: 65,
        imageUrl:
          'https://images.unsplash.com/photo-1517941823-815bea90d291?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      }
    ]
  }
]

const main = async () => {
  await Promise.all(
    categories.map(async (category) => {
      await addDoc(collection(db, 'categories'), category)
    })
  )
}

main().then(() => process.exit())
