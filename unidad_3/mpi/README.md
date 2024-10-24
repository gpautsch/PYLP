# MPI (Interfaz de Paso de Mensajes)

es un estándar que define la sintaxis y la semántica de las funciones contenidas en una biblioteca de paso de mensajes diseñada para ser usada en programas que explotan la existencia de múltiples procesadores.

El paso de mensajes es una técnica empleada en programación concurrente para aportar sincronización y comunicacion entre procesos de manera similar a como se hace con los semáforos, monitores, etc.

Su principal característica es que no precisa de memoria compartida, por lo que es muy importante en la programación de sistemas distribuidos.

## Componentes del estandar

## Funciones

|                                                                                   |                      |                 |                 |
| --------------------------------------------------------------------------------- | -------------------- | --------------- | --------------- |
| [**MPI_Init**](https://lsi.ugr.es/jmantas/ppr/ayuda/mpi_ayuda.php?ayuda=MPI_Init) | MPI_Iprobe           | [**MPI_Bcast**](https://lsi.ugr.es/jmantas/ppr/ayuda/mpi_ayuda.php?ayuda=MPI_Bcast)   | MPI_Cart_coords |
| [**MPI_Finalize**](https://lsi.ugr.es/jmantas/ppr/ayuda/mpi_ayuda.php?ayuda=MPI_Finalize)                                                                  | MPI_Probe            | [**MPI_Scatter**](https://lsi.ugr.es/jmantas/ppr/ayuda/mpi_ayuda.php?ayuda=MPI_Scatter) | MPI_Cart_rank   |
| [**MPI_Comm_rank**](https://lsi.ugr.es/jmantas/ppr/ayuda/mpi_ayuda.php?ayuda=MPI_Comm_rank)                                                                 | MPI_Get_count        | [**MPI_Gather**](https://lsi.ugr.es/jmantas/ppr/ayuda/mpi_ayuda.php?ayuda=MPI_Gather)  | MPI_Cart_shift  |
| [**MPI_Comm_size**](https://lsi.ugr.es/jmantas/ppr/ayuda/mpi_ayuda.php?ayuda=MPI_Comm_size)                                                                 | MPI_Sendrecv         | [**MPI_Reduce**](https://lsi.ugr.es/jmantas/ppr/ayuda/mpi_ayuda.php?ayuda=MPI_Reduce)  | MPI_Type_vector |
| [**MPI_Send**](https://lsi.ugr.es/jmantas/ppr/ayuda/mpi_ayuda.php?ayuda=MPI_Send)                                                                      | MPI_Sendrecv_replace | MPI_Allreduce   | MPI_Type_commit |
| [**MPI_Recv**](https://lsi.ugr.es/jmantas/ppr/ayuda/mpi_ayuda.php?ayuda=MPI_Recv)                                                                      | MPI_Barrier          | MPI_Scan        | MPI_Type_free   |
| **MPI_Isend**                                                                     | MPI_Waitall          | MPI_Comm_split  | MPI_Pack        |
| **MPI_Irecv**                                                                     | MPI_Request_free     | MPI_Comm_free   | MPI_Unpack      |
| MPI_Test                                                                          | MPI_Error_string     | MPI_Cart_create | MPI_Wtime       |
| **MPI_Wait**                                                                      |                      |                 |

## [Tipos de datos](https://lsi.ugr.es/jmantas/ppr/ayuda/mpi_ayuda.php?ayuda=mpi_datatypes)

|                |              |                 |              |
| -------------- | ------------ | --------------- | ------------ |
| **MPI_Status** | **MPI_Comm** | **MPI_Request** | MPI_Datatype |

### [Constantes](https://lsi.ugr.es/jmantas/ppr/ayuda/mpi_ayuda.php?ayuda=mpi_const_types)

|                    |                    |                     |                    |
| ------------------ | ------------------ | ------------------- | ------------------ |
| **MPI_COMM_WORLD** | MPI_DOUBLE         | MPI_FLOAT_INT       | MPI_PACKED         |
| **MPI_INT**        | MPI_UNSIGNED_CHAR  | MPI_LONG_INT        | MPI_UB             |
| MPI_CHAR           | MPI_UNSIGNED_SHORT | MPI_DOUBLE_INT      | MPI_LB             |
| MPI_BYTE           | MPI_UNSIGNED       | MPI_SHORT_INT       | **MPI_ANY_SOURCE** |
| MPI_LONG           | MPI_UNSIGNED_LONG  | MPI_2INT            | **MPI_ANY_TAG**    |
| MPI_FLOAT          | MPI_LONG_DOUBLE    | MPI_LONG_DOUBLE_INT | MPI_ERROR          |

## Compilando mis fuentes

para compilar el archivo fuente `.cpp` debe ejecutar con la opcion `-o` le damos el nombre que queremos al ejecutable

     mpicxx <archivo_fuente.cpp> -o <archivo_executable>

## Ejecutando los archivos

Para ejecutar los programas es necesario correr:

```sh
mpirun -np <nro_tareas> <archivo_executable>
```
