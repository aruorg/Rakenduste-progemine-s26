
function Home({ tasks }) {
  const incompleteTasks = tasks.filter((task) => !task.completed);

  return (
    <main>
      <h1>Incomplete Tasks</h1>

      {incompleteTasks.length === 0 ? (
        <p>No incomplete tasks</p>
      ) : (
        <ul>
          {incompleteTasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Home;

