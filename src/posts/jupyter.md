---
# This is the title of the article
title: 'Jupyter Notebook: 3 opciones para trabajar localmente'
# You can customize cover image
cover: /assets/images/notebook-logo.png
# This is the icon of the page
icon: file
# This control sidebar order
order: 4
# Set author
author: Leandro Gutierrez
# Set writing time
date: 2024-06-27
# A page can have multiple categories
category:
  - BigData
# A page can have multiple tags
tag:
  - Ingenieria de datos
  - Python
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true

disableCopy: true
---
Jupyter Notebook es una herramienta poderosa y ampliamente utilizada en el ámbito de la ciencia e ingeniería de datos. En este post, te mostraré tres opciones diferentes para instalar y utilizar Jupyter localmente: la primera opción totalmente manual, la segunda mas sencilla utilizando Conda y por último a través de Visual Studio Code con la extensión de Jupyter.
<!-- more -->

## Introducción
### ¿Que es una notebook?
Una notebook es un documento colaborativo que combina codigo ejecutable, texto enriquecido, visualización de datos, una gran variedad gráficos y todo el poder de los lenguajes de análisis de datos mas usados: Python, R, Julia, Rust y otros.

Consta de celdas ordenadas que definen la estructura del documento, donde se alternan bloques de ejecución de codigo, bloques de resultados de las ejecuciones y bloques de texto enriquecido con Markdown.

Originalmente, si queríamos hacer un análisis por ejemplo de un dataset, teniamos que utilizar un approach basado en consola para poder ejecutar nuestro código, con lo que representa ir y volver del interprete para poder visualizar un dato o un gráfico en particular, ni hablar cuando lo que se intenta es transmitir una idea compleja. Esta estrategia se vuelve impracticable con la complejización del análisis.

### ¿Que es Jupyter Notebook?
Jupyter Notebook es una aplicación de redacción de notebooks, perteneciente al [Proyecto Jupyter](https://docs.jupyter.org/en/latest/). Ofrece las facilidades para crear codigo, compartir, explorar y visualizar datos, entre otros.

Jupyter Notebook provee una aplicación web para la creación y ejecución de nuestras notebooks. Permite escribir, ejecutar y mostrar los resultados de nuestros bloques de código. Hace las veces editor de texto, facilitando el resaltado de errores, la sugerencia de codigo y control de identación. El listado de features es enorme.

**Links de interes:**

[Jupyter Notebook](https://jupyter-notebook.readthedocs.io/en/latest/)

### ¿Que formato tiene una notebook?

Una notebook Jupyter son datos estructurados que represetan el código, la metadata, el contenido enriquecido y los resultados del código. Cuando se guarda en disco, la notebook usa la extensión `.ipynb`, y se estructura en formato `JSON`. Ver [the nbformat documentation](https://nbformat.readthedocs.io/en/latest/format_description.html).

![notebook-format.png](/assets/images/notebook-format.png)

### ¿Cómo se relacionan una notebook Jupyter, su kernel y un entorno virtual?

Antes de entrar en los detalles de la instalación, es importante entender cómo se relacionan la Jupyter notebook, el kernel y el entorno virtual (virtualenv):

- Jupyter notebook:
  - La interfaz de usuario que permite escribir y ejecutar código en celdas interactivas.

  - Envia código para su ejecución al kernel.

  - Recibe los resultados de la ejecución del código del kernel y los muestra al usuario.

- IPython:

  - IPython proporciona un conjunto de herramientas para ayudarte a aprovechar al máximo el uso interactivo de Python:

  - Proporciona un intérprete REPL interactivo.

  - Permite reveer el historico de entradas, persistente a través de sesiones.

  - Proporciona autocompletado, con soporte por defecto para la finalización de variables y palabras clave de Python, nombres de archivos y palabras clave de funciones.

  - Fácilmente integrable en otros programas y interfaces gráficas de usuario (GUIs) de Python.

  - Provee un Jupyter kernel (IPykernel) para trabajar con Python en nuestras notebooks y otros frontends interactivos.

- IPykernel: 

    - Todos los componentes de la arquitectura Jupyter interactuan con el kernel.

    - IPykernel es un proceso separado el cual es responsable de ejecutar el codigo y otras de características como las sugerencias de autocompletado.

    - Mantiene el estado de la sesión de ejecución, incluyendo variables y contextos.

    - Devuelve los resultados de la ejecución del código al notebook.

    - Si el kernel es creado mientras un entorno virtual está activado, éste utilizará los paquetes de virtualenv. Esta es una buena manera de tener nuestros kernels aislados unos de otros.

- Virtual environment:

  - Proporciona un entorno aislado donde se pueden instalar paquetes y dependencias específicas sin afectar al sistema global.

  - El kernel, si fué creado dentro de un virtualenv, utiliza los paquetes y dependencias del entorno.

![notebook-arch.png](/assets/images/notebook-arch.png)

Para ejecutar código de manera interactiva, la notebook debe enviar la petición de ejecución al kernel quien se encargará del procesamiento y disposición de los resultados. A su vez es el kernel el encargado de mantener los estados de las variables declaradas durante la sesión de la notebook.

La notebook, jupyter_server y el kernel se comunican a través de un protocolo específico utilizando sockets ZeroMQ.

Jupyter Notebook y otros frontends automaticamente aseguran que IPython kernel está disponible. Sin embargo, si quieres usar otro kernel con una versión de python diferente, o en un entorno virtualenv o conda específico,  vas a necesitar crearlos manualmente.

**Links de interes:**

[Jupyter architecture](https://docs.jupyter.org/en/latest/projects/architecture/content-architecture.html)

[IPykernel](https://ipython.readthedocs.io/en/stable/install/kernel_install.html)

<iframe src="https://leandrogutierrez148.substack.com/embed" width="770" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>

### Prerequisitos generales

Tener instalado Python: puedes descargarlo desde python.org.

## Opcion Chuck Norris: entirely manual with pip

Crear un Entorno Virtual: crea un entorno virtual para aislar tu instalación de Jupyter y sus dependencias
```python
python -m venv .venv
```

Activar el Entorno Virtual: activa el entorno virtual recién creado
```python
source .venv/bin/activate
```

Instalar Jupyter: instala Jupyter en el virtualenv utilizando pip
```python
pip install jupyter
````

Instalar ipykernel: para gestionar los kernels, instala ipykernel
```python
pip install ipykernel
```

Crear un Kernel: crea un kernel que apunte a tu entorno virtual
```python
python -m ipykernel install --user --name kernel-1 --display-name "Kernel 1"
```

::: tip
Observación: puedes listar los kernels existentes ejecutando
```python
jupyter kernelspec list
```


::: tip
Observación: puedes eliminar kernels ejecutando
```python
jupyter kernelspec uninstall python3
```

Este comando es muy interesante, ya que nos muestra cuales y donde estan alojados los kernel que vamos creando.
:::

Ejecutar Jupyter Notebook: inicia Jupyter Notebook
```python
jupyter notebook
```

Esto abrirá Jupyter en tu navegador predeterminado en la dirección http://localhost:8888/tree
![notebook-view.png](/assets/images/notebook-view.png)

## Opción Steve Irwin: utilizando Conda 

Jupyter viene preinstalado con Conda, por lo que es la opción recomendada por los desarrolladores Jupyter para comenzar a trabajar.

Instalar Conda: descarga e instala Anaconda o Miniconda desde el [sitio oficial](https://www.anaconda.com/download).

Crear un Entorno con Conda: crea y activa un nuevo entorno con Conda
```python
conda create --name mi_entorno
conda activate mi_entorno
```

Ejecutar Jupyter Notebook: inicia Jupyter Notebook
```python
jupyter notebook
```

(Opcional) Instalar ipykernel: instala ipykernel si necesitas manejar múltiples kernels
```python
conda install ipykernel
```

## Opción helado de limón: vs-code extension

Visual Studio Code uno de los IDEs de programación más utilizados tambien se hizo eco de la necesidad de integrar notebooks a su interfaz de desarrollo, es por ello que Microsoft creó una extensión que permite crear, administrar y ejecutar notebooks. 

#### Prerequisitos

Tener instalado vs-code: descarga e instala Visual Studio Code desde el [sitio oficial](https://code.visualstudio.com/).

Instalar la Extensión de Python: puedes instalarlo desde el [Marketplace de Visual Studio](https://marketplace.visualstudio.com/items?itemName=ms-python.python).

Instalar la Extensión de Jupyter: instala la extensión desde el [Marketplace de Visual Studio](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter).

OBS: Posiblemente necesites instalar ipykernel para crear y gestionar tus kernels de ejecución.

**Links de interes**

[vs-code + jupyter](https://code.visualstudio.com/docs/datascience/jupyter-notebooks)

<iframe src="https://leandrogutierrez148.substack.com/embed" width="770" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>