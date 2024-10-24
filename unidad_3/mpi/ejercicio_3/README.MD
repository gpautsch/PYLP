# ejercicio 3

## Enunciado

escribir un programa paralelo que encadene el envío y recepción de un mensaje, mensaje sera el rango (identificador) del proceso que envía.

el proceso sero debe enviar su nro. de rango al segundo, el segundo recibirá dicho mensaje y enviará otro al tercero, y así sucesivamente para todos los procesos lanzados.

Todo proceso que reciba un mensaje debe imprimirlo de la siguiente manera:

```
"Soy el proceso X y he recibido M",
```

siendo X el rango del proceso y M el mensaje recibido.

## Objetivos

- Aprender a usar `MPI_Send`.
- Aprender a usar `MPI_Recv`.
