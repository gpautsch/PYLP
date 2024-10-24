# Programación funcional

Se basa en el concepto de `Funciones` matemáticas y sus características.

Una función es:

> "Una regla que aplicada a cada elemento de un dominio y da como resultado un valor en otro conjunto llamando imagen"

```
F(x) -> Y
```

Ejemplo:

> Doble (5) -> 10
>
> Capital(Argentina) -> Buenos aires

## Declaración

Una funcion se puede definir

- **Por Comprension**: se define a partir de una formula o ecuacion. Ejemplo

```
Doble(x) = 2*x
```

- **Extension**: se define por un par ordenado donde se expresa para cada valor su resultado. Ejemplo

```
Capital = Argentina, Buenos aires
          Uruguay, montevideo
```

## Características de la Programación Funcional

- Se basa en un **Paradigma Declarativo**: donde el objetivo es expresar **QUE** hay que calcular y no tanto el **COMO**

- **Transparencia Referencial**: El resultado de la función depende **unicamente** de los valores pasados como parametros en la llamada de la funcion. Es decir, todas las veces que llamemos a una función con los mismos parametros de entrada, la funcion va a devolver el mismo resultado.

- No tiene **Efectos Laterales**: No se modifica nada de lo que se encuentre declarado fuera de la funcion, de hecho en la programación funcional pura, todas las declaraciones son **INMUTABLES**

- En los programas funcionales no existe la nocion de posicion de memoria por lo cual, no existen instrucciones de asignacion.

  `X = <Expresion>` es una **declaración** y no una asignacion, esto implica 2 cosas

  - significa que X puede reemplazar a la expresion en cualquier parte del programa.
  - dentro del programa no puede existir nuevamente algo como `X = <otra expresion>` ya que `X` es `INMUTABLE`

- Las funciones son `"first class citizens"` a diferencias de otros paradigmas, por ejemplo el OO donde las funciones solo pueden vivir como miembros de una clase o un objeto. En la programacion funcional las funciones son tratadas al mismo nivel de las clases y los objetos, es decir, pueden almacenarse como variables, pueden ser pasadas como parametros a funciones, pueden ser el resultado de una funcion. etc. 

- **Funciones de orden superior**: Las funciones pueden pasarse como parametro a otras funciones

- **Fuertemente tipado y estatico**:

- **Inferencia de tipo** el programador no esta obligado a declarar el tipo de las expresiones. (se infieren)

- **Polimorfismo**

- **Evaluacion perezosa**: las expresiones se llaman solo cuando se necesitan resolver.  
