import { useContext } from "react";

const { createContext,useState } = require("react");

const AppContext = createContext()

const AppProvider =({children})=>{
  const[isSidebarOpen,setIsSidebarOpen]=useState(false)
  const openSidebar =()=>{
    setIsSidebarOpen(true)
  }
  const closeSidebar = ()=>{
    setIsSidebarOpen(false)
  }
  const [products, setProducts] = useState([
    {
      id: '1',
      title: 'parfum unisex',
      img: '../images/a1.jpg',
    },
    {
      id: '2',
      title: 'Ejaazi EDP - 100ML(3.4 Oz) Par Lattafa',
      img: '../images/a2.jpg',
    },
    {
      id: '3',
      title: 'ALLURE HOMME SPORT Eau de Toilette',
      img: '../images/a3.jpg',
    },
    {
      id: '4',
      title: 'BLEU DE CHANEL',
      img: '../images/a4.jpg',
    },
    {
      id: '5',
      title: 'SAUVAGE PARFUM',
      img: '../images/a5.jpg',
    },
    {
      id: '6',
      title: 'Versace Eros',
      img: '../images/a6.jpg',
    },
    {
      id: '7',
      title: 'Tom Ford Black Orchid Eau de Parfum',
      img: '../images/a7.jpg',
    },
    {
      id: '8',
      title: 'Eau de toilette Hugo Boss',
      img: '../images/a8.jpg',
    },
    {
      id: '9',
      title: 'parfume',
      img: '../images/a9.jpg',
    },
    {
      id: '10',
      title: 'Kilian Black Phantom',
      img: '../images/a10.jpg',
    },
    {
      id: '11',
      title: 'yves saint laurent parfume',
      img: '../images/a11.jpg',
    },
    {
      id: '12',
      title: 'jadore perfume',
      img: '../images/a12.jpg',
    },
    {
      id: '13',
      title: 'my way parfume',
      img: '../images/a13.jpg',
    },
  ])
 return(
  <AppContext.Provider value={{
    isSidebarOpen,closeSidebar,openSidebar,products
  }}>
{children}
  </AppContext.Provider>
 )
}
export const useGlobalContext =()=>{
 return useContext(AppContext)
}
export {AppContext,AppProvider}