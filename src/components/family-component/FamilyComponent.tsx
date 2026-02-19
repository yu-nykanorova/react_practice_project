import {simpsons} from "../../data/simpsons.ts";
import CharacterComponent from "../character-component/CharacterComponent.tsx";

const FamilyComponent = () => {
    return (
        <div className="w-200 p-8">
            {
                simpsons.map((item, index) => <CharacterComponent key={index} character={item}>
                    {item.info}
                    </CharacterComponent>
                )
            }
        </div>
    );
};

export default FamilyComponent;