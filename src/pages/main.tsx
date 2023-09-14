import { Header } from "../components/header/Header";
import { Title } from "../components/title/Title";
import { InitTracker } from "./InitiativeTracker/initTracker";
import { DmgTracker } from "./dmgTracker/dmgTracker";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./main.less";
export const Main = () => {
    return (
        <main>
            <Header>
                <Title title="DnD Tools" level="h1" />
            </Header>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<InitTracker />} />
                    <Route path="/damage" element={<DmgTracker />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
};
