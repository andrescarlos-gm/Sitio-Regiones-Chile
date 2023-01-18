
function tarjetaRegion(valor) {

   var titulo = document.getElementById("tituloRegion");
   var imagen = document.getElementById("imagenRegion");
   var atractivos = document.getElementById("atractivos");

   document.getElementById("imagenRegion").src = "";


   switch (valor) {
      case 1:
         titulo.innerText = "Región de Arica y Parinacota";
         document.getElementById("imagenRegion").src = "img/1.jpg";
         atractivos.innerHTML = '1. Morro de Arica · 2. Parque Nacional Lauca · 3. Museo Arqueologico San Miguel de Azapa';
         break;
      case 2:

         titulo.innerText = 'Región de Tarapacá'
         document.getElementById("imagenRegion").src = "img/2.jpg";

         imagen.innerHTML = "/img/2.jpg/"
         atractivos.innerHTML = '1. Oficina Salitrera Santiago Humberstone · 2. Museo Corbeta Esmeralda · 3. Playa Cavancha'
         break;
      case 3:

            titulo.innerText = 'Región de Antofagasta'
            document.getElementById("imagenRegion").src = "img/3.jpg";

         imagen.innerHTML = 'img/3.jpg/'
         atractivos.innerHTML = '1. Salar de Atacama · 2. La Portada · 3. Ruinas de Huanchaca'
         break;
      case 4:

            titulo.innerText = 'Región de Atacama'
            document.getElementById("imagenRegion").src = "img/4.jpg";

         imagen.innerHTML = 'img/4.jpg/'
         atractivos.innerHTML = '1. Playa la virgen · 2. Bahía Inglesa · 3. Desierto Florido'
         break;
      case 5:
            titulo.innerText = 'Región de Coquimbo'
            document.getElementById("imagenRegion").src = "img/5.jpg";

         imagen.innerHTML = 'img/5.jpg/'
         atractivos.innerHTML = '1. Cruz Del Tercer Milenio · 2. Playa La Herradura · 3. Totoralillo'
         break;
      case 6:
 
            titulo.innerText = 'Región de Valparaíso'
            document.getElementById("imagenRegion").src = "img/6.jpg";

         imagen.innerHTML = 'img/6.jpg/'
         atractivos.innerHTML = '1. La Sebastiana · 2. Cerro Concepción · 3. Paseo Gervasoni'
         break;
      case 7:

            titulo.innerText = 'Región Metropolitana de Santiago'
            document.getElementById("imagenRegion").src = "img/7.jpg";

         imagen.innerHTML = 'img/7.jpg/'
         atractivos.innerHTML = '1. Cerro Santa Lucía · 2. Barrio Lastarria · 3. Museo de la Memoria y los Derechos Humanos'
         break;
      case 8:

            titulo.innerText = 'Región del Libertador General Bernardo OHiggins'
            document.getElementById("imagenRegion").src = "img/8.jpg";

         imagen.innerHTML = 'img/8.jpg/'
         atractivos.innerHTML = '1. Colchagua Museum · 2. MontGras · 3. Lapostolle Clos Apalta'
         break;
      case 9:
 
            titulo.innerText = 'Región del Maule'
            document.getElementById("imagenRegion").src = "img/9.jpg";

         imagen.innerHTML = 'img/9.jpg/'
         atractivos.innerHTML = '1. Parque Nacional Radal Siete Tazas · 2. Reserva Nacional Altos de Lircay · 3. Piedra de la Iglesia'
         break;
      case 10:

            titulo.innerText = 'Región de Ñuble'
            document.getElementById("imagenRegion").src = "img/10.jpg";

         imagen.innerHTML = 'img/10.jpg/'
         atractivos.innerHTML = '1. Termas de Chillán · 2. Portezuelo · 3. Longanizas Iturra: las ganadoras de este año'
         break;
      case 11:

            titulo.innerText = 'Región del Biobío'
            document.getElementById("imagenRegion").src = "img/11.jpg";

         imagen.innerHTML = 'img/11.jpg/'
         atractivos.innerHTML = '1. Universidad de Concepcion · 2. Parque Ecuador · 3. Monitor Huáscar'
         break;
      case 12:

            titulo.innerText ='Región de La Araucanía'
            document.getElementById("imagenRegion").src = "img/12.jpg";

            imagen.innerHTML ='img/12.jpg/'
            atractivos.innerHTML ='1. Termas Geometricas · 2. Volcan Villarrica · 3. Parque Nacional Huerquehue'
               break;
      case 13:

            titulo.innerText ='Región de Los Ríos'
            document.getElementById("imagenRegion").src = "img/13.jpg";

            imagen.innerHTML ='img/13.jpg/'
            atractivos.innerHTML ='1. Saltos del Huilo-Huilo · 2. Parque Oncol · 3. Mercado Fluvial de Vrealdivia'
               break;
      case 14:

            titulo.innerText ='Región de Los Lagos'
            document.getElementById("imagenRegion").src = "img/14.jpg";
            atractivos.innerHTML ='1. Saltos del Petrohué · 2. Lago Llanquihue · 3. Lago Todos Los Santos '
               break;
      case 15:

            titulo.innerText ='Región de Aysén del General Carlos Ibáñez del Campo'
            document.getElementById("imagenRegion").src = "img/15.jpg";
            atractivos.innerHTML ='1. Salto Río Ibañez · 2. Embarcadero Puerto Ibañez · 3. Huellas Pioneras'
            break;
      case 16:

            titulo.innerText ='Región de Magallanes y de la Antártica Chilena'
            document.getElementById("imagenRegion").src = "img/16.jpg";
            atractivos.innerHTML ='1. Parque Nacional Torres del Paine · 2. Glacier Grey · 3. Cementerio Municipal'
         break;


   }
}

