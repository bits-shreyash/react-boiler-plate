import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostList } from '../../../redux/posts/action';
import PageTemplate from '../../templates/page';
import Posts from '../../organisms/post'
/**
 * Method: XYSAAAAA
 * Description: This component 
 * @returns 
 */
const PostsPage = ()=> {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchPostList())
  },[]);

  const data = useSelector(state => state.posts.posts) || {};
  return (
    <PageTemplate>
        <Posts postData={data}></Posts>
    </PageTemplate>
  );
}

export default PostsPage