---
title: 'Agentes y MCP'
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

La interfaz está cambiando, el browser deja de ser el centro del universo. Ésto parece un pensamiento recurrente estos últimos meses.
Llegó HAL 9000.
<!-- more -->

## Modelos como commodities.

La forma en que interactuamos con la inteligencia artificial está cambiando. Ya no es solo un chatbot, ahora navega por vos, ejecuta acciones, sugiere decisiones de negocio, etc, etc. Mientras esto sucede, se comienza a proveer un servicio hasta ahora desconocido, la inferencia en tiempo real. El modelo se convierte en un commodity. De repente hay un "layer" nuevo en la arquitectura cliente/servidor, **cliente/modelo/servidor**. El procesamiento que pagaba el cliente y recaía sobre las maquinas del proveedor, ahora recae sobre el modelo de inferencia y es pagada en sengunda instancia tambien por el cliente.

## Acomm

LSS: tenia un servicio de juguete que habia hecho para un round de entrevistas: el esqueleto de una tienda de productos escrita en golang, con acceso a una db y con un echo sirviendo http. Descargo antigravity, y entro en mood. Todo lo que siempre quise, dictar como irían las cosas y ver proyectado ese deseo en minutos sin hacer esfuerzo. Podía invertir tiempo sin apuros en arquitectura, abstracciones, patrones, cuestiones filosóficas sin fin. El agente se encarga de implementarlo.

````bash
git clone https://github.com/leandrogutierrez148/acomm
````

![agent workflow](/assets/images/acomm-agent.gif)

