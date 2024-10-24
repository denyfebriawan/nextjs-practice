import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import app from "@/lib/firebase/init";
import { Product } from "@/types/Product";

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string): Promise<Product[]> {
  const snapshot = await getDocs(collection(firestore, collectionName));

  const data: Product[] = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  // const snapshot = await getDocs(collection(firestore, collectionName));
  // snapshot.docs.forEach((doc) => {
  //   console.log(doc.data()); // Ini akan menampilkan data dokumen di konsol
  //   return doc.data();
  // });

  return data;
}

export async function retrieveDataById(
  collectionName: string,
  id: string
): Promise<Product[]> {
  const snapshot = await getDoc(doc(firestore, collectionName, id));

  const data = snapshot.data();

  return {
    id: snapshot.id,
    ...data,
  };
}
