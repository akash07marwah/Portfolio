import React from 'react'
import Link from 'next/link'
import '../../styles/main.scss'
class Header extends React.Component{
    render(){
        const title =  this.props.title;
        return(
             <React.Fragment>
             <h1>{title}</h1>
             {this.props.children}
             <p className="custom"> I am styled! </p>
             <p className="customFromFile"> I am styled! </p>

             <Link href="/"><a>Home</a></Link>
             <Link href="/about"><a>About</a></Link>
             <Link href="/portfolio"><a>Portfolio</a></Link>
             <Link href="/blogs"><a>Blogs</a></Link>
             <Link href="/cv"><a>CV</a></Link>
             <style jsx>
             {
                 `
                 a{
                     font-size : 20px;
                 }
                 .custom{
                     color:red
                 }
                 `
             }
             </style>
             </React.Fragment>
        )
    }
}
export default Header