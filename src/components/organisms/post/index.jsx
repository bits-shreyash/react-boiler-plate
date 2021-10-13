import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  { fetchPostList}  from '../../../redux/posts/action';

const Posts = (props) => {
    return(
    <div className="App">
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {props.postData.map((record, index) => {
                    return <tr key={index}><td>{record.title}</td><td>{record.body}</td></tr>
                })}
            </tbody>
        </table>
    </div>)
}
export default Posts