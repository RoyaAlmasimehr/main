
"use client"

import { usePathname } from "next/navigation";
 


function PostPage( {params} :{params :{id:string}}  ) {

    const pathname = usePathname();
    console.log(pathname)

  return (
    <>
      <h2 className="text-lg">Post page</h2>
      <div> post ID : {params.id} </div>
      <h1>{pathname}</h1>
    </>
  );
}

export default PostPage;
