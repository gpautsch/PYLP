# Ejercicio 2

## Enunciado

A partir del siguiente codigo:

```c++
#include <omp.h>
#include <iostream>

#define N 10
#define nthreads 4

int main (){
  int thread;
  omp_set_num_threads(nthreads);
  #pragma omp parallel private(thread)
  {
      thread = omp_get_thread_num();

      for (int i = 0 ; i < N; i++){
      std::cout<<"Soy el proceso "<<thread<<" ejecuto al iteracion "<<i<<std::endl;
      }

  }
}
```

## Tareas

1. compile el archivo y ejecutelo

```sh
# compilando
> g++ -fopenmp ejercicio_2.cpp -o ej2.obj

#ejecutando
./ej2.obj
```

2. Agregar la directiva `#pragma omp for` antes del bucle for. ¿Que ocurre?

> `OpenMP` nos permite controlar la reparticion de iteraciones paralelas a traves de planificadores `schedule` cada uno de los cuales, actua de manera diferente.

3. luego de la directiva `#pragma omp for` defina el `schedule` y pruebe los 4 planificadores disponibles

   3.1. pruebe el planificador `static`
   3.2. pruebe el planificador `dynamic`
   3.3. pruebe el planificador `guided` 
   3.4. pruebe el planificador `auto`

## Objetivos

- Aprender a paralelizar bucles con 
  
  `#pragma omp for`
  
- aprender el comportamiento de los distintos planificadores de bucles 
  
  `#pragma omp for schedule([static|dynamic|guided|auto] )`