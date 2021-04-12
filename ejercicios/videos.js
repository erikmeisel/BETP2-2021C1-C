const str = `<ul>
  <li data-time="5:17">Flexbox Video</li>
  <li data-time="8:22">Flexbox Video</li>
  <li data-time="3:34">Redux Video</li>
  <li data-time="5:23">Flexbox Video</li>
  <li data-time="7:12">Flexbox Video</li>
  <li data-time="7:24">Redux Video</li>
  <li data-time="6:46">Flexbox Video</li>
  <li data-time="4:45">Flexbox Video</li>
  <li data-time="4:40">Flexbox Video</li>
  <li data-time="7:58">Redux Video</li>
  <li data-time="11:51">Flexbox Video</li>
  <li data-time="9:13">Flexbox Video</li>
  <li data-time="5:50">Flexbox Video</li>
  <li data-time="5:52">Redux Video</li>
  <li data-time="5:49">Flexbox Video</li>
  <li data-time="8:57">Flexbox Video</li>
  <li data-time="11:29">Flexbox Video</li>
  <li data-time="3:07">Flexbox Video</li>
  <li data-time="5:59">Redux Video</li>
  <li data-time="3:31">Flexbox Video</li>
</ul>`;
// Parsear datos
// Obtener el total de segundos de los videos de tipo Redux
// Tip: Obtener un array de objetos, donde cada objeto sea un video
// {min:5, seg: 59, tipo: 'Redux Video'}
<<<<<<< HEAD

function getObjetos(str){
  return str
      .replace('<ul>','')
      .replace('</ul>','')
      .split('</li>')
      .slice(0,-1)
      .map(video => ({
          min: parseInt(
                video
                    .split('"')[1]
                    .split(':')[0]
              ),
          seg: parseInt(
                video
                  .split('"')[1]
                  .split(':')[1]
              ),
          tipo: video.split('>')[1]
        })
      )
}

function getTotalSegundos(videos, tipo){
  
  return videos
          .filter(video => video.tipo === tipo)
          .reduce(
                    (totalSegundos, video) => totalSegundos + (video.min * 60 + video.seg)
                ,0);  
}

console.log(getTotalSegundos(getObjetos(str), 'Redux Video') === 1847);
console.log(getTotalSegundos(getObjetos(str), 'Flexbox Video') === 6132);
=======
function parser(contenido) {
  let x = contenido.replace('<li data-time="','').replace('</ul>','').replace('<ul>\n','').split('</li>\n')
  let videos = []
  for (let linea of x) {
    let [minutoseg,tipo] = linea.split("\">")
    let [minuto,segundo] = minutoseg.split(":")    
    let video = {min:parseInt(minuto.replace('<li data-time="','')),seg:parseInt(segundo),tipo: tipo}
    videos.push(video)
  }
  return videos
}

let videos = parser(str)
let sec = 0
for (let v of videos) {
  if (v.tipo=='Redux Video') sec+=(v.min*60) + v.seg
}

console.log("Total de segundos de videos Redux: "+sec)
>>>>>>> branch
