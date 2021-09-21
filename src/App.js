import { Component } from 'react';
import { FaceRecognition } from "./components/FaceRecognition"
import { TitleContainer } from './components/TitleContainer';
import { TitleHeader } from './components/TitleHeader'
import './styles/global.css';
import Clarifai from 'clarifai';



const app = new Clarifai.App({
  apiKey: 'ee88c4fa2e7c4342a739424ea00e05ca'
});

class App extends Component {
  constructor(){
    super();
    this.state= {
      input: '',
      imageUrl: '',
      box: [],
      faceCount: '',
    }
  }




 calculateFaceLocation = (data) => {
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    if (data.outputs[0].data.regions !== undefined ) {
      return data.outputs[0].data.regions.map(face => {
        const clarifaiFace = face.region_info.bounding_box;
        return {
          leftCol: clarifaiFace.left_col * width,
          topRow: clarifaiFace.top_row * height,
          rightCol: width - (clarifaiFace.right_col * width),
          bottomRow: height - (clarifaiFace.bottom_row * height)
        }
      });
    }
  }

  getNumOfFaces = (data) => {
    if (data.outputs[0].data.regions !== undefined) {
        const faceCount = Object.keys(data.outputs[0].data.regions).length;
        this.setState({faceCount: faceCount + ' faces found!'});
    } else {
        this.setState({faceCount: '0 faces found!'});
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

 onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
    .then( response => {
        this.displayFaceBox(this.calculateFaceLocation(response))
        return response;
      })
    .then(response => {
      this.getNumOfFaces(response)
    })
    .catch (err => console.log(err));
  }

  render(){

    return(
        <div className='mainContainer'>
          <TitleHeader />
          <TitleContainer
            onInputChange={this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit}

            />
          <FaceRecognition 
            box={this.state.box} 
            imageUrl={this.state.imageUrl}
            faceCount={this.state.faceCount}
          />
        </div>
    );
  }
}



export default App;
