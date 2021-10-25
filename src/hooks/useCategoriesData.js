import { useEffect, useState } from 'react'

export const useCategoriesData = ({ api }) => {
  const [categories, setCategoriesData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(function () {
    setLoading(true)
    setTimeout(function () {
      window.fetch(api)
        .then(res => res.json())
        .then(categories => {
          setCategoriesData(categories)
        })
        .catch(err => {
          setError(err)
        })
        .finally(() => {
          setLoading(false)
        })
    }, 2000)
  }, [])

  return { error, loading, categories }
}
