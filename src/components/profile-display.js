const ProfileDisplay = ({ selectedProfile }) => {
  return (
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
  );
}

export default ProfileDisplay;