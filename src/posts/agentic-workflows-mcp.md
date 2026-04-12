---
title: 'Agente, agente...'
cover: /assets/images/hal-9000.jpg
icon: file
order: 5
author: Leandro Gutierrez
date: 2026-04-05
category:
  - IA
tag:
  - Agentic Workflows
  - MCP
  - Architecture
sticky: true
star: true
disableCopy: true
---

La interfaz está cambiando, el browser deja de ser el centro del universo. Esto parece un pensamiento recurrente estos últimos meses.

> Dave Bowman: Open the pod bay doors, HAL.
>
> HAL 9000: I'm sorry, Dave. I'm afraid I can't do that.

<!-- more -->
## Agente, agente...
Hace un tiempo resuena en mi cabeza la idea de que la forma en que interactuamos con el software está cambiando. 

Para nosotros, los desarrolladores, este cambio ya es tangible: la forma en que pensamos, las herramientas que utilizamos y la manera en la que resolvemos problemas han cambiado.

Este nuevo ente llamado "agente" se ha convertido en nuestro centro gravitatorio y ha tomado el control de nuestro día a día.

¿Cuánto tiempo llevará para que esta dinámica se extienda más allá de nuestro ámbito? 

¿Pediremos a nuestro agente personal que busque en internet las mejores ofertas disponibles en los supermercados cercanos y que organice la entrega para la hora de llegada a casa? 

¿En breve seremos capaces de transferirle dinero a nuestro amigo, quién pagó la cena, pidiéndole a nuestro agente personal que acceda por nosotros y realice la transacción en nuestro home banking?

De forma sencilla, podemos decir que un agente es un bucle `for` que invoca recurrentemente a un modelo de lenguaje y que está provisto de una serie de herramientas para interactuar con su entorno. En cada iteración, este bucle verifica si el modelo le indica utilizar alguna herramienta o si debe devolver al cliente una respuesta final.

Un agente complejo se encarga de gestionar el contexto que es enviado al modelo: inyectando el prompt del sistema, decidiendo qué `skill` es relevante para la tarea a realizar o compactándolo una vez alcanzado el tamaño máximo permitido. Además, es capaz de instanciar subagentes y delegarles tareas específicas en paralelo mientras coordina la tarea general.

Tanto el agente principal como los subagentes interactúan con su entorno a través de herramientas o `tools`, mediante lo que se conoce como `tool_calling`. Si no me equivoco, el término `tool_calling` proviene del framework LangChain, donde esta abstracción permitía inyectarle al servicio la posibilidad de ejecutar código definido por el usuario. En estos nuevos agentes, las `tools` hoy van más allá del propio código del agente y le permiten interactuar con archivos locales, bases de datos o servidores externos.

## MCP
Hoy en día, las plataformas con las que interactuamos suelen brindar una aplicación que corre en nuestro navegador y un conjunto de APIs para comunicarse con el servidor remoto.

En esta nueva era, el agente será la interfaz con el cliente, mientras que las plataformas deberán proveer un set de herramientas para exponer su funcionalidad y el acceso a sus datos. Es aquí donde el protocolo MCP (Model Context Protocol) entra en juego: es la forma actual con la cual extendemos las capacidades iniciales de los agentes.

MCP es un protocolo estándar abierto que define cómo las aplicaciones operan sobre componentes externos. Básicamente, se encarga de estandarizar una arquitectura "cliente-servidor" entre el agente (el cliente MCP) y las plataformas a las que queremos que acceda (el servidor MCP).

Un servidor MCP expone de tres componentes clave:
- **Recursos (Resources):** Datos con formato similar a un archivo que el servidor expone de forma estática para que el agente los pueda leer (por ejemplo, la documentación de la empresa, métricas o el esquema de una base de datos).
- **Herramientas (Tools):** Funciones o tareas específicas orientadas a la acción que corren del lado del servidor y que el agente puede invocar libremente a voluntad.
- **Prompts:** Plantillas prediseñadas que ayudan a enviar instrucciones más precisas al LLM desde el cliente.

## Acomm
En pos de materializar de alguna forma estas ideas, me decidí a crear un agente personalizado con ayuda de Antigravity. 

Disponía de un servicio de juguete implementado para un round de entrevistas: una tienda de productos escrita en Golang. Debía crear la interfaz de usuario, el agente gestor y wrappear la aplicación de la tienda con un servidor MCP para habilitar la comunicación.

#### Descargá el repo
````bash
git clone https://github.com/leandrogutierrez148/acomm
````

#### Run

Asegurate de tener `docker` instalado y corriendo.

````bash
make up
````

Andá a `http://localhost:8501`

![agent workflow](/assets/images/acomm-agent.gif)

## Nota al pie: modelos como commodities

La forma en que interactuamos con la inteligencia artificial está cambiando. Ya no es solo un chatbot; ahora navega por vos, ejecuta acciones, sugiere decisiones de negocio, etc. Mientras esto sucede, comienza a proveerse un servicio hasta ahora desconocido: la inferencia en tiempo real; de esta forma, el modelo se convierte en un commodity. De repente hay un "layer" nuevo en la arquitectura cliente/servidor: **cliente/LLM/servidor**. El costo del procesamiento que antes recaía sobre las máquinas del proveedor, ahora recae sobre el modelo de inferencia y finalmente vuelve a ser pagado por el cliente.