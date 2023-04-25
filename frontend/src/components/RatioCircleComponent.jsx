import React,{Component} from 'react'

class RatioCircleComponent extends Component {

    constructor(props) {
        super(props);
      }

      render() {
        return (
          <div className="circle" style={this.props.popularity_as_float>0 ? 
            {width: `${(this.props.popularity_as_float*100)/3}px`,height: `${(this.props.popularity_as_float*100)/3}px`} : 
            {width: `5px`,height: `5px`} }>&nbsp;</div>
        );
  
      }
    }

export default RatioCircleComponent