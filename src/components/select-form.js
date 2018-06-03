const SelectForm = ({ data }) => {
  return (
    <form>
      <label>
        <span>Select name</span>
        <select
          name="profile"
          //value={selectedProfile.name}
          //onChange={handleSelectChange}
          >
          {data.map((d, index) =>
            <option
              key={index}
              value={d.name}>{d.name}</option>
          )}
        </select>
      </label>
    </form>
  );
}

export default SelectForm;