import Taskform from "./Components/Taskform";
import Tasklist from "./Components/Tasklist";
import Progresstracker from "./Components/Progresstracker";

export default function App() {
  return(
    <div>
      <h1>Welcome to Task Focus</h1>
      <p>Our Friendly Task Manager</p>
      <Taskform />
      <Tasklist />
      <Progresstracker />
      <button>Clear all tasks</button>
    </div>
  )
}
