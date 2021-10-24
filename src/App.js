import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

import { GlobalStyles } from './styles/GlobalStyles'

export default function () {
  return (
    <div>
      <GlobalStyles />
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  )
}
