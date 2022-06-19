import React, {useState, useEffect} from 'react';
import Header from "../components/Header";
import HeroDetail from "../components/HeroDetail";
import HeroSelect from "../components/HeroSelect";
import FavouriteHeroes from "../components/FavouriteHeroes"


const HeroContainer = () => {
    const [heroes, setHeroes] = useState([]);
    const [selectedHero, setSelectedHero] = useState([])

    useEffect(() => {
        getHeroes();
    }, [])

    const handleFavouriteToggle = (localized_name) => {
        const updatedHeroes = heroes.map((hero) => {
            return hero.localized_name === localized_name
            ? {...hero, isFavourite: !hero.isFavourite}
            :hero 
        }) 
        setHeroes(updatedHeroes)

    }

    const getHeroes = function(){
        fetch("https://api.opendota.com/api/heroes")
        .then(res => res.json())
        .then(heroes => setHeroes(heroes))
      };

      const onHeroSelected = function(hero){
          setSelectedHero(hero)
      }

    return (
        <>
            <Header/>
            <HeroSelect heroes ={heroes} onHeroSelected = {onHeroSelected}/>
            <HeroDetail hero={selectedHero} onFavouriteToggle={handleFavouriteToggle} />
            <FavouriteHeroes heroes={heroes} onHeroSelected={onHeroSelected} />
        </>
    )

}

export default HeroContainer;