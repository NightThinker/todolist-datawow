import Progress from "./components/Progress";
import List from "./components/List";
import "./styles/todo.scss";

function App() {
    return (
        <div className="app">
            <div className="content">
                <Progress />
                <div className="flex justify-between">
                    <h2>Tasks</h2>
                    <div>dropdown</div>
                </div>
                <ul className="container-list">
                    <List />
                </ul>
                <input placeholder="Add your todo..." className="radius-full w-full" />
            </div>
        </div>
    );
}

export default App;
