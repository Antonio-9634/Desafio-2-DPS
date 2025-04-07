# 📱 Aplicaciones Móviles en React Native

Este repositorio contiene el desarrollo de dos ejercicios prácticos en React Native como parte de una actividad académica. El trabajo fue realizado por **Julissa Ventura** y **Antonio Herrera**.

## 🧩 Ejercicio 1 - Gestión de Citas para Taller Mecánico

### 📋 Descripción

Una aplicación móvil que permite registrar, visualizar, editar y eliminar citas en un taller mecánico. Los datos se almacenan de forma local utilizando `AsyncStorage` y se gestionan mediante una interfaz intuitiva y responsiva con Flexbox.

### 🛠️ Funcionalidades

- Registro de citas con los siguientes campos:
  - Nombre del cliente (mínimo 3 caracteres)
  - Modelo del vehículo
  - Fecha y hora de la cita (posteriores a la fecha actual)
  - Descripción opcional del problema
- Validación para evitar:
  - Citas duplicadas (misma fecha y vehículo)
- Visualización de citas en tarjetas con:
  - Nombre del cliente
  - Modelo del vehículo
  - Fecha y hora
- Eliminación de citas con confirmación previa
- Navegación entre pantallas con `React Navigation` (Stack Navigator):
  - Inicio
  - Agregar Cita
  - Editar Cita
- Diseño responsivo:
  - Una columna en vertical
  - Dos columnas en horizontal

---

## 🧪 Tecnologías Utilizadas

- React Native
- AsyncStorage
- React Navigation
- JavaScript
- Flexbox para diseño responsivo

---

## 👨‍💻 Autores

- **Antonio Herrera-FH240388** 
- **Julissa Ventura-VI241412**
---
