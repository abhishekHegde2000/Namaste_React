

const Header = ()=>{
    return(
        <div className="header">

            <div className="logoContainer">
                <img className="logo" src="https://imgs.search.brave.com/Mvy0HTvvOpSBRbEeJsdi-dox4fiGkzrUoRCLV7SvWsg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzM2LzUxLzUx/LzM2MF9GXzQzNjUx/NTE0OV83QjlaZDho/bjZIYk13bndLaUZk/Y2JwQ0o3SXF3dkR1/cy5qcGc" alt="Logo" />
            </div>

            <div className="nav-items">

                <ul>
                    <li> Home </li>
                    <li> About </li>
                    <li> Contact </li>
                    <li> Login </li>
                </ul>

            </div>

        </div>
    )
}

export default Header;