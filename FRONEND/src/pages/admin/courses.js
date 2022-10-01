import { useNavigate } from 'react-router-dom'

const Course = () => {
  const navigate = useNavigate()

  const addCourses = () => {
    //will transfer to add employee page to add employee details by the admon
    navigate('/addCourses')
  }
  const showAllCourses = () => {
    //will transfer to add employee page to add employee details by the admon
    navigate('/showAllCourses')
  }

  return (
    <div className='container'>
      <h1 style={{ textAlign: 'center', color: '#7431F8' }}>Courses</h1>
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
            <button onClick={addCourses} style={styles.Button}>
              Add Courses
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
            <button onClick={showAllCourses} style={styles.Button}>
              Courses List
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

export default Course