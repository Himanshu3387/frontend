
const UpcomingCourses = () => 
{
   
    return (
        <div>
            <h2 className="h1-responsive font-weight-bold text-center my-4">Upcoming Courses</h2>
            <div className="card mb-3">
                <div className="row g-0 justify-content-center">
                    <div className="col-md-3 "><br /><br />
                        <img src='Mscit.png' className="img-fluid rounded-start m-5" alt="" />
                    </div>
                    <div className="col-md-4">
                        <div className="card-body text-center"><br />
                            <h5 className="card-title">MSCIT</h5><br />
                            <p className="card-text">1. Basic Computer/Smartphone Skills</p>
                            <p className="card-text">2. Typing Skills</p>
                            <p className="card-text">3. Digital Skills for Daily Life</p>
                            <p className="card-text">4. MS Office Skills</p><br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0 justify-content-center">
                <div className="col-md-4">
                        <div className="card-body text-center"><br />
                            <h5 className="card-title">JEE PREPARATION</h5><br />
                            <p className="card-text">1. Helps in getting seats at the top colleges</p>
                            <p className="card-text">2. Everyone needs the best</p>
                            <p className="card-text">3. Learn how to manage time efficiently</p>
                            <p className="card-text">4. Building the bridges of education</p><br />
                        </div>
                    </div>
                    <div className="col-md-3 "><br /><br />
                        <img src='JEE.jpg' className="img-fluid rounded-start " alt="" />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

  export default UpcomingCourses;
  