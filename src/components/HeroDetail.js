import React, {useEffect, useState} from "react";
import HeroContainer from "../containers/HeroContainer";

const HeroDetail = ({selectedHero}) => {

    // const [roles, setRoles] = useState(0)

    // useEffect(() => {
    //     setRoles(hero.roles.join(', '))
    // })
   

    return (
        <div className="box">
            <h2>Name: {selectedHero.localized_name}</h2>
            <p>Primary Attribute: {selectedHero.primary_attr}</p>
            <p>Attack Type: {selectedHero.attack_type}</p>
            <p>No of Legs: {selectedHero.legs}</p>
            <p>Roles: {selectedHero.roles}</p>
        </div>
    )
}

export default HeroDetail;