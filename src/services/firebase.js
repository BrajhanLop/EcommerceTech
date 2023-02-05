
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, updateDoc, where } from "firebase/firestore"
import productsJson from './products.json';


const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: "ecommerce-coder2022.firebaseapp.com",
  projectId: "ecommerce-coder2022",
  storageBucket: "ecommerce-coder2022.appspot.com",
  messagingSenderId: "419726657844",
  appId: "1:419726657844:web:28c1af41480914481abd61"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;

export const productosAll = async () => {

  const productRef = collection(db, "products")
  const productProtect = await getDocs(productRef)

  const products = productProtect.docs.map(pro => ({ ...pro.data(), id: pro.id }))

  return products;

}

export const productsbyId = async (id) => {

  const productCollect = collection(db, "products")

  const productIndiv = doc(productCollect, id);

  const obtenerDatos = await getDoc(productIndiv);

  if (obtenerDatos._document == null) {
    return null;
  }
  return { ...obtenerDatos.data(), id: obtenerDatos.id };
}

export const obtenerProductosPorCategoria = async (category = '') => {

  const productCollect = collection(db, "products")

  const consulta = query(productCollect, where("categoria", "==", category))

  const productporCategoria = await getDocs(consulta)

  const products = productporCategoria.docs.map(pro => ({ ...pro.data(), id: pro.id }))
  return products;

}

export const createOrder = async (data) => {
  // accediendo a la collecion
  const orderCollect = collection(db, "order")

  let res = await addDoc(orderCollect, data)
  return res.id

}

export const updateStock = async (cart) => {

  for (let i = 0; i < cart.length; i++) {
    const docRef = doc(db, "products", cart[i].id);

    await updateDoc(docRef, {
      stock: cart[i].stock - cart[i].cantidad
    })

  }

}


export const loadProducts = async () => {
  const productCollect = collection(db, "products")

  productsJson.forEach(data => {
    delete data.id;
    addDoc(productCollect, data)
  });


}

