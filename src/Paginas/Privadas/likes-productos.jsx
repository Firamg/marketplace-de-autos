import { Context } from "../../Context/Context";
import { useContext,useState } from "react";

export default function ProductosGral() {
  const { dato } = useContext(Context);
  console.log(dato);

  const listasProductos = [
  {
  id:1,  
  nombre: 'nombreProducto1',
  imagen: 'imagen1',
  marca: 'marca1',
  combustible: 'combustible1',
  km:'cantidad de km',
  descripcion: 'lorem ipsum',
  favorita: false
  },
  { 
    id:2,
    nombre: 'nombreProducto2',
    imagen: 'imagen1',
    marca: 'marca1',
    combustible: 'combustible1',
    km:'cantidad de km',
    descripcion: 'lorem ipsum',
    favorita: false
  },
  { 
    id:3,
    nombre: 'nombreProducto3',
    imagen: 'imagen1',
    marca: 'marca1',
    combustible: 'combustible1',
    km:'cantidad de km',
    descripcion: 'lorem ipsum',
    favorita: true
  }
]

  const [nombreProducto, setNombreProducto] = useState("")
const [listaProductos, setListaProductos] = useState(listasProductos)

const modificarLike = (producto) => {
  const nuevoLike = [...listaProductos] 
  
  //Copiamos las tareas anteriores
  const index = nuevoLike.findIndex(el => el.id === producto.id)


  // Buscamos la tarea a modificar en la lista
  nuevoLike[index].favorita = false
  setListaProductos(nuevoLike)
  }

  const eliminarLike = (producto) => {
    const listaFiltrada = listaProductos.filter(el => el.id !==
    producto.id)
    setListaProductos(listaFiltrada)
    }

    const listaLikes=listaProductos.filter(x=>x.favorita===true)

  



  return (
    <>
      
      <h1>Lista de Productos Favoritos</h1>
      <ul>
        {listaLikes.map((producto)=>
          <li 
          key={producto.id}
          
        
        >{producto.nombre} 
        {producto.favorita===false?<button
        id={producto.id}
        >LIKE</button>:<button
        id={producto.id}
        
        onClick={()=>modificarLike(producto)}
        >UNLIKE</button>}
        
        </li>)}
      </ul>
    </>

  

  );
}