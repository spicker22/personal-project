import { Modal } from 'react-bootstrap'

const AddDoctorModal = (props) => {
    return (
        <Modal show={props.showModal} onHide={() => props.setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Add Doctor</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <form onSubmit={props.handleSubmit}>
                        <label className='form-label'>
                            Doctor Name
                            <input 
                                type='text'
                                className='form-control'
                                // value={props.hobbyName}
                                onChange={(e) => props.setDoctorName(e.target.value)}
                            />
                        </label>
                        <br/>
                        <label className='form-label'>
                            Doctor Phone Number
                            <input 
                                type='text'
                                className='form-control'
                                // value={props.phoneNumber}
                                onChange={(e) => props.setDoctorPhoneNumber(e.target.value)}
                            />
                        </label>
                        <br/>
                        <label className='form-label'>
                            Doctor City
                            <input
                                type='text'
                                className='form-control'
                                // value={props.address}
                                onChange={(e) => props.setDoctorAddress(e.target.value)}                            
                            />
                        </label>
                        <br/>
                        <label className='form-label'>
                            Doctor CategoryId
                            <input
                                type='text'
                                className='form-control'
                                // value={props.categoryId}
                                onChange={(e) => props.setcCategoryId(e.target.value)}                            
                            />
                        </label>
                        <br/>
                        <label className='form-label'>
                            Doctor imgURL
                            <input
                                type='text'
                                className='form-control'
                                // value={props.imgURL}
                                onChange={(e) => props.setImgURL(e.target.value)}                            
                            />
                        </label>
                        <br/>
                        <label className='form-label'>
                            Doctor accountId
                            <input
                                type='text'
                                className='form-control'
                                // value={props.accountId}
                                onChange={(e) => props.setDoctorAccountId(e.target.value)}                            
                            />
                        </label>
                        <br/>
                        <button type='submit'>Submit</button>
                    </form>
                </Modal.Body>
        </Modal>
    )
}

export default AddDoctorModal