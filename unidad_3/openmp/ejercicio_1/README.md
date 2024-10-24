# Ejercicio 1

## Enunciado

A partir del siguiente codigo:

```c++
#include <omp.h>
#include <iostream>

int main (){

int nthreads;
int thread;

#pragma omp parallel private(nthreads, thread)
  {

  thread = omp_get_thread_num();

  nthreads = omp_get_num_threads();

  std::cout<<"Hola Mundo soy la hebra ="<< thread <<" de "<<nthreads<<" que
somos"<<std::endl;

  }

}
```

## Tareas

1. compile el archivo y ejecutelo

```sh
# compilando
> g++ -fopenmp 01.cpp -o holaMundo

#ejecutando
./holaMundo
```

2. hacer que el codigo de arriba se ejecute por 10 hilos. ¿cual es la rutina necesaria?

3. ¿que pasa si se elimina la clausula `private`?

4. crear una nueva variable fuera de la region paralela y asignale el valor `777` y definela dentro de la clausula `private` de la region paralela ¿Que pasa con su valor?

5. Ahora en vez de definila dentro de una clausula de comparticion `firstprivate`

## Objetivos

- Iniciarnos en el aprendizaje de `OpenMP`.
- Aprender a usar `#pragma omp parallel`.
- Aprender a usar la clausula `firstprivate`.
- Aprender a usar la clausula `private`.
- Aprender a usar `omp_get_thread_num`.
- Aprender a usar `omp_get_num_threads`.
- Aprender a usar `omp_set_num_threads`.
