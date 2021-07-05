import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
    const {data:blogs,isPending,error} = useFetch('http://localhost:8080/blogs')
    return (  
        <div className="Home">
        {error && <h1>{error} </h1> }
        {isPending && <p>Loading ...</p> }
        {blogs && <BlogList blogs={blogs} title="All Blogs" /> } 
      
            
        
        </div>
    );
}
 
export default Home;