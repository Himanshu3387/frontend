import { useNavigate } from 'react-router-dom'
const Student = () => {
  const navigate = useNavigate()

  const Schedules = () => {
    //add and remove Services
    navigate('/listOfSchedules')
  }
  const Quiz = () => {
    //view and accept orders
    navigate('/')
  }
  const getAllCourses = () => {
    //show all feedback
    navigate('/showAllCourses')
  }

  return (
    <div className='container'>
      <h1 style={{ textAlign: 'center', color: '#7431F8' }}>Student Page</h1>
      <div className='row'>
        <div
          className='card col mb-4  '
          style={{
            margin: 20,
            display: 'inline-block',
            cursor: 'pointer',
            border: 0,
            marginTop: 90,
          }}>
          <img
            src='https://thumbs.dreamstime.com/z/school-teacher-student-drawing-class-schedule-pencil-ruler-modern-flat-style-concept-vector-illustration-isolated-82274681.jpg'
            alt=''
            className='rounded mx-auto d-block'
            style={{ height: 300, width: 300, display: 'block' }}
          />
          <div className='card-body' width='300'>
            <button onClick={Schedules} style={styles.Button}>
              Schedules
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
            marginTop: 90,
          }}>
          <img
            src='https://st2.depositphotos.com/2228340/6873/i/450/depositphotos_68737375-stock-photo-tutorial.jpg'
            alt=''
            className='rounded mx-auto d-block'
            style={{ height: 300, width: 300, display: 'block' }}
          />
          <div className='card-body' width='300'>
            <button onClick={Quiz} style={styles.Button}>
              Quiz
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
            marginTop: 90,
          }}>
          <img
            src='https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579__340.png'
            alt=''
            className='rounded mx-auto d-block'
            style={{ height: 300, width: 300, display: 'block' }}
          />
          <div className='card-body' width='300'>
            <button onClick={getAllCourses} style={styles.Button}>
              Show All Courses
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

export default Student
