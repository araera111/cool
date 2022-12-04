import './App.css';

export const App = () => {
  const a = '';
  const users = ['tanaka', 'masa'];
  return (
    <div className="px-2 bg-blue-400 container mx-auto">
      <div>App v2</div>
      <div>
        {users.map((i) => (
          <div key={i}>{i}</div>
        ))}
      </div>
    </div>
  );
};
