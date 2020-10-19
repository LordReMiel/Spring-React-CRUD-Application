import React from 'react'
import CourseDataService from '../Services/CourseDataService'
import { Formik, Form, Field, ErrorMessage} from 'formik';


class CourseComponent extends React.Component {

        constructor(props){

            super(props)


            this.state = {

                id: this.props.match.params.id,
                username:'',
                description: ''
            }

            this.onSubmit = this.onSubmit.bind(this)
            this.validate = this.validate.bind(this)
            
        }


        componentDidMount() {

            if (this.state.id === -1) {
                return
            }

            CourseDataService.retrieveCourse("lA", this.state.id)

            .then(response => this.setState(
                
                {
                username: response.data.username,
                description: response.data.description
            }))

        }


        onSubmit( values ){

           

            let course = {

                id:this.state.id,
                username:values.username,
                description: values.description,
                targetDate: values.targetDate
            }

            if (this.state.id === -1) {

                CourseDataService.createCourse(this.state.username, course)
                .then(() => this.props.history.push('/courses'))
            }else{

                CourseDataService.updatedCourse(this.state.username, this.state.id, course)
                .then(() => this.props.history.push('/courses'))
            }
        }

        validate (values) {

            let errors = {}

            if (!values.description) {

                errors.description = "Enter a Description"
            } else if ( values.description.length < 5){

                errors.description = "Enter at least 5 Characters in Description"
            }

            return errors
        }

     

    render(){
        let id = this.state.id
        let description = this.state.description
        let username = this.state.username
       
        return (


           
            <div>
                <h3>Course</h3>
                <div className = "container">
                
                    <Formik enableReinitialize={true} 
                       initialValues = { {id, description, username} }
                       onSubmit={this.onSubmit}
                       validateOnBlur={false}
                       validateOnChange={false}
                       validate= {this.validate}>
                        {

                            (props) => (

                                <Form>
                                    <fieldset className ="form-group" >

                                        <label>Id</label>
                                        <Field className ="form-control" type="text" name="id" disabled />

                                    </fieldset>

                                    <fieldset className ="form-group">

                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                        <ErrorMessage name = "description" component = "div" className="alert alert-warning"/>
                                        


                                    </fieldset>

                                    <fieldset className ="form-group">

                                        <label>Username</label>
                                        <Field className="form-control" type="text" name="username"
                                         />
                                        <ErrorMessage name = "username" component = "div" className="alert alert-warning"/>
                                        


                                    </fieldset>
                                    

                                    <button className="btn btn-primary" type="submit">Save</button>



                                </Form>


                            )




                        }






                    </Formik>


                </div>

            </div>
            
        )
    }
}

export default CourseComponent;
