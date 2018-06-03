import React from "react";

import SelectForm from '../src/components/select-form';
import ProfileDisplay from '../src/components/profile-display';
import PrintHello from '../src/components/print-hello'
const data = [
  {
    name: "Adaniya",
    age: 25,
    sex: "Male"
  },
  {
    name: "Tiger",
    age: 23,
    sex: "Male"
  },
  {
    name: "Leader",
    age: 22,
    sex: "Female"
  }
];

class SelectExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProfile: data[0]
    };

    this.handleSelectChange = e => {
      const pickedUser = data.filter(d => d.name === e.target.value)[0];
      this.setState({
        selectedProfile: pickedUser
      })
    }
  }

  render(){
    const { selectedProfile } = this.state;
    return (
      <div>
        <PrintHello /> 
        <SelectForm
          data={data}
        />
        <ProfileDisplay
          selectedProfile={selectedProfile}
        />
      </div>
    );
  }
}

export default SelectExample;