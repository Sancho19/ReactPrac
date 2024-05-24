
const BlogsList = ({article, title}) => {
 
    
   
    return (  
      <>
      <h1>{title}</h1>
       {article.map((blogging) => (
        <div className="preview" key={blogging.id}>
           <h2>{blogging.title}</h2>
           <h4>Written by {blogging.author}</h4>
           <p>{blogging.body}</p>
        </div>
       ))}
      </>
    );
  }
   
  export default BlogsList;