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
      selectedProfileId: 0
    };

    this.handleSelectChange = e => {
      console.log(e.target.value);
      this.setState({ selectedProfileId: e.target.value });
    }
  }

  render(){
    const { selectedProfileId } = this.state;
    const profile = data[selectedProfileId];
    return (
      <div>
        <form>
          <label>
            <span>Select name</span>
            <select
              name="profile"
              value={selectedProfileId}
              onChange={this.handleSelectChange}
              >
              {data.map((p, index) =>
                <option
                  key={index}
                  value={index}>{p.name}</option>
              )}
            </select>
          </label>
        </form>
        <div>
          <h1>Selected profile</h1>
            <div>
              <span>Name</span>
              <span>:</span>
              <span>{profile.name}</span>
            </div>
            <div>
              <span>Age</span>
              <span>:</span>
              <span>{profile.age}</span>
            </div>
            <div>
              <span>Sex</span>
              <span>:</span>
              <span>{profile.sex}</span>
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