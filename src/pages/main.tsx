import { Header } from "../components/header/Header";
import { Title } from "../components/title/Title";
import { InitTracker } from "./InitiativeTracker/initTracker";
import { DmgTracker } from "./dmgTracker/dmgTracker";
import { Route, Routes } from "react-router-dom";
import "./main.less";
import { Nav } from "../layout/navbar/nav";
export const Main = () => {
    return (
        <main>
            <Header>
                <Title title="DnD Tools" level="h1" />
            </Header>
            <Nav />
            <Routes>
                <Route path="/" element={<InitTracker />} />
                <Route path="/damage" element={<DmgTracker />} />
            </Routes>
        </main>
    );
};
