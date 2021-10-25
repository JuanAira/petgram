/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { GlobalStyles } from './styles/GlobalStyles'

export default function () {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <div>
      <GlobalStyles />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={3} />
          </>
      }
    </div>
  )
}
