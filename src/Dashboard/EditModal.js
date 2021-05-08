import React,{useState} from 'react'

function EditModal() {
    
    return (
<div>
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{backgroundColor:"#00b87c",outline:"0"}}>
Edit Data
</button>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Data</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>{}</p>
        <input type="text" />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
    )
}

export default EditModal