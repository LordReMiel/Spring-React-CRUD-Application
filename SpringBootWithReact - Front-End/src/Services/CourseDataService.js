import axios from 'axios'


const INSTRUCTOR = 'Remiel'
const PASSWORD = "admin"
const COURSE_API_URL ='http://localhost:8080'
const INSTRUCTOR_API_URL =`${COURSE_API_URL}/instructors/${INSTRUCTOR}`



class CourseDataService {

    retrieveAllCourses(name) {
        console.log ('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/courses`,
        
        
        );
    }

    deleteCourse(name, id) {

        return axios.delete (`${INSTRUCTOR_API_URL}/courses/${id}`)
    }


    retrieveCourse(name, id) {

        return axios.get (`${INSTRUCTOR_API_URL}/courses/${id}`);
    }

    updatedCourse(name, id, course) {

        return axios.put(`${INSTRUCTOR_API_URL}/courses/${id}`, course);
    }

    createCourse(name, course) {

        return axios.post(`${INSTRUCTOR_API_URL}/courses/`,course);
    }
}

export default new CourseDataService()