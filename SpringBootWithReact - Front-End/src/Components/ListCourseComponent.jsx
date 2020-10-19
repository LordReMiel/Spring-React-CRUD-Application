import React from 'react'
import CourseDataService from '../Services/CourseDataService';



class ListCourseComponent extends React.Component {

            constructor(props){
                super(props)

                this.state = {

                    courses:[],
                    message: null
                }

                this.refreshCourses = this.refreshCourses.bind(this)
                this.deleteCourseClicked = this.deleteCourseClicked.bind (this)
                this.updateCourseClicked = this.updateCourseClicked.bind(this)
                
                this.addCourseClicked = this.addCourseClicked.bind(this)
                this.homePage = this.homePage.bind(this)


            }

            componentDidMount(){

                this.refreshCourses();

            }

            refreshCourses(){

                CourseDataService.retrieveAllCourses("Remiel")
                    .then (
                        response => { 

                            this.setState({courses: response.data})
                        }
                    )
            }

            deleteCourseClicked(id){

             CourseDataService.deleteCourse("Remiel", id)
                .then (

                    response => {

                        this.setState({message:`Delete of course ${id} successful`})
                        this.refreshCourses()
                    }
                )

            }


            updateCourseClicked(id) {
                console.log('update ' + id)
                this.props.history.push(`/courses/${id}`)
            }

            addCourseClicked() {
                this.props.history.push(`/courses/-1`)
            }

            homePage(){
                this.props.history.push(`/home`)

            }

    render(){

        const listOfCourses = this.state.courses.map((course) =>

        <tr key ={course.id}>
            <td>{course.id}</td>
            <td>{course.description}</td>
            <td>{course.username}</td>
            <td><button className="btn btn-warning" onClick={() => this.updateCourseClicked(course.id)}>Update</button></td>
            <td><button className="btn btn-danger" onClick={() => this.deleteCourseClicked(course.id)}>Delete</button></td>
            
        </tr>
        )
        
        return(

            <div className= "container">
               
                <h3>All Courses</h3>
                
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                    <div className="container">

                    <table className="table">

                        <thead>
                            <tr>
                            <th> Id</th>
                            <th> Description</th>
                            <th> Username </th>
                            <th> Update </th>
                            <th> Delete </th>
                            </tr>
                        </thead>

                        <tbody>

                        {    listOfCourses     }

                        </tbody>

                    </table>

                    <div className="row">
                        <button className="btn btn-primary" onClick={this.addCourseClicked}>Add</button>
                        

                    </div>
                    <br/>

                    


                   
                    </div>


            </div>

        )

    }
}

export default ListCourseComponent;