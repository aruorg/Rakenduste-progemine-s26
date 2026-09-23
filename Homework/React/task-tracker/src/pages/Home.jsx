import PageSection from "../components/PageSection";

function Home({ tasks }) {
  const incompleteTasks = tasks.filter((task) => !task.completed);

  return (
    <main>
      <PageSection title="My tasks">

      {incompleteTasks.length === 0 ? (
        <p>No incomplete tasks</p>
      ) : (
        <ul>
          {incompleteTasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      )}
      </PageSection>
    </main>
  );
}

export default Home;

