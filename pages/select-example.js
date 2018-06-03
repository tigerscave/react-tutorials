import React from "react";

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
      console.log(e.target.value);

      const checkName = (d) => {
        if(d.name==e.target.value){
          return true;
        }
      }

      const selectedName = data.filter(checkName)[0]

      this.setState({
        selectedProfile: selectedName,
      })

    }
  }

  render(){
    const { selectedProfile } = this.state;
    return (
      <div>
        <form>
          <label>
            <span>Select name</span>
            <select
              name="profile"
              value={selectedProfile.name}
              onChange={this.handleSelectChange}
              >
              {data.map((d, index) =>
                <option
                  key={index}
                  value={d.name}>{d.name}</option>
              )}
            </select>
          </label>
        </form>
        <div>
          <h1>Selected profile</h1>
            <div>
              <span>Name</span>
              <span>:</span>
              <span>{selectedProfile.name}</span>
            </div>
            <div>
              <span>Age</span>
              <span>:</span>
              <span>{selectedProfile.age}</span>
            </div>
            <div>
              <span>Sex</span>
              <span>:</span>
              <span>{selectedProfile.sex}</span>
            </div>
            <div></div>
        </div>
        <style jsx>{`
          h1 {
            color: gray;
          }
          span.label {
            display: block;
          }
        `}</style>
      </div>
    );
  }
}

export default SelectExample;
