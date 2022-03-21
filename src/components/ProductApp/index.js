import MainMenu from "../MainMenu";

export default function ProductApp({data}){
    return(
      <div className="App">
        {data.map((item, index) => <MainMenu {...item} key={index}/>)}
        </div>
  
  
    );
  }