import { configureStore } from "./Redux/store";
import Counter from "./User/Container/Counter/Counter";
import { Provider } from 'react-redux'

function App() {
  const store = configureStore()
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </> 
  );
}

export default App;
