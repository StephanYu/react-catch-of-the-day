import React from 'react';

class AddFishForm extends React.Component {
  render() {
    return (
      <form className="fish-edit">
        <input type="text" placeholder="Fish Name"/>
        <input type="text" placeholder="Fish Price"/>
        <select name="" id="">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea placeholder="Fish Desc"></textarea>
        <input placeholder="Fish Image"></input>
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
}

export default AddFishForm;