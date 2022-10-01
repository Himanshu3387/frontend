import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import config from '../../config'
import axios from 'axios'
const AddQuiz = () => {
  //employee inputs
  const [quizName, setQuizName] = useState('')
  const [description, setDescription] = useState('')
  const [queNo, setqueNo] = useState('')

  const [teacher, setTeacher] = useState('')
  const [student, setStudent] = useState('')

  //After adding employee navigate to Employees page
  const navigate = useNavigate()

  const addquiz = () => {
    //check if admin has entered all the input data

    if (quizName.length === 0) {
      toast.error('please enter quiz')
    } else if (description.length === 0) {
      toast.error('please enter description')
    } else if (queNo.length === 0) {
      toast.error('please enter the que no')
    } else if (teacher.length === 0) {
      toast.error('please enter teacher id')
    } else if (student.length === 0) {
      toast.error('please enter student id')
    } else {
      //make API call to  backend using axios
      const body = {
        quizName,
        description,
        queNo,

        teacher,
        student,
      }

      console.log('result', body)

      const url =  config.serverURL + `/teacher/quiz`

      //axios api call
      axios.post(url, body).then((response) => {
        const result = response.data
        console.log(result)

        if ((result['status'] = 'success')) {
          toast.success('New quiz added succcessfully!!')
          navigate('/listOfQuizes')
        } else {
          toast.error('quiz cannot be added')
        }
      })
    }
  }

  return (
    <div style={{ marginTop: 20 }}>
      <h1 style={{ textAlign: 'center', color: 'navy' }}>Add New quiz</h1>
      <div style={styles.container}>
        <div className='mb-3'>
          <label> quiz Name</label>
          <input
            onChange={(e) => {
              setQuizName(e.target.value)
            }}
            className='form-control'
            type='text'
          />
        </div>
        <div className='mb-3'>
          <label>description</label>
          <input
            onChange={(e) => {
              setDescription(e.target.value)
            }}
            className='form-control'
            type='text'
          />
        </div>

        <div className='mb-3'>
          <label>queNo</label>
          <input
            onChange={(e) => {
              setqueNo(e.target.value)
            }}
            className='form-control'
            type='queNo'
          />
        </div>
        <div className='mb-3'>
          <label>teacher id</label>
          <input
            onChange={(e) => {
              setTeacher(e.target.value)
            }}
            className='form-control'
            type='number'
          />
        </div>
        <div className='mb-3'>
          <label>student id</label>
          <input
            onChange={(e) => {
              setStudent(e.target.value)
            }}
            className='form-control'
            type='number'
          />
        </div>

        <div className='mb-3' style={{ marginTop: 40 }}>
          <button onClick={addquiz} style={styles.Button}>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
const styles = {
  container: {
    width: 400,
    height: 520,
    padding: 20,
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    marginTop: 20,
    borderColor: 'navy',
    borderRadius: 10,
    broderWidth: 1,
    borderStyle: 'solid',
    boxShadow: '1px 1px 20px 5px #C9C9C9',
  },
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

export default AddQuiz