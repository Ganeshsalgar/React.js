 import React from 'react'
 import appwriteSerive from '../appwrite/configure'
 import {Link} from 'react-router-dom'


 
 function PostCard({$id , title, featuredImgae} ) {
   return (
        <Link to={`/psot/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <img src={appwriteSerive.getFilePreview(featuredImgae)} alt={title}
                    className='rounded-xl' />
                </div>
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
   )
 }
 
 export default PostCard 