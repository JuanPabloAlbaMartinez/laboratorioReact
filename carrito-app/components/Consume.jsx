'use client'

function Consume({post}) {
    return (
        <div>
            <h3>{post.id} {post.title}</h3>
            <p>{post.price}</p>
            <button onClick={()=>{alert("aaaa")}}>Comprar</button>
        </div>
    )
}

export default Consume