import React, {useState, useEffect} from 'react';
import Header from "../components/Header";
import HeroDetail from "../components/HeroDetail";
import HeroSelect from "../components/HeroSelect";


const HeroContainer = () => {
    const [heroes, setHeroes] = useState([]);
    const [selectedHero, setSelectedHero] = useState([])

    useEffect(() => {
        getHeroes();
    }, [])

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
            { selectedHero ? <HeroDetail selectedHero={selectedHero}/> : null}
        </>
    )

}

export default HeroContainer;