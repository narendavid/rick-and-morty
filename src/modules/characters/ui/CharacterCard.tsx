import { Character } from "../models/character";


interface Props {
    character: Character;
}

export default function CharacterCard({ character }: Props) {
    return (
        <div className="p-4 border rounded-lg shadow-lg bg-white transition-all hover:scale-110 cursor-pointer">
            <img
                src={character.image}
                alt={character.name}
                className="w-full h-64 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-2">{character.name}</h3>
            <p className="text-gray-600">Status: {character.status}</p>
        </div>
    );
}
