import "../css/Skills.css";
import SkillCard from "../components/SkillCard";

const Skills = () => {
    return (
        <div className="Skills">
            <h1>Skills</h1>
            <div className="Skills-wrapper">
                <SkillCard
                    name="JS"
                    icon={
                        "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                    }
                    backgroundColor="#ffdf00"
                />
                <SkillCard
                    name="CSS"
                    icon={
                        "https://cdn-icons-png.flaticon.com/512/732/732190.png"
                    }
                    backgroundColor="#2196f3"
                />
                <SkillCard
                    name="HTML"
                    icon={
                        "https://cdn-icons-png.flaticon.com/512/732/732212.png"
                    }
                    backgroundColor="#ff5722"
                />
                <SkillCard
                    name="Lua"
                    icon={
                        "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/lua-1.png"
                    }
                    backgroundColor="#2225e3"
                />
                <SkillCard
                    name="UI"
                    icon={"https://i.ibb.co/47JLFrt/ui-design.png"}
                    backgroundColor="#ffb536"
                />
            </div>
        </div>
    );
};

export default Skills;
