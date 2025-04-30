const parentDiv = React.createElement("div", { id: "parent" }, 
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {},"Hii I'm H1"), 
        React.createElement("h2", {}, "hii I'm H2")
    ]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentDiv);

