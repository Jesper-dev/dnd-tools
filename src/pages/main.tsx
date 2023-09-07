import { Header } from "../components/header/Header";
import { Title } from "../components/title/Title";
import { InitTracker } from "./InitiativeTracker/initTracker";
import "./main.less";
export const Main = () => {
    return (
        <main>
            <Header>
                <Title title="DnD Tools" level="h1" />
            </Header>
            <InitTracker />
        </main>
    );
};
