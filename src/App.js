import './App.css';
import { useEffect, useState } from 'react';

const eventFn = () => {
   console.log('h1 clicado');
};

function App() {
   const [counter, setCounter] = useState(0);
   const [counter2, setCounter2] = useState(0);

   //componentDidUpdate atualizada toda vez que é chamado
   // useEffect(() => {
   //    console.log('componentDidUpdate');
   // });

   // componentDidMount executa somente uma vez
   useEffect(() => {
      document.querySelector('h1')?.addEventListener('click', eventFn);

      //compoentWillUmount - limpeza
      return () => {
         document.querySelector('h1')?.removeEventListener('click', eventFn);
      };
   }, []);

   //execulta toda vez que independecia muda
   useEffect(() => {
      console.log('C1:', { counter }, 'C2:', { counter2 });
   }, [counter, counter2]);

   return (
      <div className="App">
         <h1>
            C1:{counter} C2:{counter2}
         </h1>
         <button onClick={() => setCounter(counter + 1)}>+</button>
         <button onClick={() => setCounter2(counter2 + 1)}>+(2)</button>
      </div>
   );
}

export default App;
