
var array1 = [["Región de Arica y Parinacota", "img/1.jpg", "1. Morro de Arica · 2. Parque Nacional Lauca · 3. Museo Arqueologico San Miguel de Azapa"],
["Región de Tarapacá", "img/2.jpg", "1. Oficina Salitrera Santiago Humberstone · 2. Museo Corbeta Esmeralda · 3. Playa Cavancha"],
["Región de Antofagasta", "img/3.jpg", "1. Salar de Atacama · 2. La Portada · 3. Ruinas de Huanchaca"],
["Región de Atacama", "img/4.jpg", "1. Playa la virgen · 2. Bahía Inglesa · 3. Desierto Florido"],
["Región de Coquimbo", "img/5.jpg", "1. Cruz Del Tercer Milenio · 2. Playa La Herradura · 3. Totoralillo"],
["Región de Valparaíso", "img/6.jpg", "1. La Sebastiana · 2. Cerro Concepción · 3. Paseo Gervasoni"],
["Región Metropolitana de Santiago", "img/7.jpg", "1. Cerro Santa Lucía · 2. Barrio Lastarria · 3. Museo de la Memoria y los Derechos Humanos"],
["Región del Libertador General Bernardo OHiggins", "img/8.jpg", "1. Colchagua Museum · 2. MontGras · 3. Lapostolle Clos Apalta"],
["Región del Maule", "img/9.jpg", "1. Parque Nacional Radal Siete Tazas · 2. Reserva Nacional Altos de Lircay · 3. Piedra de la Iglesia"],
["Región de Ñuble", "img/10.jpg", "1. Termas de Chillán · 2. Portezuelo · 3. Longanizas Iturra: las ganadoras de este año"],
["Región del Biobío", "img/11.jpg", "1. Universidad de Concepcion · 2. Parque Ecuador · 3. Monitor Huáscar"],
["Región de La Araucanía", "img/12.jpg", "1. Termas Geometricas · 2. Volcan Villarrica · 3. Parque Nacional Huerquehue"],
["Región de Los Ríos", "img/13.jpg", "1. Saltos del Huilo-Huilo · 2. Parque Oncol · 3. Mercado Fluvial de Valdivia"],
["Región de Los Lagos", "img/14.jpg", "1. Saltos del Petrohué · 2. Lago Llanquihue · 3. Lago Todos Los Santos "], +
["Región de Aysén del General Carlos Ibáñez del Campo", "img/15.jpg", "1. Salto Río Ibañez · 2. Embarcadero Puerto Ibañez · 3. Huellas Pioneras"],
["Región de Magallanes y de la Antártica Chilena", "img/16.jpg", "1. Parque Nacional Torres del Paine · 2. Glacier Grey · 3. Cementerio Municipal"]]



function tarjetaRegion(valor) {

   var titulo = document.getElementById("tituloRegion");
   var imagen = document.getElementById("imagenRegion");
   var atractivos = document.getElementById("atractivos");
   switch (valor) {
      case 1:
         titulo.innerText = array1[0][0];
         document.getElementById("imagenRegion").src = array1[0][1];
         atractivos.innerHTML = array1[0][2];
         break;
      case 2:

         titulo.innerText = array1[1][0]
         document.getElementById("imagenRegion").src = array1[1][1];
         atractivos.innerHTML = array1[1][2]
         break;
      case 3:

         titulo.innerText = array1[2][0]
         document.getElementById("imagenRegion").src = array1[2][1];
         atractivos.innerHTML = array1[2][2]
         break;
      case 4:

         titulo.innerText = array1[3][0];
         document.getElementById("imagenRegion").src = array1[3][1];
         atractivos.innerHTML = array1[3][2];
         break;
      case 5:
         titulo.innerText = array1[4][0];
         document.getElementById("imagenRegion").src = array1[4][1];
         atractivos.innerHTML = array1[4][2];
         break;
      case 6:
         titulo.innerText = array1[5][0];
         document.getElementById("imagenRegion").src = array1[5][1];
         atractivos.innerHTML = array1[5][2];
         break;
      case 7:

         titulo.innerText = array1[6][0];
         document.getElementById("imagenRegion").src = array1[6][1];
         atractivos.innerHTML = array1[6][2];
         break;
      case 8:
         titulo.innerText = array1[7][0];
         document.getElementById("imagenRegion").src = array1[7][1];
         atractivos.innerHTML = array1[7][2];
         break;
      case 9:

         titulo.innerText = array1[8][0];
         document.getElementById("imagenRegion").src = array1[8][1];
         atractivos.innerHTML = array1[8][2];
         break;
      case 10:

         titulo.innerText = array1[9][0];
         document.getElementById("imagenRegion").src = array1[9][1];
         atractivos.innerHTML = array1[9][2];
         break;
      case 11:

         titulo.innerText = array1[10][0];
         document.getElementById("imagenRegion").src = array1[10][1];
         atractivos.innerHTML = array1[10][2];
         break;
      case 12:

         titulo.innerText = array1[11][0];
         document.getElementById("imagenRegion").src = array1[11][1];
         atractivos.innerHTML = array1[11][2];
         break;
      case 13:

         titulo.innerText = array1[12][0];
         document.getElementById("imagenRegion").src = array1[12][1];
         atractivos.innerHTML = array1[12][2];
         break;
      case 14:
         titulo.innerText = array1[13][0];
         document.getElementById("imagenRegion").src = array1[13][1];
         atractivos.innerHTML = array1[13][2];
         break;
      case 15:
         titulo.innerText = array1[13][0];
         document.getElementById("imagenRegion").src = array1[13][1];
         atractivos.innerHTML = array1[13][2];
         break;
      case 16:
         titulo.innerText = array1[13][0];
         document.getElementById("imagenRegion").src = array1[13][1];
         atractivos.innerHTML = array1[13][2];
         break;


   }
}

