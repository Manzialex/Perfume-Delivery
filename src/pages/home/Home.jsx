import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Explorepdts from '../../components/Explorepdts/Explorepdts';
import ProductDisplay from '../../components/PdtDislay/ProductDisplay';
import Appdownload from '../../components/Appdownload/Appdownload';
const Home = () => {

  const [ category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <Explorepdts category={category} setCategory={setCategory} />
      <ProductDisplay category={category} />
      <Appdownload />
    </div>
  )
}

export default Home
