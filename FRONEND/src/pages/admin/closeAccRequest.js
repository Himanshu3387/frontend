import React from 'react'

const CloseAccRequest = () => {
    return (
        <div className="shadow-lg p-3 mt-3 mb-3 bg-body opacity-100 img-fluid" style={{ backgroundImage: 'url("images/backbank.jpg")', backgroundPosition: "center", backgroundSize: "cover" }}>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col-12 col-sm-5 m-3">
                        <div className="card cascading-right p-9" style={{
                            background: "hsla(0, 0%, 100%, 0.80)",
                            backdropFilter: "blur(30px)"
                            , borderBottomRightRadius: 50, borderTopLeftRadius: 50
                        }}
                        >
                            <h2 className="fw-bold mb-1 mt-3">Apply For Closing Account</h2>
                            <div className='ps-5 pe-5 pt-4 pb-4'>
                                <div className='mb-3'>
                                    <label className='mb-2'>Description</label>
                                    <input

                                        className='form-control'
                                        type='text'
                                        placeholder='Enter Your Description for Closing Account'
                                    />
                                </div>
                                <div className='mb-3'>
                                    <div className='d-grid'>
                                        <button className='btn btn-primary' style={{ background: "#7430f9", borderColor: '#7430f9' }}  >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CloseAccRequest