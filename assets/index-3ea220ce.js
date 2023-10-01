(function(){const y=document.createElement("link").relList;if(y&&y.supports&&y.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))C(l);new MutationObserver(l=>{for(const h of l)if(h.type==="childList")for(const b of h.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&C(b)}).observe(document,{childList:!0,subtree:!0});function f(l){const h={};return l.integrity&&(h.integrity=l.integrity),l.referrerPolicy&&(h.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?h.credentials="include":l.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function C(l){if(l.ep)return;l.ep=!0;const h=f(l);fetch(l.href,h)}})();L();function L(){const E=()=>{let s=document.createElement("div");s.id="mydiv";let o=document.createElement("img");o.id="img-logo",o.src="img/svg/logos/logo-perro.jpg",s.appendChild(o);let r=document.createElement("div");r.id="myDiv2",r.innerHTML=`
    <br>    
    &#160;&#160;&#160;&#160;
    <a id="whatsapp" style = "text-decoration: none;" href="https://api.whatsapp.com/send?phone=1125804781">
    <img  src="img/svg/contacto/whatsapp-80.svg" alt="whatsapp" style="width: 40px; height: auto;"></a>
    &#160;&#160;&#160;&#160;
    <a href="https://www.instagram.com/joelfercab/" style="text-decoration: none;">
    <img src="img/svg/contacto/instagram-80.svg" alt="Instagram" width="100" style="width: 40px; height: auto;">
    </a>
    
    `,s.appendChild(r),document.body.appendChild(s)},y=()=>{let s=document.createElement("hr");document.body.appendChild(s);var o=document.createElement("div");o.id="myDivNav",document.body.appendChild(o);var r=document.createElement("div");r.className="mydivClass",r.id="btnInicio",r.innerHTML="Honda",o.appendChild(r),document.getElementById("btnInicio").addEventListener("click",()=>{C()});var d=document.createElement("div");d.className="mydivClass",d.id="btnQsomos",d.innerHTML="Yamaha",o.appendChild(d),document.getElementById("btnQsomos").addEventListener("click",()=>{l()});var u=document.createElement("div");u.className="mydivClass",u.id="btnDescargas",u.innerHTML="Suzuki",o.appendChild(u),document.getElementById("btnDescargas").addEventListener("click",()=>{h()});var p=document.createElement("div");p.className="mydivClass",p.id="btnContacto",p.innerHTML="Benelli",o.appendChild(p),document.getElementById("btnContacto").addEventListener("click",()=>{b()});var v=document.createElement("div");v.className="mydivClass",v.id="btnCascos",v.innerHTML="cascos",o.appendChild(v),document.getElementById("btnCascos").addEventListener("click",()=>{S()});var e=document.createElement("div");e.className="mydivClass",e.id="btnAuricular",e.innerHTML="Auriculares",o.appendChild(e),document.getElementById("btnAuricular").addEventListener("click",()=>{w()})},f=()=>{let s=document.createElement("div");s.id="myDivNav2",s.innerHTML=`
    <div class = "marcoDivNav2">
    "Perry Accesorios y Repuestos, nació como un servicio de entrega de comidas rápidas y ha evolucionado
    para atender las necesidades de nuestros compañeros motociclistas. <br>
    Nos dedicamos a brindar una amplia gama de accesorios y repuestos para motos, comprometidos
    en ofrecer soluciones que enriquezcan la experiencia de conducción y seguridad de quienes comparten
    nuestra pasión por las dos ruedas."
    </div>
  `,document.body.appendChild(s)},C=()=>{document.querySelector("#myDivNav2").innerHTML=`
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
                   
  `;const s=document.getElementById("items"),o=document.getElementById("template-card").content,r=document.createDocumentFragment(),d=async()=>{try{const t=await(await fetch("catalogo/mensula.json")).json();u(t)}catch(e){console.log(e)}},u=e=>{e.forEach(t=>{o.querySelector("h5").textContent=t.title,o.querySelector("p").textContent=t.precio,o.querySelector("img").setAttribute("src",t.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=t.id;const i=o.cloneNode(!0);r.appendChild(i)}),s.appendChild(r)};d();async function p(){const e=document.querySelector("#contacto"),t=document.querySelector("#idCatalogo");if(!e.value){t.textContent="";return}try{const n=await(await fetch("catalogo/mensula.json")).json(),g=e.value.toLowerCase(),m=n.filter(c=>c.title.toLowerCase()===g);m.length>0?(t.innerHTML="",m.forEach(c=>{t.innerHTML+=`
         <div style="display: grid; place-content: center;">
         <hr>
          <h5> Título: ${c.title}</h5>
          <p><h5> Precio: ${c.precio}</h5></p>
          <img src="${c.thumbnailUrl}">
          <hr>
          
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
                                           
          <hr>
          </div>
        `})):t.textContent="No se encontraron resultados."}catch(a){console.error("Error al cargar el archivo JSON:",a)}}async function v(){const e=document.getElementById("contacto");try{(await(await fetch("catalogo/mensula.json")).json()).forEach(a=>{const n=document.createElement("option");n.value=a.title,n.textContent=a.title,e.appendChild(n)}),e.addEventListener("change",p)}catch(t){console.error("Error al cargar el archivo JSON:",t)}}v()},l=()=>{document.querySelector("#myDivNav2").innerHTML=`
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
  `;const s=document.getElementById("items"),o=document.getElementById("template-card").content,r=document.createDocumentFragment(),d=async()=>{try{const t=await(await fetch("catalogo/escritorio.json")).json();u(t)}catch(e){console.log(e)}},u=e=>{e.forEach(t=>{o.querySelector("h5").textContent=t.title,o.querySelector("p").textContent=t.precio,o.querySelector("img").setAttribute("src",t.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=t.id;const i=o.cloneNode(!0);r.appendChild(i)}),s.appendChild(r)};d();async function p(){const e=document.querySelector("#contacto"),t=document.querySelector("#idCatalogo");if(!e.value){t.textContent="";return}try{const n=await(await fetch("catalogo/escritorio.json")).json(),g=e.value.toLowerCase(),m=n.filter(c=>c.title.toLowerCase()===g);m.length>0?(t.innerHTML="",m.forEach(c=>{t.innerHTML+=`
         <div style="display: grid; place-content: center;">
         <hr>
          <h5> Título: ${c.title}</h5>
          <p><h5> Precio: ${c.precio}</h5></p>
          <img src="${c.thumbnailUrl}">
          <hr>
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
          <hr>
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
  `;const s=document.getElementById("items"),o=document.getElementById("template-card").content,r=document.createDocumentFragment(),d=async()=>{try{const t=await(await fetch("catalogo/ratona.json")).json();u(t)}catch(e){console.log(e)}},u=e=>{e.forEach(t=>{o.querySelector("h5").textContent=t.title,o.querySelector("p").textContent=t.precio,o.querySelector("img").setAttribute("src",t.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=t.id;const i=o.cloneNode(!0);r.appendChild(i)}),s.appendChild(r)};d();async function p(){const e=document.querySelector("#contacto"),t=document.querySelector("#idCatalogo");if(!e.value){t.textContent="";return}try{const n=await(await fetch("catalogo/ratona.json")).json(),g=e.value.toLowerCase(),m=n.filter(c=>c.title.toLowerCase()===g);m.length>0?(t.innerHTML="",m.forEach(c=>{t.innerHTML+=`
         <div style="display: grid; place-content: center;">
         <hr>
          <h5> Título: ${c.title}</h5>
          <p><h5> Precio: ${c.precio}</h5></p>
          <img src="${c.thumbnailUrl}">
          <hr>
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
          <hr>
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
  `;const s=document.getElementById("items"),o=document.getElementById("template-card").content,r=document.createDocumentFragment(),d=async()=>{try{const t=await(await fetch("catalogo/varios.json")).json();u(t)}catch(e){console.log(e)}},u=e=>{e.forEach(t=>{o.querySelector("h5").textContent=t.title,o.querySelector("p").textContent=t.precio,o.querySelector("img").setAttribute("src",t.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=t.id;const i=o.cloneNode(!0);r.appendChild(i)}),s.appendChild(r)};d();async function p(){const e=document.querySelector("#contacto"),t=document.querySelector("#idCatalogo");if(!e.value){t.textContent="";return}try{const n=await(await fetch("catalogo/varios.json")).json(),g=e.value.toLowerCase(),m=n.filter(c=>c.title.toLowerCase()===g);m.length>0?(t.innerHTML="",m.forEach(c=>{t.innerHTML+=`
         <div style="display: grid; place-content: center;">
         <hr>
          <h5> Título: ${c.title}</h5>
          <p><h5> Precio: ${c.precio}</h5></p>
          <img src="${c.thumbnailUrl}">
          <hr>
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
          <hr>
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
  `;const s=document.getElementById("items"),o=document.getElementById("template-card").content,r=document.createDocumentFragment(),d=async()=>{try{const t=await(await fetch("catalogo/cascos.json")).json();u(t)}catch(e){console.log(e)}},u=e=>{e.forEach(t=>{o.querySelector("h5").textContent=t.title,o.querySelector("p").textContent=t.precio,o.querySelector("img").setAttribute("src",t.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=t.id;const i=o.cloneNode(!0);r.appendChild(i)}),s.appendChild(r)};d();async function p(){const e=document.querySelector("#contacto"),t=document.querySelector("#idCatalogo");if(!e.value){t.textContent="";return}try{const n=await(await fetch("catalogo/cascos.json")).json(),g=e.value.toLowerCase(),m=n.filter(c=>c.title.toLowerCase()===g);m.length>0?(t.innerHTML="",m.forEach(c=>{t.innerHTML+=`
         <div style="display: grid; place-content: center;">
         <hr>
          <h5> Título: ${c.title}</h5>
          <p><h5> Precio: ${c.precio}</h5></p>
          <img src="${c.thumbnailUrl}">
          <hr>
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
          <hr>
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
  `;const s=document.getElementById("items"),o=document.getElementById("template-card").content,r=document.createDocumentFragment(),d=async()=>{try{const t=await(await fetch("catalogo/auricular.json")).json();u(t)}catch(e){console.log(e)}},u=e=>{e.forEach(t=>{o.querySelector("h5").textContent=t.title,o.querySelector("p").textContent=t.precio,o.querySelector("img").setAttribute("src",t.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=t.id;const i=o.cloneNode(!0);r.appendChild(i)}),s.appendChild(r)};d();async function p(){const e=document.querySelector("#contacto"),t=document.querySelector("#idCatalogo");if(!e.value){t.textContent="";return}try{const n=await(await fetch("catalogo/auricular.json")).json(),g=e.value.toLowerCase(),m=n.filter(c=>c.title.toLowerCase()===g);m.length>0?(t.innerHTML="",m.forEach(c=>{t.innerHTML+=`
         <div style="display: grid; place-content: center;">
         <hr>
          <h5> Título: ${c.title}</h5>
          <p><h5> Precio: ${c.precio}</h5></p>
          <img src="${c.thumbnailUrl}">
          <hr>
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
          <hr>
          </div>
        `})):t.textContent="No se encontraron resultados."}catch(a){console.error("Error al cargar el archivo JSON:",a)}}async function v(){const e=document.getElementById("contacto");try{(await(await fetch("catalogo/auricular.json")).json()).forEach(a=>{const n=document.createElement("option");n.value=a.title,n.textContent=a.title,e.appendChild(n)}),e.addEventListener("change",p)}catch(t){console.error("Error al cargar el archivo JSON:",t)}}v()},T=()=>{let s=document.createElement("div"),o=document.createElement("div");o.id="divDatos1",o.innerHTML=`
    <a id="whatsapp" style = "text-decoration: none;" href="https://api.whatsapp.com/send?phone=1125804781">
    <img  src="img/svg/contacto/whatsapp-80.svg" alt="whatsapp" style="width: 40px; height: auto;"></a>
    &#160;&#160;
    <a href="https://www.instagram.com/joelfercab/" style="text-decoration: none;">
    <img src="img/svg/contacto/instagram-80.svg" alt="Instagram" width="100" style="width: 40px; height: auto;">
    </a>
    <hr>
    `,s.appendChild(o),s.id="mydivPie";let r=document.createElement("img");r.id="img1",r.src="img/svg/logos/logo-pie.jpg";let d=document.createElement("hr");document.body.appendChild(d),s.appendChild(r),document.body.appendChild(s)};E(),y(),f(),T()}
