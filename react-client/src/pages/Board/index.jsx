import { useEffect, useState } from 'react';
import { Form, Post } from '../../components'
import Typography from '@mui/material/Typography';

export default function Board(){ 

    const [data, setData] = useState([]);

    async function loadPosts () {
        const response = await fetch("http://localhost:3000/posts", {
            credentials: 'include'
        });
        const data = await response.json();
        
        if (response.status == 200) {
            setData(data)
        }
        //     const posts = await response.json();
    
        //     posts.forEach(p => {
        //         const elem = createPostElement(p);
        //         container.appendChild(elem);
        //     })
        // } else {
        //     console.log(response);
        // }
    }

    useEffect(() => {
        loadPosts();
    }, [])
    
    

    return(
        <div>
            <div>
                <Typography style={{borderBottom: "solid", marginBottom: 20}} component="h2" variant="h3">Posts</Typography>
                {data.map((entry, index) => <Post style={{alignSelf: "center", maxWidth: "60%"}} key={index} entry={entry} />)}
            </div>
            <Form/>
        </div>
    )
}
