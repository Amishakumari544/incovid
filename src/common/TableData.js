import React from 'react'

function TableData() {
    return (
        <div className="container mt-4">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Hospital Name</th>
      <th scope="col">Available ICU Bed</th>
      <th scope="col">Available Covid Bed</th>
      <th scope="col">Total Bed</th>
      <th scope="col">Available Oxygen</th>
      <th scope="col">Hospital is Covid or not</th>
      <th scope="col">Hospital Contact Number</th>
  
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Kantilal</td>
      <td>7</td>
      <td>8</td>
      <td>7</td>
      <td>8</td>
      <td>7</td>
      <td>26386298398</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>TMH</td>
      <td>2</td>
      <td>7</td>
      <td>2</td>
      <td>7</td>
      <td>2</td>
      <td>687987999</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>8</td>
      <td>4</td>
      <td>8</td>
      <td>4</td>
      <td>8</td>
      <td>758779808</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>8</td>
      <td>4</td>
      <td>8</td>
      <td>4</td>
      <td>8</td>
      <td>769879808</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}

export default TableData
