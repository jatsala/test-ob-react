// import logo from './logo.svg';
import './App.css';
import Todo from './testComponents/Todo';
// import AxiosCRUDExample from './components/pure/AxiosCRUDExample';
// import NotificationManager from './components/pure/NotificationManager';
// import AxiosExample from './components/pure/AxiosExample';
// import FetchExample from './components/pure/FetchExample';
// import ObservableExample from './components/pure/ObservableExample';
// import AsyncExample from './components/pure/AsyncExample';
// import Registerformik from './components/pure/forms/registerFormik';
// import LoginFormik from './components/pure/forms/loginFormik';
// import OptionalRender from './components/pure/optionalRender';
// import Father from './components/container/father';
// import GreetingStyled from './components/pure/greetingStyled';
// import Ejemplo4 from './hooks/Ejemplo4';
// import MiComponenteConContexto from './hooks/Ejemplo3';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
// import TaskListComponent from './components/container/task_list'

// import Updater from './components/sw/Updater';

function App() {
  const todos = [
    { id: 1, text: 'Hacer la cama', completed: true },
    { id: 2, text: 'Cocinar', completed: false },
    { id: 3, text: 'Aprender Ingles', completed: false }
  ]
  // const version = 'app-v3-Front';
  return (
    <div className="App">
      <h1>Bienvenid@</h1>
      {/* <h1>Version {version}</h1> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Componente Propio Gretting.jsx */}
      {/* <Greeting name="Jose Antonio"></Greeting> */}
      {/* ---> Componente Ejemplo Funcional></Tareas> */}
      {/* <GreetingF name="José Antonio"></GreetingF> */}
      {/* ---> Componentede Listado de <Tareas></Tareas> */}
      {/* <TaskListComponent></TaskListComponent> */}
      {/* ---> Ejemplos de usos de HOOKS */}
      {/* <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2></Ejemplo2> */}
      {/* <MiComponenteConContexto></MiComponenteConContexto> */}
      {/* Todo lo que hay aquí, es tratado como props.children */}
      {/* <Ejemplo4 nombre='JATSALA'>
          <h3> Contenido del props.children </h3>
        </Ejemplo4> */}
      {/* <GreetingStyled name='José Antonio'></GreetingStyled>
      </header> */}
      {/* --> Gestion de eventos */}
      {/* <Father></Father> */}
      {/* Ejemplos de Renderizados Condicional */}
      {/* <OptionalRender></OptionalRender> */}

      {/* Ejemplos de uso de Formik y Yup */}
      {/* <LoginFormik></LoginFormik> */}
      {/* <Registerformik></Registerformik> */}

      {/* Ejemplos de Procesos Asincronos */}
      {/* <AsyncExample /> */}
      {/* <ObservableExample /> */}
      {/* <FetchExample /> */}
      {/* <AxiosExample /> */}
      {/* <AxiosCRUDExample /> */}
      {/* <NotificationManager /> */}
      {todos.map(todo => <Todo todo={todo} />)}

      {/* Proyecto Final */}
      {/* <TaskListComponent></TaskListComponent> */}
      {/* <Updater></Updater> */}
    </div>
  );
}

export default App;
