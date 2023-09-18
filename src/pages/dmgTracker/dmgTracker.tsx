import { useState } from "react";
import "./dmgTracker.less";
import { List } from "immutable";
import {
    faXmark,
    faPenToSquare,
    faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Text } from "../../components/text/Text";

export interface IMonster {
    name: string;
    health: number;
}

export const DmgTracker = () => {
    const [monsterName, setMonsterName] = useState("");
    const [monsterHealth, setMonsterHealth] = useState(0);
    const [newMonsterHealth, setNewMonsterHealth] = useState(0);
    const [editMode, setEditMode] = useState(false);

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

    const switchHpElement = (health: number) => {
        if (editMode) {
            return (
                <input
                    type="number"
                    value={newMonsterHealth}
                    onChange={(e) =>
                        setNewMonsterHealth(parseInt(e.target.value))
                    }
                />
            );
        }
        return <Text text={`HP: ${health.toString()}`} />;
    };

    const onSave = (name: string) => {
        const index = monsters.findIndex((monster) => monster.name === name);
        const monster = monsters.get(index);
        if (monster) {
            const newMonster: IMonster = {
                name: name,
                health: newMonsterHealth,
            };
            let tempList = monsters.update(index, () => newMonster);
            setMonsters(tempList);
        }
        setEditMode(false);
    };

    const editOrSaveIcon = (name: string) => {
        if (editMode) {
            return (
                <FontAwesomeIcon
                    onClick={() => onSave(name)}
                    icon={faFloppyDisk}
                    className="edit_icon"
                />
            );
        }
        return (
            <FontAwesomeIcon
                onClick={() => setEditMode(true)}
                icon={faPenToSquare}
                className="edit_icon"
            />
        );
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
                {monsters.map((monster, i) => {
                    return (
                        <div key={i} className="monster_container">
                            <Text text={monster.name} />
                            {switchHpElement(monster.health)}
                            {editOrSaveIcon(monster.name)}
                            <div className="remove_icon_container">
                                <FontAwesomeIcon
                                    onClick={() =>
                                        onRemoveMonster(monster.name)
                                    }
                                    icon={faXmark}
                                    className="remove_icon"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
