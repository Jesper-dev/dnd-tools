import { useState } from "react";
import { Title } from "../../components/title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { List } from "immutable";

import "./initTracker.less";

interface IPlayer {
    name: string;
    initNumber: number;
}

export const InitTracker = () => {
    // const [player, setPlayer] = useState<IPlayer>({ name: "", initNumber: 0 });
    const [playerName, setPlayerName] = useState("");
    const [playerInit, setPlayerInit] = useState(0);
    const [players, setPlayers] = useState<List<IPlayer>>(List());

    const addPlayer = () => {
        if (playerName === "" && !playerInit) return;
        setPlayerName("");
        setPlayerInit(0);
        let tempList = players.push({
            name: playerName,
            initNumber: playerInit,
        });
        setPlayers(tempList);
    };

    const onRemovePlayer = (playerName: string) => {
        const index = players.findIndex((player) => player.name === playerName);
        let tempList = players.delete(index);
        setPlayers(tempList);
    };

    return (
        <div className="main_container">
            <div className="add_player_container">
                <input
                    id="name.input"
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                />
                <input
                    id="init.input"
                    type="number"
                    value={playerInit}
                    onChange={(e) => setPlayerInit(parseInt(e.target.value))}
                />
                <button onClick={addPlayer}>Add Player</button>
            </div>
            <div className="players_container">
                {players.map((player, i) => {
                    return (
                        <div className="player_container" key={i}>
                            <Title level="h3" title={player.name} />
                            <Title
                                level="h3"
                                title={player.initNumber.toString()}
                            />
                            <FontAwesomeIcon
                                onClick={() => onRemovePlayer(player.name)}
                                icon={faXmark}
                                className="close_icon"
                            />
                        </div>
                    );
                })}
            </div>
            <div>
                <button>Calculate Initiatives</button>
            </div>
        </div>
    );
};
