import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as t,c as i,d as p,a as n,b as r,e as l,f as s}from"./app-683db0d6.js";const c="/assets/images/airflow-view.png",u="/assets/images/airflow-arch.png",d="/assets/images/airflow-dag.png",m={},k=n("p",null,"Algunas de las funciones principales de un ingeniero de datos son el obtener, transformar y mover información de un punto a otro, sumado esto a las impactantes cantidades de datos que son generadas en la actualidad, se torna imprecindible la estandarización en la definición, implementacion y administración de estos flujos de trabajo, o como solemos llamarles pipelines, compreden un set de tareas a ejecutarse en un cierto orden y con una determinada frecuencia.",-1),g=s('<p>Cuando se trata de agendar tareas programadas quizás lo primero que llega a nuestra mente es el famoso servicio Cron de los sistemas Unix, el cual periodicamente y de manera desatendida despierta para ejecutar las tareas que le hayan sido asignadas. Los tiempos modernos arribaron y las necesidades de facilitar el desarrollo, despliegue y monitoreo de nuestras flujos de trabajo arribaron con ellos. Hoy daremos un vistazo a Apache Airflow y sus conceptos clave.</p><h2 id="airflow" tabindex="-1"><a class="header-anchor" href="#airflow" aria-hidden="true">#</a> Airflow</h2><p>Airflow, es una plataforma open-source que permite desarrollar, agendar y monitorear tareas programadas, o como ellos mismos se denominan <strong>un orquestador de flujos de trabajo orientado a procesos batch</strong>. Desarrollado en Python, Airflow provee un framework para crear nuestras propios flujos de trabajo (<strong>Workflows</strong>), cuenta además con una amplia gama de integraciones con diversos sistemas, algunos oficiales y otros desarrollados por terceros, los cuales resuelven la mayoría de los casos de uso común.</p><p>Al ser un framework de programación cuenta con las siguientes ventajas:</p><ul><li>Los <strong>Workflows</strong> pueden ser versionados y controlados con herramientas como Git, permitiendo trabajar de manera colaborativa y en simultaneo.</li><li>Se pueden escribir <strong>Tests</strong> para validaciones.</li><li>Los componentes son extensibles y podemos desarrollar nuestra propias implementaciones.</li></ul><figure><img src="'+c+'" alt="airflow-view.png" tabindex="0" loading="lazy"><figcaption>airflow-view.png</figcaption></figure><h3 id="arquitectura" tabindex="-1"><a class="header-anchor" href="#arquitectura" aria-hidden="true">#</a> Arquitectura</h3><p>Su arquitecutra distribuida comprende multiples componentes:</p><ul><li><strong>Scheduler</strong>: es el encargado de lanzar los workflows programados y de coordinar cada una de las tareas que se deben ejecutar.</li><li><strong>WebUI</strong>: interfaz de monitoreo, lanzamineto y debugueo de nuestros DAGs.</li><li><strong>Worker</strong>: es quien efectivamente realiza las tareas provistas por el Scheduler. En instalaciones básicas es parte del Scheduler.</li><li><strong>DAGs folder</strong>: carpeta leida por el Scheduler para levantar y agendar las tareas.</li><li><strong>Metadata database</strong>: en ella Airflow almacena los estados de las ejecuciones y otros metadatos.</li></ul><figure><img src="'+u+'" alt="airflow-arch.png" tabindex="0" loading="lazy"><figcaption>airflow-arch.png</figcaption></figure><p>Existen otros componentes opcionales que pueden ser habilitados para mejorar escalabilidad y performance del stack:</p><ul><li><strong>Triggerer</strong></li><li><strong>Dag processor</strong></li><li><strong>Plugins folder</strong></li></ul>',12),v={href:"https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/overview.html#optional-components",target:"_blank",rel:"noopener noreferrer"},b=s('<h3 id="workflow" tabindex="-1"><a class="header-anchor" href="#workflow" aria-hidden="true">#</a> Workflow</h3><p>El concepto <strong>Workflow</strong> es modelado como un <strong>DAG</strong> (Grafo Asiclico Direccionado), es decir no forma bucles y su final de ejecución está garantizado. Cada nodo del grafo se representa una tarea a realizar. Estos <strong>Tasks</strong> pueden ser componentes estandares, llamados <strong>Operators</strong>, como un HttpApiCliente o BashExecutor; o bien pueden ser funciones Python definidas por el usuario, con la flexibilidad casi infinita que eso implica.</p><p>Un <strong>DAG</strong> define las dependencias entre nuestros <strong>Tasks</strong> y la secuencia de ejecución de los mismos. Mientras que un <strong>Task</strong> define que se está haciendo.</p><figure><img src="'+d+`" alt="airflow-dag.png" tabindex="0" loading="lazy"><figcaption>airflow-dag.png</figcaption></figure><h3 id="declarando-nuestro-dag" tabindex="-1"><a class="header-anchor" href="#declarando-nuestro-dag" aria-hidden="true">#</a> Declarando nuestro DAG</h3><p>Existen múltiples maneras de declarar nuestro DAG:</p><ul><li>Utilizando el <strong>Context Manager</strong>, el cual inyectará el DAG a cualquiera de las tareas definidas dentro del contexto:</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> datetime

<span class="token keyword">from</span> airflow <span class="token keyword">import</span> DAG
<span class="token keyword">from</span> airflow<span class="token punctuation">.</span>operators<span class="token punctuation">.</span>empty <span class="token keyword">import</span> EmptyOperator

<span class="token keyword">with</span> DAG<span class="token punctuation">(</span>
    dag_id<span class="token operator">=</span><span class="token string">&quot;dag_id&quot;</span><span class="token punctuation">,</span>
    start_date<span class="token operator">=</span>datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">(</span><span class="token number">2021</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    schedule<span class="token operator">=</span><span class="token string">&quot;@daily&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">:</span>
    EmptyOperator<span class="token punctuation">(</span>task_id<span class="token operator">=</span><span class="token string">&quot;task&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Inyectando el DAG en cada instanciación de una tarea mediante el <strong>Constructor standard</strong> :</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> datetime

<span class="token keyword">from</span> airflow <span class="token keyword">import</span> DAG
<span class="token keyword">from</span> airflow<span class="token punctuation">.</span>operators<span class="token punctuation">.</span>empty <span class="token keyword">import</span> EmptyOperator

my_dag <span class="token operator">=</span> DAG<span class="token punctuation">(</span>
    dag_id<span class="token operator">=</span><span class="token string">&quot;dag_id&quot;</span><span class="token punctuation">,</span>
    start_date<span class="token operator">=</span>datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">(</span><span class="token number">2021</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    schedule<span class="token operator">=</span><span class="token string">&quot;@daily&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
EmptyOperator<span class="token punctuation">(</span>task_id<span class="token operator">=</span><span class="token string">&quot;task&quot;</span><span class="token punctuation">,</span> dag<span class="token operator">=</span>my_dag<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Utilizando el <strong>@dag decorator</strong>, el cual convierte una funcion en un generador de DAGs:</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> datetime

<span class="token keyword">from</span> airflow<span class="token punctuation">.</span>decorators <span class="token keyword">import</span> dag
<span class="token keyword">from</span> airflow<span class="token punctuation">.</span>operators<span class="token punctuation">.</span>empty <span class="token keyword">import</span> EmptyOperator

<span class="token decorator annotation punctuation">@dag</span><span class="token punctuation">(</span>start_date<span class="token operator">=</span>datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">(</span><span class="token number">2021</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> schedule<span class="token operator">=</span><span class="token string">&quot;@daily&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">generate_dag</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    EmptyOperator<span class="token punctuation">(</span>task_id<span class="token operator">=</span><span class="token string">&quot;task&quot;</span><span class="token punctuation">)</span>


generate_dag<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tasks" tabindex="-1"><a class="header-anchor" href="#tasks" aria-hidden="true">#</a> Tasks</h3><p>Asimismo existen tres formas de definir un <strong>Task</strong>:</p><ul><li><strong>Operators</strong>: casos de uso común que se standarizaron para facilitar nuestro trabajo. Muchos de ellos vienen integrados, otros son desarrollados por terceras partes y deben ser instalados como dependencias. Ejemplos: <ul><li>HttpOperator</li><li>MySqlOperator</li><li>PostgresOperator</li><li>SlackAPIOperator</li></ul></li><li><strong>Sensors</strong>: son una subclase especial de <strong>Operators</strong> que funcionan como hooks asícronos.</li><li><strong>Taskflow API</strong>: funciones Python decoradas con <em>@Task</em> decorator</li></ul><p>Tras bambalinas todas son subclases de <strong>BaseOperator</strong>, por lo tanto los conceptos de <strong>Task</strong> y <strong>Operator</strong> son intercambiables.</p><p>Por ejemplo si quisieramos checkear el estado de una API podriamos utilizar un SimpleHttpOperator, componente base distribuido por la plataforma, o podemos desarrollar nuestra propia función en Python en la cual hacemos uso del paquete <em>requests</em>, ambos caminos son validos.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">with</span> DAG<span class="token punctuation">(</span>
    dag_id<span class="token operator">=</span><span class="token string">&#39;check_api&#39;</span><span class="token punctuation">,</span>
    start_date<span class="token operator">=</span>datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">(</span><span class="token number">2021</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    schedule_interval<span class="token operator">=</span><span class="token string">&#39;@daily&#39;</span><span class="token punctuation">,</span>
    max_active_runs<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>
    catchup<span class="token operator">=</span><span class="token boolean">False</span>
<span class="token punctuation">)</span> <span class="token keyword">as</span> dag<span class="token punctuation">:</span>
    task_http_sensor_check <span class="token operator">=</span> SimpleHttpOperator<span class="token punctuation">(</span>
        task_id<span class="token operator">=</span><span class="token string">&quot;http_sensor_check&quot;</span><span class="token punctuation">,</span>
        http_conn_id<span class="token operator">=</span><span class="token string">&quot;api-conn&quot;</span><span class="token punctuation">,</span>
        endpoint<span class="token operator">=</span><span class="token string">&quot;/ping&quot;</span><span class="token punctuation">,</span>
        method<span class="token operator">=</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span>
        dag<span class="token operator">=</span>dag<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>

    task_http_sensor_check
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@dag</span><span class="token punctuation">(</span>
    dag_id<span class="token operator">=</span><span class="token string">&#39;check_api&#39;</span><span class="token punctuation">,</span>
    start_date<span class="token operator">=</span>datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">(</span><span class="token number">2021</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    schedule_interval<span class="token operator">=</span><span class="token string">&#39;@daily&#39;</span><span class="token punctuation">,</span>
    max_active_runs<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>
    catchup<span class="token operator">=</span><span class="token boolean">False</span>
<span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">check_api</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@task</span><span class="token punctuation">(</span>retries<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> retry_delay<span class="token operator">=</span>timedelta<span class="token punctuation">(</span>seconds<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> retry_exponential_backoff<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">check_api_task</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        conn <span class="token operator">=</span> Connection<span class="token punctuation">.</span>get_connection_from_secrets<span class="token punctuation">(</span><span class="token string">&quot;api-conn&quot;</span><span class="token punctuation">)</span>
        endpoint <span class="token operator">=</span> <span class="token string">&#39;/ping&#39;</span>

        url <span class="token operator">=</span> conn<span class="token punctuation">.</span>get_uri<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> endpoint

        r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
        <span class="token keyword">if</span> r<span class="token punctuation">.</span>ok<span class="token punctuation">:</span>
            msg <span class="token operator">=</span> <span class="token string">&#39;Success&#39;</span>
            logging<span class="token punctuation">.</span>info<span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
            <span class="token keyword">return</span> r<span class="token punctuation">.</span>text
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            msg <span class="token operator">=</span> <span class="token string">&#39;Error&#39;</span>
            logging<span class="token punctuation">.</span>warning<span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
            <span class="token keyword">raise</span> AirflowException<span class="token punctuation">(</span>msg<span class="token punctuation">)</span>

    check_api_task<span class="token punctuation">(</span><span class="token punctuation">)</span>


check_api<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="control-de-flujo" tabindex="-1"><a class="header-anchor" href="#control-de-flujo" aria-hidden="true">#</a> Control de flujo</h3><p>El flujo de ejecución de nuestro <strong>DAG</strong> se definen mediante el seteo de dependencias <em>upstreams</em> y <em>downstrems</em>. Conviven hoy dos maneras de definir estas dependencias, la primera mediante el uso de los operadores <strong>&gt;&gt;</strong> y <strong>&lt;&lt;</strong>, y la segunda con los metodos <strong>set_upstream</strong> y <strong>set_downstream</strong>.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>first_task <span class="token operator">&gt;&gt;</span> <span class="token punctuation">[</span>second_task<span class="token punctuation">,</span> third_task<span class="token punctuation">]</span>
third_task <span class="token operator">&lt;&lt;</span> fourth_task
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>O bien:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>first_task<span class="token punctuation">.</span>set_downstream<span class="token punctuation">(</span><span class="token punctuation">[</span>second_task<span class="token punctuation">,</span> third_task<span class="token punctuation">]</span><span class="token punctuation">)</span>
third_task<span class="token punctuation">.</span>set_upstream<span class="token punctuation">(</span>fourth_task<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Estas dependencias representan las <em>aristas</em> en nuestros grafos y definen el orden en que Airflow ejecutará las tareas. Por defecto un Task esperará que todos sus <em>upstreams</em> se ejecuten correctamente antes de correr (este comportamiento puede modificarse según necesitemos).</p><p>Un punto importante en Airflow es que no es una plataforma de ETL, sino como mencionamos anteriormente es un gestor de cargas de trabajo, por lo que no está diseñado para intercambiar grandes volumenes de datos entre tareas. Esto debe ser tenido en cuenta al momento de programar nuestros DAGs.</p><p>Para intercambiar información entre nuestras Tasks se emplean tres metodos:</p><ul><li>XComs (Cross-communications): mecanismo por el cual nuestras tareas envian y reciben pequeños bloques de información.</li><li>Servicios de almacenamiento externo: es la mejor manera de intercambiar grandes volumenes de información, cada tarea debe encargarse de pullear y pushear la información que desea procesar o transferir.</li><li>TaskFlow: la API automaticamente inyecta la salida de nuestro Task a la siguiente etapa, haciendo uso de XComs implícitos. De nuevo no es recomendado para grandes volumenes de datos.</li></ul><h3 id="casos-de-uso" tabindex="-1"><a class="header-anchor" href="#casos-de-uso" aria-hidden="true">#</a> Casos de uso</h3><p>Airflow está pensado para tareas <strong>batch</strong> asíncronas Los casos de uso mas común son:</p><ul><li>Checkeos de tipo keep-alive</li><li>Controles de calidad de datos</li><li>Pre agregaciones</li><li>Ejecutar acciones remotas contra un servicio</li></ul>`,31);function f(h,y){const a=o("ExternalLinkIcon");return t(),i("div",null,[k,p(" more "),g,n("p",null,[n("a",v,[r("componentes opcionales"),l(a)])]),b])}const q=e(m,[["render",f],["__file","airflow.html.vue"]]);export{q as default};