import { useState } from "react";
import "./dmgTracker.less";
import { List } from "immutable";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Text } from "../../components/text/Text";

export interface IMonster {
    name: string;
    health: number;
}

export const DmgTracker = () => {
    const [monsterName, setMonsterName] = useState("");
    const [monsterHealth, setMonsterHealth] = useState(0);

    const [monsters, setMonsters] = useState<List<IMonster>>(List());

    const addMonster = () => {
        if (!monsterName || !monsterHealth) return;
        setMonsterName("");
        setMonsterHealth(0);
        let tempList = monsters.push({
            name: monsterName,
            health: monsterHealth,
        });
        setMonsters(tempList);
    };

    const onRemoveMonster = (monsterName: string) => {
        const index = monsters.findIndex(
            (monster) => monster.name === monsterName
        );
        let tempList = monsters.delete(index);
        setMonsters(tempList);
    };

    return (
        <div className="main_container">
            <div className="add_monster_container">
                <input
                    id="name.input"
                    type="text"
                    value={monsterName}
                    placeholder="monster name here"
                    onChange={(e) => setMonsterName(e.target.value)}
                />
                <input
                    id="init.input"
                    type="number"
                    value={monsterHealth}
                    onChange={(e) => setMonsterHealth(parseInt(e.target.value))}
                />
                <button onClick={addMonster}>Add Monster</button>
            </div>
            <div className="monsters_container">
                <ol className="monsters_container_list">
                    {monsters.map((monster, i) => {
                        return (
                            <li key={i}>
                                <div className="monster_container">
                                    <Text text={monster.name} />
                                    <Text
                                        text={`HP: ${monster.health.toString()}`}
                                    />
                                    <FontAwesomeIcon
                                        onClick={() =>
                                            onRemoveMonster(monster.name)
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
