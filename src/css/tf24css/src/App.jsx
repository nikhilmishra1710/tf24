import Card from "./components/speakerCards/Card";
import Card2 from "./components/speakerCards/Card2";
import Card3 from "./components/speakerCards/Card3";
import Div2 from "./components/div2";

function App() {
  return (
    <>
      <div className="h-[100vh] bg-red-500 flex justify-center items-center">
        <div className="app">
          {/*boxType should be a,b,c or d depending on this the hover boxes will appear*/}
          {/* <Card
            img="/img/3.jpg"
            tags="#techno #rave"
            name="Pulse Club"
            number="02"
            boxType1="a"
            boxType2="d"
          /> */}
        </div>
        <div>
          {/* <Card2
            img="/img/3.jpg"
            tags="#techno #rave"
            name="Pulse Club"
            number="02"
            boxType1="c"
            boxType2="d"
          /> */}
        </div>
        <div>
          {/* <Card3
            img="/img/3.jpg"
            tags="#techno #rave"
            name="Pulse Club"
            number="02"
            boxType1="b"
            boxType2="c"
          /> */}
        </div>
      </div>
      <Div2/>
      <div className="h-[100vh] bg-red-500"></div>
    </>
  )
}

export default App
