import React from 'react'
import ListCourseComponent from './ListCourseComponent';
import { Switch,BrowserRouter as Router, Route} from 'react-router-dom';
import CourseComponent from './CourseComponent';




class InstructorApp extends React.Component {




    render(){

        return(
            <Router>
            <> 
                <h1>Instructor Application</h1>
                <br/>
                <hr/>
                <Switch>
                        
                        <Route path="/" exact component={ListCourseComponent} />
                        <Route path="/courses" exact component={ListCourseComponent} />
                        <Route path="/courses/:id" component={CourseComponent} />

                </Switch>
            </>
            </Router>

           
        )
    }


}

export default InstructorApp;