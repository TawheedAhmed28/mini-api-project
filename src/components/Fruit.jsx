import React from "react";

function Fruit({ fruit }) {

    const [showNutrition, setShowNutrition] = React.useState(false)
    function toggleShowNutrition() {
        setShowNutrition(!showNutrition)
    }

    return <div>
        <p className="fruit-name">{fruit.name}</p>
        {showNutrition ? (
            <>
                <p>Nutrition information for {fruit.name} per 100g:</p>
                <ul>
                    <li>Calories: {fruit.nutritions.calories}</li>
                    <li>Fat: {fruit.nutritions.fat}g</li>
                    <li>Sugar: {fruit.nutritions.sugar}g</li>
                    <li>Carbohydrates: {fruit.nutritions.carbohydrates}g</li>
                    <li>Protein: {fruit.nutritions.protein}g</li>
                </ul>
                <button onClick={toggleShowNutrition}>Hide Nutrition Info</button>
            </>
        ) : (
            <>
                <button onClick={toggleShowNutrition}>Show Nutrition Info</button>
            </>
        )}
    </div>
}

export default Fruit