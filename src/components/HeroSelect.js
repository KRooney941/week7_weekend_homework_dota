import React from "react";

const HeroSelect = ({heroes, onHeroSelected}) => {

 const handleChange = function(event) {
        const chosenHero = heroes[event.target.value]
        onHeroSelected(chosenHero)
    }

 const heroOptions = heroes.map((hero, id) => {
        return <option key={id} value={id}>{hero.localized_name}</option>
    })

  return (
      <select onChange={handleChange}>
          <option selected disabled value="">Please choose a Hero</option>
          {heroOptions}
      </select>
  )

}

export default HeroSelect;