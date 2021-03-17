import { Component } from 'react';
import { SubmitContainer } from "./components/SubmitContainer"
import { FaceRecognition } from "./components/FaceRecognition"
import { TitleContainer } from './components/TitleContainer';
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
      box: '',
    }
  }

  // draw the square on the faces, the array comes from the API
  // then get the id trough the DOM to add the squares
  // bounding_box return the percentages of the face (location)


  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  // this.calculateFaceLocation takes the response,
  // return the object of the function (leftCol, topRow, rightCol, bottomRow)
  // the object goes into displayFaceBox

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err))
    }

  render(){
    return(
        <div className='mainContainer'>
          <TitleContainer />
          <SubmitContainer
            onInputChange={this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit}
          />
          <FaceRecognition 
            box={this.state.box} 
            imageUrl={this.state.imageUrl} 
          />
        </div>
    );
  }
}



export default App;
