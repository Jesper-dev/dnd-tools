import { Header } from "../components/header/Header";
import { Title } from "../components/title/Title";
import "./main.less";
export const Main = () => {
    return (
        <main>
            <Header>
                <Title title="DnD Tools" level="h1" />
            </Header>
        </main>
    );
};
