import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions
} from 'firebase/firestore'
import Category from '../types/category.types'

export const categoryConverter = {
  toFirestore(category: Category): DocumentData {
    return { ...category }
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Category {
    const data = snapshot.data(options)

    return {
      id: data.id,
      displayName: data.displayName,
      imageUrl: data.imageUrl,
      name: data.name,
      products: data.products
    }
  }
}
