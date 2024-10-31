 # Sprint 2 
 
 ## Entrega 2.3 Función Memoize
 
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-ISC-lightgrey)

## Descripción
Este proyecto implementa una función de memoización genérica en TypeScript y una CLI para calcular números de Fibonacci utilizando esta función de memoización.

## Estructura del Proyecto
- `memoize.ts`: Contiene la implementación de la función genérica `memoize`.
- `fibonacciCLI.ts`: Define una CLI que utiliza la función `memoize` para calcular números de Fibonacci.
- `memoizeFibo.ts`: Un script para calcular números de Fibonacci con memoización y mostrar los resultados en la consola.

## Configuración

### 1. Instalación de Dependencias
Ejecuta los siguientes comandos en la terminal para iniciar el proyecto y instalar las dependencias necesarias:

```
npm init -y
npm install typescript -D
npm install ts-node -D
npm install jest typescript ts-jest @types/jest -D
tsc --init
```

### 2. Pruebas
Para ejecutar las pruebas, utiliza el siguiente comando:
```
npm test
```

### 3. Uso de la CLI
Para calcular un número de Fibonacci usando la CLI, ejecuta el siguiente comando:
```
npm start fibonacci <n>
```
**Ejemplo para calcular Fibonacci de 10:**
```
npm start fibonacci 10
```
## Contribuciones
Las contribuciones son bienvenidas. Por favor, sigue los siguientes pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios necesarios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Envía tus cambios a la rama principal (`git push origin feature/nueva-funcionalidad`).
5. Crea un nuevo Pull Request.

## Licencia
Este proyecto está licenciado bajo la Licencia ISC.

## Autor
Leo Castaneda

 
