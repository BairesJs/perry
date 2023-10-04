(function(){const y=document.createElement("link").relList;if(y&&y.supports&&y.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))C(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const b of h.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&C(b)}).observe(document,{childList:!0,subtree:!0});function f(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function C(d){if(d.ep)return;d.ep=!0;const h=f(d);fetch(d.href,h)}})();L();function L(){const E=()=>{let r=document.createElement("div");r.id="mydiv";let o=document.createElement("img");o.id="img-logo",o.src="img/svg/logos/logo-perro.svg",r.appendChild(o);let s=document.createElement("div");s.id="myDiv2",s.innerHTML=`
        
    <br>&#160;&#160;&#160;&#160;
    <a id="whatsapp" style = "text-decoration: none;" href="https://api.whatsapp.com/send?phone=1125804781">
    <img  src="img/svg/contacto/whatsapp-80.svg" alt="whatsapp" style="width: 40px; height: auto;"></a>
    &#160;&#160;&#160;&#160;
    <a href="https://www.instagram.com/joelfercab/" style="text-decoration: none;">
    <img src="img/svg/contacto/instagram-80.svg" alt="Instagram" width="100" style="width: 40px; height: auto;">
    </a>
    
    `,r.appendChild(s),document.body.appendChild(r)},y=()=>{var r=document.createElement("div");r.id="myDivNav",document.body.appendChild(r);var o=document.createElement("div");o.className="mydivClass",o.id="btnInicio",o.innerHTML="Honda",r.appendChild(o),document.getElementById("btnInicio").addEventListener("click",()=>{C()});var s=document.createElement("div");s.className="mydivClass",s.id="btnQsomos",s.innerHTML="Yamaha",r.appendChild(s),document.getElementById("btnQsomos").addEventListener("click",()=>{d()});var m=document.createElement("div");m.className="mydivClass",m.id="btnDescargas",m.innerHTML="Suzuki",r.appendChild(m),document.getElementById("btnDescargas").addEventListener("click",()=>{h()});var u=document.createElement("div");u.className="mydivClass",u.id="btnContacto",u.innerHTML="Benelli",r.appendChild(u),document.getElementById("btnContacto").addEventListener("click",()=>{b()});var p=document.createElement("div");p.className="mydivClass",p.id="btnCascos",p.innerHTML="cascos",r.appendChild(p),document.getElementById("btnCascos").addEventListener("click",()=>{S()});var v=document.createElement("div");v.className="mydivClass",v.id="btnAuricular",v.innerHTML="Auriculares",r.appendChild(v),document.getElementById("btnAuricular").addEventListener("click",()=>{w()})},f=()=>{let r=document.createElement("div");r.id="myDivNav2",r.innerHTML=`
    <div class = "marcoDivNav2">
    "Perry Accesorios y Repuestos, nació como un servicio de entrega de comidas rápidas y ha evolucionado
    para atender las necesidades de nuestros compañeros motociclistas. <br>
    Nos dedicamos a brindar una amplia gama de accesorios y repuestos para motos, comprometidos
    en ofrecer soluciones que enriquezcan la experiencia de conducción y seguridad de quienes comparten
    nuestra pasión por las dos ruedas."
    </div>
  `,document.body.appendChild(r)},C=()=>{document.querySelector("#myDivNav2").innerHTML=`
    <div class = "marcoDivNav2">
                            <select id="contacto">
                            <option value="">Seleccionar Artículo</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div>
                            <div>
                            `,document.querySelector("#idCatalogo").innerHTML=`                    
                  
                    
                    <div class="container">
                    <div id="cards-container"></div>
                    <br>
                    <div class="row" id="items"></div>

                    <template id="template-card">
                        <div class="col-12 mb-2 col-md-4">
                            <div class="card">
                                    <img src="" alt="" class="img-card-top">
                                            <div class="card-body">
                                                <h5>Titulo</h5>
                                                <p>precio</p>
                                                <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
                                            </div>
                            </div>
                        </div>
                    </template>
                    </div>
                   
  `;const r=document.getElementById("items"),o=document.getElementById("template-card").content,s=document.createDocumentFragment(),m=async()=>{try{const t=await(await fetch("catalogo/mensula.json")).json();u(t)}catch(e){console.log(e)}},u=e=>{e.forEach(t=>{o.querySelector("h5").textContent=t.title,o.querySelector("p").textContent=t.precio,o.querySelector("img").setAttribute("src",t.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=t.id;const i=o.cloneNode(!0);s.appendChild(i)}),r.appendChild(s)};m();async function p(){const e=document.querySelector("#contacto"),t=document.querySelector("#idCatalogo");if(!e.value){t.textContent="";return}try{const n=await(await fetch("catalogo/mensula.json")).json(),g=e.value.toLowerCase(),l=n.filter(c=>c.title.toLowerCase()===g);l.length>0?(t.innerHTML="",l.forEach(c=>{t.innerHTML+=`
         <div style="display: grid; place-content: center;">

         <h5> Título: ${c.title}</h5>
          <p><h5> Precio: ${c.precio}</h5></p>
          <img src="${c.thumbnailUrl}">
          <br>
          
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
                                           
          
          </div>
        `})):t.textContent="No se encontraron resultados."}catch(a){console.error("Error al cargar el archivo JSON:",a)}}async function v(){const e=document.getElementById("contacto");try{(await(await fetch("catalogo/mensula.json")).json()).forEach(a=>{const n=document.createElement("option");n.value=a.title,n.textContent=a.title,e.appendChild(n)}),e.addEventListener("change",p)}catch(t){console.error("Error al cargar el archivo JSON:",t)}}v()},d=()=>{document.querySelector("#myDivNav2").innerHTML=`
    <div class = "marcoDivNav2">
                            <select id="contacto">
                            <option value="">Seleccionar Artículo</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div> 
                            </div>
                            `,document.querySelector("#idCatalogo").innerHTML=`                    
                                    
                    
                    <div class="container">
                    <div id="cards-container"></div>
                    <br>
                    <div class="row" id="items"></div>

                    <template id="template-card">
                        <div class="col-12 mb-2 col-md-4">
                            <div class="card">
                                    <img src="" alt="" class="img-card-top">
                                            <div class="card-body">
                                                <h5>Titulo</h5>
                                                <p>precio</p>
                                                <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
                                           
                                            </div>
                            </div>
                        </div>
                    </template>
                    </div>
  `;const r=document.getElementById("items"),o=document.getElementById("template-card").content,s=document.createDocumentFragment(),m=async()=>{try{const t=await(await fetch("catalogo/escritorio.json")).json();u(t)}catch(e){console.log(e)}},u=e=>{e.forEach(t=>{o.querySelector("h5").textContent=t.title,o.querySelector("p").textContent=t.precio,o.querySelector("img").setAttribute("src",t.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=t.id;const i=o.cloneNode(!0);s.appendChild(i)}),r.appendChild(s)};m();async function p(){const e=document.querySelector("#contacto"),t=document.querySelector("#idCatalogo");if(!e.value){t.textContent="";return}try{const n=await(await fetch("catalogo/escritorio.json")).json(),g=e.value.toLowerCase(),l=n.filter(c=>c.title.toLowerCase()===g);l.length>0?(t.innerHTML="",l.forEach(c=>{t.innerHTML+=`
         <div style="display: grid; place-content: center;">
         
          <h5> Título: ${c.title}</h5>
          <p><h5> Precio: ${c.precio}</h5></p>
          <img src="${c.thumbnailUrl}">
          
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
        
          </div>
        `})):t.textContent="No se encontraron resultados."}catch(a){console.error("Error al cargar el archivo JSON:",a)}}async function v(){const e=document.getElementById("contacto");try{(await(await fetch("catalogo/escritorio.json")).json()).forEach(a=>{const n=document.createElement("option");n.value=a.title,n.textContent=a.title,e.appendChild(n)}),e.addEventListener("change",p)}catch(t){console.error("Error al cargar el archivo JSON:",t)}}v()},h=()=>{document.querySelector("#myDivNav2").innerHTML=`
    <div class = "marcoDivNav2">
                            <select id="contacto">
                            <option value="">Seleccionar Artículo</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div>
                            </div>
                            `,document.querySelector("#idCatalogo").innerHTML=`                    
                                    
                    
                    <div class="container">
                    <div id="cards-container"></div>
                    <br>
                    <div class="row" id="items"></div>

                    <template id="template-card">
                        <div class="col-12 mb-2 col-md-4">
                            <div class="card">
                                    <img src="" alt="" class="img-card-top">
                                            <div class="card-body">
                                                <h5>Titulo</h5>
                                                <p>precio</p>
                                                <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
                                           
                                            </div>
                            </div>
                        </div>
                    </template>
                    </div>
  `;const r=document.getElementById("items"),o=document.getElementById("template-card").content,s=document.createDocumentFragment(),m=async()=>{try{const t=await(await fetch("catalogo/ratona.json")).json();u(t)}catch(e){console.log(e)}},u=e=>{e.forEach(t=>{o.querySelector("h5").textContent=t.title,o.querySelector("p").textContent=t.precio,o.querySelector("img").setAttribute("src",t.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=t.id;const i=o.cloneNode(!0);s.appendChild(i)}),r.appendChild(s)};m();async function p(){const e=document.querySelector("#contacto"),t=document.querySelector("#idCatalogo");if(!e.value){t.textContent="";return}try{const n=await(await fetch("catalogo/ratona.json")).json(),g=e.value.toLowerCase(),l=n.filter(c=>c.title.toLowerCase()===g);l.length>0?(t.innerHTML="",l.forEach(c=>{t.innerHTML+=`
         <div style="display: grid; place-content: center;">
        
          <h5> Título: ${c.title}</h5>
          <p><h5> Precio: ${c.precio}</h5></p>
          <img src="${c.thumbnailUrl}">
          
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
          
          </div>
        `})):t.textContent="No se encontraron resultados."}catch(a){console.error("Error al cargar el archivo JSON:",a)}}async function v(){const e=document.getElementById("contacto");try{(await(await fetch("catalogo/ratona.json")).json()).forEach(a=>{const n=document.createElement("option");n.value=a.title,n.textContent=a.title,e.appendChild(n)}),e.addEventListener("change",p)}catch(t){console.error("Error al cargar el archivo JSON:",t)}}v()},b=()=>{document.querySelector("#myDivNav2").innerHTML=`
    <div class = "marcoDivNav2">
                            <select id="contacto">
                            <option value="">Seleccionar Artículo</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div>
                            </div>
                            `,document.querySelector("#idCatalogo").innerHTML=`                    
                                    
                    
                    <div class="container">
                    <div id="cards-container"></div>
                    <br>
                    <div class="row" id="items"></div>

                    <template id="template-card">
                        <div class="col-12 mb-2 col-md-4">
                            <div class="card">
                                    <img src="" alt="" class="img-card-top">
                                            <div class="card-body">
                                                <h5>Titulo</h5>
                                                <p>precio</p>
                                                <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
                                           
                                            </div>
                            </div>
                        </div>
                    </template>
                    </div>
  `;const r=document.getElementById("items"),o=document.getElementById("template-card").content,s=document.createDocumentFragment(),m=async()=>{try{const t=await(await fetch("catalogo/varios.json")).json();u(t)}catch(e){console.log(e)}},u=e=>{e.forEach(t=>{o.querySelector("h5").textContent=t.title,o.querySelector("p").textContent=t.precio,o.querySelector("img").setAttribute("src",t.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=t.id;const i=o.cloneNode(!0);s.appendChild(i)}),r.appendChild(s)};m();async function p(){const e=document.querySelector("#contacto"),t=document.querySelector("#idCatalogo");if(!e.value){t.textContent="";return}try{const n=await(await fetch("catalogo/varios.json")).json(),g=e.value.toLowerCase(),l=n.filter(c=>c.title.toLowerCase()===g);l.length>0?(t.innerHTML="",l.forEach(c=>{t.innerHTML+=`
         <div style="display: grid; place-content: center;">
        
          <h5> Título: ${c.title}</h5>
          <p><h5> Precio: ${c.precio}</h5></p>
          <img src="${c.thumbnailUrl}">
          
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
        
          </div>
        `})):t.textContent="No se encontraron resultados."}catch(a){console.error("Error al cargar el archivo JSON:",a)}}async function v(){const e=document.getElementById("contacto");try{(await(await fetch("catalogo/varios.json")).json()).forEach(a=>{const n=document.createElement("option");n.value=a.title,n.textContent=a.title,e.appendChild(n)}),e.addEventListener("change",p)}catch(t){console.error("Error al cargar el archivo JSON:",t)}}v()},S=()=>{document.querySelector("#myDivNav2").innerHTML=`
    <div class = "marcoDivNav2">
                            <select id="contacto">
                            <option value="">Seleccionar Artículo</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div>
                            </div>
                            `,document.querySelector("#idCatalogo").innerHTML=`                    
                                    
                    
                    <div class="container">
                    <div id="cards-container"></div>
                    <br>
                    <div class="row" id="items"></div>

                    <template id="template-card">
                        <div class="col-12 mb-2 col-md-4">
                            <div class="card">
                                    <img src="" alt="" class="img-card-top">
                                            <div class="card-body">
                                                <h5>Titulo</h5>
                                                <p>precio</p>
                                                <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
                                           
                                            </div>
                            </div>
                        </div>
                    </template>
                    </div>
  `;const r=document.getElementById("items"),o=document.getElementById("template-card").content,s=document.createDocumentFragment(),m=async()=>{try{const t=await(await fetch("catalogo/cascos.json")).json();u(t)}catch(e){console.log(e)}},u=e=>{e.forEach(t=>{o.querySelector("h5").textContent=t.title,o.querySelector("p").textContent=t.precio,o.querySelector("img").setAttribute("src",t.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=t.id;const i=o.cloneNode(!0);s.appendChild(i)}),r.appendChild(s)};m();async function p(){const e=document.querySelector("#contacto"),t=document.querySelector("#idCatalogo");if(!e.value){t.textContent="";return}try{const n=await(await fetch("catalogo/cascos.json")).json(),g=e.value.toLowerCase(),l=n.filter(c=>c.title.toLowerCase()===g);l.length>0?(t.innerHTML="",l.forEach(c=>{t.innerHTML+=`
         <div style="display: grid; place-content: center;">
        
          <h5> Título: ${c.title}</h5>
          <p><h5> Precio: ${c.precio}</h5></p>
          <img src="${c.thumbnailUrl}">
          
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
          
          </div>
        `})):t.textContent="No se encontraron resultados."}catch(a){console.error("Error al cargar el archivo JSON:",a)}}async function v(){const e=document.getElementById("contacto");try{(await(await fetch("catalogo/cascos.json")).json()).forEach(a=>{const n=document.createElement("option");n.value=a.title,n.textContent=a.title,e.appendChild(n)}),e.addEventListener("change",p)}catch(t){console.error("Error al cargar el archivo JSON:",t)}}v()},w=()=>{document.querySelector("#myDivNav2").innerHTML=`
    <div class = "marcoDivNav2">
                            <select id="contacto">
                            <option value="">Seleccionar Artículo</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div>
                            </div>
                            `,document.querySelector("#idCatalogo").innerHTML=`                    
                                    
                    
                    <div class="container">
                    <div id="cards-container"></div>
                    <br>
                    <div class="row" id="items"></div>

                    <template id="template-card">
                        <div class="col-12 mb-2 col-md-4">
                            <div class="card">
                                    <img src="" alt="" class="img-card-top">
                                            <div class="card-body">
                                                <h5>Titulo</h5>
                                                <p>precio</p>
                                                <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
                                           
                                            </div>
                            </div>
                        </div>
                    </template>
                    </div>
  `;const r=document.getElementById("items"),o=document.getElementById("template-card").content,s=document.createDocumentFragment(),m=async()=>{try{const t=await(await fetch("catalogo/auricular.json")).json();u(t)}catch(e){console.log(e)}},u=e=>{e.forEach(t=>{o.querySelector("h5").textContent=t.title,o.querySelector("p").textContent=t.precio,o.querySelector("img").setAttribute("src",t.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=t.id;const i=o.cloneNode(!0);s.appendChild(i)}),r.appendChild(s)};m();async function p(){const e=document.querySelector("#contacto"),t=document.querySelector("#idCatalogo");if(!e.value){t.textContent="";return}try{const n=await(await fetch("catalogo/auricular.json")).json(),g=e.value.toLowerCase(),l=n.filter(c=>c.title.toLowerCase()===g);l.length>0?(t.innerHTML="",l.forEach(c=>{t.innerHTML+=`
         <div style="display: grid; place-content: center;">

          <h5> Título: ${c.title}</h5>
          <p><h5> Precio: ${c.precio}</h5></p>
          <img src="${c.thumbnailUrl}">
          
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
          
          </div>
        `})):t.textContent="No se encontraron resultados."}catch(a){console.error("Error al cargar el archivo JSON:",a)}}async function v(){const e=document.getElementById("contacto");try{(await(await fetch("catalogo/auricular.json")).json()).forEach(a=>{const n=document.createElement("option");n.value=a.title,n.textContent=a.title,e.appendChild(n)}),e.addEventListener("change",p)}catch(t){console.error("Error al cargar el archivo JSON:",t)}}v()},T=()=>{let r=document.createElement("div"),o=document.createElement("div");o.id="divDatos1",o.innerHTML=`
    <a id="whatsapp" style = "text-decoration: none;" href="https://api.whatsapp.com/send?phone=1125804781">
    <img  src="img/svg/contacto/whatsapp-80.svg" alt="whatsapp" style="width: 40px; height: auto;"></a>
    &#160;&#160;
    <a href="https://www.instagram.com/joelfercab/" style="text-decoration: none;">
    <img src="img/svg/contacto/instagram-80.svg" alt="Instagram" width="100" style="width: 40px; height: auto;">
    </a>
   
    `,r.appendChild(o),r.id="mydivPie";let s=document.createElement("img");s.id="img1",s.src="img/svg/logos/logo-pie.svg",r.appendChild(s),document.body.appendChild(r)};E(),y(),f(),T()}
