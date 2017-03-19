import React from 'react';
import { connect } from 'react-redux';
import { postNewPerson} from './add-new.reducer.js';

class AddNew extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      favoriteCity: '',
    };
    this.addNewPerson = this.addNewPerson.bind(this);
    this.setName = this.setName.bind(this);
    this.setFavoriteCity = this.setFavoriteCity.bind(this);
  }

  setName(evt) {
    evt.preventDefault();
    this.setState({name: evt.target.value});
  }

  setFavoriteCity(evt) {
    evt.preventDefault();
    this.setState({favoriteCity: evt.target.value});
  }

  addNewPerson() {
    const details = {
      name: this.state.name,
      favoriteCity: this.state.favoriteCity
    };
    this.props.postNewPerson(details);
  }

  render() {
    return (
      <div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input onChange={this.setName}id="first_name" type="text" className="validate" />
                <label htmlFor="first_name">Name</label>
              </div>
              <div className="input-field col s6">
                <input onChange={this.setFavoriteCity}id="last_name" type="text" className="validate" />
                <label htmlFor="last_name">Favorite City</label>
              </div>
            </div>
          </form>
          </div>
          <div className="waves-effect waves-light btn" onClick={this.addNewPerson}>Add Person</div>
        </div>
    );
  }
}

/* ---------  CONTAINER   ------- */
const mapStateToProps = ( ) => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postNewPerson: details => {
      dispatch( postNewPerson(details) );
    }
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNew);