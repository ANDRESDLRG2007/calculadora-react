import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState("");
  const [primerValor, setPrimerValor] = useState("");
  const [operador, setOperador] = useState("");
  const [resultado, setResultado] = useState("");

  function concatenar(num) {
    setContador(contador + "" + num);
  }

  function reset() {
    setContador("");
    setResultado("");
    setPrimerValor("");
    setOperador("");
  }

  function imputOperador(op) {
    setPrimerValor(contador);
    setContador("");
    setOperador(op);
  }

function sumar() {
  setResultado(Number(primerValor) + Number(contador));
  setContador("");
}

function restar() {
  setResultado(Number(primerValor) - Number(contador));
  setContador("");
}

function multiplicar() {
  setResultado(Number(primerValor) * Number(contador));
  setContador("");
}

function dividir() {
  setResultado(Number(primerValor) / Number(contador));
  setContador("");
}

  function calcular() {
    if (operador === "+") sumar();
    if (operador === "-") restar();
    if (operador === "*") multiplicar();
    if (operador === "/") dividir();
  }

  return (
    <div className="Bloque_contador">
      <label>
        {contador}
        {resultado}
      </label>
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={() => concatenar(1)}>1</button>
      <button onClick={() => concatenar(2)}>2</button>
      <button onClick={() => concatenar(3)}>3</button>
      <br />
      <button onClick={() => concatenar(4)}>4</button>
      <button onClick={() => concatenar(5)}>5</button>
      <button onClick={() => concatenar(6)}>6</button>
      <br />
      <button onClick={() => concatenar(7)}>7</button>
      <button onClick={() => concatenar(8)}>8</button>
      <button onClick={() => concatenar(9)}>9</button>
      <br />
      <button onClick={() => concatenar(0)}>0</button>
      <br />
      <button onClick={() => imputOperador("*")}>*</button>
      <button onClick={() => imputOperador("+")}>+</button>
      <button onClick={() => imputOperador("-")}>-</button>
      <button onClick={() => imputOperador("/")}>/</button>
      <br />
      <button onClick={calcular}>=</button>
    </div>
  );
};

export default Contador;
