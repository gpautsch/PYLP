# Lineamientos y convenciones para la entrega de los ejercicios

En esta sección podrán encontrar los lineamientos y convenciones que se debe respetar al realizar distintas actividades referidas a las entregas de los ejercicios.

- Creación de Issues de tipo `epic` para aglutinar los ejercicios de las distintas unidades.

- Creación de Issues para cada ejercicio.

- Creación de la branch para resolver el ejercicio

- convencion de nombre de los archivos

- Convencion de nombre del Pull Request

Para la resolución de los ejercicios vamos a seguir un patron de 1-1-1-1

```
1 ejercicio -> 1 issue -> 1 archivo -> 1 pull request
```

## Issues

Los issues son los componentes que vamos a utilizar para representar tanto los trabajos practicos como los ejercicios de los mismos.

Los issues para los trabajos practicos, van a contener un label especial que será asignado por la cátedra, que se denomina `epic`.

> ⚠️ El momento de creación de los issues será consensuada con la cátedra para mantener limpio el repositorio en todo momento


## Creacion de issues

> 💡 Para crear un issue debe ir al [repositorio oficial de la catedra](https://github.com/PYLP-UNaM/PYLP). En la pestaña de [Issues](https://github.com/PYLP-UNaM/PYLP/issues). Click en el boton `New issue`.

## Creacion de issues para los ejercicios de un tema

Cada tema plantea una serie de ejercicios los cuales se deberán resolver y entregar a traves del mecanismo de PR.

Para ello será necesario que el alumno cree un issue por cada ejercicio planteado. Siguiendo las siguientes convenciones.

**Titulo**

```
Ejercicio <N> - <Apellido> <1erNombre>#(En caso que el apellido se repita)
```

**Descripcion** *\*opcional*
```
<Enunciado del ejercicio>
```

## Creacion de issues de tipo `epic` para cada TP

Cada issue de tipo `epic` aglutinará los ejercicios referidos un tema en concreto.

**Temas**

`TP1 (PascalFC), MPI, OpenMP, Haskell, Prolog`

**Titulo**

El titulo del issue deberá respetar la siguiente convención

```sh
TP <TEMA> - <Apellido> <1erNombre>#(En caso que el apellido se repita)
```

**Descripcion**

La descripción del issue sera un checklist de los ejercicios del tema correspondiente, que a su vez serán issues en el repositorio siguiendo las convenciones de la seccion correspondiente.

```
- [ ] #[ISSUE_ID] Ejercicio[N]
- [ ] #[ISSUE_ID] Ejercicio[N]
...
- [ ] #[ISSUE_ID] Ejercicio[N]
```

> 💡 Recuerde que la etiqueta `epic` sera asignada por el personal de catedra

## Creación de branch para la resolucion de ejercicios

La branch creada para resolver un ejercicio siempre debe tener como origen la rama `master`.

Se recomienda enfáticamente nombrar la rama siguiendo la siguiente convencion

```sh
tp<tema>_ej<nro>
```

con ello el comando para la creacion de rama quedaría:

``` bash
# asegurandonos siempre que partimos de master
git checkout -b tp<tema>_ej<nro>
```

## Nombres de archivo

Al resolver un ejercicio, se debera crear un archivo con el mismo nombre del archivo base o en su defecto con el nombre `ejercicio<n>`, seguido siempre de un guion bajo (`_`) y su apellido, en la ruta correspondiente

ejemplo:

`unidad_1/ejercicio_1/holamundo_<apellido>.pfc`
`unidad_1/ejercicio_1/ejercicio1_<apellido>.pfc`
.

## Mensaje de commit

En el mensaje de cada commit se debe expresar con claridad lo realizado, se puede seguir el siguiente ejemplo como formato:

`se soluciona el ejercicio 1 del tp1`.

## Pull request de los ejercicios

Para hacer pull request al repositorio oficial, es decir realizar la entrega de los ejercicios,  deben:

- [x] Haber realizado el ejercicio o solucion.
- [x] Haber realizado el commit de la solucion con su mensaje correspondiente.
- [x] Haber hecho push a su repositorio forkeado de la catedra. `git push origin tp1_ej1`.

Una vez completado la lista de acciones, deben:

1. Ir al repositorio oficial, a la pestaña de `Pull requests` y click en el boton `New pull request`.

2. Seleccionar como destino del Pull Request el repositorio `PYLP-UNaM/PYLP` y la rama `2020` y como origen su repositorio y la brach que posee la solucion del ejercicio. 

el pull request debera seguir la siguiente convencion:

**Titulo**

```sh
solucion Ejercicio <N> - <Apellido> <1erNombre>#(En caso que el apellido se repita)
```

**Descripcion** *\*opcional*
```
<Consideraciones relevantes>
```

## Revision de los ejercicios y cierre de los issues

Es posible que surgan sugerencias o comentarios en los PR a fin de mejorar el proceso de entrega de los ejercicios, por los que deben estar atentos a las devoluciones.

> ⚠️ En ningún caso el alumno debe marcar de manera manual alguna tarea como resuelta o cerrar los issues de manera manual. El cierre de los issues de los ejercicios se realizaran de manera automatica con las integraciones de los PR a la branch correspodiente.  

