import logo from './logo.svg';
import './App.css';
import TenthStudent from './components/TenthStudent';
import SSCStudent from './classes/SSCStudent';

function App() {

let srikranth = new SSCStudent("srikanth,kuna,95,97,99");

srikranth.calculateResult();

let naveen = new SSCStudent("naveen","rammolla","78","98","90");
naveen.calculateResult();
  

  return (
    <div className="App">
      <div>
        <h2>painting program students</h2>
      </div>
      <TenthStudent colors="kranthi"
      favcolors="satthuri"
       color1="56"
      color2="78"
      color3="56"
      color4="97"
      color5="96"
      color6="95"
      color7="94"

      ></TenthStudent>

<TenthStudent colors="suman"
      favcolors="sunkari"
       color1="98"
      color2="97"
      color3="96"
      color4="95"
      color5="94"
      color6="93"
      color7="92"

      ></TenthStudent>
    </div>
  );
}

export default App;
