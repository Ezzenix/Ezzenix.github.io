function SkillCard(obj) {
    const name = obj.name;
    const iconURL = obj.icon;
    const backgroundColor = obj.backgroundColor || "white";

    return (
        <div
            className="Skill-card"
            key={name}
            style={{ backgroundColor: backgroundColor }}
        >
            <img src={iconURL} alt="" />
            <h1>{name}</h1>
        </div>
    );
}

export default SkillCard;
