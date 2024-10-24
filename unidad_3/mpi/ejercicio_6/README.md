
# ejercicio 6

## Enunciado

Crear un algoritmo donde el proceso 0 cree y envíe un vector *"Global"* de tamaño NP(cantidad de procesos lanzados) \* 5 a todos procesos mediante `MPI_Bcast`. 

Cada proceso va a recibir dicho valores, utilizando la misma variable de origen.

Cada proceso debe ir contabilizando todos los elementos del vector, que sean multiplo del elemento en la posicion `rango` del proceso.

> el proceso 0 debe verificar cuantos elementos son multiplos del elemento en la posicion 0

> el proceso 1 debe verificar cuantos elementos son multiplos del elemento en la posicion 1

> el proceso 2 debe verificar cuantos elementos son multiplos del elemento en la posicion 2

> el proceso n debe verificar cuantos elementos son multiplos del elemento en la posicion n

Luego imprimir el resultado por pantalla y opcionalmente obtener cual es el que mayor multiplos tuvo mediante la instruccion `MPI_Reduce` .

## Objetivos

- Aprender a usar `MPI_Bcast`.
- Aprender a usar `MPI_Reduce` para obtener el maximo.