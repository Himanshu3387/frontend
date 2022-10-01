import { useNavigate } from 'react-router-dom'

const Schedule = () => {
  const navigate = useNavigate()

  const addSchedule = () => {
    //will transfer to add employee page to add employee details by the admon
    navigate('/addNewSchedule')
  }
  const listOfSchedule = () => {
    //will transfer to add employee page to add employee details by the admon
    navigate('/listOfSchedules')
  }

  return (
    <div className='container'>
      <h1 style={{ textAlign: 'center', color: '#7431F8' }}>Schedules</h1>
      <div className='row'>
        <div
          className='card col mb-4'
          style={{
            margin: 20,
            display: 'inline-block',
            cursor: 'pointer',
            border: 0,
            marginTop: 70,
          }}>
          <img
            src='https://freepikpsd.com/file/2019/10/add-employee-icon-png-7-Transparent-Images-Free.png'
            alt=''
            className='rounded mx-auto d-block'
            style={{ height: 300, width: 300, display: 'block' }}
          />
          <div className='card-body'>
            <button onClick={addSchedule} style={styles.Button}>
              Add Schedule
            </button>
          </div>
        </div>
        <div
          className='card col mb-4  '
          style={{
            margin: 20,
            display: 'inline-block',
            cursor: 'pointer',
            border: 0,
            marginTop: 70,
          }}>
          <img
            src='https://icon-library.com/images/employee-icon-png/employee-icon-png-1.jpg'
            alt=''
            className='rounded mx-auto d-block'
            style={{ height: 300, width: 300, display: 'block' }}
          />
          <div className='card-body' width='300'>
            <button onClick={listOfSchedule} style={styles.Button}>
              Schedule List
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  Button: {
    position: 'relative',
    width: '100%',
    height: 40,
    backgroundColor: '#7431F8',
    color: 'white',
    borderRadius: 5,
    border: 'none',
    marginTop: 10,
  },
}

export default Schedule