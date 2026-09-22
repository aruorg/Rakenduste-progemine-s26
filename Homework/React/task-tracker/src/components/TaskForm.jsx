import { useState } from "react";

export function TaskForm({ addTask }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event){
        event.preventDefault();

        const trimmedTitle = title.trim();
        const trimmedDescription = description.trim();

        if(trimmedTitle === ""){
            setError("Please insert title");
            return;
        }

        if(trimmedDescription === ""){
            setError("Please insert description");
            return;
        }

        setError("");
        addTask(trimmedTitle, trimmedDescription);
        setTitle("");
        setDescription("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Task title</label>
            <input
                id="title"
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <label htmlFor="description">Task description</label>
            <textarea
                id="description"
                value={description}
                onChange={event => setDescription(event.target.value)}
            />

            <button type="submit">Add Task</button>

            {error && <p>{error}</p>}

        </form>
    );
}