import type {ICharacter} from "../../models/character.ts";
import type {ReactNode} from "react";

type Props = {
    character: ICharacter;
    children: ReactNode;
}

const CharacterComponent = ({character, children}: Props) => {
    return (
        <div className="p-8 flex flex-col justify-center gap-2 bg-white rounded-s shadow-md not-last:mb-4">
            <img src={character.photo} alt={character.name} className="h-80 w-80 mx-auto object-contain"/>
            <h3 className="text-4xl">{character.name} {character.surname}</h3>
            <p className="text-4xl text-blue-600">{character.age} y.o.</p>
            {children}
        </div>
    );
};

export default CharacterComponent;