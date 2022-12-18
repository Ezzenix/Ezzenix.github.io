import "../css/Bottom.css";

const Bottom = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="bottom">
            <h1 className="unselectable">Created by Ezzenix</h1>
            <button className="unselectable" onClick={scrollToTop}>
                Go back to top
            </button>
        </div>
    );
};

export default Bottom;
