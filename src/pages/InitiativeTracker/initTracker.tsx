import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { List } from "immutable";
import { Text } from "../../components/text/Text";

import "./initTracker.less";

export interface IPlayer {
    name: string;
    initNumber: number;
}

export const InitTracker = () => {
    const [playerName, setPlayerName] = useState("");
    const [playerInit, setPlayerInit] = useState(0);
    const [players, setPlayers] = useState<List<IPlayer>>(List());

    const addPlayer = () => {
        if (!playerName || !playerInit) return;
        setPlayerName("");
        setPlayerInit(0);
        let tempList = players.push({
            name: playerName,
            initNumber: playerInit,
        });
        tempList = tempList.sortBy((x) => x.initNumber).reverse();
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
                    placeholder="name here"
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
                <ol className="players_container_list">
                    {players.map((player, i) => {
                        return (
                            <li key={i}>
                                <div className="player_container">
                                    <Text text={player.name} />
                                    <Text text={player.initNumber.toString()} />
                                    <FontAwesomeIcon
                                        onClick={() =>
                                            onRemovePlayer(player.name)
                                        }
                                        icon={faXmark}
                                        className="close_icon"
                                    />
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
};
