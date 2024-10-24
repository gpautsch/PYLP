
# ejercicio 4

## Enunciado

Crear un algoritmo que realice el producto escalar de dos vectores donde el tamaño de los vectores es de NP (cantidad de procesos lanzados) por 5.

Para realizar el producto escalar, lo que vamos a tener que hacer, es enviar a cada proceso una porcion de los vectores originales con `MPI_Scatter`.
Cada proceso ira haciendo el producto de los elementos de los vectores que recibió almacenadolos en una variable `producto`. Luego todos los productos locales se reducirán en el proceso 0 con `MPI_Reduce`.

## Objetivos

- Aprender a usar `MPI_Scatter`.
- Aprender a usar `MPI_Reduce`.

