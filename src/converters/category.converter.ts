import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions
} from 'firebase/firestore'

import Category from '../types/category.types'

export const productConverter = {
  toFirestore(category: Category): DocumentData {
    return {
      id: category.id,
      displayName: category.displayName,
      name: category.name,
      imageUrl: category.imageUrl,
      products: category.products
    }
  },

  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Category {
    const data = snapshot.data(options)!

    return {
      id: data.id,
      displayName: data.displayName,
      name: data.name,
      imageUrl: data.imageUrl,
      products: data.products
    }
  }
}
