import React from 'react'
import {
  ImgWrapper,
  Img,
  Article
} from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton/index'
import { UseLikeMutation } from '../../container/ToggleLikeMutation'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, ref] = useNearScreen()
  const { toggleLikePhoto } = UseLikeMutation()

  const handleFavClick = () => {
    setLiked(!liked)
    toggleLikePhoto({
      variables: {
        input: { id }
      }
    })
  }

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a
            href={`/detail/${id}`}
          >
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <FavButton
            liked={liked}
            likes={likes}
            onClick={handleFavClick}
          />
        </>
      )}
    </Article>
  )
}
