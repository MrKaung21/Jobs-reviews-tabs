import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState(0)

  const getData = async () => {
      const res = await fetch(url)
      const data = await res.json()
      setJobs(data)
      setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  if (loading) { 
      return <section className='section loading'>
        <h1>Loading...</h1>
      </section>
  }
  const { company, dates, duties, title } = jobs[value]
  return (
      <section className='section'>
        <div className='title'>
            <h2>Experience</h2>
            <div className='underline'></div>
        </div>
        <div className='jobs-center'>
            <div className='btn-container'>
                {jobs.map((job, index) => {
                    return(
                        <button
                            key={job.id}
                            onClick={() => setValue(index)}
                            className={`job-btn ${index === value && 'active-btn'}`}
                        >
                          {job.company}
                        </button>
                    )
                })}
            </div>
        
        {/* jobs info         */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
              return(
                <div key={index} className='job-desc'>
                    <FaAngleDoubleRight className='job-icon'/>
                    <p>{duty}</p>
                </div>
              )
          })}
        </article>
        </div>
        <button className='btn'>More Info</button>
      </section>
  )
}

export default App
