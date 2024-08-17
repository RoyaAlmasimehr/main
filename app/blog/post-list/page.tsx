

interface Post{
    id:number 
    title:string
}


 async function PostList() {

 const res =  await fetch("https://jsonplaceholder.typicode.com/posts")
let data: Post[]= await res.json()
data=data.splice(0,10)



    return (
     <div>
        <ul>
            {data.map((item)=>(
                <li key={item.id} > {item.id}- {item.title}</li>
            ))}
        </ul>
     </div>
      );
}

export default PostList;