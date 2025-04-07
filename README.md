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

## 🧩 Ejercicio 2 - Aplicación para vizualizar platillos tipicos y su información

### 📋 Descripción

Una aplicación móvil que permite visualizar diferentes platillos medianre el diseño responsiv con Flexbox, lo cual permite que tanto El HomeScreem como el DetailsScreem se muestren
correctamente a cualquier tamaño de la pantalla.

### 🛠️ Funcionalidades
-HomeScreem: visualizar las tarjetas que contienen el nombre, la imagen y una breve descripción del platillo
-DetailsScreem: visualizar la información como el nombre, descripción y los ingredientes de dicho platillo respectivamente luego de dar clic en la tarjeta del platillo


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


