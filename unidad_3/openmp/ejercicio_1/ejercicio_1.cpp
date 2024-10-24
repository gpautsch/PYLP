#include <omp.h>
#include <iostream>

int main (){

int nthreads;
int thread;

#pragma omp parallel private(nthreads, thread)
  {

  thread = omp_get_thread_num();

  nthreads = omp_get_num_threads();

  std::cout<<"Hola Mundo soy la hebra ="<< thread <<" de "<<nthreads<<" que somos"<<std::endl;

  }

}