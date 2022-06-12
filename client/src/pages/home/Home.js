import React from 'react'
import BasiCard from '../../components/card/BasiCard'
import Card from '../../components/card/Card'
import ImageCard from '../../components/card/ImageCard'
import Footer from '../../components/footer/Footer'
import Front from '../../components/front/Front'
import Section from '../../components/Section/Section'

function Home() {
  return (
    <div>
      <Front/> 
      <Section title={"Rechercher par type d'hébergement"}>
          <BasiCard title = "hotels" image = "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=" quantity = "16 500" />
          <BasiCard title = "Appartements" image = "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" quantity = "22 000" />
          <BasiCard title = "Villas" image = "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg" quantity = "320 300" />
          <BasiCard title = "Chalets" image = "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg" quantity = "54 033" />
          <BasiCard title = "Complexes hôteliers" image = "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg" quantity = "12 000" />
      </Section>
      <Section title={"Ces destinations prisées ont beaucoup à offrir"}>
          <ImageCard city = "Dubai" nbEtablissement = "123 etablissements" image = "https://cf.bstatic.com/xdata/images/city/540x270/619923.webp?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o=" />
          <ImageCard city = "Istambul" nbEtablissement = "655 etablissements" image = "https://cf.bstatic.com/xdata/images/city/540x270/654657.webp?k=89856fe34d0c79585591dfb571c096931beeea442ef9175f86cd9960ffb242dd&o=" />
          <ImageCard city = "Barcelona" nbEtablissement = "1022 etablissements" image = "https://cf.bstatic.com/xdata/images/city/540x270/968314.webp?k=0e0d712f666150594683eeeea60d7e3afdaab51286a9023f15f648ff3fbb0d6c&o=" />
      </Section>
      <Section title={"Les hébergements que les clients adorent"}>
          <Card city = "Barcelona" rating = "8.9"  title = "the patio barcelona"  price = "Dés 1250 MAD" image = "https://cf.bstatic.com/xdata/images/hotel/max500/115324042.jpg?k=d5256e704ea0699668f17867af8bfa411767e8840b34e764f08a2bef3f63b431&o=" />
          <Card city = "Rome" rating = "8.6"  title = "Appartamento Benincampi"  price = "Dés 650 MAD" image = "https://cf.bstatic.com/xdata/images/hotel/max500/106393405.jpg?k=237d0a65974505ec4d34765c230ad8c6198e0cc4f807e4f8c542ef95c89a38ab&o=" />
          <Card city = "Madrid"  rating = "9.5" title = "Luxury Apartment by Hi5 "  price = "Dés 3150 MAD" image = "https://cf.bstatic.com/xdata/images/hotel/max500/40890517.jpg?k=cd55de5463af8988f78fd675904a43d02f77570debe9977c4c1fe658030b6d29&o=" />
          <Card city = "Paris"  rating = "9.9"  title = "Luxury 3 Bedrooms Le Louvre I" price = "Dés 1650 MAD" image = "https://cf.bstatic.com/xdata/images/hotel/max500/45976851.jpg?k=7bd839dd07e1384ebfde004069e25090a4a901728e9bdc8e200f411ed243999d&o=" />
      </Section>
      <Footer/>
    </div>
  )
}

export default Home