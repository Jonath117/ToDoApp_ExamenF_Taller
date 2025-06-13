import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Dashboard() {
    
    return (
        <div className="mt-5 mb-10 max-w-2xl mx-auto p-6 text-center bg-gray-100 rounded-md shadow-xl bg-gray-300 p-4">
            <h2 className="text-2xl font-bold mb-4">Tareas</h2>
            <TaskForm/>
            <TaskList/>
        </div>

    );
}

export default Dashboard;