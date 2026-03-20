import {MainMenu} from "../menu/MainMenu.tsx";

export const Header = () => {
    return (
        <header className="w-screen fixed bg-stone-200 shadow-md z-10">
            <MainMenu/>
        </header>
    );
};
