import {Component} from 'react'
import './index.css'

class Popular extends Component {
  state = {
    popularData: [],
    isLoading: false,
  }

  componentDidMount() {
    this.getPopularData()
  }

  getPopularData = async () => {
    const API_KEY = `1f3059dff59a7f5f8bd09457d7bd2c8e`
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.results)
  }
}

export default Popular
