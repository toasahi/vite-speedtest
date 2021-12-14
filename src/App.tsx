import './App.css';
import { useDispatch } from 'react-redux';
import { useSelector } from './redux/store';
import { decrease, increase } from './redux/counterSlice';

function App() {
  // @ts-ignore
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="App container m-auto">
      <h1 className="text-5xl text-blue-300">ReduxToolKit</h1>
      <p className="text-3xl text-gray mt-10">Count:{count}</p>

      <button className="w-32 bg-indigo-400 p-3 rounded mr-2" onClick={() => dispatch(increase())}>
        Up
      </button>
      <button className="w-32 bg-indigo-200 p-3 rounded" onClick={() => dispatch(decrease())}>
        Down
      </button>
    </div>
  );
}

export default App;
